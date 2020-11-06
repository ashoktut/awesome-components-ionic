function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-blog-post-blog-post-module"], {
  /***/
  "./src/app/pages/yannbf/components/miscellaneous/blog-post/blog-post.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/miscellaneous/blog-post/blog-post.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BlogPostPageModule */

  /***/
  function srcAppPagesYannbfComponentsMiscellaneousBlogPostBlogPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPostPageModule", function () {
      return BlogPostPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _blog_post_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-post.page */
    "./src/app/pages/yannbf/components/miscellaneous/blog-post/blog-post.page.ts");

    var routes = [{
      path: '',
      component: _blog_post_page__WEBPACK_IMPORTED_MODULE_5__["BlogPostPage"]
    }];

    var BlogPostPageModule = function BlogPostPageModule() {
      _classCallCheck(this, BlogPostPageModule);
    };

    BlogPostPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogPostPageModule
    });
    BlogPostPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogPostPageModule_Factory(t) {
        return new (t || BlogPostPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogPostPageModule, {
        declarations: [_blog_post_page__WEBPACK_IMPORTED_MODULE_5__["BlogPostPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_blog_post_page__WEBPACK_IMPORTED_MODULE_5__["BlogPostPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/miscellaneous/blog-post/blog-post.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/miscellaneous/blog-post/blog-post.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: BlogPostPage */

  /***/
  function srcAppPagesYannbfComponentsMiscellaneousBlogPostBlogPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPostPage", function () {
      return BlogPostPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var BlogPostPage = /*#__PURE__*/function () {
      function BlogPostPage() {
        _classCallCheck(this, BlogPostPage);
      }

      _createClass(BlogPostPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogPostPage;
    }();

    BlogPostPage.ɵfac = function BlogPostPage_Factory(t) {
      return new (t || BlogPostPage)();
    };

    BlogPostPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogPostPage,
      selectors: [["app-blog-post"]],
      decls: 21,
      vars: 0,
      consts: [["slot", "start"], ["defaultHref", "/"], ["src", "assets/yannbf/img/blog/mountain-range-front.png"]],
      template: function BlogPostPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Blog Post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Land ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "of the");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "From this point he marched two stages\u2014ten parasangs\u2014to the river Psarus, which is two hundred feet broad, and from the Psarus he marched a single stage\u2014five parasangs\u2014to Issi, the last city in Cilicia. It lies on the seaboard\u2014a prosperous, large and flourishing town. Here they halted three days, and here Cyrus was joined by his fleet. There were thirty-five ships from Peloponnesus, with the Lacedaemonian admiral Pythagoras on board. These had been piloted from Ephesus by Tamos the Egyptian, who himself had another fleet of twenty-five ships belonging to Cyrus. These had formed Tamos's blockading squadron at Miletus, when that city sided with Tissaphernes; he had also used them in other military services rendered to Cyrus in his operations against that satrap. There was a third officer on board the fleet, the Lacedaemonian Cheirisophus, who had been sent for by Cyrus, and had brought with him seven hundred hoplites, over whom he was to act as general in the service of Cyrus. The fleet lay at anchor opposite Cyrus's tent. Here too another reinforcement presented itself. This was a body of four hundred hoplites, Hellenic mercenaries in the service of Abrocomas, who deserted him for Cyrus, and joined in the campaign against the king.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "From Issi, he marched a single stage\u2014five parasangs\u2014to the gates of Cilicia and Syria. This was a double fortress: the inner and nearer one, which protects Cilicia, was held by Syennesis and a garrison of Cilicians; the outer and further one, protecting Syria, was reported to be garrisoned by a body of the king's troops. Through the gap between the two fortresses flows a river named the Carsus, which is a hundred feet broad, and the whole space between was scarcely more than six hundred yards. To force a passage here would be impossible, so narrow was the pass itself, with the fortification walls stretching down to the sea, and precipitous rocks above; while both fortresses were furnished with gates. It was the existence of this pass which had induced Cyrus to send for the fleet, so as to enable him to lead a body of hoplites inside and outside the gates; and so to force a passage through the enemy, if he were guarding the Syrian gate, as he fully expected to find Abrocomas doing with a large army. This, however, Abrocomas had not done; but as soon as he learnt that Cyrus was in Cilicia, he had turned round and made his exit from Phoenicia, to join the king with an army amounting, as report said, to three hundred thousand men.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "From this point Cyrus pursued his march, through Syria a single stage\u2014five parasangs\u2014to Myriandus, a city inhabited by Phoenicians, on the sea-coast. This was a commercial port, and numerous merchant vessels were riding at anchor in the harbour. Here they halted seven days, and here Xenias the Arcadian general, and Pasion the Megarian got on board a trader, and having stowed away their most valuable effects, set sail for home; most people explained the act as the outcome of a fit of jealousy, because Cyrus had allowed Clearchus to retain their men, who had deserted to him, in hopes of returning to Hellas instead of marching against the king; when the two had so vanished, a rumour spread that Cyrus was after them with some ships of war, and some hoped the cowards might be caught, others pitied them, if that should be their fate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
      styles: ["@font-face {\n  font-family: \"Sucrose Bold Two\";\n  src: url(\"/assets/yannbf/fonts/sucrose.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"IM Fell French Canon Pro\";\n  src: url(\"/assets/yannbf/fonts/im-fell-french-canon-pro.woff2\") format(\"woff2\");\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/yannbf/img/blog/mountain-range.jpg\");\n  padding-top: 61.73333333%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-family: \"Sucrose Bold Two\";\n  overflow: hidden;\n}\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 45.8%;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  font-size: 12vw;\n  line-height: 0.8;\n  margin-top: 15%;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 8.75vw;\n}\nmain[_ngcontent-%COMP%] {\n  background: #fff;\n  position: relative;\n  border: 1px solid #fff;\n  font-family: \"IM Fell French Canon Pro\";\n  font-size: 1.4rem;\n  padding: 2rem 25%;\n  line-height: 1.6;\n}\n@media all and (max-width: 400px) {\n  main[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9ibG9nLXBvc3QvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbWlzY2VsbGFuZW91c1xcYmxvZy1wb3N0XFxibG9nLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL2Jsb2ctcG9zdC9ibG9nLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSw4REFBQTtBQ0NKO0FEQ0U7RUFDRSx1Q0FBQTtFQUNBLCtFQUFBO0FDQ0o7QURDRTtFQUNFLHNCQUFBO0FDQ0o7QURDRTtFQUNFLFNBQUE7QUNFSjtBREFFO0VBQ0UsbUVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURERTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDSUo7QURGRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNNSjtBREpFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBRExFO0VBQ0U7SUFDRSxhQUFBO0VDUUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvYmxvZy1wb3N0L2Jsb2ctcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU3Vjcm9zZSBCb2xkIFR3byc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy95YW5uYmYvZm9udHMvc3Vjcm9zZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0lNIEZlbGwgRnJlbmNoIENhbm9uIFBybyc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy95YW5uYmYvZm9udHMvaW0tZmVsbC1mcmVuY2gtY2Fub24tcHJvLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG4gIH1cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3lhbm5iZi9pbWcvYmxvZy9tb3VudGFpbi1yYW5nZS5qcGcnKTtcclxuICAgIHBhZGRpbmctdG9wOiA2MS43MzMzMzMzMyU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU3Vjcm9zZSBCb2xkIFR3byc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBoZWFkZXIgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDQ1LjglO1xyXG4gIH1cclxuICBoZWFkZXIgaDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDEydnc7XHJcbiAgICBsaW5lLWhlaWdodDogLjg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGhlYWRlciBoMSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA4Ljc1dnc7XHJcbiAgfVxyXG4gIG1haW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ0lNIEZlbGwgRnJlbmNoIENhbm9uIFBybyc7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMjUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB9XHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIG1haW4ge1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG4gIH0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3Vjcm9zZSBCb2xkIFR3b1wiO1xuICBzcmM6IHVybChcIi9hc3NldHMveWFubmJmL2ZvbnRzL3N1Y3Jvc2Uud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSU0gRmVsbCBGcmVuY2ggQ2Fub24gUHJvXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy95YW5uYmYvZm9udHMvaW0tZmVsbC1mcmVuY2gtY2Fub24tcHJvLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMveWFubmJmL2ltZy9ibG9nL21vdW50YWluLXJhbmdlLmpwZ1wiKTtcbiAgcGFkZGluZy10b3A6IDYxLjczMzMzMzMzJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IFwiU3Vjcm9zZSBCb2xkIFR3b1wiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5oZWFkZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDUuOCU7XG59XG5cbmhlYWRlciBoMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAycmVtO1xuICByaWdodDogMnJlbTtcbiAgZm9udC1zaXplOiAxMnZ3O1xuICBsaW5lLWhlaWdodDogMC44O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4Ljc1dnc7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIklNIEZlbGwgRnJlbmNoIENhbm9uIFByb1wiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMnJlbSAyNSU7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-post',
          templateUrl: './blog-post.page.html',
          styleUrls: ['./blog-post.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-blog-post-blog-post-module-es5.js.map