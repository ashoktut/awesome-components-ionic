function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function asyncGeneratorStep(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){asyncGeneratorStep(a,r,o,i,c,"next",e)}function c(e){asyncGeneratorStep(a,r,o,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{STjf:function(e,n,t){"use strict";t.r(n),t.d(n,"ion_ripple_effect",(function(){return a}));var r=t("A36C"),o=t("Zgba"),a=function(){function e(n){_classCallCheck(this,e),Object(r.o)(this,n),this.type="bounded"}var n;return _createClass(e,[{key:"addRipple",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t){var o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){Object(r.h)((function(){var a=o.el.getBoundingClientRect(),u=a.width,f=a.height,l=Math.sqrt(u*u+f*f),p=Math.max(f,u),d=o.unbounded?p:l+c,m=Math.floor(p*s),y=d/m,h=n-a.left,b=t-a.top;o.unbounded&&(h=.5*u,b=.5*f);var v=h-.5*m,w=b-.5*m,g=.5*u-h,k=.5*f-b;Object(r.f)((function(){var n=document.createElement("div");n.classList.add("ripple-effect");var t=n.style;t.top=w+"px",t.left=v+"px",t.width=t.height=m+"px",t.setProperty("--final-scale",""+y),t.setProperty("--translate-end","".concat(g,"px, ").concat(k,"px")),(o.el.shadowRoot||o.el).appendChild(n),setTimeout((function(){e((function(){i(n)}))}),325)}))}))})));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)})},{key:"render",value:function(){var e,n=Object(o.b)(this);return Object(r.j)(r.c,{role:"presentation",class:(e={},_defineProperty(e,n,!0),_defineProperty(e,"unbounded",this.unbounded),e)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(r.k)(this)}}]),e}(),i=function(e){e.classList.add("fade-out"),setTimeout((function(){e.remove()}),200)},c=10,s=.5;a.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);