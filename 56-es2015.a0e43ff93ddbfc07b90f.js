(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{XNL8:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=t("mrSG"),i=t("ZZ/e");class u{constructor(n,l){this.loadingCtrl=n,this.alertCtrl=l,this.colors=new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),this.step=0,this.colorIndices=[0,1,2,3],this.gradientSpeed=5e-5,this.gradient=""}ngOnInit(){}login(){return e.b(this,void 0,void 0,(function*(){const n=yield this.loadingCtrl.create({duration:500,message:"Please wait..."});yield n.present(),yield n.onDidDismiss().then(()=>e.b(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Logged in!",subHeader:"Thanks for logging in.",buttons:["Dismiss"]});yield n.present()})))}))}goToSignup(){}updateGradient(){const n=this.colors[this.colorIndices[0]],l=this.colors[this.colorIndices[1]],t=this.colors[this.colorIndices[2]],o=this.colors[this.colorIndices[3]],e=1-this.step,i="rgb("+Math.round(e*n[0]+this.step*l[0])+","+Math.round(e*n[1]+this.step*l[1])+","+Math.round(e*n[2]+this.step*l[2])+")",u=Math.round(e*t[0]+this.step*o[0]),r=Math.round(e*t[1]+this.step*o[1]),a=Math.round(e*t[2]+this.step*o[2]);this.gradient=`-webkit-gradient(linear, left top, right bottom, from(${i}), to(${"rgb("+u+","+r+","+a+")"}))`,this.step+=this.gradientSpeed,this.step>=1&&(this.step%=1,this.colorIndices[0]=this.colorIndices[1],this.colorIndices[2]=this.colorIndices[3],this.colorIndices[1]=(this.colorIndices[1]+Math.floor(1+Math.random()*(this.colors.length-1)))%this.colors.length,this.colorIndices[3]=(this.colorIndices[3]+Math.floor(1+Math.random()*(this.colors.length-1)))%this.colors.length),setInterval(()=>{this.updateGradient()},40)}}class r{}var a=t("pMnS"),s=t("oBZk"),c=t("s7LF"),b=o.Cb({encapsulation:0,styles:[['span[_ngcontent-%COMP%]{color:#fff}.header-md[_ngcontent-%COMP%]::after, .toolbar-background-ios[_ngcontent-%COMP%]{background-image:none;border-bottom:0}ion-footer[_ngcontent-%COMP%]{height:47px}.footer[_ngcontent-%COMP%]{text-align:center;background:rgba(255,255,255,.06);min-height:47px}.footer-md[_ngcontent-%COMP%]::before{border-top:1px solid rgba(255,255,255,.6);background-image:none}ion-content[_ngcontent-%COMP%]{--background:none;background:linear-gradient(316deg,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3);background-size:1800% 1800%;-webkit-animation:30s linear infinite rainbow;animation:30s linear infinite rainbow;text-align:center}@-webkit-keyframes rainbow{0%,100%{background-position:0 0}50%{background-position:100% 100%}}@keyframes rainbow{0%,100%{background-position:0 0}50%{background-position:100% 100%}}.logo[_ngcontent-%COMP%]{width:50%;height:auto;margin:0 auto;padding-top:50px}ion-item[_ngcontent-%COMP%]{border-radius:3px!important;padding-left:10px!important;margin-bottom:15px!important;--color:#fff!important;--background:rgba(255, 255, 255, 0.2)!important;font-size:.9em}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important}.login-button[_ngcontent-%COMP%]{text-transform:none;border-radius:3px!important}ion-icon[_ngcontent-%COMP%]{padding-right:10px;font-size:2.2rem}.strike[_ngcontent-%COMP%]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:inline-block;font-weight:700}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after, .strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;width:9999px;height:1px;background:rgba(255,255,255,.6)}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{right:100%;margin-right:15px}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after{left:100%;margin-left:15px}']],data:{}});function d(n){return o.ac(0,[(n()(),o.Eb(0,0,null,null,11,"ion-header",[],null,null,null,s.tb,s.t)),o.Db(1,49152,null,0,i.E,[o.j,o.p,o.G],null,null),(n()(),o.Eb(2,0,null,0,9,"ion-toolbar",[],null,null,null,s.Zb,s.Z)),o.Db(3,49152,null,0,i.Fb,[o.j,o.p,o.G],null,null),(n()(),o.Eb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.fb,s.f)),o.Db(5,49152,null,0,i.o,[o.j,o.p,o.G],null,null),(n()(),o.Eb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Qb(n,8).onClick(t)&&e),e}),s.cb,s.c)),o.Db(7,49152,null,0,i.j,[o.j,o.p,o.G],{defaultHref:[0,"defaultHref"]},null),o.Db(8,16384,null,0,i.k,[[2,i.lb],i.Mb],{defaultHref:[0,"defaultHref"]},null),(n()(),o.Eb(9,0,null,0,2,"ion-title",[],null,null,null,s.Xb,s.X)),o.Db(10,49152,null,0,i.Db,[o.j,o.p,o.G],null,null),(n()(),o.Yb(-1,0,["Login Instagram"])),(n()(),o.Eb(12,0,null,null,26,"ion-content",[["class","ion-padding "]],null,null,null,s.ob,s.o)),o.Db(13,49152,null,0,i.x,[o.j,o.p,o.G],null,null),(n()(),o.Eb(14,0,null,0,0,"img",[["class","logo"],["src","assets/yannbf/img/logo/logo-instagram.png"]],null,null,null,null,null)),(n()(),o.Eb(15,0,null,0,15,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),o.Eb(16,0,null,null,5,"ion-item",[],null,null,null,s.Bb,s.w)),o.Db(17,49152,null,0,i.K,[o.j,o.p,o.G],null,null),(n()(),o.Eb(18,0,null,0,3,"ion-input",[["placeholder","Username"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0;return"ionBlur"===l&&(e=!1!==o.Qb(n,21)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Qb(n,21)._handleInputEvent(t.target)&&e),e}),s.vb,s.v)),o.Vb(5120,null,c.k,(function(n){return[n]}),[i.Vb]),o.Db(20,49152,null,0,i.J,[o.j,o.p,o.G],{placeholder:[0,"placeholder"],type:[1,"type"]},null),o.Db(21,16384,null,0,i.Vb,[o.p],null,null),(n()(),o.Eb(22,0,null,null,5,"ion-item",[],null,null,null,s.Bb,s.w)),o.Db(23,49152,null,0,i.K,[o.j,o.p,o.G],null,null),(n()(),o.Eb(24,0,null,0,3,"ion-input",[["placeholder","Password"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var e=!0;return"ionBlur"===l&&(e=!1!==o.Qb(n,27)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Qb(n,27)._handleInputEvent(t.target)&&e),e}),s.vb,s.v)),o.Vb(5120,null,c.k,(function(n){return[n]}),[i.Vb]),o.Db(26,49152,null,0,i.J,[o.j,o.p,o.G],{placeholder:[0,"placeholder"],type:[1,"type"]},null),o.Db(27,16384,null,0,i.Vb,[o.p],null,null),(n()(),o.Eb(28,0,null,null,2,"ion-button",[["class","login-button"],["color","light"],["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o}),s.eb,s.e)),o.Db(29,49152,null,0,i.n,[o.j,o.p,o.G],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),o.Yb(-1,0,["Login"])),(n()(),o.Eb(31,0,null,0,2,"div",[["class","strike"]],null,null,null,null,null)),(n()(),o.Eb(32,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),o.Yb(-1,null,["OR"])),(n()(),o.Eb(34,0,null,0,4,"ion-button",[["class","login-button"],["color","light"],["expand","block"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o}),s.eb,s.e)),o.Db(35,49152,null,0,i.n,[o.j,o.p,o.G],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),o.Eb(36,0,null,0,1,"ion-icon",[["name","logo-facebook"]],null,null,null,s.ub,s.u)),o.Db(37,49152,null,0,i.F,[o.j,o.p,o.G],{name:[0,"name"]},null),(n()(),o.Yb(-1,0,[" Login with Facebook "])),(n()(),o.Eb(39,0,null,null,9,"ion-footer",[],null,null,null,s.rb,s.r)),o.Db(40,49152,null,0,i.C,[o.j,o.p,o.G],null,null),(n()(),o.Eb(41,0,null,0,7,"ion-toolbar",[["class","footer"]],null,null,null,s.Zb,s.Z)),o.Db(42,49152,null,0,i.Fb,[o.j,o.p,o.G],null,null),(n()(),o.Eb(43,0,null,0,5,"div",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goToSignup()&&o),o}),null,null)),(n()(),o.Eb(44,0,null,null,4,"span",[],null,null,null,null,null)),(n()(),o.Yb(-1,null,["Don't have an account? "])),(n()(),o.Eb(46,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),o.Yb(-1,null,["Sign up here"])),(n()(),o.Yb(-1,null,["."]))],(function(n,l){n(l,7,0,"/"),n(l,8,0,"/"),n(l,20,0,"Username","text"),n(l,26,0,"Password","password"),n(l,29,0,"light","block","outline"),n(l,35,0,"light","block","clear"),n(l,37,0,"logo-facebook")}),null)}function g(n){return o.ac(0,[(n()(),o.Eb(0,0,null,null,1,"app-login-instagram",[],null,null,null,d,b)),o.Db(1,114688,null,0,u,[i.Jb,i.b],null,null)],(function(n,l){n(l,1,0)}),null)}var p=o.Ab("app-login-instagram",u,g,{},{},[]),h=t("SVse"),f=t("iInd");t.d(l,"LoginInstagramPageModuleNgFactory",(function(){return m}));var m=o.Bb(r,[],(function(n){return o.Nb([o.Ob(512,o.m,o.lb,[[8,[a.a,p]],[3,o.m],o.E]),o.Ob(4608,h.p,h.o,[o.A,[2,h.H]]),o.Ob(4608,c.t,c.t,[]),o.Ob(4608,i.c,i.c,[o.G,o.g]),o.Ob(4608,i.Lb,i.Lb,[i.c,o.m,o.x]),o.Ob(4608,i.Rb,i.Rb,[i.c,o.m,o.x]),o.Ob(1073742336,h.c,h.c,[]),o.Ob(1073742336,c.s,c.s,[]),o.Ob(1073742336,c.i,c.i,[]),o.Ob(1073742336,i.Hb,i.Hb,[]),o.Ob(1073742336,f.p,f.p,[[2,f.u],[2,f.n]]),o.Ob(1073742336,r,r,[]),o.Ob(1024,f.l,(function(){return[[{path:"",component:u}]]}),[])])}))}}]);