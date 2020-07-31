(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-pricing-pricing-module"], {
    /***/
    "./node_modules/@iconify/icons-ic/twotone-mail.js":
    /*!********************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-mail.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneMailJs(module, exports) {
      var data = {
        "body": "<path opacity=\".3\" d=\"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z\" fill=\"currentColor\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    },

    /***/
    "./src/app/pages/pages/pricing/pricing-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/pages/pricing/pricing-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PricingRoutingModule */

    /***/
    function srcAppPagesPagesPricingPricingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingRoutingModule", function () {
        return PricingRoutingModule;
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


      var _pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pricing.component */
      "./src/app/pages/pages/pricing/pricing.component.ts");

      var routes = [{
        path: '',
        component: _pricing_component__WEBPACK_IMPORTED_MODULE_2__["PricingComponent"]
      }];

      var PricingRoutingModule = function PricingRoutingModule() {
        _classCallCheck(this, PricingRoutingModule);
      };

      PricingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PricingRoutingModule
      });
      PricingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PricingRoutingModule_Factory(t) {
          return new (t || PricingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PricingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingRoutingModule, [{
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
    "./src/app/pages/pages/pricing/pricing.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/pages/pricing/pricing.component.ts ***!
      \**********************************************************/

    /*! exports provided: PricingComponent */

    /***/
    function srcAppPagesPagesPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
        return PricingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-beenhere */
      "./node_modules/@iconify/icons-ic/twotone-beenhere.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-stars */
      "./node_modules/@iconify/icons-ic/twotone-stars.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-business-center */
      "./node_modules/@iconify/icons-ic/twotone-business-center.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-phone-in-talk */
      "./node_modules/@iconify/icons-ic/twotone-phone-in-talk.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-mail */
      "./node_modules/@iconify/icons-ic/twotone-mail.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-description */
      "./node_modules/@iconify/icons-ic/twotone-description.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-done-all */
      "./node_modules/@iconify/icons-ic/twotone-done-all.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../@vex/animations/stagger.animation */
      "./src/@vex/animations/stagger.animation.ts");
      /* harmony import */


      var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../@vex/animations/fade-in-up.animation */
      "./src/@vex/animations/fade-in-up.animation.ts");
      /* harmony import */


      var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../@vex/animations/scale-in.animation */
      "./src/@vex/animations/scale-in.animation.ts");
      /* harmony import */


      var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../@vex/animations/fade-in-right.animation */
      "./src/@vex/animations/fade-in-right.animation.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../@vex/directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function PricingComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 51);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r1.icDoneAll);
        }
      }

      function PricingComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Personal Informtion");
        }
      }

      function PricingComponent_ng_template_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Images");
        }
      }

      var PricingComponent = /*#__PURE__*/function () {
        function PricingComponent(fb, snackbar) {
          _classCallCheck(this, PricingComponent);

          this.fb = fb;
          this.snackbar = snackbar;
          this.icBeenhere = _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1___default.a;
          this.icStars = _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2___default.a;
          this.icBusinessCenter = _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3___default.a;
          this.icPhoneInTalk = _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_4___default.a;
          this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5___default.a;
          this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6___default.a;
          this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_7___default.a;
        }

        _createClass(PricingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.accountFormGroup = this.fb.group({
              firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              middleName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              sreetHouseNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              purok: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              baranggay: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              municipality: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              province: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              birthDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              residenceType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              contact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            this.snackbar.open('Hooray! You successfully created your account.', null, {
              duration: 5000
            });
          }
        }]);

        return PricingComponent;
      }();

      PricingComponent.ɵfac = function PricingComponent_Factory(t) {
        return new (t || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]));
      };

      PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PricingComponent,
        selectors: [["vex-pricing"]],
        decls: 135,
        vars: 11,
        consts: [["vexContainer", "", 1, "p-gutter"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "mb-4"], [1, "w-10", "h-10", "rounded-full", "text-primary", "mr-3", "flex", "items-center", "justify-center", "bg-primary-light"], ["height", "20px", "width", "20px", 3, "icon"], [1, "block"], [1, "card", "overflow-hidden"], [3, "linear"], ["stepper", "matHorizontalStepper"], ["matStepperIcon", "edit"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "title", "m-0"], [1, "subheading-1"], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "mt-4"], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "24px"], ["fxFlex", "auto"], ["formControlName", "firstName", "matInput", "", "required", ""], ["formControlName", "middleName", "matInput", "", "required", ""], ["formControlName", "lastName", "matInput", "", "required", ""], ["formControlName", "sreetHouseNo", "matInput", "", "required", ""], ["formControlName", "purok", "matInput", "", "required", ""], ["formControlName", "baranggay", "matInput", "", "required", ""], ["formControlName", "municipality", "matInput", "", "required", ""], ["formControlName", "province", "matInput", "", "required", ""], ["required", "", 1, "flex-auto"], ["formControlName", "gender"], ["value", "Male"], ["value", "Female"], [1, "sm:ml-6", "flex-auto"], ["formControlName", "status", "required", ""], ["value", "Single"], ["value", "Married"], ["value", "Separated"], ["value", "Single Parent"], [1, "flex-auto"], ["matInput", "", "type", "date", "formControlName", "birthDate", "required", ""], ["matInput", "", "formControlName", "employer"], ["formControlName", "residenceType", "required", ""], ["matPrefix", "", 1, "mr-3"], ["matInput", "", "formControlName", "contact", "required", ""], ["matInput", "", "formControlName", "email"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px", 1, "actions"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled"], ["layout-margin", "", "layout-padding", ""], ["id", "input-file-portrait", "type", "file", 1, "ng-hide"], ["for", "input-file-id", 1, "md-button", "md-raised", "md-primary"], ["id", "input-file-id", "multiple", "", "type", "file", 1, "ng-hide"], ["matInput", ""], ["color", "primary", "mat-button", "", "matStepperPrevious", "", "type", "button"], ["color", "primary", "mat-raised-button", "", "matStepperNext", ""], [3, "icIcon"]],
        template: function PricingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ic-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Personal Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-horizontal-stepper", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PricingComponent_ng_template_9_Template, 1, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PricingComponent_ng_template_12_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Personal Informtion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fill in Necessary Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Middle Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Street/House No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Purok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Baranggay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Municipality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Province");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Married");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Separated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Single Parent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Birth Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Employer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Residence Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-select", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Digos Resident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Non Digos Resident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "mat-icon", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " NEXT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-step", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, PricingComponent_ng_template_104_Template, 1, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Upload Necessary Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Portrait");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Valid Employment/Government ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-form-field", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Proof of Identity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "mat-icon", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Choose Files for Proof of Identity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "PREVIOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " CREATE ACCOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleIn", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.accountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.accountFormGroup.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.householdMemberFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.householdMemberFormGroup);
          }
        },
        directives: [_vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_14__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperPrevious"]],
        styles: [".header[_ngcontent-%COMP%] {\n  background-color: var(--background-base);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/illustrations/it_support.svg\");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: 250px;\n  padding-bottom: 250px;\n}\n\n@media (min-width: 960px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSw2NUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlFQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2U2ZTZlNicgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTZlNmU2JyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nNScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaWxsdXN0cmF0aW9ucy9pdF9zdXBwb3J0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxufSJdfQ== */"],
        data: {
          animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_11__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInRight400ms"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-pricing',
            templateUrl: './pricing.component.html',
            styleUrls: ['./pricing.component.scss'],
            animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_11__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInRight400ms"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/pages/pricing/pricing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/pages/pricing/pricing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PricingModule */

    /***/
    function srcAppPagesPagesPricingPricingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingModule", function () {
        return PricingModule;
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


      var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pricing-routing.module */
      "./src/app/pages/pages/pricing/pricing-routing.module.ts");
      /* harmony import */


      var _pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pricing.component */
      "./src/app/pages/pages/pricing/pricing.component.ts");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _ui_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../ui/forms/form-wizard/form-wizard-routing.module */
      "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts");
      /* harmony import */


      var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */
      "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
      /* harmony import */


      var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../@vex/directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");
      /* harmony import */


      var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

      var PricingModule = function PricingModule() {
        _classCallCheck(this, PricingModule);
      };

      PricingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PricingModule
      });
      PricingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PricingModule_Factory(t) {
          return new (t || PricingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PricingRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _ui_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_13__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_16__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PricingModule, {
          declarations: [_pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PricingRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _ui_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_13__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_16__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PricingRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _ui_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_13__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_16__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_15__["ContainerModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-pages-pricing-pricing-module-es5.js.map