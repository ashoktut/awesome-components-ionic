function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{A1GR:function(n,e,t){"use strict";t.r(e),t.d(e,"SideMenuPageModule",(function(){return b}));var i,c,o=t("ofXK"),r=t("3Pt+"),u=t("tyNb"),a=t("TEn/"),l=t("fXoL"),s=[{path:"",component:(i=function(){function n(e){_classCallCheck(this,n),this.menuCtrl=e,this.MENU={DEFAULT:"menu-principal",MATERIAL:"menu-material",AVATAR:"menu-avatar",RIGHT:"menu-right"}}return _createClass(n,[{key:"ngOnInit",value:function(){this.menuCtrl.enable(!1,"menu-right")}},{key:"changeMenu",value:function(n){var e=this;console.log(n),Object.keys(this.MENU).map((function(n){return e.menuCtrl.enable(!1,e.MENU[n])})),this.menuCtrl.enable(!0,n),this.menuCtrl.open(n)}},{key:"changeMenuRight",value:function(){this.menuCtrl.enable(!0,"menu-right"),this.menuCtrl.open("menu-right")}}]),n}(),i.\u0275fac=function(n){return new(n||i)(l.Qb(a.qb))},i.\u0275cmp=l.Kb({type:i,selectors:[["app-side-menu"]],decls:17,vars:0,consts:[["slot","start"],["defaultHref","/"],[1,"ion-padding"],["expand","block","color","secondary",3,"click"],["expand","block","color","danger",3,"click"],["expand","block",3,"click"]],template:function(n,e){1&n&&(l.Wb(0,"ion-header"),l.Wb(1,"ion-toolbar"),l.Wb(2,"ion-buttons",0),l.Rb(3,"ion-back-button",1),l.Vb(),l.Wb(4,"ion-title"),l.Mc(5,"Side Menu"),l.Vb(),l.Vb(),l.Vb(),l.Wb(6,"ion-content",2),l.Wb(7,"p"),l.Mc(8,"The home icon on the right is a small width sidemenu."),l.Vb(),l.Wb(9,"ion-button",3),l.ec("click",(function(){return e.changeMenu(e.MENU.DEFAULT)})),l.Mc(10,"Default sidemenu"),l.Vb(),l.Wb(11,"ion-button",4),l.ec("click",(function(){return e.changeMenu(e.MENU.AVATAR)})),l.Mc(12,"Sidemenu with avatar"),l.Vb(),l.Wb(13,"ion-button",5),l.ec("click",(function(){return e.changeMenu(e.MENU.MATERIAL)})),l.Mc(14,"Material Design"),l.Vb(),l.Wb(15,"ion-button",5),l.ec("click",(function(){return e.changeMenu(e.MENU.RIGHT)})),l.Mc(16,"Menu Right"),l.Vb(),l.Vb())},directives:[a.z,a.mb,a.l,a.h,a.i,a.kb,a.u,a.k],styles:[""]}),i)}],b=((c=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ob({type:c}),c.\u0275inj=l.Nb({factory:function(n){return new(n||c)},imports:[[o.c,r.g,a.nb,u.j.forChild(s)]]}),c)}}]);