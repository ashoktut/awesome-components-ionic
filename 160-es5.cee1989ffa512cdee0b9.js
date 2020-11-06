function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function asyncGeneratorStep(t,e,n,i,o,r,a){try{var d=t[r](a),s=d.value}catch(l){return void n(l)}d.done?e(s):Promise.resolve(s).then(i,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){asyncGeneratorStep(r,i,o,a,d,"next",t)}function d(t){asyncGeneratorStep(r,i,o,a,d,"throw",t)}a(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{IUOf:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toggle",(function(){return s}));var i=n("A36C"),o=n("Zgba"),r=n("OMvp"),a=n("qULd"),d=n("74mu"),s=function(){function t(e){var n=this;_classCallCheck(this,t),Object(i.o)(this,e),this.ionChange=Object(i.g)(this,"ionChange",7),this.ionFocus=Object(i.g)(this,"ionFocus",7),this.ionBlur=Object(i.g)(this,"ionBlur",7),this.ionStyle=Object(i.g)(this,"ionStyle",7),this.inputId="ion-tg-"+c++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){n.lastDrag+300<Date.now()&&(n.checked=!n.checked)},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()}}var e;return _createClass(t,[{key:"checkedChanged",value:function(t){this.ionChange.emit({checked:t,value:this.value})}},{key:"disabledChanged",value:function(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(null,"iWo5"));case 2:this.gesture=t.sent.createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged();case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"interactive-disabled":this.disabled})}},{key:"onStart",value:function(){this.activated=!0,this.setFocus()}},{key:"onMove",value:function(t){l(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(a.c)())}},{key:"onEnd",value:function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}},{key:"getValue",value:function(){return this.value||""}},{key:"setFocus",value:function(){this.buttonEl&&this.buttonEl.focus()}},{key:"render",value:function(){var t,e=this,n=this.inputId,a=this.disabled,s=this.checked,l=this.activated,c=this.color,g=this.el,h=Object(o.b)(this),p=n+"-lbl",u=Object(r.f)(g),b=this.getValue();return u&&(u.id=p),Object(r.c)(!0,g,this.name,s?b:"",a),Object(i.j)(i.c,{onClick:this.onClick,role:"checkbox","aria-disabled":a?"true":null,"aria-checked":""+s,"aria-labelledby":p,class:Object(d.a)(c,(t={},_defineProperty(t,h,!0),_defineProperty(t,"in-item",Object(d.c)("ion-item",g)),_defineProperty(t,"toggle-activated",l),_defineProperty(t,"toggle-checked",s),_defineProperty(t,"toggle-disabled",a),_defineProperty(t,"interactive",!0),t))},Object(i.j)("div",{class:"toggle-icon",part:"track"},Object(i.j)("div",{class:"toggle-icon-wrapper"},Object(i.j)("div",{class:"toggle-inner",part:"handle"}))),Object(i.j)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,ref:function(t){return e.buttonEl=t},"aria-hidden":"true"}))}},{key:"el",get:function(){return Object(i.k)(this)}}],[{key:"watchers",get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}}]),t}(),l=function(t,e,n,i){var o="rtl"===t.dir;return e?!o&&i>n||o&&-i<n:!o&&-i<n||o&&i>n},c=0;s.style={ios:":host{box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;touch-action:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}[dir=rtl] .toggle-inner,:host-context([dir=rtl]) .toggle-inner{left:unset;right:unset;right:var(--handle-spacing)}:host(.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - (var(--handle-spacing) * 2));--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;width:51px;height:32px;contain:strict;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{transform:translate3d(0, 0, 0);transition:background-color 300ms}.toggle-inner{will-change:transform}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-activated.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}",md:":host{box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;touch-action:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}[dir=rtl] .toggle-inner,:host-context([dir=rtl]) .toggle-inner{left:unset;right:unset;right:var(--handle-spacing)}:host(.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{transition:background-color 160ms}.toggle-inner{will-change:background-color, transform}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}}}]);