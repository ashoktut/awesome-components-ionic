function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{YXky:function(e,i,t){"use strict";t.r(i),t.d(i,"SlidingItemPageModule",(function(){return m}));var n=t("ofXK"),o=t("3Pt+"),c=t("tyNb"),a=t("TEn/"),l=t("fXoL");function s(e,i){if(1&e){var t=l.Xb();l.Wb(0,"ion-item-sliding"),l.Wb(1,"ion-item"),l.Wb(2,"ion-thumbnail",0),l.Rb(3,"img",3),l.Vb(),l.Wb(4,"ion-label"),l.Wb(5,"h2"),l.Mc(6),l.Vb(),l.Wb(7,"p"),l.Mc(8),l.Vb(),l.Vb(),l.Vb(),l.Wb(9,"ion-item-options",4),l.Wb(10,"ion-item-option",5),l.ec("click",(function(){l.Cc(t);var e=i.$implicit;return l.ic().viewComments(e)})),l.Rb(11,"ion-icon",6),l.Mc(12," Comments "),l.Vb(),l.Wb(13,"ion-item-option",7),l.ec("click",(function(){l.Cc(t);var e=i.$implicit;return l.ic().viewPlayers(e)})),l.Rb(14,"ion-icon",8),l.Mc(15," Players "),l.Vb(),l.Wb(16,"ion-item-option",9),l.ec("click",(function(){l.Cc(t);var e=i.$implicit;return l.ic().delete(e)})),l.Rb(17,"ion-icon",10),l.Mc(18," Delete "),l.Vb(),l.Vb(),l.Vb()}if(2&e){var n=i.$implicit;l.Cb(3),l.oc("src",n.imageUrl,l.Ec),l.Cb(3),l.Nc(n.title),l.Cb(2),l.Pc("",n.place," \u2022 ",n.date,"")}}var r,b,u=[{path:"",component:(r=function(){function e(){_classCallCheck(this,e),this.items=[{imageUrl:"assets/yannbf/img/lists/stadium.jpg",title:"First Cup",place:"Madison Square",date:"05/06/2016"},{imageUrl:"assets/yannbf/img/lists/stadium-3.png",title:"Season",place:"Hooli",date:"15/03/2016"},{imageUrl:"assets/yannbf/img/lists/stadium-2.jpg",title:"2nd Season",place:"Castel\xe3o",date:"05/12/2015"}]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"delete",value:function(e){alert("Deleted "+e.title)}},{key:"viewComments",value:function(e){alert("Viewing comments of "+e.title)}},{key:"viewPlayers",value:function(e){alert("Viewing players of "+e.title)}}]),e}(),r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l.Kb({type:r,selectors:[["app-sliding-item"]],decls:9,vars:1,consts:[["slot","start"],["defaultHref","/"],[4,"ngFor","ngForOf"],[3,"src"],["side","end"],["color","secondary",3,"click"],["slot","top","name","chatbubbles"],["color","primary",3,"click"],["slot","top","name","contacts"],["color","danger",3,"click"],["slot","top","name","trash"]],template:function(e,i){1&e&&(l.Wb(0,"ion-header"),l.Wb(1,"ion-toolbar"),l.Wb(2,"ion-buttons",0),l.Rb(3,"ion-back-button",1),l.Vb(),l.Wb(4,"ion-title"),l.Mc(5,"Sliding Item"),l.Vb(),l.Vb(),l.Vb(),l.Wb(6,"ion-content"),l.Wb(7,"ion-list"),l.Kc(8,s,19,4,"ion-item-sliding",2),l.Vb(),l.Vb()),2&e&&(l.Cb(8),l.oc("ngForOf",i.items))},directives:[a.z,a.mb,a.l,a.h,a.i,a.kb,a.u,a.K,n.n,a.I,a.D,a.jb,a.J,a.H,a.G,a.A],styles:[""]}),r)}],m=((b=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:b}),b.\u0275inj=l.Nb({factory:function(e){return new(e||b)},imports:[[n.c,o.g,a.nb,c.j.forChild(u)]]}),b)}}]);