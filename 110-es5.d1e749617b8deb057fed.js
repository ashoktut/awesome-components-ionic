function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,s){for(var i=0;i<s.length;i++){var e=s[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,s,i){return s&&_defineProperties(t.prototype,s),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{pTpb:function(t,s,i){"use strict";i.r(s),i.d(s,"SlideTransitionsPageModule",(function(){return m}));var e=i("ofXK"),a=i("3Pt+"),o=i("tyNb"),n=i("TEn/"),r=i("fXoL"),l=["slider"],c=function(t){return{background:t}};function d(t,s){if(1&t&&(r.Wb(0,"ion-slide",5),r.Wb(1,"h2"),r.Mc(2),r.Vb(),r.Vb()),2&t){var i=s.$implicit;r.oc("ngStyle",r.tc(2,c,"url("+i.imageUrl+")")),r.Cb(2),r.Nc(i.title)}}function h(t,s){if(1&t&&(r.Wb(0,"ion-slide",5),r.Wb(1,"h2"),r.Mc(2),r.Vb(),r.Vb()),2&t){var i=s.$implicit;r.oc("ngStyle",r.tc(2,c,"url("+i.imageUrl+")")),r.Cb(2),r.Nc(i.title)}}function p(t,s){if(1&t&&(r.Wb(0,"ion-slide",5),r.Wb(1,"h2"),r.Mc(2),r.Vb(),r.Vb()),2&t){var i=s.$implicit;r.oc("ngStyle",r.tc(2,c,"url("+i.imageUrl+")")),r.Cb(2),r.Nc(i.title)}}function f(t,s){if(1&t&&(r.Wb(0,"ion-slide",5),r.Wb(1,"h2"),r.Mc(2),r.Vb(),r.Vb()),2&t){var i=s.$implicit;r.oc("ngStyle",r.tc(2,c,"url("+i.imageUrl+")")),r.Cb(2),r.Nc(i.title)}}function g(t,s){if(1&t&&(r.Wb(0,"ion-slide",5),r.Wb(1,"h2"),r.Mc(2),r.Vb(),r.Vb()),2&t){var i=s.$implicit;r.oc("ngStyle",r.tc(2,c,"url("+i.imageUrl+")")),r.Cb(2),r.Nc(i.title)}}var b,w,u=[{path:"",component:(b=function(){function t(){_classCallCheck(this,t),this.slides=[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0}],this.slideOpts1={loop:!0,autoplay:{delay:2e3}},this.slideOpts2={loop:!0,autoplay:{delay:2e3},grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};this.params=Object.assign(this.params,t),this.originalParams=Object.assign(this.originalParams,t)},setTranslate:function(){var t,s=this.$el,i=this.$wrapperEl,e=this.slides,a=this.width,o=this.height,n=this.rtlTranslate,r=this.size,l=this.params.cubeEffect,c=this.isHorizontal(),d=this.virtual&&this.params.virtual.enabled,h=0;l.shadow&&(c?(0===(t=i.find(".swiper-cube-shadow")).length&&(t=this.$('<div class="swiper-cube-shadow"></div>'),i.append(t)),t.css({height:a+"px"})):0===(t=s.find(".swiper-cube-shadow")).length&&(t=this.$('<div class="swiper-cube-shadow"></div>'),s.append(t)));for(var p=0;p<e.length;p+=1){var f=e.eq(p),g=p;d&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,w=Math.floor(b/360);n&&(b=-b,w=Math.floor(-b/360));var u=Math.max(Math.min(f[0].progress,1),-1),m=0,v=0,M=0;g%4==0?(m=4*-w*r,M=0):(g-1)%4==0?(m=0,M=4*-w*r):(g-2)%4==0?(m=r+4*w*r,M=r):(g-3)%4==0&&(m=-r,M=3*r+4*r*w),n&&(m=-m),c||(v=m,m=0);var y="rotateX(".concat(c?0:-b,"deg) rotateY(").concat(c?b:0,"deg) translate3d(").concat(m,"px, ").concat(v,"px, ").concat(M,"px)");if(u<=1&&u>-1&&(h=90*g+90*u,n&&(h=90*-g-90*u)),f.transform(y),l.slideShadows){var x=f.find(c?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),C=f.find(c?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===x.length&&(x=this.$('<div class="swiper-slide-shadow-'.concat(c?"left":"top",'"></div>')),f.append(x)),0===C.length&&(C=this.$('<div class="swiper-slide-shadow-'.concat(c?"right":"bottom",'"></div>')),f.append(C)),x.length&&(x[0].style.opacity=Math.max(-u,0)),C.length&&(C[0].style.opacity=Math.max(u,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -".concat(r/2,"px"),"-moz-transform-origin":"50% 50% -".concat(r/2,"px"),"-ms-transform-origin":"50% 50% -".concat(r/2,"px"),"transform-origin":"50% 50% -".concat(r/2,"px")}),l.shadow)if(c)t.transform("translate3d(0px, ".concat(a/2+l.shadowOffset,"px, ").concat(-a/2,"px) rotateX(90deg) rotateZ(0deg) scale(").concat(l.shadowScale,")"));else{var O=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*O*Math.PI/360)/2+Math.cos(2*O*Math.PI/360)/2),S=l.shadowScale/P;t.transform("scale3d(".concat(l.shadowScale,", 1, ").concat(S,") translate3d(0px, ").concat(o/2+l.shadowOffset,"px, ").concat(-o/2/S,"px) rotateX(-90deg)"))}i.transform("translate3d(0px,0,".concat(this.browser.isSafari||this.browser.isUiWebView?-r/2:0,"px) rotateX(").concat(this.isHorizontal()?0:h,"deg) rotateY(").concat(this.isHorizontal()?-h:0,"deg)"))},setTransition:function(t){var s=this.$el;this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),this.params.cubeEffect.shadow&&!this.isHorizontal()&&s.find(".swiper-cube-shadow").transition(t)}}},this.slideOpts3={loop:!0,autoplay:{delay:2e3},slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0},setTranslate:function(){for(var t=this.width,s=this.height,i=this.slides,e=this.$wrapperEl,a=this.slidesSizesGrid,o=this.params.coverflowEffect,n=this.isHorizontal(),r=this.translate,l=n?t/2-r:s/2-r,c=n?o.rotate:-o.rotate,d=o.depth,h=0,p=i.length;h<p;h+=1){var f=i.eq(h),g=a[h],b=(l-f[0].swiperSlideOffset-g/2)/g*o.modifier,w=n?c*b:0,u=n?0:c*b,m=-d*Math.abs(b),v=n?0:o.stretch*b,M=n?o.stretch*b:0;if(Math.abs(M)<.001&&(M=0),Math.abs(v)<.001&&(v=0),Math.abs(m)<.001&&(m=0),Math.abs(w)<.001&&(w=0),Math.abs(u)<.001&&(u=0),f.transform("translate3d(".concat(M,"px,").concat(v,"px,").concat(m,"px)  rotateX(").concat(u,"deg) rotateY(").concat(w,"deg)")),f[0].style.zIndex=1-Math.abs(Math.round(b)),o.slideShadows){var y=f.find(n?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),x=f.find(n?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===y.length&&(y=this.$('<div class="swiper-slide-shadow-'.concat(n?"left":"top",'"></div>')),f.append(y)),0===x.length&&(x=this.$('<div class="swiper-slide-shadow-'.concat(n?"right":"bottom",'"></div>')),f.append(x)),y.length&&(y[0].style.opacity=b>0?b:0),x.length&&(x[0].style.opacity=-b>0?-b:0)}}(this.support.pointerEvents||this.support.prefixedPointerEvents)&&(e[0].style.perspectiveOrigin=l+"px 50%")},setTransition:function(t){this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)}}},this.slideOpts4={loop:!0,autoplay:{delay:2e3},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};this.params=Object.assign(this.params,t),this.params=Object.assign(this.originalParams,t)},setTranslate:function(){for(var t=this.slides,s=0;s<t.length;s+=1){var i=this.slides.eq(s),e=-i[0].swiperSlideOffset;this.params.virtualTranslate||(e-=this.translate);var a=0;this.isHorizontal()||(a=e,e=0);var o=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:o}).transform("translate3d(".concat(e,"px, ").concat(a,"px, 0px)"))}},setTransition:function(t){var s=this,i=s.slides,e=s.$wrapperEl;if(i.transition(t),s.params.virtualTranslate&&0!==t){var a=!1;i.transitionEnd((function(){if(!a&&s&&!s.destroyed){a=!0,s.animating=!1;for(var t=["webkitTransitionEnd","transitionend"],i=0;i<t.length;i+=1)e.trigger(t[i])}}))}}}},this.slideOpts5={loop:!0,autoplay:{delay:2e3},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};this.params=Object.assign(this.params,t),this.originalParams=Object.assign(this.originalParams,t)},setTranslate:function(){for(var t=this.slides,s=this.rtlTranslate,i=0;i<t.length;i+=1){var e=t.eq(i),a=e[0].progress;this.params.flipEffect.limitRotation&&(a=Math.max(Math.min(e[0].progress,1),-1));var o=-180*a,n=0,r=-e[0].swiperSlideOffset,l=0;if(this.isHorizontal()?s&&(o=-o):(l=r,r=0,n=-o,o=0),e[0].style.zIndex=-Math.abs(Math.round(a))+t.length,this.params.flipEffect.slideShadows){var c=this.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),d=this.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===c.length&&(c=this.$('<div class="swiper-slide-shadow-'.concat(this.isHorizontal()?"left":"top",'"></div>')),e.append(c)),0===d.length&&(d=this.$('<div class="swiper-slide-shadow-'.concat(this.isHorizontal()?"right":"bottom",'"></div>')),e.append(d)),c.length&&(c[0].style.opacity=Math.max(-a,0)),d.length&&(d[0].style.opacity=Math.max(a,0))}e.transform("translate3d(".concat(r,"px, ").concat(l,"px, 0px) rotateX(").concat(n,"deg) rotateY(").concat(o,"deg)"))}},setTransition:function(t){var s=this,i=s.slides,e=s.activeIndex,a=s.$wrapperEl;if(i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),s.params.virtualTranslate&&0!==t){var o=!1;i.eq(e).transitionEnd((function(){if(!o&&s&&!s.destroyed){o=!0,s.animating=!1;for(var t=["webkitTransitionEnd","transitionend"],i=0;i<t.length;i+=1)a.trigger(t[i])}}))}}}}}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),b.\u0275fac=function(t){return new(t||b)},b.\u0275cmp=r.Kb({type:b,selectors:[["app-slide-transitions"]],viewQuery:function(t,s){var i;1&t&&r.Hc(l,!0),2&t&&r.yc(i=r.fc())&&(s.slider=i.first)},decls:27,vars:10,consts:[["slot","start"],["defaultHref","/"],[1,"ion-text-center"],[3,"options"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"ngStyle"]],template:function(t,s){1&t&&(r.Wb(0,"ion-header"),r.Wb(1,"ion-toolbar"),r.Wb(2,"ion-buttons",0),r.Rb(3,"ion-back-button",1),r.Vb(),r.Wb(4,"ion-title"),r.Mc(5,"Slide Transitions"),r.Vb(),r.Vb(),r.Vb(),r.Wb(6,"ion-content",2),r.Wb(7,"h3"),r.Mc(8,"Slide (default)"),r.Vb(),r.Wb(9,"ion-slides",3),r.Kc(10,d,3,4,"ion-slide",4),r.Vb(),r.Wb(11,"h3"),r.Mc(12,"Cube"),r.Vb(),r.Wb(13,"ion-slides",3),r.Kc(14,h,3,4,"ion-slide",4),r.Vb(),r.Wb(15,"h3"),r.Mc(16,"Coverflow"),r.Vb(),r.Wb(17,"ion-slides",3),r.Kc(18,p,3,4,"ion-slide",4),r.Vb(),r.Wb(19,"h3"),r.Mc(20,"Fade"),r.Vb(),r.Wb(21,"ion-slides",3),r.Kc(22,f,3,4,"ion-slide",4),r.Vb(),r.Wb(23,"h3"),r.Mc(24,"Flip"),r.Vb(),r.Wb(25,"ion-slides",3),r.Kc(26,g,3,4,"ion-slide",4),r.Vb(),r.Vb()),2&t&&(r.Cb(9),r.oc("options",s.slideOpts1),r.Cb(1),r.oc("ngForOf",s.slides),r.Cb(3),r.oc("options",s.slideOpts2),r.Cb(1),r.oc("ngForOf",s.slides),r.Cb(3),r.oc("options",s.slideOpts3),r.Cb(1),r.oc("ngForOf",s.slides),r.Cb(3),r.oc("options",s.slideOpts4),r.Cb(1),r.oc("ngForOf",s.slides),r.Cb(3),r.oc("options",s.slideOpts5),r.Cb(1),r.oc("ngForOf",s.slides))},directives:[n.z,n.mb,n.l,n.h,n.i,n.kb,n.u,n.cb,e.n,n.bb,e.p],styles:["h2[_ngcontent-%COMP%]{color:#fff}.swiper-container[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{height:70vh;width:auto}.swiper-slide[_ngcontent-%COMP%]{background-size:cover!important;background-position:50%!important}.swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff}.custom-pagination.swiper-pagination-bullet[_ngcontent-%COMP%]{width:20px;height:20px;text-align:center;line-height:20px;font-size:12px;color:#000;opacity:1;background:rgba(0,0,0,.2)}.custom-pagination.swiper-pagination-bullet-active[_ngcontent-%COMP%]{color:#fff;background:#f52c2c;transition:transform .3s;transform:scale(1.5)}.custom-pagination-2.swiper-pagination-bullet[_ngcontent-%COMP%]{width:20px;height:20px;text-align:center;font-size:12px;opacity:1;line-height:18px;color:#fff;background:rgba(0,0,0,.2);border:1px solid #fff}.custom-pagination-2.swiper-pagination-bullet-active[_ngcontent-%COMP%]{color:#fff;border-color:#a0f;background:transparent}.custom-pagination-3.swiper-pagination-bullet[_ngcontent-%COMP%]{width:20px;height:20px;opacity:1;border-radius:0;background-size:cover;background-position:50%}.custom-pagination-3.swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:25px;height:25px;transition:transform .3s;transform:scale(1.5)}"]}),b)}],m=((w=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ob({type:w}),w.\u0275inj=r.Nb({factory:function(t){return new(t||w)},imports:[[e.c,a.g,n.nb,o.j.forChild(u)]]}),w)}}]);