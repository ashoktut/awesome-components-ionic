function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"+9aX":function(n,e,t){"use strict";t.r(e),t.d(e,"SlidePaginationPageModule",(function(){return w}));var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),a=t("mrSG"),s=t("fXoL"),l=["slider"],b=["segment"],d=["segmentFooter"];function g(n,e){1&n&&s.Rb(0,"ion-segment-button",11),2&n&&s.oc("value",e.index)}function u(n,e){1&n&&(s.Wb(0,"ion-card"),s.Rb(1,"img",19),s.Wb(2,"ion-card-header"),s.Wb(3,"ion-card-subtitle"),s.Mc(4,"Destination"),s.Vb(),s.Wb(5,"ion-card-title"),s.Mc(6,"Madison, WI"),s.Vb(),s.Vb(),s.Wb(7,"ion-card-content"),s.Mc(8," Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. "),s.Vb(),s.Vb())}var f=function(){return[0,1,2,3,4,5,6,7,8,9]};function h(n,e){if(1&n){var t=s.Xb();s.Wb(0,"ion-slide"),s.Wb(1,"div",12),s.Wb(2,"ion-item",13),s.Wb(3,"ion-button",14),s.ec("click",(function(){return s.Cc(t),s.ic().prevStage()})),s.Rb(4,"ion-icon",15),s.Vb(),s.Wb(5,"ion-label"),s.Wb(6,"ion-text",16),s.Wb(7,"p"),s.Wb(8,"b"),s.Mc(9," SQL - No-Show"),s.Vb(),s.Vb(),s.Wb(10,"p"),s.Mc(11," 6 R$ 0,00 \u2022 R$ 0,00 "),s.Vb(),s.Vb(),s.Vb(),s.Wb(12,"ion-button",17),s.ec("click",(function(){return s.Cc(t),s.ic().nextStage()})),s.Rb(13,"ion-icon",18),s.Vb(),s.Vb(),s.Wb(14,"ion-list"),s.Kc(15,u,9,0,"ion-card",7),s.Vb(),s.Vb(),s.Vb()}2&n&&(s.Cb(15),s.oc("ngForOf",s.sc(1,f)))}function m(n,e){1&n&&s.Rb(0,"ion-segment-button",11),2&n&&s.oc("value",e.index)}var p,v,C,y=[{path:"",component:(p=function(){function n(){_classCallCheck(this,n),this.sliderConfig={initialSlide:0,loop:!1,freemode:{freeModeMomentum:!1}}}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"prevStage",value:function(){this.slider.slidePrev(),this.activeSlide()}},{key:"nextStage",value:function(){this.slider.slideNext(),this.activeSlide()}},{key:"activeSlide",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.slider.getActiveIndex();case 2:e=n.sent,this.segment.value=e.toString(),this.segmentFooter.value=e.toString();case 4:case"end":return n.stop()}}),n,this)})))}},{key:"stageSegmentChanged",value:function(n){this.slider.slideTo(n.detail.value)}}]),n}(),p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=s.Kb({type:p,selectors:[["app-slide-pagination"]],viewQuery:function(n,e){var t;1&n&&(s.Hc(l,!0),s.Hc(b,!0),s.Hc(d,!0)),2&n&&(s.yc(t=s.fc())&&(e.slider=t.first),s.yc(t=s.fc())&&(e.segment=t.first),s.yc(t=s.fc())&&(e.segmentFooter=t.first))},decls:18,vars:7,consts:[["slot","start"],["defaultHref","/"],["scrollable","","value","0",3,"ionChange"],["segment",""],[3,"value",4,"ngFor","ngForOf"],["pager","true",3,"options","ionSlideTransitionEnd"],["slider",""],[4,"ngFor","ngForOf"],[1,"ion-no-border"],[1,"segment-arrow"],["segmentFooter",""],[3,"value"],[1,"content-stage"],["lines","none",1,"trasnparent","title-stage"],["slot","icon-only","fill","clear","slot","start",3,"click"],["name","chevron-back","color","grey-seven"],["color","grey-seven"],["slot","icon-only","fill","clear","slot","end",3,"click"],["name","chevron-forward","color","grey-seven"],["src","assets/yannbf/img/lists/wishlist-1.jpg"]],template:function(n,e){1&n&&(s.Wb(0,"ion-header"),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",0),s.Rb(3,"ion-back-button",1),s.Vb(),s.Wb(4,"ion-title"),s.Mc(5,"Slide Pagination"),s.Vb(),s.Vb(),s.Wb(6,"ion-segment",2,3),s.ec("ionChange",(function(n){return e.stageSegmentChanged(n)})),s.Kc(8,g,1,1,"ion-segment-button",4),s.Vb(),s.Vb(),s.Wb(9,"ion-content"),s.Wb(10,"ion-slides",5,6),s.ec("ionSlideTransitionEnd",(function(){return e.activeSlide()})),s.Kc(12,h,16,2,"ion-slide",7),s.Vb(),s.Vb(),s.Wb(13,"ion-footer",8),s.Wb(14,"div",9),s.Wb(15,"ion-segment",2,10),s.ec("ionChange",(function(n){return e.stageSegmentChanged(n)})),s.Kc(17,m,1,1,"ion-segment-button",4),s.Vb(),s.Vb(),s.Vb()),2&n&&(s.Cb(8),s.oc("ngForOf",s.sc(4,f)),s.Cb(2),s.oc("options",e.sliderConfig),s.Cb(2),s.oc("ngForOf",s.sc(5,f)),s.Cb(5),s.oc("ngForOf",s.sc(6,f)))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.X,r.xb,o.n,r.u,r.cb,r.x,r.Y,r.bb,r.D,r.k,r.A,r.J,r.hb,r.K,r.m,r.o,r.p,r.q,r.n],styles:['ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{height:100%;overflow-y:scroll}ion-segment[_ngcontent-%COMP%]{--background:var(--ion-color-secondary)}ion-segment[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-segment-button[_ngcontent-%COMP%]{--background-checked:var(--ion-color-tertiary);border-right:1px solid #fff;min-height:0;height:20px;min-width:0;--padding-end:40px}.segment-arrow[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{--background:var(--ion-color-light)}.segment-arrow[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--background-checked:var(--ion-color-medium);display:table-cell;padding:0;position:relative;vertical-align:middle;min-height:0;height:20px;min-width:0}.segment-arrow[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]:before{width:10px;height:10px;position:absolute;right:-8px;top:2px;border-top:6px solid #fff;border-right:6px solid #fff;transform:scaleX(.3) rotate(45deg);content:" ";background:transparent;z-index:1}']}),p)}],k=((C=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ob({type:C}),C.\u0275inj=s.Nb({factory:function(n){return new(n||C)},imports:[[c.j.forChild(y)],c.j]}),C),w=((v=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ob({type:v}),v.\u0275inj=s.Nb({factory:function(n){return new(n||v)},imports:[[o.c,i.g,r.nb,k]]}),v)}}]);