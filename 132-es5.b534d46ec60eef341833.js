function _classCallCheck(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function _createClass(i,e,t){return e&&_defineProperties(i.prototype,e),t&&_defineProperties(i,t),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{wHD8:function(i,e,t){"use strict";t.r(e),t.d(e,"ion_img",(function(){return r}));var n=t("A36C"),o=t("Zgba"),r=function(){function i(e){var t=this;_classCallCheck(this,i),Object(n.o)(this,e),this.ionImgWillLoad=Object(n.g)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(n.g)(this,"ionImgDidLoad",7),this.ionError=Object(n.g)(this,"ionError",7),this.onLoad=function(){t.ionImgDidLoad.emit()},this.onError=function(){t.ionError.emit()}}return _createClass(i,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(e){e[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(n.j)(n.c,{class:Object(o.b)(this)},Object(n.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(n.k)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),i}();r.style=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}"}}]);