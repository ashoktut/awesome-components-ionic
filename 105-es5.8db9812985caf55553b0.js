function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{tlxJ:function(t,e,s){"use strict";s.r(e),s.d(e,"SlideListPageModule",(function(){return f}));var i=s("ofXK"),n=s("3Pt+"),a=s("tyNb"),r=s("TEn/"),l=s("fXoL"),o=function(t){return{"background-image":t}};function g(t,e){if(1&t&&(l.Wb(0,"ion-slide",6),l.Wb(1,"div",7),l.Wb(2,"h2"),l.Mc(3),l.Vb(),l.Wb(4,"p"),l.Mc(5),l.Vb(),l.Vb(),l.Vb()),2&t){var s=e.$implicit;l.oc("ngStyle",l.tc(3,o,"url("+s.imageUrl+")")),l.Cb(3),l.Nc(s.title),l.Cb(2),l.Oc("",s.songs," songs")}}function c(t,e){if(1&t&&(l.Wb(0,"ion-list",3),l.Wb(1,"ion-slides",4),l.Kc(2,g,6,5,"ion-slide",5),l.Vb(),l.Vb()),2&t){var s=e.$implicit,i=l.ic();l.Cb(1),l.oc("pager",!0)("options",i.slideOptsProgressbar),l.Cb(1),l.oc("ngForOf",s.slides)}}var p,b,m=[{path:"",component:(p=function(){function t(){var e=this;_classCallCheck(this,t),this.items=[{name:"one",slides:[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0}]},{name:"one",slides:[{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0},{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0}]},{name:"one",slides:[{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0}]}],this.slideOptsProgressbar={pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,s,i){return e.customProgressBar(s,i)}}}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"customProgressBar",value:function(t,e){var s="<div class='swiper-pagination-progressbar' style='height: 4px; top: 6px; width: 100%;'>";return s+="<span class='swiper-pagination-progressbar-fill' style='transform: translate3d(0px, 0px, 0px) scaleX("+t/e+") scaleY(1); transition-duration: 300ms;'></span>",s+="</span></div>"}}]),t}(),p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=l.Kb({type:p,selectors:[["app-slide-list"]],decls:8,vars:1,consts:[["slot","start"],["defaultHref","/"],["class","ion-no-margin",4,"ngFor","ngForOf"],[1,"ion-no-margin"],[3,"pager","options"],["class","text-center slider-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"text-center","slider-item",3,"ngStyle"],[1,"slide-text"]],template:function(t,e){1&t&&(l.Wb(0,"ion-header"),l.Wb(1,"ion-toolbar"),l.Wb(2,"ion-buttons",0),l.Rb(3,"ion-back-button",1),l.Vb(),l.Wb(4,"ion-title"),l.Mc(5,"Slide List"),l.Vb(),l.Vb(),l.Vb(),l.Wb(6,"ion-content"),l.Kc(7,c,3,3,"ion-list",2),l.Vb()),2&t&&(l.Cb(7),l.oc("ngForOf",e.items))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,i.n,r.K,r.cb,r.bb,i.p],styles:["ion-slides[_ngcontent-%COMP%]{--bullet-background:#fff;--bullet-background-active:#fa3}.slider-item[_ngcontent-%COMP%]{height:35vh;width:100%;background-size:cover}.slide-zoom[_ngcontent-%COMP%]{height:100%;background:linear-gradient(transparent,rgba(0,0,0,.22))!important}.slide-text[_ngcontent-%COMP%]{position:relative;text-align:center;transform:translateY(-50%)}.text-center[_ngcontent-%COMP%]{text-align:center;color:#fff}"]}),p)}],f=((b=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:b}),b.\u0275inj=l.Nb({factory:function(t){return new(t||b)},imports:[[i.c,n.g,r.nb,a.j.forChild(m)]]}),b)}}]);