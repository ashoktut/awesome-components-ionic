function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{y6SE:function(e,n,t){"use strict";t.r(n),t.d(n,"SlidesPageModule",(function(){return c}));var i=t("ofXK"),l=t("3Pt+"),o=t("tyNb"),r=t("TEn/"),a=t("fXoL");function d(e,n){if(1&e&&(a.Wb(0,"ion-item",3),a.Mc(1),a.Vb()),2&e){var t=n.$implicit;a.oc("routerLink",t.page),a.Cb(1),a.Oc(" ",t.title," ")}}var u,s,h=[{path:"",component:(u=function(){function e(n){_classCallCheck(this,e),this.navCtrl=n,this.items=[{title:"Carousel",page:"slide-carousel"},{title:"Color changing sliders",page:"slide-color-changing"},{title:"Custom pagination",page:"slide-custom-pagination"},{title:"Free mode slide (no fixed positions)",page:"slide-free-mode"},{title:"List of Sliders",page:"slide-list"},{title:"Nested slides",page:"slide-nested"},{title:"Slide transitions",page:"slide-transitions"},{title:"Slide right to left",page:"slide-rtl"},{title:"Slide with pagination arrows",page:"slide-with-arrows"},{title:"Slide Walkthrough",page:"slide-walkthrough"},{title:"Photo Gallery (not working)",page:"slide-photo-gallery"},{title:"Slide Pagination",page:"slide-pagination"}]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"itemTapped",value:function(e,n){this.navCtrl.navigateForward(n.page)}}]),e}(),u.\u0275fac=function(e){return new(e||u)(a.Qb(r.sb))},u.\u0275cmp=a.Kb({type:u,selectors:[["app-slides"]],decls:9,vars:1,consts:[["slot","start"],["defaultHref","/"],["details","",3,"routerLink",4,"ngFor","ngForOf"],["details","",3,"routerLink"]],template:function(e,n){1&e&&(a.Wb(0,"ion-header"),a.Wb(1,"ion-toolbar"),a.Wb(2,"ion-buttons",0),a.Rb(3,"ion-back-button",1),a.Vb(),a.Wb(4,"ion-title"),a.Mc(5,"Slides"),a.Vb(),a.Vb(),a.Vb(),a.Wb(6,"ion-content"),a.Wb(7,"ion-list"),a.Kc(8,d,2,2,"ion-item",2),a.Vb(),a.Vb()),2&e&&(a.Cb(8),a.oc("ngForOf",n.items))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,r.K,i.n,r.D,r.wb,o.i],styles:[""]}),u)},{path:"slide-color-changing",loadChildren:function(){return t.e(9).then(t.bind(null,"onO+")).then((function(e){return e.SlideColorChangingPageModule}))}},{path:"slide-color-changing",loadChildren:function(){return t.e(9).then(t.bind(null,"onO+")).then((function(e){return e.SlideColorChangingPageModule}))}},{path:"slide-custom-pagination",loadChildren:function(){return t.e(103).then(t.bind(null,"8VuJ")).then((function(e){return e.SlideCustomPaginationPageModule}))}},{path:"slide-nested",loadChildren:function(){return t.e(106).then(t.bind(null,"LVgk")).then((function(e){return e.SlideNestedPageModule}))}},{path:"slide-free-mode",loadChildren:function(){return t.e(104).then(t.bind(null,"apiX")).then((function(e){return e.SlideFreeModePageModule}))}},{path:"slide-photo-gallery",loadChildren:function(){return t.e(108).then(t.bind(null,"1BfN")).then((function(e){return e.SlidePhotoGalleryPageModule}))}},{path:"slide-rtl",loadChildren:function(){return t.e(109).then(t.bind(null,"4eVO")).then((function(e){return e.SlideRtlPageModule}))}},{path:"slide-transitions",loadChildren:function(){return t.e(110).then(t.bind(null,"pTpb")).then((function(e){return e.SlideTransitionsPageModule}))}},{path:"slide-walkthrough",loadChildren:function(){return t.e(111).then(t.bind(null,"frUI")).then((function(e){return e.SlideWalkthroughPageModule}))}},{path:"slide-list",loadChildren:function(){return t.e(105).then(t.bind(null,"tlxJ")).then((function(e){return e.SlideListPageModule}))}},{path:"slide-with-arrows",loadChildren:function(){return t.e(112).then(t.bind(null,"g0m8")).then((function(e){return e.SlideWithArrowsPageModule}))}},{path:"slide-carousel",loadChildren:function(){return t.e(102).then(t.bind(null,"r66F")).then((function(e){return e.SlideCarouselPageModule}))}},{path:"slide-pagination",loadChildren:function(){return t.e(107).then(t.bind(null,"+9aX")).then((function(e){return e.SlidePaginationPageModule}))}}],c=((s=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:s}),s.\u0275inj=a.Nb({factory:function(e){return new(e||s)},imports:[[i.c,l.g,r.nb,o.j.forChild(h)]]}),s)}}]);