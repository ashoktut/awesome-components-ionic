function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-reactive-list-label-reactive-list-label-module"], {
  /***/
  "./src/app/pages/yannbf/components/lists/reactive-list-label/list-data.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/reactive-list-label/list-data.ts ***!
    \********************************************************************************/

  /*! exports provided: LIST_DATA */

  /***/
  function srcAppPagesYannbfComponentsListsReactiveListLabelListDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIST_DATA", function () {
      return LIST_DATA;
    });

    var LIST_DATA = [{
      productName: "Beneath a Scarlet Sky: A Novel",
      author: 'Mark Sullivan',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/beneath _scarlet.jpg',
      category: 'Literature & Fiction',
      price: 5.99
    }, {
      productName: "The Orphan's Tale: A Novel",
      author: 'Pam Jenoff',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/the_orphan_tale.jpg',
      category: 'Literature & Fiction',
      price: 10.37
    }, {
      productName: 'All the Light We Cannot See: A Novel',
      author: 'Anthony Doerr',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/all_light_we_cannot_see.jpeg',
      category: 'Literature & Fiction',
      price: 12.99
    }, {
      productName: 'Rules of Civility: A Novel',
      author: 'Rules of Civility: A Novel',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/rules_civility.jpg',
      category: 'Literature & Fiction',
      price: 11.79
    }, {
      productName: 'The Glass Castle: A Memoir',
      author: 'Jeannette Walls',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/the_glass_castle.jpg',
      category: 'Biographies & Memoirs',
      price: 5.14
    }, {
      productName: 'Born a Crime: Stories from a South African Childhood',
      author: 'Trevor Noah',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/born_a_crime.jpg',
      category: 'Biographies & Memoirs',
      price: 6.0
    }, {
      productName: 'Al Franken, Giant of the Senate',
      author: 'Al Franken',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/giant_of_the_senate.jpg',
      category: 'Biographies & Memoirs',
      price: 6.39
    }, {
      productName: 'Pandemic (The Extinction Files Book 1)',
      author: 'A.G. Riddle',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/pandemic.jpg',
      category: 'Biographies & Memoirs',
      price: 5.47
    }, {
      productName: 'Origin: A Novel',
      author: 'Dan Brown',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/origin.jpg',
      category: 'Suspense',
      price: 10.99
    }, {
      productName: 'The Rooster Bar',
      author: 'John Grisham',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/the_rooster_bar.jpg',
      category: 'Suspense',
      price: 10.99
    }, {
      productName: 'The Life We Bury',
      author: 'Dan Brown',
      pictureProduct: './assets/yannbf/img/reactive-list-labels/the_life_we_bury.jpg',
      category: 'Suspense',
      price: 10.99
    }];
    /***/
  },

  /***/
  "./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ReactiveListLabelPageRoutingModule */

  /***/
  function srcAppPagesYannbfComponentsListsReactiveListLabelReactiveListLabelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveListLabelPageRoutingModule", function () {
      return ReactiveListLabelPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _reactive_list_label_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reactive-list-label.page */
    "./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label.page.ts");

    var routes = [{
      path: '',
      component: _reactive_list_label_page__WEBPACK_IMPORTED_MODULE_2__["ReactiveListLabelPage"]
    }];

    var ReactiveListLabelPageRoutingModule = function ReactiveListLabelPageRoutingModule() {
      _classCallCheck(this, ReactiveListLabelPageRoutingModule);
    };

    ReactiveListLabelPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReactiveListLabelPageRoutingModule
    });
    ReactiveListLabelPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReactiveListLabelPageRoutingModule_Factory(t) {
        return new (t || ReactiveListLabelPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveListLabelPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveListLabelPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ReactiveListLabelPageModule */

  /***/
  function srcAppPagesYannbfComponentsListsReactiveListLabelReactiveListLabelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveListLabelPageModule", function () {
      return ReactiveListLabelPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _reactive_list_label_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reactive-list-label-routing.module */
    "./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label-routing.module.ts");
    /* harmony import */


    var _reactive_list_label_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reactive-list-label.page */
    "./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label.page.ts");

    var ReactiveListLabelPageModule = function ReactiveListLabelPageModule() {
      _classCallCheck(this, ReactiveListLabelPageModule);
    };

    ReactiveListLabelPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReactiveListLabelPageModule
    });
    ReactiveListLabelPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReactiveListLabelPageModule_Factory(t) {
        return new (t || ReactiveListLabelPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _reactive_list_label_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReactiveListLabelPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveListLabelPageModule, {
        declarations: [_reactive_list_label_page__WEBPACK_IMPORTED_MODULE_5__["ReactiveListLabelPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _reactive_list_label_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReactiveListLabelPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveListLabelPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _reactive_list_label_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReactiveListLabelPageRoutingModule"]],
          declarations: [_reactive_list_label_page__WEBPACK_IMPORTED_MODULE_5__["ReactiveListLabelPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label.page.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/reactive-list-label/reactive-list-label.page.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ReactiveListLabelPage */

  /***/
  function srcAppPagesYannbfComponentsListsReactiveListLabelReactiveListLabelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveListLabelPage", function () {
      return ReactiveListLabelPage;
    });
    /* harmony import */


    var _list_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./list-data */
    "./src/app/pages/yannbf/components/lists/reactive-list-label/list-data.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReactiveListLabelPage_ion_card_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visible", function ReactiveListLabelPage_ion_card_11_Template_ion_card_visible_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var book_r2 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.itemIsVisible($event, book_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", book_r2.pictureProduct, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", book_r2.productName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", book_r2.author, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", book_r2.category, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 5, book_r2.price, "USD"), "");
      }
    }

    var ReactiveListLabelPage = /*#__PURE__*/function () {
      function ReactiveListLabelPage(ngZone) {
        _classCallCheck(this, ReactiveListLabelPage);

        this.ngZone = ngZone;
        this.dataList = _list_data__WEBPACK_IMPORTED_MODULE_0__["LIST_DATA"];
        this.currentCategory = this.dataList[0].category;
      }

      _createClass(ReactiveListLabelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll(event) {
          console.log(event); // this.itemIsVisible(event)
        }
      }, {
        key: "itemIsVisible",
        value: function itemIsVisible($event, book) {
          console.log(book, $event); // book.visible = $event;

          this.setCategory();
        }
      }, {
        key: "setCategory",
        value: function setCategory() {
          var _this = this;

          var obj = {};
          var qtdVisibleCategory = 0;
          var higherCategory = '';
          this.dataList.filter(function (bk) {
            return bk.visible;
          }).forEach(function (bk) {
            return obj[bk.category] = obj[bk.category] ? obj[bk.category] + 1 : 1;
          });

          for (var key in obj) {
            if (obj[key] > qtdVisibleCategory) {
              qtdVisibleCategory = obj[key];
              higherCategory = key;
            }
          }

          this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
              _this.currentCategory = higherCategory;
            });
          });
        }
      }]);

      return ReactiveListLabelPage;
    }();

    ReactiveListLabelPage.ɵfac = function ReactiveListLabelPage_Factory(t) {
      return new (t || ReactiveListLabelPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    ReactiveListLabelPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ReactiveListLabelPage,
      selectors: [["app-reactive-list-label"]],
      decls: 12,
      vars: 3,
      consts: [["slot", "start"], ["defaultHref", "/"], [3, "scrollEvents", "ionScroll"], ["content", ""], ["vertical", "top", "horizontal", "center", "slot", "fixed"], [1, "fab-reactive-list"], [3, "visible", 4, "ngFor", "ngForOf"], [3, "visible"], ["card", ""], [3, "src"]],
      template: function ReactiveListLabelPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reactive List Label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function ReactiveListLabelPage_Template_ion_content_ionScroll_6_listener($event) {
            return ctx.scroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-fab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-fab-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ReactiveListLabelPage_ion_card_11_Template, 11, 8, "ion-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentCategory, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataList);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".fab-reactive-list[_ngcontent-%COMP%] {\n  --border-radius: 10%;\n  width: 12em;\n  --background: #f4f4f4;\n  --color: #387ef5;\n}\n\nion-fab[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: -20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbGlzdHMvcmVhY3RpdmUtbGlzdC1sYWJlbC9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsaXN0c1xccmVhY3RpdmUtbGlzdC1sYWJlbFxccmVhY3RpdmUtbGlzdC1sYWJlbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL3JlYWN0aXZlLWxpc3QtbGFiZWwvcmVhY3RpdmUtbGlzdC1sYWJlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9saXN0cy9yZWFjdGl2ZS1saXN0LWxhYmVsL3JlYWN0aXZlLWxpc3QtbGFiZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1yZWFjdGl2ZS1saXN0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB3aWR0aDogMTJlbTtcclxuICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgLS1jb2xvcjogIzM4N2VmNTtcclxufVxyXG5pb24tZmFie1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjAlO1xyXG59XHJcblxyXG4iLCIuZmFiLXJlYWN0aXZlLWxpc3Qge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwJTtcbiAgd2lkdGg6IDEyZW07XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgLS1jb2xvcjogIzM4N2VmNTtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReactiveListLabelPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-reactive-list-label',
          templateUrl: './reactive-list-label.page.html',
          styleUrls: ['./reactive-list-label.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-lists-reactive-list-label-reactive-list-label-module-es5.js.map