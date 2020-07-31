(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module"], {
    /***/
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneMoreVertJs(module, exports) {
      var data = {
        "body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed-routing.module.ts":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed-routing.module.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: PageLayoutSimpleTabbedRoutingModule */

    /***/
    function srcAppPagesUiPageLayoutsSimplePageLayoutSimpleTabbedPageLayoutSimpleTabbedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleTabbedRoutingModule", function () {
        return PageLayoutSimpleTabbedRoutingModule;
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


      var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed.component */
      "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts");

      var routes = [{
        path: '',
        component: _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedComponent"]
      }];

      var PageLayoutSimpleTabbedRoutingModule = function PageLayoutSimpleTabbedRoutingModule() {
        _classCallCheck(this, PageLayoutSimpleTabbedRoutingModule);
      };

      PageLayoutSimpleTabbedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutSimpleTabbedRoutingModule
      });
      PageLayoutSimpleTabbedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutSimpleTabbedRoutingModule_Factory(t) {
          return new (t || PageLayoutSimpleTabbedRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleTabbedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleTabbedRoutingModule, [{
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
    "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: PageLayoutSimpleTabbedComponent */

    /***/
    function srcAppPagesUiPageLayoutsSimplePageLayoutSimpleTabbedPageLayoutSimpleTabbedComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleTabbedComponent", function () {
        return PageLayoutSimpleTabbedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-more-vert */
      "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.component */
      "./src/@vex/components/page-layout/page-layout.component.ts");
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
      "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */
      "./src/@vex/components/page-layout/page-layout-content.directive.ts");
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.component */
      "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.component.ts");

      var _c0 = function _c0() {
        return ["Page Layouts", "Simple", "Tabbed"];
      };

      var PageLayoutSimpleTabbedComponent = /*#__PURE__*/function () {
        function PageLayoutSimpleTabbedComponent() {
          _classCallCheck(this, PageLayoutSimpleTabbedComponent);

          this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1___default.a;
        }

        _createClass(PageLayoutSimpleTabbedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageLayoutSimpleTabbedComponent;
      }();

      PageLayoutSimpleTabbedComponent.ɵfac = function PageLayoutSimpleTabbedComponent_Factory(t) {
        return new (t || PageLayoutSimpleTabbedComponent)();
      };

      PageLayoutSimpleTabbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageLayoutSimpleTabbedComponent,
        selectors: [["vex-page-layout-simple-tabbed"]],
        decls: 16,
        vars: 3,
        consts: [["current", "Simple - Tabbed"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], [3, "icIcon"], ["vexContainer", "", 1, "vex-tabs", "p-0"], ["label", "Main Tab"], [1, "p-6"], ["label", "Side Tab"], ["label", "Extra Tab"]],
        template: function PageLayoutSimpleTabbedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-breadcrumbs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "vex-page-layout-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "vex-page-layout-demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMoreVert);
          }
        },
        directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconDirective"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__["PageLayoutContentDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_10__["ContainerDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_12__["PageLayoutDemoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9zaW1wbGUvcGFnZS1sYXlvdXQtc2ltcGxlLXRhYmJlZC9wYWdlLWxheW91dC1zaW1wbGUtdGFiYmVkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleTabbedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-page-layout-simple-tabbed',
            templateUrl: './page-layout-simple-tabbed.component.html',
            styleUrls: ['./page-layout-simple-tabbed.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts":
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts ***!
      \************************************************************************************************************/

    /*! exports provided: PageLayoutSimpleTabbedModule */

    /***/
    function srcAppPagesUiPageLayoutsSimplePageLayoutSimpleTabbedPageLayoutSimpleTabbedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleTabbedModule", function () {
        return PageLayoutSimpleTabbedModule;
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


      var _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed-routing.module */
      "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed-routing.module.ts");
      /* harmony import */


      var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed.component */
      "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts");
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
      /* harmony import */


      var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../@vex/components/page-layout/page-layout.module */
      "./src/@vex/components/page-layout/page-layout.module.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../page-layout-demo/page-layout-demo.module */
      "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../@vex/directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var PageLayoutSimpleTabbedModule = function PageLayoutSimpleTabbedModule() {
        _classCallCheck(this, PageLayoutSimpleTabbedModule);
      };

      PageLayoutSimpleTabbedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutSimpleTabbedModule
      });
      PageLayoutSimpleTabbedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutSimpleTabbedModule_Factory(t) {
          return new (t || PageLayoutSimpleTabbedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedRoutingModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleTabbedModule, {
          declarations: [_page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleTabbedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedRoutingModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleTabbedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleTabbedComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedRoutingModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module-es5.js.map