(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@angular-devkit/build-angular/node_modules/webpack/buildin/global.js":
    /*!***********************************!*\
      !*** (webpack)/buildin/global.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function node_modulesAngularDevkitBuildAngularNode_modulesWebpackBuildinGlobalJs(module, exports) {
      var g; // This works in non-strict mode

      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      } // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}


      module.exports = g;
      /***/
    },

    /***/
    "./src/@vex/animations/dropdown.animation.ts":
    /*!***************************************************!*\
      !*** ./src/@vex/animations/dropdown.animation.ts ***!
      \***************************************************/

    /*! exports provided: dropdownAnimation */

    /***/
    function srcVexAnimationsDropdownAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dropdownAnimation", function () {
        return dropdownAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var dropdownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropdown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(.35, 0, .25, 1)'))]);
      /***/
    },

    /***/
    "./src/@vex/animations/popover.animation.ts":
    /*!**************************************************!*\
      !*** ./src/@vex/animations/popover.animation.ts ***!
      \**************************************************/

    /*! exports provided: popoverAnimation */

    /***/
    function srcVexAnimationsPopoverAnimationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "popoverAnimation", function () {
        return popoverAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var popoverAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPopover', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0.6)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }))])]);
      /***/
    },

    /***/
    "./src/@vex/components/config-panel/color-variables.ts":
    /*!*************************************************************!*\
      !*** ./src/@vex/components/config-panel/color-variables.ts ***!
      \*************************************************************/

    /*! exports provided: colorVariables */

    /***/
    function srcVexComponentsConfigPanelColorVariablesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorVariables", function () {
        return colorVariables;
      });

      var colorVariables = {
        blue: {
          light: 'rgba(92, 119, 255, .1)',
          "default": 'rgb(92, 119, 255)',
          contrast: 'rgb(255, 255, 255)'
        },
        gray: {
          light: 'rgba(158, 158, 158, 0.1)',
          "default": 'rgb(158, 158, 158)',
          contrast: 'rgb(255, 255, 255)'
        },
        red: {
          light: 'rgba(244, 67, 54, 0.1)',
          "default": 'rgb(244, 67, 54)',
          contrast: 'rgb(255, 255, 255)'
        },
        orange: {
          light: 'rgba(255, 152, 0, 0.1)',
          "default": 'rgb(255, 152, 0)',
          contrast: 'rgb(0, 0, 0)'
        },
        'deep-orange': {
          light: 'rgba(255, 87, 34, 0.1)',
          "default": 'rgb(255, 87, 34)',
          contrast: 'rgb(255, 255, 255)'
        },
        amber: {
          light: 'rgba(255, 193, 7, 0.1)',
          "default": 'rgb(255, 193, 7)',
          contrast: 'rgb(0, 0, 0)'
        },
        green: {
          light: 'rgba(76, 175, 80, 0.1)',
          "default": 'rgb(76, 175, 80)',
          contrast: 'rgb(255, 255, 255)'
        },
        teal: {
          light: 'rgba(0, 150, 136, 0.1)',
          "default": 'rgb(0, 150, 136)',
          contrast: 'rgb(255, 255, 255)'
        },
        cyan: {
          light: 'rgba(0, 188, 212, 0.1)',
          "default": 'rgb(0, 188, 212)',
          contrast: 'rgb(255, 255, 255)'
        },
        purple: {
          light: 'rgba(156, 39, 176, 0.1)',
          "default": 'rgb(156, 39, 176)',
          contrast: 'rgb(255, 255, 255)'
        },
        'deep-purple': {
          light: 'rgba(103, 58, 183, 0.1)',
          "default": 'rgb(103, 58, 183)',
          contrast: 'rgb(255, 255, 255)'
        },
        pink: {
          light: 'rgba(233, 30, 99, 0.1)',
          "default": 'rgb(233, 30, 99)',
          contrast: 'rgb(255, 255, 255)'
        }
      };
      /***/
    },

    /***/
    "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ConfigPanelToggleComponent */

    /***/
    function srcVexComponentsConfigPanelConfigPanelToggleConfigPanelToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigPanelToggleComponent", function () {
        return ConfigPanelToggleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ConfigPanelToggleComponent = /*#__PURE__*/function () {
        function ConfigPanelToggleComponent() {
          _classCallCheck(this, ConfigPanelToggleComponent);

          this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1___default.a;
        }

        _createClass(ConfigPanelToggleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfigPanelToggleComponent;
      }();

      ConfigPanelToggleComponent.ɵfac = function ConfigPanelToggleComponent_Factory(t) {
        return new (t || ConfigPanelToggleComponent)();
      };

      ConfigPanelToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfigPanelToggleComponent,
        selectors: [["vex-config-panel-toggle"]],
        outputs: {
          openConfig: "openConfig"
        },
        decls: 2,
        vars: 1,
        consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "hidden", "config-panel-toggle", 3, "click"], [3, "icIcon"]],
        template: function ConfigPanelToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelToggleComponent_Template_button_click_0_listener() {
              return ctx.openConfig.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSettings);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconDirective"]],
        styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  bottom: var(--padding);\n  position: fixed;\n  right: var(--padding);\n  z-index: 100;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: var(--padding);\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC10b2dnbGUvY29uZmlnLXBhbmVsLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9jb25maWctcGFuZWwvY29uZmlnLXBhbmVsLXRvZ2dsZS9jb25maWctcGFuZWwtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xuICBib3R0b206IHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgei1pbmRleDogMTAwO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHJpZ2h0OiB1bnNldDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigPanelToggleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-config-panel-toggle',
            templateUrl: './config-panel-toggle.component.html',
            styleUrls: ['./config-panel-toggle.component.scss']
          }]
        }], function () {
          return [];
        }, {
          openConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/config-panel/config-panel.component.ts":
    /*!********************************************************************!*\
      !*** ./src/@vex/components/config-panel/config-panel.component.ts ***!
      \********************************************************************/

    /*! exports provided: ConfigPanelComponent */

    /***/
    function srcVexComponentsConfigPanelConfigPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigPanelComponent", function () {
        return ConfigPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-check */
      "./node_modules/@iconify/icons-ic/twotone-check.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/style.service */
      "./src/@vex/services/style.service.ts");
      /* harmony import */


      var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");
      /* harmony import */


      var _color_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./color-variables */
      "./src/@vex/components/config-panel/color-variables.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-close */
      "./node_modules/@iconify/icons-ic/twotone-close.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function ConfigPanelComponent_div_0_div_8_ic_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 18);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.icCheck);
        }
      }

      function ConfigPanelComponent_div_0_div_8_ic_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 18);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.icClose);
        }
      }

      function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var selectedStyle_r5 = ctx.ngIf;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return selectedStyle_r5 === ctx_r8.Style.dark ? ctx_r8.disableDarkMode() : ctx_r8.enableDarkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_ic_icon_2_Template, 1, 1, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigPanelComponent_div_0_div_8_ic_icon_3_Template, 1, 1, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DARK MODE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selectedStyle_r5 = ctx.ngIf;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedStyle_r5 === ctx_r2.Style.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedStyle_r5 !== ctx_r2.Style.dark);
        }
      }

      function ConfigPanelComponent_div_0_div_13_ic_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 18);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.icCheck);
        }
      }

      function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var color_r10 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.selectColor(color_r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_13_ic_icon_2_Template, 1, 1, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r10.value.light)("color", color_r10.value["default"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r3.isSelectedColor(color_r10.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r10.value["default"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isSelectedColor(color_r10.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, color_r10.key));
        }
      }

      function ConfigPanelComponent_div_0_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var config_r14 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.setConfig(config_r14.id, ctx_r16.Style.light);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LIGHT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var config_r14 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.setConfig(config_r14.id, ctx_r18.Style["default"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DEFAULT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var config_r14 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.setConfig(config_r14.id, ctx_r19.Style.dark);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DARK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var config_r14 = ctx.$implicit;
          var first_r15 = ctx.first;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mt-6", !first_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", config_r14.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](config_r14.name);
        }
      }

      function ConfigPanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ic-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "THEME BASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "THEME COLORS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 6, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "THEME STYLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ConfigPanelComponent_div_0_div_18_Template, 12, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LAYOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ORIENTATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.layoutRTLChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "TOOLBAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "POSITION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toolbarPositionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FOOTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.footerVisibleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Visible ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "POSITION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-radio-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.footerPositionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-radio-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var setting_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r0.selectedStyle$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx_r0.colorVariables));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.configs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 12, ctx_r0.isRTL$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", setting_r1.toolbar.fixed ? "fixed" : "static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", setting_r1.footer.visible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", setting_r1.footer.fixed ? "fixed" : "static");
        }
      }

      var ConfigPanelComponent = /*#__PURE__*/function () {
        function ConfigPanelComponent(configService, styleService, layoutService, document, route) {
          var _this = this;

          _classCallCheck(this, ConfigPanelComponent);

          this.configService = configService;
          this.styleService = styleService;
          this.layoutService = layoutService;
          this.document = document;
          this.route = route;
          this.configs = this.configService.configs;
          this.colorVariables = _color_variables__WEBPACK_IMPORTED_MODULE_7__["colorVariables"];
          this.config$ = this.configService.config$;
          this.activeConfig$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (config) {
            return Object.keys(_this.configService.configs).find(function (key) {
              return _this.configService.configs[key] === config;
            });
          }));
          this.isRTL$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (paramMap) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(paramMap.get('rtl'));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
          this.selectedStyle$ = this.styleService.style$;
          this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default.a;
          this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3___default.a;
          this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
          this.ConfigName = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_6__["ConfigName"];
          this.Style = _services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"];
          this.selectedColor = _color_variables__WEBPACK_IMPORTED_MODULE_7__["colorVariables"].blue;
        }

        _createClass(ConfigPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setConfig",
          value: function setConfig(layout, style) {
            this.configService.setConfig(layout);
            this.styleService.setStyle(style);
          }
        }, {
          key: "selectColor",
          value: function selectColor(color) {
            this.selectedColor = color;

            if (this.document) {
              this.document.documentElement.style.setProperty('--color-primary', color["default"].replace('rgb(', '').replace(')', ''));
              this.document.documentElement.style.setProperty('--color-primary-contrast', color.contrast.replace('rgb(', '').replace(')', ''));
            }
          }
        }, {
          key: "isSelectedColor",
          value: function isSelectedColor(color) {
            return color === this.selectedColor;
          }
        }, {
          key: "enableDarkMode",
          value: function enableDarkMode() {
            this.styleService.setStyle(_services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"].dark);
          }
        }, {
          key: "disableDarkMode",
          value: function disableDarkMode() {
            this.styleService.setStyle(_services_style_service__WEBPACK_IMPORTED_MODULE_5__["Style"]["default"]);
          }
        }, {
          key: "sidenavOpenChange",
          value: function sidenavOpenChange(change) {
            change.checked ? this.layoutService.openSidenav() : this.layoutService.closeSidenav();
          }
        }, {
          key: "layoutRTLChange",
          value: function layoutRTLChange(change) {
            change.checked ? this.layoutService.enableRTL() : this.layoutService.disableRTL();
          }
        }, {
          key: "toolbarPositionChange",
          value: function toolbarPositionChange(change) {
            this.configService.updateConfig({
              toolbar: {
                fixed: change.value === 'fixed'
              }
            });
          }
        }, {
          key: "footerVisibleChange",
          value: function footerVisibleChange(change) {
            this.configService.updateConfig({
              footer: {
                visible: change.checked
              }
            });
          }
        }, {
          key: "footerPositionChange",
          value: function footerPositionChange(change) {
            this.configService.updateConfig({
              footer: {
                fixed: change.value === 'fixed'
              }
            });
          }
        }]);

        return ConfigPanelComponent;
      }();

      ConfigPanelComponent.ɵfac = function ConfigPanelComponent_Factory(t) {
        return new (t || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_style_service__WEBPACK_IMPORTED_MODULE_5__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]));
      };

      ConfigPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfigPanelComponent,
        selectors: [["vex-config-panel"]],
        decls: 2,
        vars: 3,
        consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["inline", "true", 1, "mr-3", 3, "icon"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-contrast-black text-contrast-white", "matRipple", "", 3, "click", 4, "ngIf"], ["class", "vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative", "matRipple", "", 3, "selected", "backgroundColor", "color", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "section-content"], [3, "checked", "change"], ["fxLayout", "column", "fxLayoutGap", "12px", 3, "value", "change"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-contrast-black", "text-contrast-white", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["size", "24px", 3, "icon", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["size", "24px", 3, "icon"], ["matRipple", "", 1, "vex-color-picker", "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", 3, "click"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-8"], [1, "w-full", "block", 3, "src"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "4px", 1, "layout-image-overlay"], ["fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "bg-contrast-white", "text-contrast-black", 3, "click"], ["color", "primary", "fxFlex", "none", "mat-raised-button", "", "type", "button", 3, "click"], ["fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "bg-contrast-black", "text-contrast-white", 3, "click"], [1, "text-center", "body-2", "mt-2"]],
        template: function ConfigPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 52, 14, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.config$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]],
        styles: [".config-panel[_ngcontent-%COMP%] {\n  padding: var(--padding-16) var(--padding);\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: var(--padding);\n}\n\n.section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  margin-bottom: var(--padding-16);\n  padding-bottom: var(--padding-16);\n}\n\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  -webkit-margin-start: var(--padding-12);\n          margin-inline-start: var(--padding-12);\n}\n\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: var(--trans-ease-out);\n  visibility: hidden;\n  width: 100%;\n}\n\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.vex-color-picker[_ngcontent-%COMP%]:hover, .vex-color-picker.selected[_ngcontent-%COMP%] {\n  background: currentColor !important;\n}\n\n.vex-color-picker[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .vex-color-picker[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  -webkit-margin-end: var(--padding-16);\n          margin-inline-end: var(--padding-16);\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n}\n\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--padding-12);\n}\n\n.style-name[_ngcontent-%COMP%] {\n  font: var(--font-body-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7VUFBQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOzs7O0VBSUUsY0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctcGFuZWwge1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTE2KSB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cblxuLnNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZWN0aW9uLWNvbnRlbnQge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLnNlY3Rpb24tY29udGVudCAuc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxheW91dCArIC5sYXlvdXQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmxheW91dC1pbWFnZTpob3ZlciAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5sYXlvdXQtaW1hZ2UgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxheW91dC1pbWFnZSAubGF5b3V0LWltYWdlLW92ZXJsYXkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi52ZXgtY29sb3ItcGlja2VyIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4udmV4LWNvbG9yLXBpY2tlcjpob3ZlciwgLnZleC1jb2xvci1waWNrZXIuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcbn1cblxuLnZleC1jb2xvci1waWNrZXI6aG92ZXIgcCwgLnZleC1jb2xvci1waWNrZXI6aG92ZXIgZGl2LCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCBwLCAudmV4LWNvbG9yLXBpY2tlci5zZWxlY3RlZCBkaXYge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi52ZXgtY29sb3ItcGlja2VyIHAge1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG59XG5cbi5jb2xvciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAzNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctMTYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzNnB4O1xufVxuXG4uY29sb3IubGlnaHQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb2xvci5kYXJrIHtcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29sb3IuZmxhdCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1zbGlkZS10b2dnbGUgKyBtYXQtY2hlY2tib3gsXG5tYXQtY2hlY2tib3ggKyBtYXQtc2xpZGUtdG9nZ2xlLFxubWF0LWNoZWNrYm94ICsgbWF0LWNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uc3R5bGUtbmFtZSB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0yKTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-config-panel',
            templateUrl: './config-panel.component.html',
            styleUrls: ['./config-panel.component.scss']
          }]
        }], function () {
          return [{
            type: _services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]
          }, {
            type: _services_style_service__WEBPACK_IMPORTED_MODULE_5__["StyleService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_11__["LayoutService"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/config-panel/config-panel.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/@vex/components/config-panel/config-panel.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ConfigPanelModule */

    /***/
    function srcVexComponentsConfigPanelConfigPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigPanelModule", function () {
        return ConfigPanelModule;
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


      var _config_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config-panel.component */
      "./src/@vex/components/config-panel/config-panel.component.ts");
      /* harmony import */


      var _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config-panel-toggle/config-panel-toggle.component */
      "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var ConfigPanelModule = function ConfigPanelModule() {
        _classCallCheck(this, ConfigPanelModule);
      };

      ConfigPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConfigPanelModule
      });
      ConfigPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConfigPanelModule_Factory(t) {
          return new (t || ConfigPanelModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigPanelModule, {
          declarations: [_config_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelToggleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"]],
          exports: [_config_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelToggleComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigPanelModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"]],
            declarations: [_config_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelToggleComponent"]],
            exports: [_config_panel_component__WEBPACK_IMPORTED_MODULE_2__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelToggleComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/mega-menu/mega-menu.component.ts":
    /*!**************************************************************!*\
      !*** ./src/@vex/components/mega-menu/mega-menu.component.ts ***!
      \**************************************************************/

    /*! exports provided: MegaMenuComponent */

    /***/
    function srcVexComponentsMegaMenuMegaMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MegaMenuComponent", function () {
        return MegaMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-layers */
      "./node_modules/@iconify/icons-ic/twotone-layers.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assignment */
      "./node_modules/@iconify/icons-ic/twotone-assignment.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-contact-support */
      "./node_modules/@iconify/icons-ic/twotone-contact-support.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-contacts */
      "./node_modules/@iconify/icons-ic/twotone-contacts.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assessment */
      "./node_modules/@iconify/icons-ic/twotone-assessment.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-book */
      "./node_modules/@iconify/icons-ic/twotone-book.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../popover/popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/grid */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      function MegaMenuComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegaMenuComponent_a_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ic-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feature_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", feature_r2.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", feature_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r2.label);
        }
      }

      function MegaMenuComponent_a_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegaMenuComponent_a_19_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", page_r5.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r5.label);
        }
      }

      var _c0 = function _c0() {
        return ["mr-6"];
      };

      var MegaMenuComponent = /*#__PURE__*/function () {
        function MegaMenuComponent(popoverRef) {
          _classCallCheck(this, MegaMenuComponent);

          this.popoverRef = popoverRef;
          this.features = [{
            icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_1___default.a,
            label: 'Dashboard',
            route: '/'
          }, {
            icon: _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_2___default.a,
            label: 'AIO-Table',
            route: '/apps/aio-table'
          }, {
            icon: _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_3___default.a,
            label: 'Help Center',
            route: '/apps/help-center'
          }, {
            icon: _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_4___default.a,
            label: 'Contacts',
            route: '/apps/contacts/grid'
          }, {
            icon: _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_5___default.a,
            label: 'Scrumboard',
            route: '/apps/scrumboard/1'
          }, {
            icon: _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_6___default.a,
            label: 'Documentation',
            route: '/documentation'
          }];
          this.pages = [{
            label: 'All-In-One Table',
            route: '/apps/aio-table'
          }, {
            label: 'Authentication',
            route: '/login'
          }, {
            label: 'Components',
            route: '/ui/components/overview'
          }, {
            label: 'Documentation',
            route: '/documentation'
          }, {
            label: 'FAQ',
            route: '/pages/faq'
          }, {
            label: 'Form Elements',
            route: '/ui/forms/form-elements'
          }, {
            label: 'Form Wizard',
            route: '/ui/forms/form-wizard'
          }, {
            label: 'Guides',
            route: '/pages/guides'
          }, {
            label: 'Help Center',
            route: '/apps/help-center'
          }, {
            label: 'Scrumboard',
            route: '/apps/scrumboard'
          }];
        }

        _createClass(MegaMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.popoverRef.close();
          }
        }]);

        return MegaMenuComponent;
      }();

      MegaMenuComponent.ɵfac = function MegaMenuComponent_Factory(t) {
        return new (t || MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_popover_popover_ref__WEBPACK_IMPORTED_MODULE_7__["PopoverRef"]));
      };

      MegaMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MegaMenuComponent,
        selectors: [["vex-mega-menu"]],
        decls: 20,
        vars: 4,
        consts: [["fxLayout", "row", "fxLayout.lt-md", "column", 1, "card", "overflow-auto", 3, "ngClass.gt-sm"], ["fxFlex", "300px", "fxFlex.lt-md", "auto", 1, "bg-primary", "text-primary-contrast", "p-gutter"], [1, "headline", "mb-4"], [1, "caption"], ["mat-button", "", "type", "button", 1, "border", "border-primary-contrast", "border-solid", "mt-4"], ["fxFlex", "400px", "fxFlex.lt-md", "auto", 1, "p-gutter"], [1, "body-2", "m-0"], ["gdColumns", "1fr 1fr 1fr", "gdGap", "16px", 1, "mt-4"], ["class", "text-dark p-3 text-center hover:bg-hover hover:text-primary trans-ease-out rounded block no-underline", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "350px", "fxFlex.lt-md", "auto", 1, "p-gutter"], ["gdColumns", "1fr 1fr", "gdGap", "16px 48px", 1, "mt-6"], ["class", "text-dark body-1 no-underline hover:text-primary trans-ease-out", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "text-dark", "p-3", "text-center", "hover:bg-hover", "hover:text-primary", "trans-ease-out", "rounded", "block", "no-underline", 3, "routerLink", "click"], ["size", "32px", 1, "text-primary", 3, "icon"], [1, "body-1", "mt-2"], [1, "text-dark", "body-1", "no-underline", "hover:text-primary", "trans-ease-out", 3, "routerLink", "click"]],
        template: function MegaMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mega Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LEARN MORE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FEATURES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MegaMenuComponent_a_14_Template, 4, 3, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PAGES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MegaMenuComponent_a_19_Template, 2, 2, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__["ɵgrid_privateba"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MegaMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-mega-menu',
            templateUrl: './mega-menu.component.html'
          }]
        }], function () {
          return [{
            type: _popover_popover_ref__WEBPACK_IMPORTED_MODULE_7__["PopoverRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/mega-menu/mega-menu.module.ts":
    /*!***********************************************************!*\
      !*** ./src/@vex/components/mega-menu/mega-menu.module.ts ***!
      \***********************************************************/

    /*! exports provided: MegaMenuModule */

    /***/
    function srcVexComponentsMegaMenuMegaMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MegaMenuModule", function () {
        return MegaMenuModule;
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


      var _mega_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mega-menu.component */
      "./src/@vex/components/mega-menu/mega-menu.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var MegaMenuModule = function MegaMenuModule() {
        _classCallCheck(this, MegaMenuModule);
      };

      MegaMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MegaMenuModule
      });
      MegaMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MegaMenuModule_Factory(t) {
          return new (t || MegaMenuModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MegaMenuModule, {
          declarations: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_2__["MegaMenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          exports: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_2__["MegaMenuComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MegaMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_2__["MegaMenuComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            exports: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_2__["MegaMenuComponent"]],
            entryComponents: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_2__["MegaMenuComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/navigation-item/navigation-item.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/@vex/components/navigation-item/navigation-item.component.ts ***!
      \**************************************************************************/

    /*! exports provided: NavigationItemComponent */

    /***/
    function srcVexComponentsNavigationItemNavigationItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItemComponent", function () {
        return NavigationItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var _c0 = function _c0(a0, a1) {
        return {
          "bg-primary text-primary-contrast": a0,
          "navigation-color": a1
        };
      };

      function NavigationItemComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r0.isActive$)(ctx_r0.item));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx_r0.isActive$)(ctx_r0.item), !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx_r0.isActive$)(ctx_r0.item)))("routerLink", ctx_r0.item.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "\n");
        }
      }

      function NavigationItemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationItemComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.item.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r1.isActive$)(ctx_r1.item));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.item.label, "\n");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "text-primary": a0
        };
      };

      function NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r10.isActive$)(child_r9)))("routerLink", child_r9.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", child_r9.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r9.label);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return child_r9.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", child_r9.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r9.label);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          item: a0
        };
      };

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, item_r36))("ngTemplateOutlet", _r7);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var child_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r34)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r33.isActive$)(child_r32)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r32.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r32.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var child_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, child_r32))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isDropdown(child_r32));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r29.isActive$)(item_r28)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, item_r28))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isDropdown(item_r28));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var child_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r26)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r25.isActive$)(child_r24)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r24.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r24.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var child_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, child_r24))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isDropdown(child_r24));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 6, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r22)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r21.isActive$)(item_r20)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r20.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template, 7, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, item_r20))("ngTemplateOutlet", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isDropdown(item_r20));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 6, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template, 3, 5, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r18)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r12.isActive$)(child_r9)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", child_r9.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r9.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r9.children);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template, 5, 8, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template, 4, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template, 9, 9, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var child_r9 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && !ctx_r6.isFunction(child_r9.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && ctx_r6.isFunction(child_r9.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isDropdown(child_r9));
        }
      }

      function NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r43.isActive$)(item_r42)))("routerLink", item_r42.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42.label);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

            return item_r42.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r44.isActive$)(item_r42)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42.label);
        }
      }

      function NavigationItemComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template, 3, 7, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template, 3, 6, "div", 22);
        }

        if (rf & 2) {
          var item_r42 = ctx.item;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && !ctx_r8.isFunction(item_r42.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && ctx_r8.isFunction(item_r42.route));
        }
      }

      function NavigationItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_Template, 4, 3, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavigationItemComponent_ng_container_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r2.isActive$)(ctx_r2.item));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r2.isActive$)(ctx_r2.item), !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r2.isActive$)(ctx_r2.item)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
        }
      }

      var NavigationItemComponent = /*#__PURE__*/function () {
        function NavigationItemComponent(navigationService, router) {
          var _this2 = this;

          _classCallCheck(this, NavigationItemComponent);

          this.navigationService = navigationService;
          this.router = router;
          this.isActive$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return function (item) {
              return _this2.hasActiveChilds(item);
            };
          }));
          this.isLink = this.navigationService.isLink;
          this.isDropdown = this.navigationService.isDropdown;
          this.isSubheading = this.navigationService.isSubheading;
          this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByRoute"];
        }

        _createClass(NavigationItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hasActiveChilds",
          value: function hasActiveChilds(parent) {
            var _this3 = this;

            if (this.isLink(parent)) {
              return this.router.isActive(parent.route, true);
            }

            if (this.isDropdown(parent) || this.isSubheading(parent)) {
              return parent.children.some(function (child) {
                if (_this3.isDropdown(child)) {
                  return _this3.hasActiveChilds(child);
                }

                if (_this3.isLink(child) && !_this3.isFunction(child.route)) {
                  return _this3.router.isActive(child.route, true);
                }

                return false;
              });
            }

            return false;
          }
        }, {
          key: "isFunction",
          value: function isFunction(prop) {
            return prop instanceof Function;
          }
        }]);

        return NavigationItemComponent;
      }();

      NavigationItemComponent.ɵfac = function NavigationItemComponent_Factory(t) {
        return new (t || NavigationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      NavigationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationItemComponent,
        selectors: [["vex-navigation-item"]],
        inputs: {
          item: "item"
        },
        decls: 3,
        vars: 3,
        consts: [["class", "navigation-item", "matRipple", "", 3, "hover:bg-hover", "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-item navigation-color", "matRipple", "", 3, "hover:bg-hover", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 1, "navigation-item", 3, "ngClass", "routerLink"], ["matRipple", "", 1, "navigation-item", "navigation-color", 3, "click"], ["matRipple", "", 1, "navigation-item", 3, "matMenuTriggerFor", "ngClass"], ["yPosition", "below"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["linkTemplate", ""], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "routerLink"], [1, "text-current", 3, "icIcon"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "click"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "matMenuTriggerFor", "ngClass"], ["level1", "matMenu"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["level2", "matMenu"], ["level3", "matMenu"], ["level4", "matMenu"], ["level5", "matMenu"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "click"]],
        template: function NavigationItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationItemComponent_a_0_Template, 5, 14, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationItemComponent_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_Template, 11, 15, "ng-container", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item) && (ctx.item.children == null ? null : ctx.item.children.length) > 0 || ctx.isDropdown(ctx.item));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".navigation-item[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  display: block;\n  -webkit-margin-end: var(--padding-8);\n          margin-inline-end: var(--padding-8);\n  transition: var(--trans-ease-out);\n}\n\n.navigation-color[_ngcontent-%COMP%] {\n  color: var(--navigation-color);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%]:hover {\n  color: rgb(var(--color-primary));\n}\n\n.navigation-menu-item[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWl0ZW0vbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy04KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWNvbG9yKTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtOmhvdmVyIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-navigation-item',
            templateUrl: './navigation-item.component.html',
            styleUrls: ['./navigation-item.component.scss']
          }]
        }], function () {
          return [{
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/navigation-item/navigation-item.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/@vex/components/navigation-item/navigation-item.module.ts ***!
      \***********************************************************************/

    /*! exports provided: NavigationItemModule */

    /***/
    function srcVexComponentsNavigationItemNavigationItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItemModule", function () {
        return NavigationItemModule;
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


      var _navigation_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation-item.component */
      "./src/@vex/components/navigation-item/navigation-item.component.ts");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var NavigationItemModule = function NavigationItemModule() {
        _classCallCheck(this, NavigationItemModule);
      };

      NavigationItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NavigationItemModule
      });
      NavigationItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NavigationItemModule_Factory(t) {
          return new (t || NavigationItemModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationItemModule, {
          declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__["NavigationItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
          exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__["NavigationItemComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationItemModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__["NavigationItemComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
            exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__["NavigationItemComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover-ref.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/components/popover/popover-ref.ts ***!
      \****************************************************/

    /*! exports provided: PopoverRef */

    /***/
    function srcVexComponentsPopoverPopoverRefTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverRef", function () {
        return PopoverRef;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var PopoverRef = /*#__PURE__*/function () {
        function PopoverRef(overlay, content, data) {
          var _this4 = this;

          _classCallCheck(this, PopoverRef);

          this.overlay = overlay;
          this.content = content;
          this.data = data;
          this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.afterClosed$ = this.afterClosed.asObservable();
          overlay.backdropClick().subscribe(function () {
            _this4._close('backdropClick', null);
          });
        }

        _createClass(PopoverRef, [{
          key: "close",
          value: function close(data) {
            this._close('close', data);
          }
        }, {
          key: "_close",
          value: function _close(type, data) {
            this.overlay.dispose();
            this.afterClosed.next({
              type: type,
              data: data
            });
            this.afterClosed.complete();
          }
        }]);

        return PopoverRef;
      }();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover.component.ts":
    /*!**********************************************************!*\
      !*** ./src/@vex/components/popover/popover.component.ts ***!
      \**********************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function srcVexComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../animations/popover.animation */
      "./src/@vex/animations/popover.animation.ts");
      /* harmony import */


      var _popover_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function PopoverComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function PopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PopoverComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
        }
      }

      function PopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function PopoverComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
        }
      }

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(popoverRef) {
          _classCallCheck(this, PopoverComponent);

          this.popoverRef = popoverRef;
          this.renderMethod = 'component';
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.content = this.popoverRef.content;

            if (typeof this.content === 'string') {
              this.renderMethod = 'text';
            }

            if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
              this.renderMethod = 'template';
              this.context = {
                close: this.popoverRef.close.bind(this.popoverRef)
              };
            }
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
        return new (t || PopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"]));
      };

      PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopoverComponent,
        selectors: [["ng-component"]],
        decls: 5,
        vars: 5,
        consts: [[1, "popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]],
        template: function PopoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverComponent_div_2_Template, 1, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformPopover", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "component");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_1__["popoverAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss'],
            animations: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_1__["popoverAnimation"]]
          }]
        }], function () {
          return [{
            type: _popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover.module.ts":
    /*!*******************************************************!*\
      !*** ./src/@vex/components/popover/popover.module.ts ***!
      \*******************************************************/

    /*! exports provided: PopoverModule */

    /***/
    function srcVexComponentsPopoverPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverModule", function () {
        return PopoverModule;
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


      var _popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover.component */
      "./src/@vex/components/popover/popover.component.ts");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

      var PopoverModule = function PopoverModule() {
        _classCallCheck(this, PopoverModule);
      };

      PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopoverModule
      });
      PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopoverModule_Factory(t) {
          return new (t || PopoverModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, {
          declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]],
            entryComponents: [_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/popover/popover.service.ts":
    /*!********************************************************!*\
      !*** ./src/@vex/components/popover/popover.service.ts ***!
      \********************************************************/

    /*! exports provided: PopoverService */

    /***/
    function srcVexComponentsPopoverPopoverServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverService", function () {
        return PopoverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
      /* harmony import */


      var _popover_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./popover.component */
      "./src/@vex/components/popover/popover.component.ts");

      var PopoverService = /*#__PURE__*/function () {
        function PopoverService(overlay, injector) {
          _classCallCheck(this, PopoverService);

          this.overlay = overlay;
          this.injector = injector;
        }

        _createClass(PopoverService, [{
          key: "open",
          value: function open(_ref) {
            var origin = _ref.origin,
                content = _ref.content,
                data = _ref.data,
                width = _ref.width,
                height = _ref.height,
                position = _ref.position,
                offsetX = _ref.offsetX,
                offsetY = _ref.offsetY;
            var overlayRef = this.overlay.create(this.getOverlayConfig({
              origin: origin,
              width: width,
              height: height,
              position: position,
              offsetX: offsetX,
              offsetY: offsetY
            }));
            var popoverRef = new _popover_ref__WEBPACK_IMPORTED_MODULE_3__["PopoverRef"](overlayRef, content, data);
            var injector = this.createInjector(popoverRef, this.injector);
            overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], null, injector));
            return popoverRef;
          }
        }, {
          key: "createInjector",
          value: function createInjector(popoverRef, injector) {
            var tokens = new WeakMap([[_popover_ref__WEBPACK_IMPORTED_MODULE_3__["PopoverRef"], popoverRef]]);
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](injector, tokens);
          }
        }, {
          key: "getOverlayConfig",
          value: function getOverlayConfig(_ref2) {
            var origin = _ref2.origin,
                width = _ref2.width,
                height = _ref2.height,
                position = _ref2.position,
                offsetX = _ref2.offsetX,
                offsetY = _ref2.offsetY;
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
              hasBackdrop: true,
              width: width,
              height: height,
              backdropClass: 'popover-backdrop',
              positionStrategy: this.getOverlayPosition({
                origin: origin,
                position: position,
                offsetX: offsetX,
                offsetY: offsetY
              }),
              scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
          }
        }, {
          key: "getOverlayPosition",
          value: function getOverlayPosition(_ref3) {
            var origin = _ref3.origin,
                position = _ref3.position,
                offsetX = _ref3.offsetX,
                offsetY = _ref3.offsetY;
            var positionStrategy = this.overlay.position().flexibleConnectedTo(origin).withPositions(position || this.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.popover').withPush(true);
            return positionStrategy;
          }
        }, {
          key: "getPositions",
          value: function getPositions() {
            return [{
              originX: 'center',
              originY: 'top',
              overlayX: 'center',
              overlayY: 'bottom'
            }, {
              originX: 'center',
              originY: 'bottom',
              overlayX: 'center',
              overlayY: 'top'
            }];
          }
        }]);

        return PopoverService;
      }();

      PopoverService.ɵfac = function PopoverService_Factory(t) {
        return new (t || PopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      PopoverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PopoverService,
        factory: PopoverService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/progress-bar/progress-bar.component.ts":
    /*!********************************************************************!*\
      !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProgressBarComponent */

    /***/
    function srcVexComponentsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ProgressBarComponent = /*#__PURE__*/function () {
        function ProgressBarComponent(loader) {
          _classCallCheck(this, ProgressBarComponent);

          this.loader = loader;
        }

        _createClass(ProgressBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProgressBarComponent;
      }();

      ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
        return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__["LoadingBarService"]));
      };

      ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressBarComponent,
        selectors: [["vex-progress-bar"]],
        decls: 3,
        vars: 7,
        consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-progress-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.loader.useRef("router").value$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loader.useRef("router").value$));
          }
        },
        directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n}\n\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4ucHJvZ3Jlc3MtYmFyLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-progress-bar',
            templateUrl: './progress-bar.component.html',
            styleUrls: ['./progress-bar.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__["LoadingBarService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/progress-bar/progress-bar.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProgressBarModule */

    /***/
    function srcVexComponentsProgressBarProgressBarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
        return ProgressBarModule;
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


      var _progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./progress-bar.component */
      "./src/@vex/components/progress-bar/progress-bar.component.ts");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-loading-bar/core */
      "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
      /* harmony import */


      var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-loading-bar/router */
      "./node_modules/@ngx-loading-bar/router/__ivy_ngcc__/fesm2015/ngx-loading-bar-router.js");

      var ProgressBarModule = function ProgressBarModule() {
        _classCallCheck(this, ProgressBarModule);
      };

      ProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProgressBarModule
      });
      ProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProgressBarModule_Factory(t) {
          return new (t || ProgressBarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressBarModule, {
          declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"]],
          exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"]],
            exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/scrollbar/scrollbar.component.ts":
    /*!**************************************************************!*\
      !*** ./src/@vex/components/scrollbar/scrollbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: ScrollbarComponent */

    /***/
    function srcVexComponentsScrollbarScrollbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollbarComponent", function () {
        return ScrollbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var simplebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! simplebar */
      "./node_modules/simplebar/dist/simplebar.esm.js");

      var _c0 = ["*"];

      var ScrollbarComponent = /*#__PURE__*/function () {
        function ScrollbarComponent(_element, zone) {
          _classCallCheck(this, ScrollbarComponent);

          this._element = _element;
          this.zone = zone;
        }

        _createClass(ScrollbarComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            this.zone.runOutsideAngular(function () {
              _this5.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](_this5._element.nativeElement, _this5.options);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /**
             * Exists, but not typed in the type definition
             * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
             */
            if (this.scrollbarRef && this.scrollbarRef.unMount) {
              this.scrollbarRef.unMount();
            }
          }
        }]);

        return ScrollbarComponent;
      }();

      ScrollbarComponent.ɵfac = function ScrollbarComponent_Factory(t) {
        return new (t || ScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      ScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScrollbarComponent,
        selectors: [["vex-scrollbar"]],
        hostAttrs: [1, "vex-scrollbar"],
        inputs: {
          options: "options"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function ScrollbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-scrollbar',
            template: "\n        <ng-content></ng-content>",
            styleUrls: ['./scrollbar.component.scss'],
            host: {
              "class": 'vex-scrollbar'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/scrollbar/scrollbar.module.ts":
    /*!***********************************************************!*\
      !*** ./src/@vex/components/scrollbar/scrollbar.module.ts ***!
      \***********************************************************/

    /*! exports provided: ScrollbarModule */

    /***/
    function srcVexComponentsScrollbarScrollbarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollbarModule", function () {
        return ScrollbarModule;
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


      var _scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scrollbar.component */
      "./src/@vex/components/scrollbar/scrollbar.component.ts");

      var ScrollbarModule = function ScrollbarModule() {
        _classCallCheck(this, ScrollbarModule);
      };

      ScrollbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScrollbarModule
      });
      ScrollbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScrollbarModule_Factory(t) {
          return new (t || ScrollbarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollbarModule, {
          declarations: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollbarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__["ScrollbarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/search/search.component.ts":
    /*!********************************************************!*\
      !*** ./src/@vex/components/search/search.component.ts ***!
      \********************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function srcVexComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-close */
      "./node_modules/@iconify/icons-ic/twotone-close.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/search.service */
      "./src/@vex/services/search.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["searchInput"];

      function SearchComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(layoutService, searchService) {
          _classCallCheck(this, SearchComponent);

          this.layoutService = layoutService;
          this.searchService = searchService;
          this.show$ = this.layoutService.searchOpen$;
          this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.searchService.isOpenSubject.next(true);
            this.searchCtrl.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (value) {
              return _this6.searchService.valueChangesSubject.next(value);
            });
            this.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (show) {
              return show;
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function () {
              return _this6.input.nativeElement.focus();
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.layoutService.closeSearch();
            this.searchCtrl.setValue(undefined);
            this.searchService.isOpenSubject.next(false);
          }
        }, {
          key: "search",
          value: function search() {
            this.searchService.submitSubject.next(this.searchCtrl.value);
            this.close();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.layoutService.closeSearch();
            this.searchCtrl.setValue(undefined);
            this.searchService.isOpenSubject.next(false);
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]));
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["vex-search"]],
        viewQuery: function SearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        decls: 10,
        vars: 9,
        consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], [3, "icIcon"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hit enter to search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, ctx.show$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icClose);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, ctx.show$));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
        styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  border-top-width: 0;\n  font-weight: 700;\n  background-color: transparent;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  font-size: 1rem;\n  text-align: right;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--text-hint);\n  font-weight: 700;\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFDRjs7QUFFQTtFQUNFLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogNTB2aDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uc2VhcmNoLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBmb250LXNpemU6IDd2dztcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWhpbnQge1xuICB3aWR0aDogNzUlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2VhcmNoLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogNTB2aDtcbn0iXX0= */"]
      });
      SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()], SearchComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'vex-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss']
          }]
        }], function () {
          return [{
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
          }, {
            type: _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]
          }];
        }, {
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchInput', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/search/search.module.ts":
    /*!*****************************************************!*\
      !*** ./src/@vex/components/search/search.module.ts ***!
      \*****************************************************/

    /*! exports provided: SearchModule */

    /***/
    function srcVexComponentsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
        return SearchModule;
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


      var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search.component */
      "./src/@vex/components/search/search.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var SearchModule = function SearchModule() {
        _classCallCheck(this, SearchModule);
      };

      SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SearchModule
      });
      SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SearchModule_Factory(t) {
          return new (t || SearchModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, {
          declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          exports: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
            exports: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/components/sidebar/sidebar.component.ts":
    /*!**********************************************************!*\
      !*** ./src/@vex/components/sidebar/sidebar.component.ts ***!
      \**********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcVexComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["*"];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(document) {
          _classCallCheck(this, SidebarComponent);

          this.document = document;
          this.position = 'left';
        }

        _createClass(SidebarComponent, [{
          key: "enableScrollblock",
          value: function enableScrollblock() {
            if (!this.document.body.classList.contains('vex-scrollblock')) {
              this.document.body.classList.add('vex-scrollblock');
            }
          }
        }, {
          key: "disableScrollblock",
          value: function disableScrollblock() {
            if (this.document.body.classList.contains('vex-scrollblock')) {
              this.document.body.classList.remove('vex-scrollblock');
            }
          }
        }, {
          key: "open",
          value: function open() {
            this.opened = true;
          }
        }, {
          key: "close",
          value: function close() {
            this.opened = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(opened) {
            this._opened = opened;
            opened ? this.enableScrollblock() : this.disableScrollblock();
          }
        }, {
          key: "positionLeft",
          get: function get() {
            return this.position === 'left';
          }
        }, {
          key: "positionRight",
          get: function get() {
            return this.position === 'right';
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["vex-sidebar"]],
        hostAttrs: [1, "vex-sidebar"],
        inputs: {
          position: "position",
          invisibleBackdrop: "invisibleBackdrop",
          opened: "opened"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 10,
        consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx.invisibleBackdrop)("visible", ctx.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
          }
        },
        styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  bottom: 0;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: var(--trans-ease-in-duration);\n  transition-property: transform, visibility;\n  transition-timing-function: var(--trans-ease-in-timing-function);\n  visibility: hidden;\n  width: var(--sidenav-width);\n  z-index: 1000;\n}\n\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n\n.backdrop.visible[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n\n.backdrop.invisible[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUYiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogODB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1kdXJhdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4uc2lkZWJhci5wb3NpdGlvbi1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnNpZGViYXIucG9zaXRpb24tcmlnaHQge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZHJvcC52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3AuaW52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss'],
            host: {
              "class": 'vex-sidebar'
            }
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          invisibleBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/components/sidebar/sidebar.module.ts":
    /*!*******************************************************!*\
      !*** ./src/@vex/components/sidebar/sidebar.module.ts ***!
      \*******************************************************/

    /*! exports provided: SidebarModule */

    /***/
    function srcVexComponentsSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
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


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar.component */
      "./src/@vex/components/sidebar/sidebar.component.ts");

      var SidebarModule = function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      };

      SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SidebarModule
      });
      SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SidebarModule_Factory(t) {
          return new (t || SidebarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, {
          declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/directives/container/container.directive.ts":
    /*!**************************************************************!*\
      !*** ./src/@vex/directives/container/container.directive.ts ***!
      \**************************************************************/

    /*! exports provided: ContainerDirective */

    /***/
    function srcVexDirectivesContainerContainerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerDirective", function () {
        return ContainerDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");

      var ContainerDirective = function ContainerDirective(configService, cd) {
        var _this7 = this;

        _classCallCheck(this, ContainerDirective);

        this.configService = configService;
        this.cd = cd;
        this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (config) {
          return config.boxed;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (boxed) {
          _this7.enabled = boxed;

          _this7.cd.markForCheck();
        });
      };

      ContainerDirective.ɵfac = function ContainerDirective_Factory(t) {
        return new (t || ContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      ContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ContainerDirective,
        selectors: [["", "vexContainer", ""]],
        hostVars: 2,
        hostBindings: function ContainerDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("container", ctx.enabled);
          }
        }
      });
      ContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()], ContainerDirective);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContainerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[vexContainer]'
          }]
        }], function () {
          return [{
            type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.container']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/directives/container/container.module.ts":
    /*!***********************************************************!*\
      !*** ./src/@vex/directives/container/container.module.ts ***!
      \***********************************************************/

    /*! exports provided: ContainerModule */

    /***/
    function srcVexDirectivesContainerContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerModule", function () {
        return ContainerModule;
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


      var _container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./container.directive */
      "./src/@vex/directives/container/container.directive.ts");

      var ContainerModule = function ContainerModule() {
        _classCallCheck(this, ContainerModule);
      };

      ContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContainerModule
      });
      ContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContainerModule_Factory(t) {
          return new (t || ContainerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContainerModule, {
          declarations: [_container_directive__WEBPACK_IMPORTED_MODULE_2__["ContainerDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_container_directive__WEBPACK_IMPORTED_MODULE_2__["ContainerDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_container_directive__WEBPACK_IMPORTED_MODULE_2__["ContainerDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_container_directive__WEBPACK_IMPORTED_MODULE_2__["ContainerDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/interfaces/config-name.model.ts":
    /*!**************************************************!*\
      !*** ./src/@vex/interfaces/config-name.model.ts ***!
      \**************************************************/

    /*! exports provided: ConfigName */

    /***/
    function srcVexInterfacesConfigNameModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigName", function () {
        return ConfigName;
      });

      var ConfigName;

      (function (ConfigName) {
        ConfigName["apollo"] = "vex-layout-apollo";
        ConfigName["zeus"] = "vex-layout-zeus";
        ConfigName["hermes"] = "vex-layout-hermes";
        ConfigName["poseidon"] = "vex-layout-poseidon";
        ConfigName["ares"] = "vex-layout-ares";
        ConfigName["ikaros"] = "vex-layout-ikaros";
      })(ConfigName || (ConfigName = {}));
      /***/

    },

    /***/
    "./src/@vex/layout/footer/footer.component.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/layout/footer/footer.component.ts ***!
      \****************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcVexLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-shopping-basket */
      "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.icShoppingBasket = _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_1___default.a;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["vex-footer"]],
        inputs: {
          customTemplate: "customTemplate"
        },
        decls: 6,
        vars: 1,
        consts: [["fxLayout", "row", 1, "footer"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", ""], ["color", "primary", "fxFlex", "none", "href", "//1.envato.market/0vkRO", "id", "get-vex", "mat-raised-button", "", 1, "hidden", "action"], ["inline", "true", "size", "18px", 1, "ltr:mr-2", "rtl:ml-2", 3, "icon"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ic-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get Vex (Angular 10+)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icShoppingBasket);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconDirective"]],
        styles: ["[_nghost-%COMP%] {\n  bottom: 0;\n  display: block;\n  width: 100%;\n  z-index: var(--footer-z-index);\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--footer-background);\n  color: var(--footer-color);\n  height: var(--footer-height);\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  position: relative;\n  z-index: var(--footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, {
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/footer/footer.module.ts":
    /*!*************************************************!*\
      !*** ./src/@vex/layout/footer/footer.module.ts ***!
      \*************************************************/

    /*! exports provided: FooterModule */

    /***/
    function srcVexLayoutFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component */
      "./src/@vex/layout/footer/footer.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: FooterModule
      });
      FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function FooterModule_Factory(t) {
          return new (t || FooterModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__["ContainerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, {
          declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__["ContainerModule"]],
          exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FooterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__["ContainerModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/layout.component.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/layout/layout.component.ts ***!
      \*********************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function srcVexLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/check-router-childs-data */
      "./src/@vex/utils/check-router-childs-data.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../components/progress-bar/progress-bar.component */
      "./src/@vex/components/progress-bar/progress-bar.component.ts");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../components/search/search.component */
      "./src/@vex/components/search/search.component.ts");

      var _c0 = ["quickpanel"];
      var _c1 = ["sidenav"];

      function LayoutComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function LayoutComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function LayoutComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function LayoutComponent_ng_container_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(cd, breakpointObserver, layoutService, configService, router, document) {
          var _this8 = this;

          _classCallCheck(this, LayoutComponent);

          this.cd = cd;
          this.breakpointObserver = breakpointObserver;
          this.layoutService = layoutService;
          this.configService = configService;
          this.router = router;
          this.document = document;
          this.isLayoutVertical$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.layout === 'vertical';
          }));
          this.isBoxed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.boxed;
          }));
          this.isToolbarFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.toolbar.fixed;
          }));
          this.isFooterFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.footer.fixed;
          }));
          this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.footer.visible;
          }));
          this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
          this.isDesktop$ = this.layoutService.isDesktop$;
          this.scrollDisabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_6__["checkRouterChildsData"])(_this8.router.routerState.root.snapshot, function (data) {
              return data.scrollDisabled;
            });
          }));
          this.containerEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_6__["checkRouterChildsData"])(_this8.router.routerState.root.snapshot, function (data) {
              return data.containerEnabled;
            });
          }));
          this.searchOpen$ = this.layoutService.searchOpen$;
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            /**
             * Expand Sidenav when we switch from mobile to desktop view
             */
            this.isDesktop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (matches) {
              return !matches;
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function () {
              return _this9.layoutService.expandSidenav();
            });
            /**
             * Open/Close Quickpanel through LayoutService
             */

            this.layoutService.quickpanelOpen$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function (open) {
              return open ? _this9.quickpanel.open() : _this9.quickpanel.close();
            });
            /**
             * Open/Close Sidenav through LayoutService
             */

            this.layoutService.sidenavOpen$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function (open) {
              return open ? _this9.sidenav.open() : _this9.sidenav.close();
            });
            /**
             * Mobile only:
             * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
             */

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.isDesktop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  event = _ref5[0],
                  matches = _ref5[1];

              return !matches;
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function () {
              return _this9.sidenav.close();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this10 = this;

            /**
             * Enable Scrolling to specific parts of the page using the Router
             */
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["Scroll"];
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function (e) {
              if (e.position) {
                // backward navigation
                _this10.sidenavContainer.scrollable.scrollTo({
                  start: e.position[0],
                  top: e.position[1]
                });
              } else if (e.anchor) {
                // anchor navigation
                var scroll = function scroll(anchor) {
                  return _this10.sidenavContainer.scrollable.scrollTo({
                    behavior: 'smooth',
                    top: anchor.offsetTop,
                    left: anchor.offsetLeft
                  });
                };

                var anchorElem = _this10.document.getElementById(e.anchor);

                if (anchorElem) {
                  scroll(anchorElem);
                } else {
                  setTimeout(function () {
                    anchorElem = _this10.document.getElementById(e.anchor);
                    scroll(anchorElem);
                  }, 100);
                }
              } else {
                // forward navigation
                _this10.sidenavContainer.scrollable.scrollTo({
                  top: 0,
                  start: 0
                });
              }
            });
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]));
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["vex-layout"]],
        viewQuery: function LayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.quickpanel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
          }
        },
        inputs: {
          sidenavRef: "sidenavRef",
          toolbarRef: "toolbarRef",
          footerRef: "footerRef",
          quickpanelRef: "quickpanelRef"
        },
        decls: 34,
        vars: 69,
        consts: [[1, "page-container"], [1, "sidenav-container"], [1, "sidenav", 3, "disableClose", "fixedInViewport", "mode", "opened"], ["sidenav", ""], [4, "ngTemplateOutlet"], ["mode", "over", "position", "end", 1, "quickpanel", 3, "fixedInViewport"], ["quickpanel", ""], [1, "sidenav-content"], [1, "content"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "vex-progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "vex-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-sidenav-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-sidenav", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LayoutComponent_ng_container_24_Template, 1, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-sidenav", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LayoutComponent_ng_container_28_Template, 1, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-sidenav-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LayoutComponent_ng_container_30_Template, 1, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "main", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LayoutComponent_ng_container_33_Template, 1, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("boxed", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 31, ctx.isBoxed$))("content-container", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 33, ctx.containerEnabled$))("has-fixed-footer", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 37, ctx.isFooterFixed$) && ctx.isFooterVisible$))("has-footer", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 39, ctx.isFooterVisible$))("horizontal-layout", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 41, ctx.isLayoutVertical$))("is-mobile", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 43, ctx.isDesktop$))("scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 45, ctx.scrollDisabled$))("sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 47, ctx.sidenavCollapsed$))("toolbar-fixed", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 49, ctx.isToolbarFixed$))("vertical-layout", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 51, ctx.isLayoutVertical$))("with-search", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 53, ctx.searchOpen$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableClose", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 55, ctx.isDesktop$))("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 57, ctx.isDesktop$))("mode", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 59, ctx.isDesktop$) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 61, ctx.isLayoutVertical$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 63, ctx.isDesktop$) && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 65, ctx.isLayoutVertical$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.sidenavRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 67, ctx.isDesktop$));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.quickpanelRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.toolbarRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerRef);
          }
        },
        directives: [_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ProgressBarComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".page-container[_ngcontent-%COMP%] {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: var(--sidenav-background);\n}\n\n.sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n\n.scroll-disabled.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scroll-disabled.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: 100%;\n}\n\n.is-mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n}\n\n.with-search[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  border-radius: 0.25rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  overflow: visible;\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]     .vex-footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-bottom: var(--footer-height);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.has-fixed-footer.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0dBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxRUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRGQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSwrRUFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsZ0dBQUE7QUFDRjs7QUFFQTtFQUNFLDRGQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XG59XG5cbi5zaWRlbmF2IDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufVxuXG4uc2Nyb2xsLWRpc2FibGVkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZCAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtZGlzYWJsZWQuaGFzLWZpeGVkLWZvb3RlciAuY29udGVudCwgLnNjcm9sbC1kaXNhYmxlZC5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuXG4uaXMtbW9iaWxlIDo6bmctZGVlcCAudmV4LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXMtbW9iaWxlIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG59XG5cbi5zaWRlbmF2LWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi53aXRoLXNlYXJjaCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLndpdGgtc2VhcmNoIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgdHJhbnNsYXRlM2QoMCwgNTB2aCwgMCkgcm90YXRlM2QoMSwgMCwgMCwgMzBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MHZ3IDUwdmg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4udG9vbGJhci1maXhlZCA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4udG9vbGJhci1maXhlZCAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdG9vbGJhci1oZWlnaHQpICsgdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIgOjpuZy1kZWVwIC52ZXgtZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tZm9vdGVyLWVsZXZhdGlvbik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufVxuXG4uaGFzLWZpeGVkLWZvb3Rlci5zY3JvbGwtZGlzYWJsZWQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn0iXX0= */"]
      });
      LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()], LayoutComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'vex-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"]
          }, {
            type: _services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
            }]
          }];
        }, {
          sidenavRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toolbarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          footerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          quickpanelRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          quickpanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['quickpanel', {
              "static": true
            }]
          }],
          sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sidenav', {
              "static": true
            }]
          }],
          sidenavContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/layout.module.ts":
    /*!******************************************!*\
      !*** ./src/@vex/layout/layout.module.ts ***!
      \******************************************/

    /*! exports provided: LayoutModule */

    /***/
    function srcVexLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
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


      var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout.component */
      "./src/@vex/layout/layout.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/progress-bar/progress-bar.module */
      "./src/@vex/components/progress-bar/progress-bar.module.ts");
      /* harmony import */


      var _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/search/search.module */
      "./src/@vex/components/search/search.module.ts");

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LayoutModule
      });
      LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LayoutModule_Factory(t) {
          return new (t || LayoutModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
          declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"]],
          exports: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"]],
            exports: [_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/navigation/navigation.component.ts":
    /*!************************************************************!*\
      !*** ./src/@vex/layout/navigation/navigation.component.ts ***!
      \************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcVexLayoutNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.component */
      "./src/@vex/components/navigation-item/navigation-item.component.ts");

      function NavigationComponent_vex_navigation_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation-item", 2);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
        }
      }

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(navigationService) {
          _classCallCheck(this, NavigationComponent);

          this.navigationService = navigationService;
          this.items = this.navigationService.items;
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["vex-navigation"]],
        decls: 2,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "navigation"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_5__["NavigationItemComponent"]],
        styles: ["[_nghost-%COMP%] {\n  background: var(--navigation-background);\n  display: block;\n  height: var(--navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: var(--navigation-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXZpZ2F0aW9uLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [{
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/navigation/navigation.module.ts":
    /*!*********************************************************!*\
      !*** ./src/@vex/layout/navigation/navigation.module.ts ***!
      \*********************************************************/

    /*! exports provided: NavigationModule */

    /***/
    function srcVexLayoutNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
        return NavigationModule;
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


      var _navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation.component */
      "./src/@vex/layout/navigation/navigation.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.module */
      "./src/@vex/components/navigation-item/navigation-item.module.ts");
      /* harmony import */


      var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var NavigationModule = function NavigationModule() {
        _classCallCheck(this, NavigationModule);
      };

      NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NavigationModule
      });
      NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NavigationModule_Factory(t) {
          return new (t || NavigationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, {
          declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]],
          exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_9__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]],
            exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/quickpanel/quickpanel.component.ts":
    /*!************************************************************!*\
      !*** ./src/@vex/layout/quickpanel/quickpanel.component.ts ***!
      \************************************************************/

    /*! exports provided: QuickpanelComponent */

    /***/
    function srcVexLayoutQuickpanelQuickpanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickpanelComponent", function () {
        return QuickpanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

      var _c0 = function _c0() {
        return [];
      };

      var QuickpanelComponent = /*#__PURE__*/function () {
        function QuickpanelComponent() {
          _classCallCheck(this, QuickpanelComponent);

          this.date = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().toFormat('DD');
          this.dayName = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().toFormat('EEEE');
        }

        _createClass(QuickpanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QuickpanelComponent;
      }();

      QuickpanelComponent.ɵfac = function QuickpanelComponent_Factory(t) {
        return new (t || QuickpanelComponent)();
      };

      QuickpanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuickpanelComponent,
        selectors: [["vex-quickpanel"]],
        decls: 67,
        vars: 16,
        consts: [[1, "body-2", "p-6", "bg-primary", "text-primary-contrast"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matLine", ""], ["matRipple", "", 1, "list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", "value", "71"], ["color", "accent", "mode", "determinate", "value", "34"], ["color", "warn", "mode", "determinate", "value", "54"]],
        template: function QuickpanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TODAY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UPCOMING EVENTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Business Meeting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ask for Vacation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12:00 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dinner with Sophie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "18:30 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Deadline for Project X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "21:00 PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TODO-LIST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Invite Jack to play golf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Added: 6 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Get to know Angular more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Added: 2 days ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Configure that new router");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Added: 5 days ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SERVER STATISTICS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "CPU Load (71% / 100%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-progress-bar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-progress-bar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CPU Temp (43\xB0 / 80\xB0)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-progress-bar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dayName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\nh3[_ngcontent-%COMP%] {\n  padding: 16px 16px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font: var(--font-subheading-2);\n  justify-content: center;\n  min-height: 72px;\n  padding: 0 var(--padding-16);\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.list-item[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9xdWlja3BhbmVsL3F1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbmgzIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQ6IHZhcigtLWZvbnQtc3ViaGVhZGluZy0yKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcycHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy0xNik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickpanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-quickpanel',
            templateUrl: './quickpanel.component.html',
            styleUrls: ['./quickpanel.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/quickpanel/quickpanel.module.ts":
    /*!*********************************************************!*\
      !*** ./src/@vex/layout/quickpanel/quickpanel.module.ts ***!
      \*********************************************************/

    /*! exports provided: QuickpanelModule */

    /***/
    function srcVexLayoutQuickpanelQuickpanelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickpanelModule", function () {
        return QuickpanelModule;
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


      var _quickpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quickpanel.component */
      "./src/@vex/layout/quickpanel/quickpanel.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      var QuickpanelModule = function QuickpanelModule() {
        _classCallCheck(this, QuickpanelModule);
      };

      QuickpanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: QuickpanelModule
      });
      QuickpanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function QuickpanelModule_Factory(t) {
          return new (t || QuickpanelModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuickpanelModule, {
          declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_2__["QuickpanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
          exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_2__["QuickpanelComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickpanelModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_2__["QuickpanelComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
            exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_2__["QuickpanelComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts":
    /*!************************************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts ***!
      \************************************************************************/

    /*! exports provided: SidenavItemComponent */

    /***/
    function srcVexLayoutSidenavSidenavItemSidenavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavItemComponent", function () {
        return SidenavItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../animations/dropdown.animation */
      "./src/@vex/animations/dropdown.animation.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-keyboard-arrow-right */
      "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-right.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

      function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 7);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r4.item.icon);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function SidenavItemComponent_a_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r5.item.badge.bgClass, ctx_r5.item.badge.textClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.item.badge.value);
        }
      }

      var _c1 = function _c1() {
        return {
          exact: false
        };
      };

      function SidenavItemComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1))("routerLink", ctx_r0.item.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.level === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
        }
      }

      function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 7);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r6.item.icon);
        }
      }

      function SidenavItemComponent_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r7.item.badge.bgClass, ctx_r7.item.badge.textClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.item.badge.value);
        }
      }

      function SidenavItemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.item.route();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.level === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.item.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
        }
      }

      function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 7);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r10.item.icon);
        }
      }

      function SidenavItemComponent_ng_container_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r11.item.badge.bgClass, ctx_r11.item.badge.textClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.item.badge.value);
        }
      }

      function SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vex-sidenav-item", 14);
        }

        if (rf & 2) {
          var subItem_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", subItem_r13)("level", ctx_r12.level + 1);
        }
      }

      function SidenavItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.toggleOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidenavItemComponent_ng_container_2_span_5_Template, 2, 5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template, 1, 2, "vex-sidenav-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.isOpen || ctx_r2.isActive)("open", ctx_r2.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.level === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.item.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx_r2.icKeyboardArrowRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@dropdown", ctx_r2.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
        }
      }

      function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vex-sidenav-item", 14);
        }

        if (rf & 2) {
          var subItem_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", subItem_r17)("level", 0);
        }
      }

      function SidenavItemComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.item.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
        }
      }

      var SidenavItemComponent = /*#__PURE__*/function () {
        function SidenavItemComponent(router, cd, navigationService) {
          _classCallCheck(this, SidenavItemComponent);

          this.router = router;
          this.cd = cd;
          this.navigationService = navigationService;
          this.icKeyboardArrowRight = _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_6___default.a;
          this.isLink = this.navigationService.isLink;
          this.isDropdown = this.navigationService.isDropdown;
          this.isSubheading = this.navigationService.isSubheading;
        }

        _createClass(SidenavItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this11.isDropdown(_this11.item);
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function () {
              return _this11.onRouteChange();
            });
            this.navigationService.openChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this11.isDropdown(_this11.item);
            }), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (item) {
              return _this11.onOpenChange(item);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
              this.onRouteChange();
            }
          }
        }, {
          key: "toggleOpen",
          value: function toggleOpen() {
            this.isOpen = !this.isOpen;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
          }
        }, {
          key: "onOpenChange",
          value: function onOpenChange(item) {
            if (this.isChildrenOf(this.item, item)) {
              return;
            }

            if (this.hasActiveChilds(this.item)) {
              return;
            }

            if (this.item !== item) {
              this.isOpen = false;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "onRouteChange",
          value: function onRouteChange() {
            if (this.hasActiveChilds(this.item)) {
              this.isActive = true;
              this.isOpen = true;
              this.navigationService.triggerOpenChange(this.item);
              this.cd.markForCheck();
            } else {
              this.isActive = false;
              this.isOpen = false;
              this.navigationService.triggerOpenChange(this.item);
              this.cd.markForCheck();
            }
          }
        }, {
          key: "isChildrenOf",
          value: function isChildrenOf(parent, item) {
            var _this12 = this;

            if (parent.children.indexOf(item) !== -1) {
              return true;
            }

            return parent.children.filter(function (child) {
              return _this12.isDropdown(child);
            }).some(function (child) {
              return _this12.isChildrenOf(child, item);
            });
          }
        }, {
          key: "hasActiveChilds",
          value: function hasActiveChilds(parent) {
            var _this13 = this;

            return parent.children.some(function (child) {
              if (_this13.isDropdown(child)) {
                return _this13.hasActiveChilds(child);
              }

              if (_this13.isLink(child) && !_this13.isFunction(child.route)) {
                return _this13.router.isActive(child.route, false);
              }
            });
          }
        }, {
          key: "isFunction",
          value: function isFunction(prop) {
            return prop instanceof Function;
          }
        }, {
          key: "levelClass",
          get: function get() {
            return "item-level-".concat(this.level);
          }
        }]);

        return SidenavItemComponent;
      }();

      SidenavItemComponent.ɵfac = function SidenavItemComponent_Factory(t) {
        return new (t || SidenavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]));
      };

      SidenavItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SidenavItemComponent,
        selectors: [["vex-sidenav-item"]],
        hostVars: 2,
        hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.levelClass);
          }
        },
        inputs: {
          item: "item",
          level: "level"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 4,
        consts: [["class", "item", "fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "item", "fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 1, "item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "item-icon", "fxFlex", "none", 3, "icIcon", 4, "ngIf"], ["fxFlex", "auto", 1, "item-label"], ["class", "item-badge", "fxFlex", "none", 3, "ngClass", 4, "ngIf"], ["fxFlex", "none", 1, "item-icon", 3, "icIcon"], ["fxFlex", "none", 1, "item-badge", 3, "ngClass"], ["fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 1, "item", 3, "click"], ["fxLayout", "row", "matRipple", "", 1, "item", 3, "click"], ["fxFlex", "none", 1, "item-dropdown-icon", 3, "icIcon"], [1, "item-dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "subheading"]],
        template: function SidenavItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidenavItemComponent_div_1_Template, 5, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_Template, 9, 10, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], SidenavItemComponent],
        styles: [".item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  padding: var(--padding-8) var(--sidenav-item-padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  border-left: var(--sidenav-item-border);\n}\n\n.item[_ngcontent-%COMP%]:hover, .item.active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-background-active);\n  border-left-color: var(--sidenav-item-border-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-icon[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-label[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-dropdown-icon[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n\n.item.open[_ngcontent-%COMP%]   .item-dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n}\n\n.item-level-1[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n}\n\n.item-level-2[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n}\n\n.item-level-3[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n}\n\n.item-level-4[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n}\n\n.item-level-5[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n}\n\n.item-level-6[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-icon[_ngcontent-%COMP%], .item-label[_ngcontent-%COMP%], .item-dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.item-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: var(--sidenav-item-icon-size);\n  height: var(--sidenav-item-icon-size);\n  -webkit-margin-end: var(--sidenav-item-icon-gap);\n          margin-inline-end: var(--sidenav-item-icon-gap);\n  width: var(--sidenav-item-icon-size);\n}\n\n.item-label[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-badge[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  padding: 0 7px;\n  text-align: center;\n}\n\n.item-dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  transform: rotate(0deg) !important;\n  width: 18px;\n}\n\n.item-dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  font: var(--font-caption);\n  margin-top: var(--padding);\n  padding: var(--padding-12) var(--padding);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpREFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO1VBQUEsK0NBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtVQUFBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtVQUFBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvc2lkZW5hdi9zaWRlbmF2LWl0ZW0vc2lkZW5hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItbGVmdDogdmFyKC0tc2lkZW5hdi1pdGVtLWJvcmRlcik7XG59XG5cbi5pdGVtOmhvdmVyLCAuaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tYmFja2dyb3VuZC1hY3RpdmUpO1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWJvcmRlci1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1sYWJlbCwgLml0ZW0uYWN0aXZlIC5pdGVtLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1kcm9wZG93bi1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0tZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cblxuLml0ZW0ub3BlbiAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAwKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMSkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDIpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAzKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNCkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDUpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5pdGVtLWljb24sIC5pdGVtLWxhYmVsLCAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi5pdGVtLWxhYmVsIHtcbiAgZmxleDogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pdGVtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLml0ZW0tZHJvcGRvd24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZyk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"],
        data: {
          animation: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__["dropdownAnimation"]]
        },
        changeDetection: 0
      });
      SidenavItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()], SidenavItemComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidenavItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'vex-sidenav-item',
            templateUrl: './sidenav-item.component.html',
            styleUrls: ['./sidenav-item.component.scss'],
            animations: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__["dropdownAnimation"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          levelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SidenavItemModule */

    /***/
    function srcVexLayoutSidenavSidenavItemSidenavItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavItemModule", function () {
        return SidenavItemModule;
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


      var _sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidenav-item.component */
      "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

      var SidenavItemModule = function SidenavItemModule() {
        _classCallCheck(this, SidenavItemModule);
      };

      SidenavItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SidenavItemModule
      });
      SidenavItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SidenavItemModule_Factory(t) {
          return new (t || SidenavItemModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavItemModule, {
          declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__["SidenavItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
          exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__["SidenavItemComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavItemModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__["SidenavItemComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
            exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__["SidenavItemComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav.component.ts":
    /*!******************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav.component.ts ***!
      \******************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function srcVexLayoutSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-radio-button-checked */
      "./node_modules/@iconify/icons-ic/twotone-radio-button-checked.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-radio-button-unchecked */
      "./node_modules/@iconify/icons-ic/twotone-radio-button-unchecked.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/scrollbar/scrollbar.component */
      "./src/@vex/components/scrollbar/scrollbar.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sidenav-item/sidenav-item.component */
      "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts");

      function SidenavComponent_button_8_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 10);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r2.icRadioButtonChecked);
        }
      }

      function SidenavComponent_button_8_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 10);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r3.icRadioButtonUnchecked);
        }
      }

      function SidenavComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_button_8_mat_icon_1_Template, 1, 1, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_button_8_mat_icon_2_Template, 1, 1, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
        }
      }

      function SidenavComponent_vex_sidenav_item_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-sidenav-item", 11);
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("level", 0);
        }
      }

      var SidenavComponent = /*#__PURE__*/function () {
        function SidenavComponent(navigationService, layoutService, configService) {
          _classCallCheck(this, SidenavComponent);

          this.navigationService = navigationService;
          this.layoutService = layoutService;
          this.configService = configService;
          this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
          this.title$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
            return config.sidenav.title;
          }));
          this.imageUrl$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
            return config.sidenav.imageUrl;
          }));
          this.showCollapsePin$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) {
            return config.sidenav.showCollapsePin;
          }));
          this.items = this.navigationService.items;
          this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__["trackByRoute"];
          this.icRadioButtonChecked = _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_2___default.a;
          this.icRadioButtonUnchecked = _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_3___default.a;
        }

        _createClass(SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.layoutService.collapseOpenSidenav();
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.layoutService.collapseCloseSidenav();
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
          }
        }]);

        return SidenavComponent;
      }();

      SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]));
      };

      SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavComponent,
        selectors: [["vex-sidenav"]],
        inputs: {
          collapsed: "collapsed"
        },
        decls: 13,
        vars: 17,
        consts: [[1, "sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "sidenav-toolbar", "flex-none", "flex", "items-center"], [1, "w-6", "select-none", "flex-none", 3, "src"], [1, "title", "ltr:pl-4", "rtl:pr-4", "select-none", "flex-auto"], ["class", "w-8 h-8 -mr-2 leading-none flex-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "flex-auto"], [1, "sidenav-items"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-icon-button", "", "type", "button", 1, "w-8", "h-8", "-mr-2", "leading-none", "flex-none", "hidden", "lg:block", 3, "click"], ["size", "14px", 3, "icIcon", 4, "ngIf"], ["size", "14px", 3, "icIcon"], [3, "item", "level"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() {
              return ctx.onMouseEnter();
            })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() {
              return ctx.onMouseLeave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidenavComponent_button_8_Template, 3, 2, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "vex-scrollbar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidenavComponent_vex_sidenav_item_12_Template, 1, 2, "vex-sidenav-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 9, ctx.collapsed && ctx.collapsedOpen$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx.title$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, ctx.showCollapsePin$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByRoute);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_9__["ScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconDirective"], _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_13__["SidenavItemComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".sidenav[_ngcontent-%COMP%] {\n  color: var(--sidenav-color);\n  height: 100%;\n  transition: var(--trans-ease-out);\n  width: var(--sidenav-width);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidenav-collapsed-width);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .sidenav-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-padding-start: var(--sidenav-item-padding);\n          padding-inline-start: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-icon {\n  -webkit-margin-end: var(--sidenav-item-padding);\n          margin-inline-end: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .subheading, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-badge, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-label {\n  opacity: 0;\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]     .subheading, .sidenav.collapsed[_ngcontent-%COMP%]     .item-badge, .sidenav.collapsed[_ngcontent-%COMP%]     .item-label {\n  transition: all 200ms var(--trans-ease-out-timing-function);\n}\n\n.sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--sidenav-width);\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--toolbar-height);\n  padding: 0 var(--padding);\n  white-space: nowrap;\n  width: 100%;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  transition: padding var(--trans-ease-out-duration) var(--trans-ease-out-timing-function), opacity var(--trans-ease-out-duration) var(--trans-ease-out-timing-function);\n}\n\n.sidenav-items[_ngcontent-%COMP%] {\n  padding-top: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtEQUFBO1VBQUEsaURBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO1VBQUEsOENBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNLQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWNvbG9yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkIHtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgLnNpZGVuYXYtdG9vbGJhciAudGl0bGUge1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLml0ZW0taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuc3ViaGVhZGluZywgLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5pdGVtLWJhZGdlLCAuc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLml0ZW0tbGFiZWwge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAuc3ViaGVhZGluZywgLnNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAuaXRlbS1iYWRnZSwgLnNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAuaXRlbS1sYWJlbCB7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQub3BlbiB7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcbn1cblxuLnNpZGVuYXYtdG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZyk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIC50aXRsZSB7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiksIG9wYWNpdHkgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG5cbi5zaWRlbmF2LWl0ZW1zIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmcpO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['./sidenav.component.scss']
          }]
        }], function () {
          return [{
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
          }, {
            type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
          }];
        }, {
          collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/sidenav/sidenav.module.ts":
    /*!***************************************************!*\
      !*** ./src/@vex/layout/sidenav/sidenav.module.ts ***!
      \***************************************************/

    /*! exports provided: SidenavModule */

    /***/
    function srcVexLayoutSidenavSidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavModule", function () {
        return SidenavModule;
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


      var _sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidenav.component */
      "./src/@vex/layout/sidenav/sidenav.component.ts");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidenav-item/sidenav-item.module */
      "./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts");
      /* harmony import */


      var _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/scrollbar/scrollbar.module */
      "./src/@vex/components/scrollbar/scrollbar.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var SidenavModule = function SidenavModule() {
        _classCallCheck(this, SidenavModule);
      };

      SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SidenavModule
      });
      SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SidenavModule_Factory(t) {
          return new (t || SidenavModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__["SidenavItemModule"], _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavModule, {
          declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__["SidenavItemModule"], _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"]],
          exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_4__["SidenavItemModule"], _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"]],
            exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: ToolbarNotificationsDropdownComponent */

    /***/
    function srcVexLayoutToolbarToolbarNotificationsToolbarNotificationsDropdownToolbarNotificationsDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsDropdownComponent", function () {
        return ToolbarNotificationsDropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-chevron-right */
      "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-notifications-off */
      "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-clear-all */
      "./node_modules/@iconify/icons-ic/twotone-clear-all.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-shopping-basket */
      "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-account-circle */
      "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-insert-chart */
      "./node_modules/@iconify/icons-ic/twotone-insert-chart.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-check-circle */
      "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-description */
      "./node_modules/@iconify/icons-ic/twotone-description.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-feedback */
      "./node_modules/@iconify/icons-ic/twotone-feedback.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-verified-user */
      "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-file-copy */
      "./node_modules/@iconify/icons-ic/twotone-file-copy.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../../pipes/relative-date-time/relative-date-time.pipe */
      "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");

      var _c0 = function _c0() {
        return [];
      };

      function ToolbarNotificationsDropdownComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ic-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "relativeDateTime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("read", notification_r2.read);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", notification_r2.icon)("ngClass", notification_r2.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r2.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, notification_r2.datetime));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r0.icChevronRight);
        }
      }

      var ToolbarNotificationsDropdownComponent = /*#__PURE__*/function () {
        function ToolbarNotificationsDropdownComponent() {
          _classCallCheck(this, ToolbarNotificationsDropdownComponent);

          this.notifications = [{
            id: '1',
            label: 'New Order Received',
            icon: _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_7___default.a,
            colorClass: 'text-primary',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 1
            })
          }, {
            id: '2',
            label: 'New customer has registered',
            icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_8___default.a,
            colorClass: 'text-orange',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 2
            })
          }, {
            id: '3',
            label: 'Campaign statistics are available',
            icon: _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_9___default.a,
            colorClass: 'text-purple',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 5
            })
          }, {
            id: '4',
            label: 'Project has been approved',
            icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_10___default.a,
            colorClass: 'text-green',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 9
            })
          }, {
            id: '5',
            label: 'Client reports are available',
            icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11___default.a,
            colorClass: 'text-primary',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 30
            })
          }, {
            id: '6',
            label: 'New review received',
            icon: _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_12___default.a,
            colorClass: 'text-orange',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 40
            }),
            read: true
          }, {
            id: '7',
            label: '22 verified registrations',
            icon: _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_13___default.a,
            colorClass: 'text-green',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 60
            })
          }, {
            id: '8',
            label: 'New files available',
            icon: _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_14___default.a,
            colorClass: 'text-amber',
            datetime: luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local().minus({
              hour: 90
            })
          }];
          this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default.a;
          this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_4___default.a;
          this.icClearAll = _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_6___default.a;
          this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_5___default.a;
          this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackById"];
        }

        _createClass(ToolbarNotificationsDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToolbarNotificationsDropdownComponent;
      }();

      ToolbarNotificationsDropdownComponent.ɵfac = function ToolbarNotificationsDropdownComponent_Factory(t) {
        return new (t || ToolbarNotificationsDropdownComponent)();
      };

      ToolbarNotificationsDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarNotificationsDropdownComponent,
        selectors: [["vex-toolbar-notifications-dropdown"]],
        decls: 24,
        vars: 7,
        consts: [[1, "dropdown"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-header"], [1, "dropdown-heading"], [1, "dropdown-subheading"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "notifications-header-icon", 3, "icIcon"], [1, "dropdown-content"], ["class", "notification", "fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 3, "read", "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "dropdown-footer"], ["color", "primary", "mat-button", "", "type", "button"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], [3, "icIcon"], ["fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 1, "notification", 3, "routerLink"], ["fxFlex", "none", "size", "24px", 1, "notification-icon", 3, "icon", "ngClass"], ["fxFlex", "auto"], [1, "notification-label"], [1, "notification-description"], ["fxFlex", "none", 1, "notification-chevron", 3, "icIcon"]],
        template: function ToolbarNotificationsDropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarNotificationsDropdownComponent_a_10_Template, 9, 11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MARK ALL AS READ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mark all as read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Disable Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have ", ctx.notifications.length, " new notifications.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSettings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icClearAll);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icNotificationsOff);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultClassDirective"]],
        pipes: [_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_24__["RelativeDateTimePipe"]],
        styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  box-shadow: var(--elevation-z6);\n  color: rgb(var(--color-primary-contrast));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding);\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  -webkit-margin-end: var(--padding);\n          margin-inline-end: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7VUFBQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo2KTtcbiAgY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KSk7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAyOTFweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarNotificationsDropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-toolbar-notifications-dropdown',
            templateUrl: './toolbar-notifications-dropdown.component.html',
            styleUrls: ['./toolbar-notifications-dropdown.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ToolbarNotificationsComponent */

    /***/
    function srcVexLayoutToolbarToolbarNotificationsToolbarNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsComponent", function () {
        return ToolbarNotificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-notifications-active */
      "./node_modules/@iconify/icons-ic/twotone-notifications-active.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/popover/popover.service */
      "./src/@vex/components/popover/popover.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var _c0 = ["originRef"];

      var ToolbarNotificationsComponent = /*#__PURE__*/function () {
        function ToolbarNotificationsComponent(popover, cd) {
          _classCallCheck(this, ToolbarNotificationsComponent);

          this.popover = popover;
          this.cd = cd;
          this.icNotificationsActive = _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_2___default.a;
        }

        _createClass(ToolbarNotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPopover",
          value: function showPopover() {
            var _this14 = this;

            this.dropdownOpen = true;
            this.cd.markForCheck();
            var popoverRef = this.popover.open({
              content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarNotificationsDropdownComponent"],
              origin: this.originRef,
              offsetY: 12,
              position: [{
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
              }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
              }]
            });
            popoverRef.afterClosed$.subscribe(function () {
              _this14.dropdownOpen = false;

              _this14.cd.markForCheck();
            });
          }
        }]);

        return ToolbarNotificationsComponent;
      }();

      ToolbarNotificationsComponent.ɵfac = function ToolbarNotificationsComponent_Factory(t) {
        return new (t || ToolbarNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__["PopoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ToolbarNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarNotificationsComponent,
        selectors: [["vex-toolbar-notifications"]],
        viewQuery: function ToolbarNotificationsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originRef = _t.first);
          }
        },
        decls: 3,
        vars: 3,
        consts: [["mat-icon-button", "", "type", "button", 1, "button", 3, "click"], ["originRef", ""], [3, "icIcon"]],
        template: function ToolbarNotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarNotificationsComponent_Template_button_click_0_listener() {
              return ctx.showPopover();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.dropdownOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icNotificationsActive);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconDirective"]],
        styles: [".button.active[_ngcontent-%COMP%] {\n  background: var(--background-hover);\n}\n\n.button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--toolbar-icon-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvdG9vbGJhci90b29sYmFyLW5vdGlmaWNhdGlvbnMvdG9vbGJhci1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmJ1dHRvbiAubWF0LWljb24ge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWNvbG9yKTtcbn0iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarNotificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-toolbar-notifications',
            templateUrl: './toolbar-notifications.component.html',
            styleUrls: ['./toolbar-notifications.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__["PopoverService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          originRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['originRef', {
              "static": true,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ToolbarNotificationsModule */

    /***/
    function srcVexLayoutToolbarToolbarNotificationsToolbarNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsModule", function () {
        return ToolbarNotificationsModule;
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


      var _toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-notifications.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/popover/popover.module */
      "./src/@vex/components/popover/popover.module.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipes/relative-date-time/relative-date-time.module */
      "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ToolbarNotificationsModule = function ToolbarNotificationsModule() {
        _classCallCheck(this, ToolbarNotificationsModule);
      };

      ToolbarNotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToolbarNotificationsModule
      });
      ToolbarNotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToolbarNotificationsModule_Factory(t) {
          return new (t || ToolbarNotificationsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarNotificationsModule, {
          declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarNotificationsComponent"], _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarNotificationsDropdownComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"]],
          exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarNotificationsComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarNotificationsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarNotificationsComponent"], _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarNotificationsDropdownComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"]],
            exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarNotificationsComponent"]],
            entryComponents: [_toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarNotificationsDropdownComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ToolbarSearchComponent */

    /***/
    function srcVexLayoutToolbarToolbarSearchToolbarSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarSearchComponent", function () {
        return ToolbarSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-search */
      "./node_modules/@iconify/icons-ic/twotone-search.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

      var _c0 = ["input"];

      var ToolbarSearchComponent = /*#__PURE__*/function () {
        function ToolbarSearchComponent(cd) {
          _classCallCheck(this, ToolbarSearchComponent);

          this.cd = cd;
          this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default.a;
        }

        _createClass(ToolbarSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "open",
          value: function open() {
            var _this15 = this;

            this.isOpen = true;
            this.cd.markForCheck();
            setTimeout(function () {
              _this15.input.nativeElement.focus();
            }, 100);
          }
        }, {
          key: "close",
          value: function close() {
            this.isOpen = false;
            this.cd.markForCheck();
          }
        }]);

        return ToolbarSearchComponent;
      }();

      ToolbarSearchComponent.ɵfac = function ToolbarSearchComponent_Factory(t) {
        return new (t || ToolbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ToolbarSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarSearchComponent,
        selectors: [["vex-toolbar-search"]],
        viewQuery: function ToolbarSearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        decls: 8,
        vars: 3,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-icon-button", "", 3, "click"], [3, "icIcon"], ["appearance", "outline", "fxFlex", "auto", 1, "search"], ["matInput", "", 3, "blur"], ["input", ""]],
        template: function ToolbarSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarSearchComponent_Template_button_click_1_listener() {
              return ctx.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search\u2026");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ToolbarSearchComponent_Template_input_blur_6_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("search-open", ctx.isOpen);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"]],
        styles: [".mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  opacity: 0;\n  overflow: hidden;\n  transition: var(--trans-ease-in-out);\n  visibility: hidden;\n  width: 0;\n}\n\n.search.search-open[_ngcontent-%COMP%] {\n  margin-left: var(--padding-8);\n  margin-right: var(--padding-8);\n  opacity: 1;\n  visibility: visible;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tb3V0KTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMDtcbn1cblxuLnNlYXJjaC5zZWFyY2gtb3BlbiB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdpZHRoOiAyNTBweDtcbn0iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-toolbar-search',
            templateUrl: './toolbar-search.component.html',
            styleUrls: ['./toolbar-search.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ToolbarSearchModule */

    /***/
    function srcVexLayoutToolbarToolbarSearchToolbarSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarSearchModule", function () {
        return ToolbarSearchModule;
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


      var _toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-search.component */
      "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ToolbarSearchModule = function ToolbarSearchModule() {
        _classCallCheck(this, ToolbarSearchModule);
      };

      ToolbarSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToolbarSearchModule
      });
      ToolbarSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToolbarSearchModule_Factory(t) {
          return new (t || ToolbarSearchModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarSearchModule, {
          declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
          exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarSearchModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
            exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarSearchComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ToolbarUserDropdownComponent */

    /***/
    function srcVexLayoutToolbarToolbarUserToolbarUserDropdownToolbarUserDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarUserDropdownComponent", function () {
        return ToolbarUserDropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../utils/track-by */
      "./src/@vex/utils/track-by.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person */
      "./node_modules/@iconify/icons-ic/twotone-person.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-account-circle */
      "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_move_to_inbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-move-to-inbox */
      "./node_modules/@iconify/icons-ic/twotone-move-to-inbox.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_move_to_inbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_move_to_inbox__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-list-alt */
      "./node_modules/@iconify/icons-ic/twotone-list-alt.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-table-chart */
      "./node_modules/@iconify/icons-ic/twotone-table-chart.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-check-circle */
      "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-access-time */
      "./node_modules/@iconify/icons-ic/twotone-access-time.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-do-not-disturb */
      "./node_modules/@iconify/icons-ic/twotone-do-not-disturb.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-offline-bolt */
      "./node_modules/@iconify/icons-ic/twotone-offline-bolt.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-chevron-right */
      "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-arrow-drop-down */
      "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-business */
      "./node_modules/@iconify/icons-ic/twotone-business.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-verified-user */
      "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-lock */
      "./node_modules/@iconify/icons-ic/twotone-lock.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-notifications-off */
      "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var _components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../components/popover/popover-ref */
      "./src/@vex/components/popover/popover-ref.ts");
      /* harmony import */


      var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../../app/auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

      function ToolbarUserDropdownComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_a_10_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r5.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", item_r5.icon)("ngClass", item_r5.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r0.icChevronRight);
        }
      }

      function ToolbarUserDropdownComponent_ng_container_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", status_r8.icon)("ngClass", status_r8.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r8.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r9.icArrowDropDown);
        }
      }

      function ToolbarUserDropdownComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarUserDropdownComponent_ng_container_13_span_1_Template, 5, 4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var status_r8 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", status_r8 === ctx_r1.activeStatus);
        }
      }

      function ToolbarUserDropdownComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var status_r11 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.setStatus(status_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ic-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", status_r11.icon)("ngClass", status_r11.colorClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r11.label);
        }
      }

      var _c0 = function _c0() {
        return ["/login"];
      };

      var ToolbarUserDropdownComponent = /*#__PURE__*/function () {
        function ToolbarUserDropdownComponent(cd, popoverRef, authService) {
          _classCallCheck(this, ToolbarUserDropdownComponent);

          this.cd = cd;
          this.popoverRef = popoverRef;
          this.authService = authService;
          this.items = [{
            id: '1',
            icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_4___default.a,
            label: 'My Profile',
            description: 'Personal Information',
            colorClass: 'text-teal',
            route: '/apps/social'
          }, {
            id: '2',
            icon: _iconify_icons_ic_twotone_move_to_inbox__WEBPACK_IMPORTED_MODULE_5___default.a,
            label: 'My Inbox',
            description: 'Messages & Latest News',
            colorClass: 'text-primary',
            route: '/apps/chat'
          }, {
            id: '3',
            icon: _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6___default.a,
            label: 'My Projects',
            description: 'Tasks & Active Projects',
            colorClass: 'text-amber',
            route: '/apps/scrumboard'
          }, {
            id: '4',
            icon: _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7___default.a,
            label: 'Billing Information',
            description: 'Pricing & Current Plan',
            colorClass: 'text-purple',
            route: '/pages/pricing'
          }];
          this.statuses = [{
            id: 'online',
            label: 'Online',
            icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default.a,
            colorClass: 'text-green'
          }, {
            id: 'away',
            label: 'Away',
            icon: _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9___default.a,
            colorClass: 'text-orange'
          }, {
            id: 'dnd',
            label: 'Do not disturb',
            icon: _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10___default.a,
            colorClass: 'text-red'
          }, {
            id: 'offline',
            label: 'Offline',
            icon: _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11___default.a,
            colorClass: 'text-gray'
          }];
          this.activeStatus = this.statuses[0];
          this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__["trackById"];
          this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default.a;
          this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_3___default.a;
          this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12___default.a;
          this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default.a;
          this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14___default.a;
          this.icVerifiedUser = _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15___default.a;
          this.icLock = _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16___default.a;
          this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17___default.a;
        }

        _createClass(ToolbarUserDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setStatus",
          value: function setStatus(status) {
            this.activeStatus = status;
            this.cd.markForCheck();
          }
        }, {
          key: "close",
          value: function close() {
            this.authService.logout();
            this.popoverRef.close();
          }
        }]);

        return ToolbarUserDropdownComponent;
      }();

      ToolbarUserDropdownComponent.ɵfac = function ToolbarUserDropdownComponent_Factory(t) {
        return new (t || ToolbarUserDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_18__["PopoverRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"]));
      };

      ToolbarUserDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarUserDropdownComponent,
        selectors: [["vex-toolbar-user-dropdown"]],
        decls: 37,
        vars: 16,
        consts: [[1, "dropdown"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-header"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "dropdown-heading-icon"], [3, "icIcon"], [1, "dropdown-heading"], ["mat-icon-button", "", "matTooltip", "Settings", "matTooltipPosition", "before", "type", "button", 3, "matMenuTriggerFor"], [1, "notifications-header-icon", 3, "icIcon"], [1, "dropdown-content"], ["class", "notification", "fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 3, "routerLink", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-footer"], ["mat-button", "", "type", "button", 1, "dropdown-footer-select", 3, "matMenuTriggerFor"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["color", "primary", "mat-button", "", 3, "routerLink", "click"], ["xPosition", "before", "yPosition", "below"], ["statusMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 1, "notification", 3, "routerLink", "click"], ["fxFlex", "none", 1, "notification-icon", 3, "icIcon", "ngClass"], ["fxFlex", "auto"], [1, "notification-label"], [1, "notification-description"], ["fxFlex", "none", 1, "notification-chevron", 3, "icIcon"], [4, "ngIf"], [3, "icIcon", "ngClass"], [1, "dropdown-footer-select-caret", 3, "icIcon"], ["mat-menu-item", "", 3, "click"], ["inline", "true", "size", "24px", 3, "icon", "ngClass"]],
        template: function ToolbarUserDropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "David Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarUserDropdownComponent_a_10_Template, 8, 6, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToolbarUserDropdownComponent_ng_container_13_Template, 2, 1, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_a_click_14_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LOGOUT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ToolbarUserDropdownComponent_button_18_Template, 4, 3, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", 14, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Change Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Disable Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icPerson);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSettings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icBusiness);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icVerifiedUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icLock);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icNotificationsOff);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__["IconDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"]],
        styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  box-shadow: var(--elevation-z6);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: var(--padding-12);\n  padding: var(--padding-8);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%] {\n  padding-left: var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:not(.dropdown-footer-select-caret) {\n  margin-right: var(--padding-8);\n  vertical-align: -7px !important;\n}\n\n.dropdown-footer-select-caret[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-right: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci11c2VyL3Rvb2xiYXItdXNlci1kcm9wZG93bi90b29sYmFyLXVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xuICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpKTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Nik7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nLWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5OXB4O1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctMTIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpO1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHZlcnRpY2FsLWFsaWduOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0LWNhcmV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogLTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xufVxuXG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarUserDropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-toolbar-user-dropdown',
            templateUrl: './toolbar-user-dropdown.component.html',
            styleUrls: ['./toolbar-user-dropdown.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_18__["PopoverRef"]
          }, {
            type: _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts":
    /*!************************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts ***!
      \************************************************************************/

    /*! exports provided: ToolbarUserComponent */

    /***/
    function srcVexLayoutToolbarToolbarUserToolbarUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarUserComponent", function () {
        return ToolbarUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person */
      "./node_modules/@iconify/icons-ic/twotone-person.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/popover/popover.service */
      "./src/@vex/components/popover/popover.service.ts");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ToolbarUserComponent = /*#__PURE__*/function () {
        function ToolbarUserComponent(popover, cd) {
          _classCallCheck(this, ToolbarUserComponent);

          this.popover = popover;
          this.cd = cd;
          this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_2___default.a;
        }

        _createClass(ToolbarUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPopover",
          value: function showPopover(originRef) {
            var _this16 = this;

            this.dropdownOpen = true;
            this.cd.markForCheck();
            var popoverRef = this.popover.open({
              content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarUserDropdownComponent"],
              origin: originRef,
              offsetY: 12,
              position: [{
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
              }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
              }]
            });
            popoverRef.afterClosed$.subscribe(function () {
              _this16.dropdownOpen = false;

              _this16.cd.markForCheck();
            });
          }
        }]);

        return ToolbarUserComponent;
      }();

      ToolbarUserComponent.ɵfac = function ToolbarUserComponent_Factory(t) {
        return new (t || ToolbarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__["PopoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ToolbarUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarUserComponent,
        selectors: [["vex-toolbar-user"]],
        decls: 6,
        vars: 3,
        consts: [["matRipple", "", 1, "flex", "items-center", "rounded", "cursor-pointer", "relative", "trans-ease-out", "select-none", "py-1", "pr-1", "pl-3", "hover:bg-hover", 3, "click"], ["originRef", ""], ["fxHide.xs", "", 1, "body-1", "font-medium", "leading-snug", "ltr:mr-3", "rtl:ml-3"], [1, "rounded-full", "h-9", "w-9", "flex", "items-center", "justify-center", "text-primary", "bg-primary-light"], [3, "icIcon"]],
        template: function ToolbarUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarUserComponent_Template_div_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.showPopover(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "David Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icPerson);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-toolbar-user',
            templateUrl: './toolbar-user.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_3__["PopoverService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ToolbarUserModule */

    /***/
    function srcVexLayoutToolbarToolbarUserToolbarUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarUserModule", function () {
        return ToolbarUserModule;
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


      var _toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar-user.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts");
      /* harmony import */


      var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipes/relative-date-time/relative-date-time.module */
      "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

      var ToolbarUserModule = function ToolbarUserModule() {
        _classCallCheck(this, ToolbarUserModule);
      };

      ToolbarUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToolbarUserModule
      });
      ToolbarUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToolbarUserModule_Factory(t) {
          return new (t || ToolbarUserModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarUserModule, {
          declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarUserComponent"], _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserDropdownComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]],
          exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarUserComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarUserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarUserComponent"], _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserDropdownComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_9__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"]],
            exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarUserComponent"]],
            entryComponents: [_toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserDropdownComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar.component.ts":
    /*!******************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar.component.ts ***!
      \******************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function srcVexLayoutToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-bookmarks */
      "./node_modules/@iconify/icons-ic/twotone-bookmarks.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify/icons-emojione/flag-for-flag-united-states */
      "./node_modules/@iconify/icons-emojione/flag-for-flag-united-states.js");
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-emojione/flag-for-flag-germany */
      "./node_modules/@iconify/icons-emojione/flag-for-flag-germany.js");
      /* harmony import */


      var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-menu */
      "./node_modules/@iconify/icons-ic/twotone-menu.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person-add */
      "./node_modules/@iconify/icons-ic/twotone-person-add.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assignment-turned-in */
      "./node_modules/@iconify/icons-ic/twotone-assignment-turned-in.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-ballot */
      "./node_modules/@iconify/icons-ic/twotone-ballot.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-description */
      "./node_modules/@iconify/icons-ic/twotone-description.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assignment */
      "./node_modules/@iconify/icons-ic/twotone-assignment.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-receipt */
      "./node_modules/@iconify/icons-ic/twotone-receipt.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-done-all */
      "./node_modules/@iconify/icons-ic/twotone-done-all.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-arrow-drop-down */
      "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../components/mega-menu/mega-menu.component */
      "./src/@vex/components/mega-menu/mega-menu.component.ts");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-search */
      "./node_modules/@iconify/icons-ic/twotone-search.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../components/popover/popover.service */
      "./src/@vex/components/popover/popover.service.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../directives/container/container.directive */
      "./src/@vex/directives/container/container.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_notifications_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./toolbar-notifications/toolbar-notifications.component */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./toolbar-user/toolbar-user.component */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.component */
      "./src/@vex/components/navigation-item/navigation-item.component.ts");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../navigation/navigation.component */
      "./src/@vex/layout/navigation/navigation.component.ts");

      var _c0 = function _c0() {
        return ["/"];
      };

      function ToolbarComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VEX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r0.mobileQuery);
        }
      }

      function ToolbarComponent_div_5_vex_navigation_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation-item", 20);
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r5);
        }
      }

      function ToolbarComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_div_5_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r1.mobileQuery);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navigationItems);
        }
      }

      function ToolbarComponent_vex_navigation_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-navigation", 21);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx_r3.mobileQuery);
        }
      }

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent(layoutService, configService, navigationService, popoverService) {
          _classCallCheck(this, ToolbarComponent);

          this.layoutService = layoutService;
          this.configService = configService;
          this.navigationService = navigationService;
          this.popoverService = popoverService;
          this.navigationItems = this.navigationService.items;
          this.isHorizontalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.layout === 'horizontal';
          }));
          this.isVerticalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.layout === 'vertical';
          }));
          this.isNavbarInToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.navbar.position === 'in-toolbar';
          }));
          this.isNavbarBelowToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
            return config.navbar.position === 'below-toolbar';
          }));
          this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15___default.a;
          this.icBookmarks = _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1___default.a;
          this.emojioneUS = _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_2___default.a;
          this.emojioneDE = _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_3___default.a;
          this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_4___default.a;
          this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_6___default.a;
          this.icAssignmentTurnedIn = _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_7___default.a;
          this.icBallot = _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_8___default.a;
          this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9___default.a;
          this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_10___default.a;
          this.icReceipt = _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_11___default.a;
          this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default.a;
          this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default.a;
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openQuickpanel",
          value: function openQuickpanel() {
            this.layoutService.openQuickpanel();
          }
        }, {
          key: "openSidenav",
          value: function openSidenav() {
            this.layoutService.openSidenav();
          }
        }, {
          key: "openMegaMenu",
          value: function openMegaMenu(origin) {
            this.popoverService.open({
              content: _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_14__["MegaMenuComponent"],
              origin: origin,
              position: [{
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
              }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
              }]
            });
          }
        }, {
          key: "openSearch",
          value: function openSearch() {
            this.layoutService.openSearch();
          }
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_17__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_18__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_19__["PopoverService"]));
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["vex-toolbar"]],
        hostVars: 2,
        hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shadow-b", ctx.hasShadow);
          }
        },
        inputs: {
          mobileQuery: "mobileQuery",
          hasShadow: "hasShadow"
        },
        decls: 36,
        vars: 21,
        consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "toolbar", "w-full", "px-gutter"], ["mat-icon-button", "", "type", "button", 3, "fxHide", "click"], [3, "icIcon"], ["class", "ltr:mr-4 rtl:ml-4 block", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "routerLink", 4, "ngIf"], ["class", "px-gutter", "fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "fxHide", 4, "ngIf"], ["fxFlex", ""], [1, "-mx-1", "flex", "items-center"], [1, "px-1"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "hidden", "px-1"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["overlapTrigger", "false", "xPosition", "before", "yPosition", "below"], ["languageMenu", "matMenu"], ["mat-menu-item", ""], [3, "fxHide", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "ltr:mr-4", "rtl:ml-4", "block", 3, "routerLink"], ["src", "assets/img/demo/logo.svg", 1, "w-8", "select-none"], [1, "title", "ltr:pl-4", "rtl:pr-4", "m-0", "select-none", 3, "fxHide"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-gutter", 3, "fxHide"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [3, "fxHide"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_1_listener() {
              return ctx.openSidenav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_a_3_Template, 4, 3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_div_5_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_11_listener() {
              return ctx.openSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "vex-toolbar-notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_16_listener() {
              return ctx.openQuickpanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "vex-toolbar-user");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-menu", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "German");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ToolbarComponent_vex_navigation_33_Template, 1, 1, "vex-navigation", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", !ctx.mobileQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, ctx.isVerticalLayout$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, ctx.isVerticalLayout$) && ctx.isNavbarInToolbar$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icBookmarks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.emojioneUS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.emojioneUS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.emojioneDE);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 19, ctx.isVerticalLayout$) && ctx.isNavbarBelowToolbar$));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__["ContainerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_25__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _toolbar_notifications_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarNotificationsComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuTrigger"], _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_29__["ToolbarUserComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_31__["NavigationItemComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_32__["NavigationComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  background: var(--toolbar-background);\n  box-sizing: border-box;\n  color: var(--toolbar-color);\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--toolbar-z-index);\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: var(--toolbar-height);\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: var(--toolbar-icon-color);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--toolbar-color);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS10b29sYmFyLXotaW5kZXgpO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xufVxuXG4ubWF0LWljb24ge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWNvbG9yKTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss']
          }]
        }], function () {
          return [{
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"]
          }, {
            type: _services_config_service__WEBPACK_IMPORTED_MODULE_17__["ConfigService"]
          }, {
            type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_18__["NavigationService"]
          }, {
            type: _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_19__["PopoverService"]
          }];
        }, {
          mobileQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hasShadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.shadow-b']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/@vex/layout/toolbar/toolbar.module.ts":
    /*!***************************************************!*\
      !*** ./src/@vex/layout/toolbar/toolbar.module.ts ***!
      \***************************************************/

    /*! exports provided: ToolbarModule */

    /***/
    function srcVexLayoutToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
        return ToolbarModule;
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


      var _toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar.component */
      "./src/@vex/layout/toolbar/toolbar.component.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./toolbar-notifications/toolbar-notifications.module */
      "./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts");
      /* harmony import */


      var _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./toolbar-user/toolbar-user.module */
      "./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts");
      /* harmony import */


      var _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./toolbar-search/toolbar-search.module */
      "./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
      /* harmony import */


      var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../navigation/navigation.module */
      "./src/@vex/layout/navigation/navigation.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../components/navigation-item/navigation-item.module */
      "./src/@vex/components/navigation-item/navigation-item.module.ts");
      /* harmony import */


      var _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../components/mega-menu/mega-menu.module */
      "./src/@vex/components/mega-menu/mega-menu.module.ts");
      /* harmony import */


      var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../directives/container/container.module */
      "./src/@vex/directives/container/container.module.ts");

      var ToolbarModule = function ToolbarModule() {
        _classCallCheck(this, ToolbarModule);
      };

      ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToolbarModule
      });
      ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToolbarModule_Factory(t) {
          return new (t || ToolbarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__["ToolbarNotificationsModule"], _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarUserModule"], _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarSearchModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__["NavigationItemModule"], _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_15__["MegaMenuModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarModule, {
          declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__["ToolbarNotificationsModule"], _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarUserModule"], _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarSearchModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__["NavigationItemModule"], _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_15__["MegaMenuModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]],
          exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_8__["ToolbarNotificationsModule"], _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarUserModule"], _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarSearchModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_14__["NavigationItemModule"], _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_15__["MegaMenuModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]],
            exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts":
    /*!************************************************************************!*\
      !*** ./src/@vex/pipes/relative-date-time/relative-date-time.module.ts ***!
      \************************************************************************/

    /*! exports provided: RelativeDateTimeModule */

    /***/
    function srcVexPipesRelativeDateTimeRelativeDateTimeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelativeDateTimeModule", function () {
        return RelativeDateTimeModule;
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


      var _relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relative-date-time.pipe */
      "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");

      var RelativeDateTimeModule = function RelativeDateTimeModule() {
        _classCallCheck(this, RelativeDateTimeModule);
      };

      RelativeDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RelativeDateTimeModule
      });
      RelativeDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RelativeDateTimeModule_Factory(t) {
          return new (t || RelativeDateTimeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelativeDateTimeModule, {
          declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTimePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTimePipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeDateTimeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTimePipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeDateTimePipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts":
    /*!**********************************************************************!*\
      !*** ./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts ***!
      \**********************************************************************/

    /*! exports provided: RelativeDateTimePipe */

    /***/
    function srcVexPipesRelativeDateTimeRelativeDateTimePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelativeDateTimePipe", function () {
        return RelativeDateTimePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);

      var RelativeDateTimePipe = /*#__PURE__*/function () {
        function RelativeDateTimePipe() {
          _classCallCheck(this, RelativeDateTimePipe);
        }

        _createClass(RelativeDateTimePipe, [{
          key: "transform",
          value: function transform(value) {
            if (!value) {
              return;
            }

            if (!(value instanceof luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"])) {
              value = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromISO(value);
            }

            return value.toRelative();
          }
        }]);

        return RelativeDateTimePipe;
      }();

      RelativeDateTimePipe.ɵfac = function RelativeDateTimePipe_Factory(t) {
        return new (t || RelativeDateTimePipe)();
      };

      RelativeDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "relativeDateTime",
        type: RelativeDateTimePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeDateTimePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'relativeDateTime'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/services/config.service.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/services/config.service.ts ***!
      \*********************************************/

    /*! exports provided: ConfigService */

    /***/
    function srcVexServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/merge-deep */
      "./src/@vex/utils/merge-deep.ts");
      /* harmony import */


      var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./configs */
      "./src/@vex/services/configs.ts");
      /* harmony import */


      var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");
      /* harmony import */


      var _layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout.service */
      "./src/@vex/services/layout.service.ts");

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService(document, layoutService) {
          var _this17 = this;

          _classCallCheck(this, ConfigService);

          this.document = document;
          this.layoutService = layoutService;
          this.defaultConfig = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_5__["ConfigName"].apollo;
          this.configs = _configs__WEBPACK_IMPORTED_MODULE_4__["configs"];
          this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.configs.find(function (c) {
            return c.id === _this17.defaultConfig;
          }));
          this.config$ = this._configSubject.asObservable();
          this.config$.subscribe(function (config) {
            return _this17._updateConfig(config);
          });
        }

        _createClass(ConfigService, [{
          key: "setConfig",
          value: function setConfig(config) {
            var settings = this.configs.find(function (c) {
              return c.id === config;
            });

            if (settings) {
              this._configSubject.next(settings);
            }
          }
        }, {
          key: "updateConfig",
          value: function updateConfig(config) {
            this._configSubject.next(Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_3__["mergeDeep"])(Object.assign({}, this._configSubject.getValue()), config));
          }
        }, {
          key: "_updateConfig",
          value: function _updateConfig(config) {
            var body = this.document.body;
            this.configs.forEach(function (c) {
              if (body.classList.contains(c.id)) {
                body.classList.remove(c.id);
              }
            });
            body.classList.add(config.id);
            config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav(); // Workaround so charts and other externals know they have to resize on Layout switch

            if (window) {
              window.dispatchEvent(new Event('resize'));
              setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
              }, 200);
            }
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]));
      };

      ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfigService,
        factory: ConfigService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/services/configs.ts":
    /*!**************************************!*\
      !*** ./src/@vex/services/configs.ts ***!
      \**************************************/

    /*! exports provided: configs */

    /***/
    function srcVexServicesConfigsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configs", function () {
        return configs;
      });
      /* harmony import */


      var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/merge-deep */
      "./src/@vex/utils/merge-deep.ts");
      /* harmony import */


      var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../interfaces/config-name.model */
      "./src/@vex/interfaces/config-name.model.ts");

      var defaultConfig = {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].apollo,
        name: 'Apollo',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
        layout: 'horizontal',
        boxed: false,
        sidenav: {
          title: 'Citizen Roster',
          imageUrl: 'assets/img/demo/logo.svg',
          showCollapsePin: true,
          state: 'expanded'
        },
        toolbar: {
          fixed: true
        },
        navbar: {
          position: 'below-toolbar'
        },
        footer: {
          visible: true,
          fixed: true
        }
      };
      var configs = [defaultConfig, Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].hermes,
        name: 'Hermes',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
          fixed: false
        },
        footer: {
          fixed: false
        }
      }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].ares,
        name: 'Ares',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
        toolbar: {
          fixed: false
        },
        navbar: {
          position: 'in-toolbar'
        },
        footer: {
          fixed: false
        }
      }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].zeus,
        name: 'Zeus',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
        sidenav: {
          state: 'collapsed'
        }
      }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__["ConfigName"].ikaros,
        name: 'Ikaros',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
          fixed: false
        },
        navbar: {
          position: 'in-toolbar'
        },
        footer: {
          fixed: false
        }
      })];
      /***/
    },

    /***/
    "./src/@vex/services/layout.service.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/services/layout.service.ts ***!
      \*********************************************/

    /*! exports provided: LayoutService */

    /***/
    function srcVexServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
        return LayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");

      var LayoutService = /*#__PURE__*/function () {
        function LayoutService(router, breakpointObserver) {
          var _this18 = this;

          _classCallCheck(this, LayoutService);

          this.router = router;
          this.breakpointObserver = breakpointObserver;
          this.isDesktop$ = this.breakpointObserver.observe("(min-width: 1280px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.matches;
          }));
          this.ltLg$ = this.breakpointObserver.observe("(max-width: 1279px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.matches;
          }));
          this.gtMd$ = this.breakpointObserver.observe("(min-width: 960px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.matches;
          }));
          this.ltMd$ = this.breakpointObserver.observe("(max-width: 959px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.matches;
          }));
          this.gtSm$ = this.breakpointObserver.observe("(min-width: 600px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.matches;
          }));
          this.isMobile$ = this.breakpointObserver.observe("(max-width: 599px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.matches;
          }));
          this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
          this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
          this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
          this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
          this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
          this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.searchOpen$ = this._searchOpen.asObservable();

          this.isLtLg = function () {
            return _this18.breakpointObserver.isMatched("(max-width: 1279px)");
          };

          this.isMobile = function () {
            return _this18.breakpointObserver.isMatched("(max-width: 599px)");
          };
        }

        _createClass(LayoutService, [{
          key: "openQuickpanel",
          value: function openQuickpanel() {
            this._quickpanelOpenSubject.next(true);
          }
        }, {
          key: "closeQuickpanel",
          value: function closeQuickpanel() {
            this._quickpanelOpenSubject.next(false);
          }
        }, {
          key: "openSidenav",
          value: function openSidenav() {
            this._sidenavOpenSubject.next(true);
          }
        }, {
          key: "closeSidenav",
          value: function closeSidenav() {
            this._sidenavOpenSubject.next(false);
          }
        }, {
          key: "collapseSidenav",
          value: function collapseSidenav() {
            this._sidenavCollapsedSubject.next(true);
          }
        }, {
          key: "expandSidenav",
          value: function expandSidenav() {
            this._sidenavCollapsedSubject.next(false);
          }
        }, {
          key: "collapseOpenSidenav",
          value: function collapseOpenSidenav() {
            this._sidenavCollapsedOpenSubject.next(true);
          }
        }, {
          key: "collapseCloseSidenav",
          value: function collapseCloseSidenav() {
            this._sidenavCollapsedOpenSubject.next(false);
          }
        }, {
          key: "openConfigpanel",
          value: function openConfigpanel() {
            this._configpanelOpenSubject.next(true);
          }
        }, {
          key: "closeConfigpanel",
          value: function closeConfigpanel() {
            this._configpanelOpenSubject.next(false);
          }
        }, {
          key: "openSearch",
          value: function openSearch() {
            this._searchOpen.next(true);
          }
        }, {
          key: "closeSearch",
          value: function closeSearch() {
            this._searchOpen.next(false);
          }
        }, {
          key: "enableRTL",
          value: function enableRTL() {
            this.router.navigate([], {
              queryParams: {
                rtl: 'true'
              }
            });
          }
        }, {
          key: "disableRTL",
          value: function disableRTL() {
            this.router.navigate([], {
              queryParams: {
                rtl: 'false'
              }
            });
          }
        }]);

        return LayoutService;
      }();

      LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]));
      };

      LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutService,
        factory: LayoutService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/services/navigation.service.ts":
    /*!*************************************************!*\
      !*** ./src/@vex/services/navigation.service.ts ***!
      \*************************************************/

    /*! exports provided: NavigationService */

    /***/
    function srcVexServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService() {
          _classCallCheck(this, NavigationService);

          this.items = [];
          this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.openChange$ = this._openChangeSubject.asObservable();
        }

        _createClass(NavigationService, [{
          key: "triggerOpenChange",
          value: function triggerOpenChange(item) {
            this._openChangeSubject.next(item);
          }
        }, {
          key: "isLink",
          value: function isLink(item) {
            return item.type === 'link';
          }
        }, {
          key: "isDropdown",
          value: function isDropdown(item) {
            return item.type === 'dropdown';
          }
        }, {
          key: "isSubheading",
          value: function isSubheading(item) {
            return item.type === 'subheading';
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)();
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/services/search.service.ts":
    /*!*********************************************!*\
      !*** ./src/@vex/services/search.service.ts ***!
      \*********************************************/

    /*! exports provided: SearchService */

    /***/
    function srcVexServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchService", function () {
        return SearchService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var SearchService = function SearchService() {
        _classCallCheck(this, SearchService);

        this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.valueChanges$ = this.valueChangesSubject.asObservable();
        this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.submit$ = this.submitSubject.asObservable();
        this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isOpen$ = this.isOpenSubject.asObservable();
      };

      SearchService.ɵfac = function SearchService_Factory(t) {
        return new (t || SearchService)();
      };

      SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SearchService,
        factory: SearchService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/services/splash-screen.service.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/services/splash-screen.service.ts ***!
      \****************************************************/

    /*! exports provided: SplashScreenService */

    /***/
    function srcVexServicesSplashScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenService", function () {
        return SplashScreenService;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var SplashScreenService = /*#__PURE__*/function () {
        function SplashScreenService(router, document, animationBuilder) {
          var _this19 = this;

          _classCallCheck(this, SplashScreenService);

          this.router = router;
          this.document = document;
          this.animationBuilder = animationBuilder;
          this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');

          if (this.splashScreenElem) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
              return _this19.hide();
            });
          }
        }

        _createClass(SplashScreenService, [{
          key: "hide",
          value: function hide() {
            var _this20 = this;

            var player = this.animationBuilder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 1
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 0
            }))]).create(this.splashScreenElem);
            player.onDone(function () {
              return _this20.splashScreenElem.remove();
            });
            player.play();
          }
        }]);

        return SplashScreenService;
      }();

      SplashScreenService.ɵfac = function SplashScreenService_Factory(t) {
        return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]));
      };

      SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SplashScreenService,
        factory: SplashScreenService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/services/style.service.ts":
    /*!********************************************!*\
      !*** ./src/@vex/services/style.service.ts ***!
      \********************************************/

    /*! exports provided: Style, StyleService */

    /***/
    function srcVexServicesStyleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Style", function () {
        return Style;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleService", function () {
        return StyleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");

      var Style;

      (function (Style) {
        Style["light"] = "vex-style-light";
        Style["default"] = "vex-style-default";
        Style["dark"] = "vex-style-dark";
      })(Style || (Style = {}));

      var StyleService = /*#__PURE__*/function () {
        function StyleService(document) {
          var _this21 = this;

          _classCallCheck(this, StyleService);

          this.document = document;
          this.defaultStyle = Style["default"];
          this._styleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.defaultStyle);
          this.style$ = this._styleSubject.asObservable();
          this.style$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (style) {
            return _this21._updateStyle(style);
          });
        }

        _createClass(StyleService, [{
          key: "setStyle",
          value: function setStyle(style) {
            this._styleSubject.next(style);
          }
        }, {
          key: "_updateStyle",
          value: function _updateStyle(style) {
            var body = this.document.body;
            Object.values(Style).filter(function (s) {
              return s !== style;
            }).forEach(function (value) {
              if (body.classList.contains(value)) {
                body.classList.remove(value);
              }
            });
            body.classList.add(style);
          }
        }]);

        return StyleService;
      }();

      StyleService.ɵfac = function StyleService_Factory(t) {
        return new (t || StyleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      StyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: StyleService,
        factory: StyleService.ɵfac,
        providedIn: 'root'
      });
      StyleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()], StyleService);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/@vex/utils/check-router-childs-data.ts":
    /*!****************************************************!*\
      !*** ./src/@vex/utils/check-router-childs-data.ts ***!
      \****************************************************/

    /*! exports provided: checkRouterChildsData, getAllParams */

    /***/
    function srcVexUtilsCheckRouterChildsDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkRouterChildsData", function () {
        return checkRouterChildsData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllParams", function () {
        return getAllParams;
      });

      function checkRouterChildsData(route, compareWith) {
        if (compareWith(route.data)) {
          return true;
        }

        if (!route.firstChild) {
          return false;
        }

        return checkRouterChildsData(route.firstChild, compareWith);
      }
      /**
       * Used to get params from children in their parent
       */


      function getAllParams(route) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

        if (route.params) {
          for (var _i2 = 0, _Object$keys = Object.keys(route.params); _i2 < _Object$keys.length; _i2++) {
            var key = _Object$keys[_i2];
            result.set(key, route.params[key]);
          }
        }

        if (!route.firstChild) {
          return result;
        }

        return getAllParams(route.firstChild, result);
      }
      /***/

    },

    /***/
    "./src/@vex/utils/merge-deep.ts":
    /*!**************************************!*\
      !*** ./src/@vex/utils/merge-deep.ts ***!
      \**************************************/

    /*! exports provided: mergeDeep */

    /***/
    function srcVexUtilsMergeDeepTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeDeep", function () {
        return mergeDeep;
      });
      /**
       * Performs a deep merge of `source` into `target`.
       * Mutates `target` only but not its objects and arrays.
       *
       * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
       */


      function mergeDeep(target, source) {
        var isObject = function isObject(obj) {
          return obj && typeof obj === 'object';
        };

        if (!isObject(target) || !isObject(source)) {
          return source;
        }

        Object.keys(source).forEach(function (key) {
          var targetValue = target[key];
          var sourceValue = source[key];

          if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
          } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
          } else {
            target[key] = sourceValue;
          }
        });
        return target;
      }
      /***/

    },

    /***/
    "./src/@vex/utils/track-by.ts":
    /*!************************************!*\
      !*** ./src/@vex/utils/track-by.ts ***!
      \************************************/

    /*! exports provided: trackByRoute, trackById, trackByKey, trackByValue, trackByLabel */

    /***/
    function srcVexUtilsTrackByTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByRoute", function () {
        return trackByRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackById", function () {
        return trackById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByKey", function () {
        return trackByKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByValue", function () {
        return trackByValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trackByLabel", function () {
        return trackByLabel;
      });

      function trackByRoute(index, item) {
        return item.route;
      }

      function trackById(index, item) {
        return item.id;
      }

      function trackByKey(index, item) {
        return item.key;
      }

      function trackByValue(index, value) {
        return value;
      }

      function trackByLabel(index, value) {
        return value.label;
      }
      /***/

    },

    /***/
    "./src/@vex/vex.module.ts":
    /*!********************************!*\
      !*** ./src/@vex/vex.module.ts ***!
      \********************************/

    /*! exports provided: VexModule */

    /***/
    function srcVexVexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VexModule", function () {
        return VexModule;
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


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/layout.module */
      "./src/@vex/layout/layout.module.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

      var VexModule = function VexModule() {
        _classCallCheck(this, VexModule);
      };

      VexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VexModule
      });
      VexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VexModule_Factory(t) {
          return new (t || VexModule)();
        },
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
          useValue: {
            appearance: 'fill'
          }
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VexModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]],
          exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VexModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]],
            exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]],
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
              useValue: {
                appearance: 'fill'
              }
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./custom-layout/custom-layout.component */
      "./src/app/custom-layout/custom-layout.component.ts");
      /* harmony import */


      var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth-guard.service */
      "./src/app/auth/auth-guard.service.ts");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-pages-auth-login-login-module */
          [__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("pages-pages-auth-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/pages/auth/login/login.module */
          "./src/app/pages/pages/auth/login/login.module.ts")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-pages-auth-register-register-module */
          [__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("pages-pages-auth-register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/pages/auth/register/register.module */
          "./src/app/pages/pages/auth/register/register.module.ts")).then(function (m) {
            return m.RegisterModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-pages-auth-forgot-password-forgot-password-module */
          "pages-pages-auth-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/pages/auth/forgot-password/forgot-password.module */
          "./src/app/pages/pages/auth/forgot-password/forgot-password.module.ts")).then(function (m) {
            return m.ForgotPasswordModule;
          });
        }
      }, {
        path: 'coming-soon',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-pages-coming-soon-coming-soon-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-pages-coming-soon-coming-soon-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/pages/coming-soon/coming-soon.module */
          "./src/app/pages/pages/coming-soon/coming-soon.module.ts")).then(function (m) {
            return m.ComingSoonModule;
          });
        }
      }, {
        path: '',
        component: _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_2__["CustomLayoutComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [{
          path: 'dashboards/analytics',
          redirectTo: '/'
        }, {
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-dashboards-dashboard-analytics-dashboard-analytics-module */
            [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-dashboards-~988f1159"), __webpack_require__.e("common"), __webpack_require__.e("pages-dashboards-dashboard-analytics-dashboard-analytics-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/dashboards/dashboard-analytics/dashboard-analytics.module */
            "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts")).then(function (m) {
              return m.DashboardAnalyticsModule;
            });
          }
        }, {
          path: 'apps',
          children: [{
            path: 'chat',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-chat-chat-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-apps-chat-chat-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/chat/chat.module */
              "./src/app/pages/apps/chat/chat.module.ts")).then(function (m) {
                return m.ChatModule;
              });
            },
            data: {
              toolbarShadowEnabled: true
            }
          }, {
            path: 'mail',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-mail-mail-module */
              [__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~pages-apps-editor-editor-module~pages-apps-mail-mail-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-mail-mail-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/mail/mail.module */
              "./src/app/pages/apps/mail/mail.module.ts")).then(function (m) {
                return m.MailModule;
              });
            },
            data: {
              toolbarShadowEnabled: true,
              scrollDisabled: true
            }
          }, {
            path: 'social/:id',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-aidrov-citizen-profile-citizen-profile-module */
              [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~0d82f71c"), __webpack_require__.e("default~pages-apps-aidrov-citizen-profile-citizen-profile-module~pages-pages-pricing-pricing-module~~06b9c388"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-aidrov-citizen-profile-citizen-profile-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/aidrov/citizen-profile/citizen-profile.module */
              "./src/app/pages/apps/aidrov/citizen-profile/citizen-profile.module.ts")).then(function (m) {
                return m.CitizenProfileModule;
              });
            }
          }, {
            path: 'contacts',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-apps-contacts-contacts-module */
              "pages-apps-contacts-contacts-module").then(__webpack_require__.bind(null,
              /*! ./pages/apps/contacts/contacts.module */
              "./src/app/pages/apps/contacts/contacts.module.ts")).then(function (m) {
                return m.ContactsModule;
              });
            }
          }, {
            path: 'calendar',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-calendar-calendar-module */
              [__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~d705f6b5"), __webpack_require__.e("pages-apps-calendar-calendar-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/calendar/calendar.module */
              "./src/app/pages/apps/calendar/calendar.module.ts")).then(function (m) {
                return m.CalendarModule;
              });
            },
            data: {
              toolbarShadowEnabled: true
            }
          }, {
            path: 'aio-table',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-aio-table-aio-table-module */
              [__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~273ca99a"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-dashboards-~988f1159"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-aio-table-aio-table-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/aio-table/aio-table.module */
              "./src/app/pages/apps/aio-table/aio-table.module.ts")).then(function (m) {
                return m.AioTableModule;
              });
            }
          }, {
            path: 'citizen-view',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-pages-pricing-pricing-module */
              [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("default~pages-apps-aidrov-citizen-profile-citizen-profile-module~pages-pages-pricing-pricing-module~~06b9c388"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-pricing-pricing-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/pages/pricing/pricing.module */
              "./src/app/pages/pages/pricing/pricing.module.ts")).then(function (m) {
                return m.PricingModule;
              });
            }
          }, {
            path: 'help-center',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-help-center-help-center-module */
              [__webpack_require__.e("common"), __webpack_require__.e("pages-apps-help-center-help-center-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/help-center/help-center.module */
              "./src/app/pages/apps/help-center/help-center.module.ts")).then(function (m) {
                return m.HelpCenterModule;
              });
            }
          }, {
            path: 'scrumboard',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-scrumboard-scrumboard-module */
              [__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-scrumboard-scrumboard-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/scrumboard/scrumboard.module */
              "./src/app/pages/apps/scrumboard/scrumboard.module.ts")).then(function (m) {
                return m.ScrumboardModule;
              });
            }
          }, {
            path: 'editor',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-apps-editor-editor-module */
              [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~pages-apps-editor-editor-module~pages-apps-mail-mail-module"), __webpack_require__.e("pages-apps-editor-editor-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/apps/editor/editor.module */
              "./src/app/pages/apps/editor/editor.module.ts")).then(function (m) {
                return m.EditorModule;
              });
            }
          }]
        }, {
          path: 'pages',
          children: [{
            path: 'pricing',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-pages-pricing-pricing-module */
              [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("default~pages-apps-aidrov-citizen-profile-citizen-profile-module~pages-pages-pricing-pricing-module~~06b9c388"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-pricing-pricing-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/pages/pricing/pricing.module */
              "./src/app/pages/pages/pricing/pricing.module.ts")).then(function (m) {
                return m.PricingModule;
              });
            }
          }, {
            path: 'faq',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-pages-faq-faq-module */
              [__webpack_require__.e("default~help-center-faq-help-center-faq-module~help-center-getting-started-help-center-getting-start~c9f12d1d"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-faq-faq-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/pages/faq/faq.module */
              "./src/app/pages/pages/faq/faq.module.ts")).then(function (m) {
                return m.FaqModule;
              });
            }
          }, {
            path: 'guides',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-pages-guides-guides-module */
              [__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~help-center-guides-help-center-guides-module~pages-pages-guides-guides-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-guides-guides-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/pages/guides/guides.module */
              "./src/app/pages/pages/guides/guides.module.ts")).then(function (m) {
                return m.GuidesModule;
              });
            }
          }, {
            path: 'invoice',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-pages-invoice-invoice-module */
              "pages-pages-invoice-invoice-module").then(__webpack_require__.bind(null,
              /*! ./pages/pages/invoice/invoice.module */
              "./src/app/pages/pages/invoice/invoice.module.ts")).then(function (m) {
                return m.InvoiceModule;
              });
            }
          }, {
            path: 'error-404',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-pages-errors-error-404-error-404-module */
              "pages-pages-errors-error-404-error-404-module").then(__webpack_require__.bind(null,
              /*! ./pages/pages/errors/error-404/error-404.module */
              "./src/app/pages/pages/errors/error-404/error-404.module.ts")).then(function (m) {
                return m.Error404Module;
              });
            }
          }, {
            path: 'error-500',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-pages-errors-error-500-error-500-module */
              "pages-pages-errors-error-500-error-500-module").then(__webpack_require__.bind(null,
              /*! ./pages/pages/errors/error-500/error-500.module */
              "./src/app/pages/pages/errors/error-500/error-500.module.ts")).then(function (m) {
                return m.Error500Module;
              });
            }
          }]
        }, {
          path: 'ui',
          children: [{
            path: 'components',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-ui-components-components-module */
              "pages-ui-components-components-module").then(__webpack_require__.bind(null,
              /*! ./pages/ui/components/components.module */
              "./src/app/pages/ui/components/components.module.ts")).then(function (m) {
                return m.ComponentsModule;
              });
            }
          }, {
            path: 'forms/form-elements',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-ui-forms-form-elements-form-elements-module */
              [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~d705f6b5"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~0d82f71c"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~ceabfa7b"), __webpack_require__.e("pages-ui-forms-form-elements-form-elements-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/ui/forms/form-elements/form-elements.module */
              "./src/app/pages/ui/forms/form-elements/form-elements.module.ts")).then(function (m) {
                return m.FormElementsModule;
              });
            },
            data: {
              containerEnabled: true
            }
          }, {
            path: 'forms/form-wizard',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-ui-forms-form-wizard-form-wizard-module */
              [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~cac33aed"), __webpack_require__.e("default~pages-apps-aidrov-citizen-profile-citizen-profile-module~pages-pages-pricing-pricing-module~~06b9c388"), __webpack_require__.e("pages-ui-forms-form-wizard-form-wizard-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/ui/forms/form-wizard/form-wizard.module */
              "./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts")).then(function (m) {
                return m.FormWizardModule;
              });
            },
            data: {
              containerEnabled: true
            }
          }, {
            path: 'icons',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-ui-icons-icons-module */
              "pages-ui-icons-icons-module").then(__webpack_require__.bind(null,
              /*! ./pages/ui/icons/icons.module */
              "./src/app/pages/ui/icons/icons.module.ts")).then(function (m) {
                return m.IconsModule;
              });
            }
          }, {
            path: 'page-layouts',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-ui-page-layouts-page-layouts-module */
              "pages-ui-page-layouts-page-layouts-module").then(__webpack_require__.bind(null,
              /*! ./pages/ui/page-layouts/page-layouts.module */
              "./src/app/pages/ui/page-layouts/page-layouts.module.ts")).then(function (m) {
                return m.PageLayoutsModule;
              });
            }
          }]
        }, {
          path: 'documentation',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-documentation-documentation-module */
            [__webpack_require__.e("default~blank-blank-module~card-page-layout-card-page-layout-card-module~card-page-layout-card-tabbe~81ca0c4d"), __webpack_require__.e("pages-documentation-documentation-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/documentation/documentation.module */
            "./src/app/pages/documentation/documentation.module.ts")).then(function (m) {
              return m.DocumentationModule;
            });
          }
        }, {
          path: '**',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-pages-errors-error-404-error-404-module */
            "pages-pages-errors-error-404-error-404-module").then(__webpack_require__.bind(null,
            /*! ./pages/pages/errors/error-404/error-404.module */
            "./src/app/pages/pages/errors/error-404/error-404.module.ts")).then(function (m) {
              return m.Error404Module;
            });
          }
        }]
      }, {
        path: 'error-500',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-pages-errors-error-500-error-500-module */
          "pages-pages-errors-error-500-error-500-module").then(__webpack_require__.bind(null,
          /*! ./pages/pages/errors/error-500/error-500.module */
          "./src/app/pages/pages/errors/error-500/error-500.module.ts")).then(function (m) {
            return m.Error500Module;
          });
        }
      }, {
        path: 'error-404',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-pages-errors-error-404-error-404-module */
          "pages-pages-errors-error-404-error-404-module").then(__webpack_require__.bind(null,
          /*! ./pages/pages/errors/error-404/error-404.module */
          "./src/app/pages/pages/errors/error-404/error-404.module.ts")).then(function (m) {
            return m.Error404Module;
          });
        }
      }, {
        path: '**',
        redirectTo: 'error-404'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          // preloadingStrategy: PreloadAllModules,
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'corrected',
          anchorScrolling: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              // preloadingStrategy: PreloadAllModules,
              scrollPositionRestoration: 'enabled',
              relativeLinkResolution: 'corrected',
              anchorScrolling: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! luxon */
      "./node_modules/luxon/build/cjs-browser/luxon.js");
      /* harmony import */


      var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-layers */
      "./node_modules/@iconify/icons-ic/twotone-layers.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-assignment */
      "./node_modules/@iconify/icons-ic/twotone-assignment.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-person-outline */
      "./node_modules/@iconify/icons-ic/twotone-person-outline.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @iconify/icons-ic/twotone-settings */
      "./node_modules/@iconify/icons-ic/twotone-settings.js");
      /* harmony import */


      var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../@vex/services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _vex_services_style_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../@vex/services/style.service */
      "./src/@vex/services/style.service.ts");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../@vex/services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../@vex/services/navigation.service */
      "./src/@vex/services/navigation.service.ts");
      /* harmony import */


      var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../@vex/services/splash-screen.service */
      "./src/@vex/services/splash-screen.service.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./auth/auth.service */
      "./src/app/auth/auth.service.ts");

      var AppComponent = function AppComponent(configService, styleService, renderer, platform, document, localeId, layoutService, route, navigationService, splashScreenService, authService, router) {
        var _this22 = this;

        _classCallCheck(this, AppComponent);

        this.configService = configService;
        this.styleService = styleService;
        this.renderer = renderer;
        this.platform = platform;
        this.document = document;
        this.localeId = localeId;
        this.layoutService = layoutService;
        this.route = route;
        this.navigationService = navigationService;
        this.splashScreenService = splashScreenService;
        this.authService = authService;
        this.router = router;
        this.title = 'Citizen Roster';
        luxon__WEBPACK_IMPORTED_MODULE_1__["Settings"].defaultLocale = this.localeId;

        if (this.platform.BLINK) {
          this.renderer.addClass(this.document.body, 'is-blink');
        }
        /**
         * Customize the template to your needs with the ConfigService
         * Example:
         *  this.configService.updateConfig({
         *    sidenav: {
         *      title: 'Custom App',
         *      imageUrl: '//placehold.it/100x100',
         *      showCollapsePin: false
         *    },
         *    footer: {
         *      visible: false
         *    }
         *  });
         */

        /**
         * Config Related Subscriptions
         * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
         * Example: example.com/?layout=apollo&style=default
         */


        this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (queryParamMap) {
          return queryParamMap.has('rtl') && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(queryParamMap.get('rtl'));
        })).subscribe(function (isRtl) {
          _this22.document.body.dir = isRtl ? 'rtl' : 'ltr';

          _this22.configService.updateConfig({
            rtl: isRtl
          });
        });
        this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (queryParamMap) {
          return queryParamMap.has('layout');
        })).subscribe(function (queryParamMap) {
          return _this22.configService.setConfig(queryParamMap.get('layout'));
        });
        this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (queryParamMap) {
          return queryParamMap.has('style');
        })).subscribe(function (queryParamMap) {
          return _this22.styleService.setStyle(queryParamMap.get('style'));
        });
        /**
         * Add your own routes here
         */

        this.navigationService.items = [{
          type: 'link',
          label: 'Dashboard',
          route: '/',
          icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_3___default.a,
          routerLinkActiveOptions: {
            exact: true
          }
        }, {
          type: 'subheading',
          label: 'Apps',
          children: [{
            type: 'link',
            label: 'Roster',
            route: '/apps/aio-table',
            icon: _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4___default.a
          }, {
            type: 'dropdown',
            label: 'My Account',
            icon: _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_5___default.a,
            children: [{
              type: 'link',
              label: 'Profile',
              route: function route() {
                var currentUserId = _this22.authService.userAccount.documentId;

                _this22.router.navigate(['/apps/social/', currentUserId]);
              },
              routerLinkActiveOptions: {
                exact: true
              }
            }, {
              type: 'link',
              label: 'Timeline',
              route: function route() {
                var currentUserId = _this22.authService.userAccount.documentId;

                _this22.router.navigate(['/apps/social/', currentUserId, 'timeline']);
              },
              routerLinkActiveOptions: {
                exact: true
              }
            }, {
              type: 'link',
              label: 'Quarantine Pass',
              route: function route() {
                var currentUserId = _this22.authService.userAccount.documentId;

                _this22.router.navigate(['/apps/social/', currentUserId, 'qpass']);
              },
              routerLinkActiveOptions: {
                exact: true
              }
            }]
          }]
        }, {
          type: 'subheading',
          label: 'Customize',
          children: []
        }, {
          type: 'link',
          label: 'Configuration',
          route: function route() {
            return _this22.layoutService.openConfigpanel();
          },
          icon: _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6___default.a
        }];
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_style_service__WEBPACK_IMPORTED_MODULE_10__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_15__["SplashScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["vex-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vex-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]
          }, {
            type: _vex_services_style_service__WEBPACK_IMPORTED_MODULE_10__["StyleService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }, {
            type: _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]
          }, {
            type: _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]
          }, {
            type: _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_15__["SplashScreenService"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@vex/vex.module */
      "./src/@vex/vex.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./custom-layout/custom-layout.module */
      "./src/app/custom-layout/custom-layout.module.ts");
      /* harmony import */


      var aidrov_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! aidrov-models */
      "./node_modules/aidrov-models/index.js");
      /* harmony import */


      var aidrov_models__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aidrov_models__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth/auth-guard.service */
      "./src/app/auth/auth-guard.service.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./auth/auth.service */
      "./src/app/auth/auth.service.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], // Vex
        _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__["VexModule"], _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_7__["CustomLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], // Vex
          _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__["VexModule"], _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_7__["CustomLayoutModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], // Vex
            _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__["VexModule"], _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_7__["CustomLayoutModule"]],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();

      console.log(new aidrov_models__WEBPACK_IMPORTED_MODULE_8__["CitizenModel"]());
      /***/
    },

    /***/
    "./src/app/auth/auth-guard.service.ts":
    /*!********************************************!*\
      !*** ./src/app/auth/auth-guard.service.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAuth = this.authService.isAuthenticated();

            if (!isAuth) {
              this.router.navigate(['']);
            } else {
              return true;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/auth.service.ts":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../backend/api.service */
      "./src/app/backend/api.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, api) {
          var _this23 = this;

          _classCallCheck(this, AuthService);

          this.router = router;
          this.api = api;
          var logged = localStorage.getItem('loggedUsr');

          if (logged) {
            this.userAccount = JSON.parse(logged);
            this.api.loggedIn().toPromise().then(function (res) {
              if (_this23.userAccount.documentId !== res.documentId) {
                _this23.logout();
              }
            })["catch"](function (err) {
              console.log(err);

              _this23.logout();
            });
          }
        }

        _createClass(AuthService, [{
          key: "signinUser",
          value: function signinUser(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.api.login(email, password).toPromise();

                    case 2:
                      this.userAccount = _context.sent;
                      localStorage.setItem('loggedUsr', JSON.stringify(this.userAccount));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.api.logout();

                    case 2:
                      this.userAccount = null;
                      localStorage.removeItem('loggedUsr');
                      this.router.navigate(['/login']);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.userAccount != null;
          }
        }, {
          key: "signup",
          value: function signup(name, email, pass) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.api.signup(name, email, pass).toPromise());

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _backend_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/backend/api.service.ts":
    /*!****************************************!*\
      !*** ./src/app/backend/api.service.ts ***!
      \****************************************/

    /*! exports provided: APIService, CustomFunctionParams */

    /***/
    function srcAppBackendApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APIService", function () {
        return APIService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomFunctionParams", function () {
        return CustomFunctionParams;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      "./node_modules/rxjs/add/operator/catch.js");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/finally */
      "./node_modules/rxjs/add/operator/finally.js");
      /* harmony import */


      var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // build origin api route address


      var origin = "".concat(window.location.origin);

      var APIService = /*#__PURE__*/function () {
        // WARNING: DO NOT PUT ANY GUI RELATED CODE HERE (loading, warnings, sweetalert etc).
        // They should be done at the component definition of the page.
        function APIService(router, http) {
          _classCallCheck(this, APIService);

          this.router = router;
          this.http = http;
        }

        _createClass(APIService, [{
          key: "getDocument",
          value: function getDocument(id, type) {
            return this.http.get("".concat(origin, "/api/document/").concat(type, "/").concat(id));
          }
        }, {
          key: "saveDocument",
          value: function saveDocument(updatedDocument) {
            return this.http.post("".concat(origin, "/api/document"), updatedDocument);
          }
        }, {
          key: "customFunction",
          value: function customFunction(args) {
            var name = args.name,
                type = args.type,
                queryParams = args.queryParams,
                body = args.body,
                requestType = args.requestType;

            if (requestType === 'GET') {
              return this.http.get("".concat(origin, "/api/").concat(type, "/").concat(name), {
                params: queryParams
              });
            }

            if (requestType === 'POST') {
              return this.http.post("".concat(origin, "/api/").concat(type, "/").concat(name), body);
            }

            throw new Error('Invalid custom function call');
          } // auth

        }, {
          key: "signup",
          value: function signup(name, email, password) {
            return this.http.post("".concat(origin, "/auth/signup"), {
              origin: origin,
              name: name,
              email: email,
              password: password
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            return this.http.post("".concat(origin, "/auth/login"), {
              origin: origin,
              authId: email,
              authKey: password
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.http.get("".concat(origin, "/auth/logout"));
          }
        }, {
          key: "loggedIn",
          value: function loggedIn() {
            return this.http.get("".concat(origin, "/auth/loggedIn"));
          }
        }]);

        return APIService;
      }();

      APIService.ɵfac = function APIService_Factory(t) {
        return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: APIService,
        factory: APIService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();

      var CustomFunctionParams = function CustomFunctionParams() {
        _classCallCheck(this, CustomFunctionParams);
      };
      /***/

    },

    /***/
    "./src/app/custom-layout/custom-layout.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/custom-layout/custom-layout.component.ts ***!
      \**********************************************************/

    /*! exports provided: CustomLayoutComponent */

    /***/
    function srcAppCustomLayoutCustomLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomLayoutComponent", function () {
        return CustomLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@vex/utils/check-router-childs-data */
      "./src/@vex/utils/check-router-childs-data.ts");
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
      /* harmony import */


      var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@vex/services/layout.service */
      "./src/@vex/services/layout.service.ts");
      /* harmony import */


      var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@vex/services/config.service */
      "./src/@vex/services/config.service.ts");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@vex/layout/layout.component */
      "./src/@vex/layout/layout.component.ts");
      /* harmony import */


      var _vex_components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component */
      "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts");
      /* harmony import */


      var _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../@vex/components/sidebar/sidebar.component */
      "./src/@vex/components/sidebar/sidebar.component.ts");
      /* harmony import */


      var _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../@vex/components/config-panel/config-panel.component */
      "./src/@vex/components/config-panel/config-panel.component.ts");
      /* harmony import */


      var _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../@vex/layout/sidenav/sidenav.component */
      "./src/@vex/layout/sidenav/sidenav.component.ts");
      /* harmony import */


      var _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../@vex/layout/toolbar/toolbar.component */
      "./src/@vex/layout/toolbar/toolbar.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../@vex/layout/footer/footer.component */
      "./src/@vex/layout/footer/footer.component.ts");
      /* harmony import */


      var _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../@vex/layout/quickpanel/quickpanel.component */
      "./src/@vex/layout/quickpanel/quickpanel.component.ts");

      var _c0 = ["configpanel"];

      function CustomLayoutComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vex-sidenav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r1.sidenavCollapsed$));
        }
      }

      function CustomLayoutComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vex-toolbar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasShadow", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r3.toolbarShadowEnabled$))("mobileQuery", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx_r3.isDesktop$));
        }
      }

      function CustomLayoutComponent_ng_template_4_vex_footer_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vex-footer", 11);
        }
      }

      function CustomLayoutComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_4_vex_footer_0_Template, 1, 0, "vex-footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r5.isFooterVisible$));
        }
      }

      function CustomLayoutComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vex-quickpanel");
        }
      }

      var CustomLayoutComponent = /*#__PURE__*/function () {
        function CustomLayoutComponent(layoutService, configService, breakpointObserver, router) {
          var _this24 = this;

          _classCallCheck(this, CustomLayoutComponent);

          this.layoutService = layoutService;
          this.configService = configService;
          this.breakpointObserver = breakpointObserver;
          this.router = router;
          this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
          this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (config) {
            return config.footer.visible;
          }));
          this.isDesktop$ = this.layoutService.isDesktop$;
          this.toolbarShadowEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return Object(_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_4__["checkRouterChildsData"])(_this24.router.routerState.root.snapshot, function (data) {
              return data.toolbarShadowEnabled;
            });
          }));
        }

        _createClass(CustomLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.layoutService.configpanelOpen$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe(function (open) {
              return open ? _this25.configpanel.open() : _this25.configpanel.close();
            });
          }
        }]);

        return CustomLayoutComponent;
      }();

      CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) {
        return new (t || CustomLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      CustomLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CustomLayoutComponent,
        selectors: [["vex-custom-layout"]],
        viewQuery: function CustomLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.configpanel = _t.first);
          }
        },
        decls: 13,
        vars: 5,
        consts: [["sidenavRef", ""], ["toolbarRef", ""], ["footerRef", ""], ["quickpanelRef", ""], [3, "footerRef", "quickpanelRef", "sidenavRef", "toolbarRef"], [3, "openConfig"], ["position", "right", 3, "invisibleBackdrop"], ["configpanel", ""], [3, "collapsed"], [1, "vex-toolbar", 3, "hasShadow", "mobileQuery"], ["class", "vex-footer", 4, "ngIf"], [1, "vex-footer"]],
        template: function CustomLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomLayoutComponent_ng_template_2_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomLayoutComponent_ng_template_4_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomLayoutComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "vex-layout", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "vex-config-panel-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openConfig", function CustomLayoutComponent_Template_vex_config_panel_toggle_openConfig_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

              return _r8.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "vex-sidebar", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "vex-config-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("footerRef", _r4)("quickpanelRef", _r6)("sidenavRef", _r0)("toolbarRef", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("invisibleBackdrop", true);
          }
        },
        directives: [_vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"], _vex_components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_10__["ConfigPanelToggleComponent"], _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_12__["ConfigPanelComponent"], _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"], _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_17__["QuickpanelComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1sYXlvdXQvY3VzdG9tLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      CustomLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])()], CustomLayoutComponent);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'vex-custom-layout',
            templateUrl: './custom-layout.component.html',
            styleUrls: ['./custom-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
          }, {
            type: _vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          configpanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['configpanel', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/custom-layout/custom-layout.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/custom-layout/custom-layout.module.ts ***!
      \*******************************************************/

    /*! exports provided: CustomLayoutModule */

    /***/
    function srcAppCustomLayoutCustomLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomLayoutModule", function () {
        return CustomLayoutModule;
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


      var _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@vex/layout/layout.module */
      "./src/@vex/layout/layout.module.ts");
      /* harmony import */


      var _custom_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./custom-layout.component */
      "./src/app/custom-layout/custom-layout.component.ts");
      /* harmony import */


      var _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@vex/layout/sidenav/sidenav.module */
      "./src/@vex/layout/sidenav/sidenav.module.ts");
      /* harmony import */


      var _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@vex/layout/toolbar/toolbar.module */
      "./src/@vex/layout/toolbar/toolbar.module.ts");
      /* harmony import */


      var _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@vex/layout/footer/footer.module */
      "./src/@vex/layout/footer/footer.module.ts");
      /* harmony import */


      var _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@vex/components/config-panel/config-panel.module */
      "./src/@vex/components/config-panel/config-panel.module.ts");
      /* harmony import */


      var _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../@vex/components/sidebar/sidebar.module */
      "./src/@vex/components/sidebar/sidebar.module.ts");
      /* harmony import */


      var _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@vex/layout/quickpanel/quickpanel.module */
      "./src/@vex/layout/quickpanel/quickpanel.module.ts");

      var CustomLayoutModule = function CustomLayoutModule() {
        _classCallCheck(this, CustomLayoutModule);
      };

      CustomLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CustomLayoutModule
      });
      CustomLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CustomLayoutModule_Factory(t) {
          return new (t || CustomLayoutModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"], _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"], _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"], _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPanelModule"], _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"], _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__["QuickpanelModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomLayoutModule, {
          declarations: [_custom_layout_component__WEBPACK_IMPORTED_MODULE_3__["CustomLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"], _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"], _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"], _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPanelModule"], _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"], _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__["QuickpanelModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomLayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_custom_layout_component__WEBPACK_IMPORTED_MODULE_3__["CustomLayoutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"], _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"], _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"], _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_7__["ConfigPanelModule"], _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"], _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_9__["QuickpanelModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/johnsolano/WebstormProjects/aidrov-client/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map