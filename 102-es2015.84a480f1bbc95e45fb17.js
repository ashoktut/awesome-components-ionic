(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{r66F:function(t,i,e){"use strict";e.r(i),e.d(i,"SlideCarouselPageModule",(function(){return g}));var o=e("ofXK"),n=e("3Pt+"),a=e("tyNb"),c=e("TEn/"),r=e("fXoL");function s(t,i){1&t&&r.Rb(0,"ion-icon",28)}function l(t,i){1&t&&r.Rb(0,"ion-icon",29)}function m(t,i){1&t&&r.Rb(0,"ion-icon",30)}function h(t,i){1&t&&r.Rb(0,"ion-icon",31)}function b(t,i){if(1&t){const t=r.Xb();r.Wb(0,"ion-slide",7),r.Wb(1,"ion-item",8),r.Wb(2,"div",9),r.Wb(3,"div",10),r.Wb(4,"img",11),r.ec("click",(function(e){r.Cc(t);const o=i.$implicit;return r.ic().goToCityPage(o,e)})),r.Vb(),r.Vb(),r.Wb(5,"ion-button",12),r.ec("click",(function(e){r.Cc(t);const o=i.$implicit;return r.ic().toggleFavorite(o,e)})),r.Kc(6,s,1,0,"ion-icon",13),r.Kc(7,l,1,0,"ion-icon",14),r.Vb(),r.Vb(),r.Vb(),r.Wb(8,"ion-item",15),r.Wb(9,"h2"),r.Mc(10),r.Vb(),r.Wb(11,"ion-avatar",16),r.ec("click",(function(){return r.Cc(t),r.ic().goToProfilePage()})),r.Rb(12,"img",17),r.Vb(),r.Vb(),r.Wb(13,"ion-row",18),r.Wb(14,"ion-col"),r.Wb(15,"ion-button",19),r.ec("click",(function(e){r.Cc(t);const o=i.$implicit;return r.ic().toggleFavorite(o,e)})),r.Kc(16,m,1,0,"ion-icon",20),r.Kc(17,h,1,0,"ion-icon",21),r.Wb(18,"label",22),r.Mc(19),r.Vb(),r.Vb(),r.Vb(),r.Wb(20,"ion-col",23),r.Wb(21,"ion-button",24),r.Rb(22,"ion-icon",25),r.Wb(23,"label",22),r.Mc(24),r.Vb(),r.Vb(),r.Vb(),r.Wb(25,"ion-col",26),r.Wb(26,"ion-button",24),r.Rb(27,"ion-icon",27),r.Wb(28,"label",22),r.Mc(29,"Share"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()}if(2&t){const t=i.$implicit;r.Cb(4),r.pc("src",t.image,r.Ec),r.Cb(2),r.oc("ngIf",t.favorited),r.Cb(1),r.oc("ngIf",!t.favorited),r.Cb(3),r.Oc(" ",t.name," "),r.Cb(2),r.pc("src",t.authorPic,r.Ec),r.Cb(4),r.oc("ngIf",t.favorited),r.Cb(1),r.oc("ngIf",!t.favorited),r.Cb(2),r.Nc(t.favoriteCount),r.Cb(5),r.Nc(" "+t.comments.length)}}const d=[{path:"",component:(()=>{class t{constructor(){this.mySlideOptions={slidesPerView:"auto",centeredSlides:!0,spaceBetween:9},this.city1={name:"Paris",favorited:!1,image:"http://bit.ly/2aXzczV",authorPic:"http://bit.ly/2dMCa9y",favoriteCount:10,comments:[1,2,3]},this.city2={name:"London",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"http://bit.ly/26lzMu0",favoriteCount:10,comments:[1,2,3]},this.city3={name:"Gramalote",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"http://bit.ly/2dW9ZEl",favoriteCount:10,comments:[1,2,3]},this.city4={name:"Vladivostok",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"http://bit.ly/2e0NFe4",favoriteCount:10,comments:[1,2,3]},this.water1={name:"Water1",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:10,comments:[1,2,3]},this.water2={name:"Water2",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:5,comments:[1]},this.water3={name:"Water3",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:2,comments:[1]},this.water4={name:"Water4",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:8,comments:[1,4,2,3]},this.water5={name:"Water5",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:4,comments:[1,4,2]},this.water6={name:"Water6",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:7,comments:[1,4]},this.water7={name:"Water7",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"https://placeimg.com/600/400/nature",favoriteCount:8,comments:[1,4,2,3]},this.citiesSlides=[],this.cities=[],this.water=[],this.toggle=0,this.cities=[this.city1,this.city2,this.city3,this.city4],this.citiesSlides=this.cities,this.water=[this.water1,this.water2,this.water3,this.water4,this.water5,this.water6,this.water7]}ngOnInit(){}addingNewCity(){this.cities.push({name:"NewCity",favorited:!1,authorPic:"http://bit.ly/2dMCa9y",image:"http://placekitten.com/g/900/550",favoriteCount:0,comments:[]})}changeCities(){0===this.toggle?(this.toggle=1,this.citiesSlides=this.cities):1===this.toggle?(this.toggle=2,this.citiesSlides=this.water):(this.toggle=0,this.citiesSlides=[])}goToCityPage(t,i){console.log("Going to city"+t)}goToProfilePage(){}toggleFavorite(t,i){console.log("in the ToggleFavorite() with ",t.name),i.preventDefault(),t.favorited=!t.favorited,t.favorited?t.favoriteCount++:t.favoriteCount--}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Kb({type:t,selectors:[["app-slide-carousel"]],decls:16,vars:1,consts:[["slot","start"],["defaultHref","/"],[1,"ion-padding"],[1,"outerSlide"],["mySlider",""],["class","innerSlides",4,"ngFor","ngForOf"],[3,"click"],[1,"innerSlides"],[1,"outerIonItem"],[1,"favImgDiv"],[1,"imgDiv"],[3,"src","click"],["fill","clear","color","danger",1,"favDiv",3,"click"],["ios","ios-heart","md","md-heart",4,"ngIf"],["class","favDivInactiveHeart","ios","ios-heart-outline","md","md-heart-outline",4,"ngIf"],["lines","none",1,"profilePicCityName"],["slot","end",1,"profilePicAvatar",3,"click"],[1,"profilePic",3,"src"],[1,"ion-no-padding"],["fill","clear","size","small","color","primary",3,"click"],["slot","start","ios","ios-heart","md","md-heart",4,"ngIf"],["slot","start","ios","ios-heart-outline","md","md-heart-outline",4,"ngIf"],[1,"ion-text-capitalize"],[1,"ion-text-center"],["fill","clear","size","small","color","primary"],["slot","start","name","chatbubbles"],[1,"ion-text-right"],["slot","start","name","share-alt"],["ios","ios-heart","md","md-heart"],["ios","ios-heart-outline","md","md-heart-outline",1,"favDivInactiveHeart"],["slot","start","ios","ios-heart","md","md-heart"],["slot","start","ios","ios-heart-outline","md","md-heart-outline"]],template:function(t,i){1&t&&(r.Wb(0,"ion-header"),r.Wb(1,"ion-toolbar"),r.Wb(2,"ion-buttons",0),r.Rb(3,"ion-back-button",1),r.Vb(),r.Wb(4,"ion-title"),r.Mc(5,"Slide Carousel"),r.Vb(),r.Vb(),r.Vb(),r.Wb(6,"ion-content",2),r.Wb(7,"h2"),r.Mc(8,"Welcome to Sliders!"),r.Vb(),r.Wb(9,"ion-slides",3,4),r.Kc(11,b,30,9,"ion-slide",5),r.Vb(),r.Wb(12,"ion-button",6),r.ec("click",(function(){return i.addingNewCity()})),r.Mc(13," New Slide "),r.Vb(),r.Wb(14,"ion-button",6),r.ec("click",(function(){return i.changeCities()})),r.Mc(15," Exchange Sliders "),r.Vb(),r.Vb()),2&t&&(r.Cb(11),r.oc("ngForOf",i.citiesSlides))},directives:[c.z,c.mb,c.l,c.h,c.i,c.kb,c.u,c.cb,o.n,c.k,c.bb,c.D,o.o,c.g,c.V,c.t,c.A],styles:[".innerSlides[_ngcontent-%COMP%]{width:80%}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0}.outerIonItem[_ngcontent-%COMP%]{padding-left:0}.outerIonItem[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{padding-right:0}.profilePicCityName[_ngcontent-%COMP%]{position:static}.profilePicAvatar[_ngcontent-%COMP%]{position:absolute;bottom:17%;right:7%;z-index:2}.profilePic[_ngcontent-%COMP%]{width:70px!important;height:70px!important;max-width:70px!important;max-height:70px!important;border-radius:35px!important;border:3.5px solid #fff}.favImgDiv[_ngcontent-%COMP%]{position:relative;z-index:1}.favDiv[_ngcontent-%COMP%]{position:absolute;top:10%;right:6%;font-size:1.6em!important}.favDivInactiveHeart[_ngcontent-%COMP%]{font-weight:700}.imgDiv[_ngcontent-%COMP%]{width:auto;height:26.5vh}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(i){return new(i||t)},imports:[[o.c,n.g,c.nb,a.j.forChild(d)]]}),t})()}}]);