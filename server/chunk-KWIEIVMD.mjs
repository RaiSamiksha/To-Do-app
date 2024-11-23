import './polyfills.server.mjs';
import{$ as Me,A as ge,B as me,C as g,D as J,E as V,F as _e,G as X,H as Y,I as K,J as Q,K as N,M as ve,Q as ye,S as Ce,U as Ve,V as k,W as d,X as De,Y as ee,_ as be,a as ae,aa as Ae,b as le,ba as we,c as ue,d as ce,e as W,ea as Ee,f as $,g as h,h as E,i as q,ia as Fe,j as f,k as de,l as F,la as Ie,m as I,n as he,o as S,p as z,q as p,r as s,s as Z,t as x,u as C,v as fe,w as pe,x as O,y as u,z as c}from"./chunk-ERS2FICM.mjs";import{a,b as l}from"./chunk-5XUXGTUW.mjs";var Ge=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(Z),s(z))}}static{this.\u0275dir=f({type:i})}}return i})(),et=(()=>{class i extends Ge{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=he(i)))(r||i)}})()}static{this.\u0275dir=f({type:i,features:[C]})}}return i})(),je=new h("");var tt={provide:je,useExisting:W(()=>j),multi:!0};function it(){let i=ee()?ee().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var nt=new h(""),j=(()=>{class i extends Ge{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!it())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(Z),s(z),s(nt,8))}}static{this.\u0275dir=f({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&g("input",function(y){return r._handleInput(y.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(y){return r._compositionEnd(y.target.value)})},features:[Q([tt]),C]})}}return i})();var rt=new h(""),ot=new h("");function Be(i){return i!=null}function Le(i){return ve(i)?le(i):i}function Ue(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function He(i,e){return e.map(t=>t(i))}function st(i){return!i.validate}function We(i){return i.map(e=>st(e)?e:t=>e.validate(t))}function at(i){if(!i)return null;let e=i.filter(Be);return e.length==0?null:function(t){return Ue(He(t,e))}}function $e(i){return i!=null?at(We(i)):null}function lt(i){if(!i)return null;let e=i.filter(Be);return e.length==0?null:function(t){let n=He(t,e).map(Le);return ce(n).pipe(ue(Ue))}}function qe(i){return i!=null?lt(We(i)):null}function Se(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ut(i){return i._rawValidators}function ct(i){return i._rawAsyncValidators}function te(i){return i?Array.isArray(i)?i:[i]:[]}function T(i,e){return Array.isArray(i)?i.includes(e):i===e}function xe(i,e){let t=te(e);return te(i).forEach(r=>{T(t,r)||t.push(r)}),t}function Oe(i,e){return te(e).filter(t=>!T(i,t))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},ie=class extends R{get formDirective(){return null}get path(){return null}},w=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ne=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ti=l(a({},dt),{"[class.ng-submitted]":"isSubmitted"}),ze=(()=>{class i extends ne{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(w,2))}}static{this.\u0275dir=f({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&O("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[C]})}}return i})();var D="VALID",P="INVALID",m="PENDING",b="DISABLED",v=class{},G=class extends v{constructor(e,t){super(),this.value=e,this.source=t}},M=class extends v{constructor(e,t){super(),this.pristine=e,this.source=t}},A=class extends v{constructor(e,t){super(),this.touched=e,this.source=t}},_=class extends v{constructor(e,t){super(),this.status=e,this.source=t}};function ht(i){return(B(i)?i.validators:i)||null}function ft(i){return Array.isArray(i)?$e(i):i||null}function pt(i,e){return(B(e)?e.asyncValidators:i)||null}function gt(i){return Array.isArray(i)?qe(i):i||null}function B(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var re=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=k(()=>this.statusReactive()),this.statusReactive=x(void 0),this._pristine=k(()=>this.pristineReactive()),this.pristineReactive=x(!0),this._touched=k(()=>this.touchedReactive()),this.touchedReactive=x(!1),this._events=new ae,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return d(this.statusReactive)}set status(e){d(()=>this.statusReactive.set(e))}get valid(){return this.status===D}get invalid(){return this.status===P}get pending(){return this.status==m}get disabled(){return this.status===b}get enabled(){return this.status!==b}get pristine(){return d(this.pristineReactive)}set pristine(e){d(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return d(this.touchedReactive)}set touched(e){d(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(xe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new A(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new A(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new M(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new M(!0,n))}markAsPending(e={}){this.status=m;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,n)),this._events.next(new _(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===m)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new _(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Le(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new _(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(P)?P:D}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new M(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new A(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=gt(this._rawAsyncValidators)}};var Ze=new h("CallSetDisabledState",{providedIn:"root",factory:()=>oe}),oe="always";function mt(i,e){return[...e.path,i]}function _t(i,e,t=oe){yt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Ct(i,e),Dt(i,e),Vt(i,e),vt(i,e)}function Ne(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function vt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function yt(i,e){let t=ut(i);e.validator!==null?i.setValidators(Se(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=ct(i);e.asyncValidator!==null?i.setAsyncValidators(Se(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ne(e._rawValidators,r),Ne(e._rawAsyncValidators,r)}function Ct(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Je(i,e)})}function Vt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Je(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Je(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Dt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function bt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Mt(i){return Object.getPrototypeOf(i.constructor)===et}function At(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===j?t=o:Mt(o)?n=o:r=o}),r||n||t||null}function ke(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Pe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var wt=class extends re{constructor(e=null,t,n){super(ht(t),pt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ke(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ke(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et={provide:w,useExisting:W(()=>se)},Te=Promise.resolve(),se=(()=>{class i extends w{constructor(t,n,r,o,y,Qe){super(),this._changeDetectorRef=y,this.callSetDisabledState=Qe,this.control=new wt,this._registered=!1,this.name="",this.update=new S,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=At(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),bt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){_t(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Te.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ve(n);Te.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?mt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(s(ie,9),s(rt,10),s(ot,10),s(je,10),s(Ce,8),s(Ze,8))}}static{this.\u0275dir=f({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Q([Et]),C,de]})}}return i})();var Ft=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=q({type:i})}static{this.\u0275inj=$({})}}return i})();var L=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ze,useValue:t.callSetDisabledState??oe}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=q({type:i})}static{this.\u0275inj=$({imports:[Ft]})}}return i})();var U=class i{title="to-do-app";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["app-root"]],standalone:!0,features:[N],decls:1,vars:0,template:function(t,n){t&1&&ge(0,"router-outlet")},dependencies:[Fe,L]})};function xt(i,e){if(i&1){let t=me();u(0,"li",7)(1,"input",8),K("checkedChange",function(r){let o=F(t).$implicit;return Y(o.completed,r)||(o.completed=r),I(r)}),g("change",function(){let r=F(t).index,o=J();return I(o.toggleCompleted(r))}),c(),u(2,"span"),V(3),c(),u(4,"button",9),g("click",function(){let r=F(t).$implicit,o=J();return I(o.deleteTask(r.id))}),V(5,"Delete"),c()()}if(i&2){let t=e.$implicit;p(),X("checked",t.completed),p(),O("completed",t.completed),p(),_e(t.task)}}var H=class i{todoList=[];newTask="";ngOnInit(){this.getToDoList()}addTask(){if(this.newTask.trim()!==""){let e={id:Date.now(),task:this.newTask,completed:!1};this.todoList.push(e),this.saveToDoList(),this.newTask=""}}saveToDoList(){localStorage.setItem("object",JSON.stringify(this.todoList))}toggleCompleted(e){console.log(e),this.todoList[e].completed=!this.todoList[e].completed,this.saveToDoList()}deleteTask(e){this.todoList=this.todoList.filter(t=>t.id!==e),this.saveToDoList()}getToDoList(){let e=localStorage.getItem("object");console.log(e),e&&(this.todoList=JSON.parse(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["app-to-do-list"]],standalone:!0,features:[N],decls:9,vars:2,consts:[[1,"heading"],[1,"todo-container"],[1,"add-task"],["type","text","placeholder","Add task",3,"ngModelChange","ngModel"],[3,"click"],[1,"task-list"],["ngClass","('completed:todoItem.completed')",4,"ngFor","ngForOf"],["ngClass","('completed:todoItem.completed')"],["type","checkbox",3,"checkedChange","change","checked"],[1,"delete-btn",3,"click"]],template:function(t,n){t&1&&(u(0,"h2",0),V(1,"Taskly"),c(),u(2,"main",1)(3,"div",2)(4,"input",3),K("ngModelChange",function(o){return Y(n.newTask,o)||(n.newTask=o),o}),c(),u(5,"button",4),g("click",function(){return n.addTask()}),V(6,"Add"),c()(),u(7,"ul",5),fe(8,xt,6,4,"li",6),c()()),t&2&&(p(4),X("ngModel",n.newTask),p(4),pe("ngForOf",n.todoList))},dependencies:[L,j,ze,se,be,Me],styles:[".todo-container[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:20px;border-radius:8px;box-shadow:0 2px 10px #0000001a;background-color:#f9f9f9}.heading[_ngcontent-%COMP%]{color:#000;font-size:20px;font-weight:700;font-family:monospace,serif}.completed[_ngcontent-%COMP%]{text-decoration:line-through}.add-task[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}.add-task[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:10px;font-size:16px;border:1px solid #ccc;border-radius:4px;margin-right:10px}.add-task[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 15px;background-color:#28a745;color:#fff;border:none;border-radius:4px;cursor:pointer}.add-task[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#218838}.task-list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.task-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px;margin-bottom:10px;background-color:#fff;border-radius:4px;box-shadow:0 1px 4px #0000001a}.task-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:line-through;color:#888}.task-list[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]{padding:5px 10px;background-color:#dc3545;color:#fff;border:none;border-radius:4px;cursor:pointer}.task-list[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover{background-color:#c82333}"]})};var Xe=[{path:"to-do",component:H}];var Ye={providers:[ye({eventCoalescing:!0}),Ie(Xe),we()]};var Ot={providers:[Ee()]},Ke=De(Ye,Ot);var Nt=()=>Ae(U,Ke),wi=Nt;export{wi as a};
