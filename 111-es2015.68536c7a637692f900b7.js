(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{frUI:function(n,t,o){"use strict";o.r(t),o.d(t,"SlideWalkthroughPageModule",(function(){return b}));var i=o("ofXK"),e=o("3Pt+"),s=o("tyNb"),r=o("TEn/"),a=o("fXoL");const l=["slider"],c=function(n){return{"background-image":n}};function g(n,t){if(1&n&&(a.Wb(0,"ion-slide",7),a.Wb(1,"div",8),a.Wb(2,"div",9),a.Rb(3,"h2",10),a.Rb(4,"br"),a.Rb(5,"p",11),a.Vb(),a.Vb(),a.Vb()),2&n){const n=t.$implicit;a.oc("ngStyle",a.tc(3,c,"url("+n.imageUrl+")")),a.Cb(3),a.oc("innerHTML",n.title,a.Dc),a.Cb(2),a.oc("innerHTML",n.description,a.Dc)}}function d(n,t){if(1&n){const n=a.Xb();a.Wb(0,"div",12),a.Wb(1,"ion-button",13),a.ec("click",(function(){return a.Cc(n),a.ic().goToApp()})),a.Mc(2,"Let's go!"),a.Vb(),a.Vb()}}const p=[{path:"",component:(()=>{class n{constructor(){this.slideIndex=0,this.slides=[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",description:"Take a look at our amazing options"},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",description:"Take a look at our amazing options"},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",description:"Take a look at our amazing options"},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",description:"Take a look at our amazing options"}],this.slideOpts1={autoplay:{delay:3e3}}}ngOnInit(){}onSlideChanged(){this.slider.getActiveIndex().then(n=>{console.log("Slide changed! Current index is",n),this.slideIndex=n})}goToApp(){console.log("Go to App clicked")}skip(){console.log("Skip clicked")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Kb({type:n,selectors:[["app-slide-walkthrough"]],viewQuery:function(n,t){var o;1&n&&a.Hc(l,!0),2&n&&a.yc(o=a.fc())&&(t.slider=o.first)},decls:11,vars:3,consts:[["slot","start"],["defaultHref","/"],["fullscreen","true",1,"no-padding-top"],["pager","true",3,"options","ionSlideWillChange"],["slider",""],["class","slide-background",3,"ngStyle",4,"ngFor","ngForOf"],["class","floating-buttons pop-in",4,"ngIf"],[1,"slide-background",3,"ngStyle"],[1,"text-wrapper"],[1,"slide-text"],[1,"slide-title",3,"innerHTML"],[3,"innerHTML"],[1,"floating-buttons","pop-in"],["fill","clear","size","large","expand","full",3,"click"]],template:function(n,t){1&n&&(a.Wb(0,"ion-header"),a.Wb(1,"ion-toolbar"),a.Wb(2,"ion-buttons",0),a.Rb(3,"ion-back-button",1),a.Vb(),a.Wb(4,"ion-title"),a.Mc(5,"Slide Walkthrough"),a.Vb(),a.Vb(),a.Vb(),a.Wb(6,"ion-content",2),a.Wb(7,"ion-slides",3,4),a.ec("ionSlideWillChange",(function(){return t.onSlideChanged()})),a.Kc(9,g,6,5,"ion-slide",5),a.Vb(),a.Kc(10,d,3,0,"div",6),a.Vb()),2&n&&(a.Cb(7),a.oc("options",t.slideOpts1),a.Cb(2),a.oc("ngForOf",t.slides),a.Cb(1),a.oc("ngIf",t.slideIndex>=t.slides.length-1))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,r.cb,i.n,i.o,r.bb,i.p,r.k],styles:["ion-item[_ngcontent-%COMP%]{--background:transparent}.swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff}.no-padding-top[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{padding-top:0!important}.skip-button[_ngcontent-%COMP%]{text-transform:none;padding:15px;font-weight:700}.floating-buttons[_ngcontent-%COMP%]{z-index:1;width:100%;bottom:0;position:absolute;margin-bottom:50px;transition:all .4s linear}.floating-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:#fff;min-height:7vh;text-transform:none;font-size:1.4em;font-weight:700;--background:rgba(49,161,216,0.67)}.slide-background[_ngcontent-%COMP%]{background-size:cover!important;background-position:50%;background-repeat:no-repeat}.slide-background[_ngcontent-%COMP%], .toolbar-background[_ngcontent-%COMP%]{border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:linear-gradient(transparent,rgba(0,0,0,.4))!important;height:100%}.text-wrapper[_ngcontent-%COMP%]{width:100vw;height:100vh}.slide-text[_ngcontent-%COMP%]{position:relative;text-align:center;top:50%;transform:translateY(-50%)}.slide-title[_ngcontent-%COMP%]{color:#fff;font-weight:700}.slide-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%;margin:18px 0}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:1em;line-height:1.5;color:#fff}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}.pop-in[_ngcontent-%COMP%]{-webkit-animation:pop-in .65s;animation:pop-in .65s!important}"]}),n})()}];let b=(()=>{class n{}return n.\u0275mod=a.Ob({type:n}),n.\u0275inj=a.Nb({factory:function(t){return new(t||n)},imports:[[i.c,e.g,r.nb,s.j.forChild(p)]]}),n})()}}]);