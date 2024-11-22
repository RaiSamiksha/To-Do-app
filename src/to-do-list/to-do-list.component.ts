import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgFor,
    RouterOutlet,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todoList: TodoItem[] = [];
  newTask: string = '';

  ngOnInit(){
    this.getToDoList();
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newToDoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };
      this.todoList.push(newToDoItem);
      localStorage.setItem('object', JSON.stringify(this.todoList));
      console.log(this.todoList);
      this.newTask = '';
    }
  }

  toggleCompleted(index: number): void {
    console.log(index);
    this.todoList[index].completed = !this.todoList[index].completed;
    localStorage.setItem('object', JSON.stringify(this.todoList));
  }

  deleteTask(id: number): void {
      this.todoList = this.todoList.filter(item => item.id !== id);
      // this.saveTodoList();
      localStorage.setItem('object', JSON.stringify(this.todoList));
  }

  getToDoList(){

    const data = localStorage.getItem('object');
    console.log(data);
    if(data){
    this.todoList = JSON.parse(data);
    }
    
  }
}
