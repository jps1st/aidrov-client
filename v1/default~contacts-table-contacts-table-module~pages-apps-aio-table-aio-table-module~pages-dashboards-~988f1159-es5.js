(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-dashboards-~988f1159"], {
    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
      \******************************************************************/

    /*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
        return BaseCdkCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
        return BaseRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
        return CDK_ROW_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function () {
        return CDK_TABLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
        return CDK_TABLE_TEMPLATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
        return CdkCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
        return CdkCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
        return CdkCellOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
        return CdkColumnDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
        return CdkFooterCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
        return CdkFooterCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
        return CdkFooterRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
        return CdkFooterRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
        return CdkHeaderCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
        return CdkHeaderCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
        return CdkHeaderRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
        return CdkHeaderRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function () {
        return CdkNoDataRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
        return CdkRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
        return CdkRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
        return CdkTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
        return CdkTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
        return CdkTextColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
        return DataRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
        return FooterRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
        return HeaderRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function () {
        return NoDataRowOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
        return STICKY_DIRECTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
        return StickyStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
        return TEXT_COLUMN_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
        return mixinHasStickyInput;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"];
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function CdkTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function CdkTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to provide a directive with a function that checks if the sticky input has been
       * changed since the last time the function was called. Essentially adds a dirty-check to the
       * sticky value.
       * @docs-private
       */


      function mixinHasStickyInput(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super = _createSuper(_class);

          function _class() {
            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */

            _this._hasStickyChanged = false;
            return _this;
          }
          /** Whether sticky positioning should be applied. */


          _createClass(_class, [{
            key: "hasStickyChanged",

            /** Whether the sticky value has changed since this was last called. */
            value: function hasStickyChanged() {
              var hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /** Resets the dirty check for cases where the sticky state has been used without checking. */

          }, {
            key: "resetStickyChanged",
            value: function resetStickyChanged() {
              this._hasStickyChanged = false;
            }
          }, {
            key: "sticky",
            get: function get() {
              return this._sticky;
            },
            set: function set(v) {
              var prevValue = this._sticky;
              this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
              this._hasStickyChanged = prevValue !== this._sticky;
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a table to some of the sub-components without causing a circular dependency.
       * @docs-private
       */


      var CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
      /** Injection token that can be used to specify the text column options. */

      var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for a CDK table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */

      var CdkCellDef = function CdkCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkCellDef);

        this.template = template;
      };

      CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
        return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkCellDef,
        selectors: [["", "cdkCellDef", ""]]
      });

      CdkCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * Header cell definition for a CDK table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var CdkHeaderCellDef = function CdkHeaderCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkHeaderCellDef);

        this.template = template;
      };

      CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
        return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkHeaderCellDef,
        selectors: [["", "cdkHeaderCellDef", ""]]
      });

      CdkHeaderCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkHeaderCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * Footer cell definition for a CDK table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var CdkFooterCellDef = function CdkFooterCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkFooterCellDef);

        this.template = template;
      };

      CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
        return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkFooterCellDef,
        selectors: [["", "cdkFooterCellDef", ""]]
      });

      CdkFooterCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkFooterCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkColumnDef.

      /** @docs-private */


      var CdkColumnDefBase = function CdkColumnDefBase() {
        _classCallCheck(this, CdkColumnDefBase);
      };

      var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
      /**
       * Column definition for the CDK table.
       * Defines a set of cells available for a table column.
       */


      var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
        _inherits(CdkColumnDef, _CdkColumnDefBase2);

        var _super2 = _createSuper(CdkColumnDef);

        function CdkColumnDef(_table) {
          var _this2;

          _classCallCheck(this, CdkColumnDef);

          _this2 = _super2.call(this);
          _this2._table = _table;
          _this2._stickyEnd = false;
          return _this2;
        }
        /** Unique name for this column. */


        _createClass(CdkColumnDef, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (name) {
              this._name = name;
              this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
            }
          }
          /**
           * Whether this column should be sticky positioned on the end of the row. Should make sure
           * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
           * has been changed.
           */

        }, {
          key: "stickyEnd",
          get: function get() {
            return this._stickyEnd;
          },
          set: function set(v) {
            var prevValue = this._stickyEnd;
            this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
          }
        }]);

        return CdkColumnDef;
      }(_CdkColumnDefBase);

      CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
        return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkColumnDef,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
          }
        },
        inputs: {
          sticky: "sticky",
          name: ["cdkColumnDef", "name"],
          stickyEnd: "stickyEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: CdkColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkColumnDef.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      CdkColumnDef.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkColumnDef']
        }],
        stickyEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['stickyEnd']
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkCellDef]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkHeaderCellDef]
        }],
        footerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkFooterCellDef]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: CdkColumnDef
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
          }],
          stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
          }],
          footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
          }]
        });
      })();
      /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


      var BaseCdkCell = function BaseCdkCell(columnDef, elementRef) {
        _classCallCheck(this, BaseCdkCell);

        var columnClassName = "cdk-column-".concat(columnDef.cssClassFriendlyName);
        elementRef.nativeElement.classList.add(columnClassName);
      };
      /** Header cell template container that adds the right classes and role. */


      var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
        _inherits(CdkHeaderCell, _BaseCdkCell);

        var _super3 = _createSuper(CdkHeaderCell);

        function CdkHeaderCell(columnDef, elementRef) {
          _classCallCheck(this, CdkHeaderCell);

          return _super3.call(this, columnDef, elementRef);
        }

        return CdkHeaderCell;
      }(BaseCdkCell);

      CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
        return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkHeaderCell,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkHeaderCell.ctorParameters = function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-header-cell, th[cdk-header-cell]',
            host: {
              'class': 'cdk-header-cell',
              'role': 'columnheader'
            }
          }]
        }], function () {
          return [{
            type: CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
        _inherits(CdkFooterCell, _BaseCdkCell2);

        var _super4 = _createSuper(CdkFooterCell);

        function CdkFooterCell(columnDef, elementRef) {
          _classCallCheck(this, CdkFooterCell);

          return _super4.call(this, columnDef, elementRef);
        }

        return CdkFooterCell;
      }(BaseCdkCell);

      CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
        return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkFooterCell,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkFooterCell.ctorParameters = function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-footer-cell, td[cdk-footer-cell]',
            host: {
              'class': 'cdk-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
        _inherits(CdkCell, _BaseCdkCell3);

        var _super5 = _createSuper(CdkCell);

        function CdkCell(columnDef, elementRef) {
          _classCallCheck(this, CdkCell);

          return _super5.call(this, columnDef, elementRef);
        }

        return CdkCell;
      }(BaseCdkCell);

      CdkCell.ɵfac = function CdkCell_Factory(t) {
        return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkCell,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkCell.ctorParameters = function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'cdk-cell, td[cdk-cell]',
            host: {
              'class': 'cdk-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The row template that can be used by the mat-table. Should not be used outside of the
       * material library.
       */


      var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
      /**
       * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
       * for changes and notifying the table.
       */

      var BaseRowDef = /*#__PURE__*/function () {
        function BaseRowDef(
        /** @docs-private */
        template, _differs) {
          _classCallCheck(this, BaseRowDef);

          this.template = template;
          this._differs = _differs;
        }

        _createClass(BaseRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
              var columns = changes['columns'] && changes['columns'].currentValue || [];
              this._columnsDiffer = this._differs.find(columns).create();

              this._columnsDiffer.diff(columns);
            }
          }
          /**
           * Returns the difference between the current columns and the columns from the last diff, or null
           * if there is no difference.
           */

        }, {
          key: "getColumnsDiff",
          value: function getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
          }
          /** Gets this row def's relevant cell template from the provided column def. */

        }, {
          key: "extractCellTemplate",
          value: function extractCellTemplate(column) {
            if (this instanceof CdkHeaderRowDef) {
              return column.headerCell.template;
            }

            if (this instanceof CdkFooterRowDef) {
              return column.footerCell.template;
            } else {
              return column.cell.template;
            }
          }
        }]);

        return BaseRowDef;
      }();

      BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
        return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
      };

      BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: BaseRowDef,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      BaseRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkHeaderRowDef.

      /** @docs-private */


      var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
        _inherits(CdkHeaderRowDefBase, _BaseRowDef);

        var _super6 = _createSuper(CdkHeaderRowDefBase);

        function CdkHeaderRowDefBase() {
          _classCallCheck(this, CdkHeaderRowDefBase);

          return _super6.apply(this, arguments);
        }

        return CdkHeaderRowDefBase;
      }(BaseRowDef);

      var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
      /**
       * Header row definition for the CDK table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
        _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

        var _super7 = _createSuper(CdkHeaderRowDef);

        function CdkHeaderRowDef(template, _differs, _table) {
          var _this3;

          _classCallCheck(this, CdkHeaderRowDef);

          _this3 = _super7.call(this, template, _differs);
          _this3._table = _table;
          return _this3;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(CdkHeaderRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return CdkHeaderRowDef;
      }(_CdkHeaderRowDefBase);

      CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
        return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkHeaderRowDef,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
          columns: ["cdkHeaderRowDef", "columns"],
          sticky: ["cdkHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      CdkHeaderRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkHeaderRowDef]',
            inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkFooterRowDef.

      /** @docs-private */


      var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
        _inherits(CdkFooterRowDefBase, _BaseRowDef2);

        var _super8 = _createSuper(CdkFooterRowDefBase);

        function CdkFooterRowDefBase() {
          _classCallCheck(this, CdkFooterRowDefBase);

          return _super8.apply(this, arguments);
        }

        return CdkFooterRowDefBase;
      }(BaseRowDef);

      var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
      /**
       * Footer row definition for the CDK table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
        _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

        var _super9 = _createSuper(CdkFooterRowDef);

        function CdkFooterRowDef(template, _differs, _table) {
          var _this4;

          _classCallCheck(this, CdkFooterRowDef);

          _this4 = _super9.call(this, template, _differs);
          _this4._table = _table;
          return _this4;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(CdkFooterRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return CdkFooterRowDef;
      }(_CdkFooterRowDefBase);

      CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
        return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkFooterRowDef,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: ["cdkFooterRowDef", "columns"],
          sticky: ["cdkFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      CdkFooterRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkFooterRowDef]',
            inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * Data row definition for the CDK table.
       * Captures the header row's template and other row properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
        _inherits(CdkRowDef, _BaseRowDef3);

        var _super10 = _createSuper(CdkRowDef);

        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        function CdkRowDef(template, _differs, _table) {
          var _this5;

          _classCallCheck(this, CdkRowDef);

          _this5 = _super10.call(this, template, _differs);
          _this5._table = _table;
          return _this5;
        }

        return CdkRowDef;
      }(BaseRowDef);

      CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
        return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
      };

      CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkRowDef,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: ["cdkRowDefColumns", "columns"],
          when: ["cdkRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      CdkRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkRowDef]',
            inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * Outlet for rendering cells inside of a row or header row.
       * @docs-private
       */


      var CdkCellOutlet = /*#__PURE__*/function () {
        function CdkCellOutlet(_viewContainer) {
          _classCallCheck(this, CdkCellOutlet);

          this._viewContainer = _viewContainer;
          CdkCellOutlet.mostRecentCellOutlet = this;
        }

        _createClass(CdkCellOutlet, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (CdkCellOutlet.mostRecentCellOutlet === this) {
              CdkCellOutlet.mostRecentCellOutlet = null;
            }
          }
        }]);

        return CdkCellOutlet;
      }();

      CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
        return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]));
      };

      CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkCellOutlet,
        selectors: [["", "cdkCellOutlet", ""]]
      });
      /**
       * Static property containing the latest constructed instance of this class.
       * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
       * createEmbeddedView. After one of these components are created, this property will provide
       * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
       * construct the cells with the provided context.
       */

      CdkCellOutlet.mostRecentCellOutlet = null;

      CdkCellOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[cdkCellOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }];
        }, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var CdkHeaderRow = function CdkHeaderRow() {
        _classCallCheck(this, CdkHeaderRow);
      };

      CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
        return new (t || CdkHeaderRow)();
      };

      CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkHeaderRow,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkCellOutlet],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-header-row, tr[cdk-header-row]',
            template: CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var CdkFooterRow = function CdkFooterRow() {
        _classCallCheck(this, CdkFooterRow);
      };

      CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
        return new (t || CdkFooterRow)();
      };

      CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkFooterRow,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkCellOutlet],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-footer-row, tr[cdk-footer-row]',
            template: CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var CdkRow = function CdkRow() {
        _classCallCheck(this, CdkRow);
      };

      CdkRow.ɵfac = function CdkRow_Factory(t) {
        return new (t || CdkRow)();
      };

      CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkRow,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [CdkCellOutlet],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-row, tr[cdk-row]',
            template: CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var CdkNoDataRow = function CdkNoDataRow(templateRef) {
        _classCallCheck(this, CdkNoDataRow);

        this.templateRef = templateRef;
      };

      CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
        return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      CdkNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: CdkNoDataRow,
        selectors: [["ng-template", "cdkNoDataRow", ""]]
      });

      CdkNoDataRow.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[cdkNoDataRow]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * List of all possible directions that can be used for sticky positioning.
       * @docs-private
       */


      var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
      /**
       * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
       * @docs-private
       */

      var StickyStyler = /*#__PURE__*/function () {
        /**
         * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
         *     that uses the native `<table>` element.
         * @param _stickCellCss The CSS class that will be applied to every row/cell that has
         *     sticky positioning applied.
         * @param direction The directionality context of the table (ltr/rtl); affects column positioning
         *     by reversing left/right positions.
         * @param _isBrowser Whether the table is currently being rendered on the server or the client.
         */
        function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction) {
          var _isBrowser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          _classCallCheck(this, StickyStyler);

          this._isNativeHtmlTable = _isNativeHtmlTable;
          this._stickCellCss = _stickCellCss;
          this.direction = direction;
          this._isBrowser = _isBrowser;
        }
        /**
         * Clears the sticky positioning styles from the row and its cells by resetting the `position`
         * style, setting the zIndex to 0, and unsetting each provided sticky direction.
         * @param rows The list of rows that should be cleared from sticking in the provided directions
         * @param stickyDirections The directions that should no longer be set as sticky on the rows.
         */


        _createClass(StickyStyler, [{
          key: "clearStickyPositioning",
          value: function clearStickyPositioning(rows, stickyDirections) {
            var _iterator = _createForOfIteratorHelper(rows),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var row = _step.value;

                // If the row isn't an element (e.g. if it's an `ng-container`),
                // it won't have inline styles or `children` so we skip it.
                if (row.nodeType !== row.ELEMENT_NODE) {
                  continue;
                }

                this._removeStickyStyle(row, stickyDirections);

                for (var i = 0; i < row.children.length; i++) {
                  var cell = row.children[i];

                  this._removeStickyStyle(cell, stickyDirections);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Applies sticky left and right positions to the cells of each row according to the sticky
           * states of the rendered column definitions.
           * @param rows The rows that should have its set of cells stuck according to the sticky states.
           * @param stickyStartStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the start of the row.
           * @param stickyEndStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the end of the row.
           */

        }, {
          key: "updateStickyColumns",
          value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
            var hasStickyColumns = stickyStartStates.some(function (state) {
              return state;
            }) || stickyEndStates.some(function (state) {
              return state;
            });

            if (!rows.length || !hasStickyColumns || !this._isBrowser) {
              return;
            }

            var firstRow = rows[0];
            var numCells = firstRow.children.length;

            var cellWidths = this._getCellWidths(firstRow);

            var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

            var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

            var isRtl = this.direction === 'rtl';

            var _iterator2 = _createForOfIteratorHelper(rows),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;

                for (var i = 0; i < numCells; i++) {
                  var cell = row.children[i];

                  if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                  }

                  if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           * Applies sticky positioning to the row's cells if using the native table layout, and to the
           * row itself otherwise.
           * @param rowsToStick The list of rows that should be stuck according to their corresponding
           *     sticky state and to the provided top or bottom position.
           * @param stickyStates A list of boolean states where each state represents whether the row
           *     should be stuck in the particular top or bottom position.
           * @param position The position direction in which the row should be stuck if that row should be
           *     sticky.
           *
           */

        }, {
          key: "stickRows",
          value: function stickRows(rowsToStick, stickyStates, position) {
            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
              return;
            } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
            // sticky states need to be reversed as well.


            var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
            var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
            var stickyHeight = 0;

            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
              if (!states[rowIndex]) {
                continue;
              }

              var row = rows[rowIndex];

              if (this._isNativeHtmlTable) {
                for (var j = 0; j < row.children.length; j++) {
                  var cell = row.children[j];

                  this._addStickyStyle(cell, position, stickyHeight);
                }
              } else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
              }

              if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
              }

              stickyHeight += row.getBoundingClientRect().height;
            }
          }
          /**
           * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
           * footer rows is to apply sticky styling to the tfoot container. This should only be done if
           * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
           * the tfoot element.
           */

        }, {
          key: "updateStickyFooterContainer",
          value: function updateStickyFooterContainer(tableElement, stickyStates) {
            if (!this._isNativeHtmlTable) {
              return;
            }

            var tfoot = tableElement.querySelector('tfoot');

            if (stickyStates.some(function (state) {
              return !state;
            })) {
              this._removeStickyStyle(tfoot, ['bottom']);
            } else {
              this._addStickyStyle(tfoot, 'bottom', 0);
            }
          }
          /**
           * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
           * the zIndex, removing each of the provided sticky directions, and removing the
           * sticky position if there are no more directions.
           */

        }, {
          key: "_removeStickyStyle",
          value: function _removeStickyStyle(element, stickyDirections) {
            var _iterator3 = _createForOfIteratorHelper(stickyDirections),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var dir = _step3.value;
                element.style[dir] = '';
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            element.style.zIndex = this._getCalculatedZIndex(element); // If the element no longer has any more sticky directions, remove sticky positioning and
            // the sticky CSS class.

            var hasDirection = STICKY_DIRECTIONS.some(function (dir) {
              return !!element.style[dir];
            });

            if (!hasDirection) {
              element.style.position = '';
              element.classList.remove(this._stickCellCss);
            }
          }
          /**
           * Adds the sticky styling to the element by adding the sticky style class, changing position
           * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
           * direction and value.
           */

        }, {
          key: "_addStickyStyle",
          value: function _addStickyStyle(element, dir, dirValue) {
            element.classList.add(this._stickCellCss);
            element.style[dir] = "".concat(dirValue, "px");
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
            element.style.zIndex = this._getCalculatedZIndex(element);
          }
          /**
           * Calculate what the z-index should be for the element, depending on what directions (top,
           * bottom, left, right) have been set. It should be true that elements with a top direction
           * should have the highest index since these are elements like a table header. If any of those
           * elements are also sticky in another direction, then they should appear above other elements
           * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
           * (e.g. footer rows) should then be next in the ordering such that they are below the header
           * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
           * should minimally increment so that they are above non-sticky elements but below top and bottom
           * elements.
           */

        }, {
          key: "_getCalculatedZIndex",
          value: function _getCalculatedZIndex(element) {
            var zIndexIncrements = {
              top: 100,
              bottom: 10,
              left: 1,
              right: 1
            };
            var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

            var _iterator4 = _createForOfIteratorHelper(STICKY_DIRECTIONS),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var dir = _step4.value;

                if (element.style[dir]) {
                  zIndex += zIndexIncrements[dir];
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return zIndex ? "".concat(zIndex) : '';
          }
          /** Gets the widths for each cell in the provided row. */

        }, {
          key: "_getCellWidths",
          value: function _getCellWidths(row) {
            var cellWidths = [];
            var firstRowCells = row.children;

            for (var i = 0; i < firstRowCells.length; i++) {
              var cell = firstRowCells[i];
              cellWidths.push(cell.getBoundingClientRect().width);
            }

            return cellWidths;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyStartColumnPositions",
          value: function _getStickyStartColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = 0; i < widths.length; i++) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyEndColumnPositions",
          value: function _getStickyEndColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = widths.length; i > 0; i--) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
        }]);

        return StickyStyler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to find an unexisting column.
       * @param id Id whose lookup failed.
       * @docs-private
       */


      function getTableUnknownColumnError(id) {
        return Error("Could not find column with id \"".concat(id, "\"."));
      }
      /**
       * Returns an error to be thrown when two column definitions have the same name.
       * @docs-private
       */


      function getTableDuplicateColumnNameError(name) {
        return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
      }
      /**
       * Returns an error to be thrown when there are multiple rows that are missing a when function.
       * @docs-private
       */


      function getTableMultipleDefaultRowDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching row defs for a particular set of data.
       * @docs-private
       */


      function getTableMissingMatchingRowDefError(data) {
        return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
      }
      /**
       * Returns an error to be thrown when there is no row definitions present in the content.
       * @docs-private
       */


      function getTableMissingRowDefsError() {
        return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
      }
      /**
       * Returns an error to be thrown when the data source does not match the compatible types.
       * @docs-private
       */


      function getTableUnknownDataSourceError() {
        return Error("Provided data source did not match an array, Observable, or DataSource");
      }
      /**
       * Returns an error to be thrown when the text column cannot find a parent table to inject.
       * @docs-private
       */


      function getTableTextColumnMissingParentTableError() {
        return Error("Text column could not find a parent table for registration.");
      }
      /**
       * Returns an error to be thrown when a table text column doesn't have a name.
       * @docs-private
       */


      function getTableTextColumnMissingNameError() {
        return Error("Table text column must have a name.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Provides a handle for the table to grab the view container's ng-container to insert data rows.
       * @docs-private
       */


      var DataRowOutlet = function DataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, DataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
        return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: DataRowOutlet,
        selectors: [["", "rowOutlet", ""]]
      });

      DataRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[rowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the header.
       * @docs-private
       */


      var HeaderRowOutlet = function HeaderRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, HeaderRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
        return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: HeaderRowOutlet,
        selectors: [["", "headerRowOutlet", ""]]
      });

      HeaderRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[headerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the footer.
       * @docs-private
       */


      var FooterRowOutlet = function FooterRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, FooterRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
        return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: FooterRowOutlet,
        selectors: [["", "footerRowOutlet", ""]]
      });

      FooterRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[footerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view
       * container's ng-container to insert the no data row.
       * @docs-private
       */


      var NoDataRowOutlet = function NoDataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, NoDataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
        return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      NoDataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: NoDataRowOutlet,
        selectors: [["", "noDataRowOutlet", ""]]
      });

      NoDataRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NoDataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[noDataRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * The table template that can be used by the mat-table. Should not be used outside of the
       * material library.
       * @docs-private
       */


      var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
      // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
      "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
      /**
       * Class used to conveniently type the embedded view ref for rows with a context.
       * @docs-private
       */

      var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(RowViewRef, _angular_core__WEBPAC);

        var _super11 = _createSuper(RowViewRef);

        function RowViewRef() {
          _classCallCheck(this, RowViewRef);

          return _super11.apply(this, arguments);
        }

        return RowViewRef;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"]);
      /**
       * A data table that can render a header row, data rows, and a footer row.
       * Uses the dataSource input to determine the data to be rendered. The data can be provided either
       * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
       * connect function that will return an Observable stream that emits the data array to render.
       */


      var CdkTable = /*#__PURE__*/function () {
        function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
          _classCallCheck(this, CdkTable);

          this._differs = _differs;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dir = _dir;
          this._platform = _platform;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /**
           * Map of all the user's defined columns (header, data, and footer cell template) identified by
           * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
           * any custom column definitions added to `_customColumnDefs`.
           */

          this._columnDefsByName = new Map();
          /**
           * Column definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * column definitions as *its* content child.
           */

          this._customColumnDefs = new Set();
          /**
           * Data row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in data rows as *its* content child.
           */

          this._customRowDefs = new Set();
          /**
           * Header row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in header rows as *its* content child.
           */

          this._customHeaderRowDefs = new Set();
          /**
           * Footer row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
           * built-in footer row as *its* content child.
           */

          this._customFooterRowDefs = new Set();
          /**
           * Whether the header row definition has been changed. Triggers an update to the header row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._headerRowDefChanged = true;
          /**
           * Whether the footer row definition has been changed. Triggers an update to the footer row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._footerRowDefChanged = true;
          /**
           * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
           * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
           * the cached `RenderRow` objects when possible, the row identity is preserved when the data
           * and row template matches, which allows the `IterableDiffer` to check rows by reference
           * and understand which rows are added/moved/removed.
           *
           * Implemented as a map of maps where the first key is the `data: T` object and the second is the
           * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
           * contains an array of created pairs. The array is necessary to handle cases where the data
           * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
           * stored.
           */

          this._cachedRenderRowsMap = new Map();
          /**
           * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
           * table subclasses.
           */

          this.stickyCssClass = 'cdk-table-sticky';
          /** Whether the no data row is currently showing anything. */

          this._isShowingNoDataRow = false;
          this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
          //   and instead calculate the view on init and scroll.

          /**
           * Stream containing the latest information on what rows are being displayed on screen.
           * Can be used by the data source to as a heuristic of what data should be provided.
           *
           * @docs-private
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
            start: 0,
            end: Number.MAX_VALUE
          });

          if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
          }

          this._document = _document;
          this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
        }
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */


        _createClass(CdkTable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this._setupStickyStyler();

            if (this._isNativeHtmlTable) {
              this._applyNativeTableSections();
            } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.


            this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
              return _this6.trackBy ? _this6.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();

            this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
              throw getTableMissingRowDefsError();
            } // Render updates if the list of columns have been changed for the header, row, or footer defs.


            this._renderUpdatedColumns(); // If the header row definition has been changed, trigger a render to the header row.


            if (this._headerRowDefChanged) {
              this._forceRenderHeaderRows();

              this._headerRowDefChanged = false;
            } // If the footer row definition has been changed, trigger a render to the footer row.


            if (this._footerRowDefChanged) {
              this._forceRenderFooterRows();

              this._footerRowDefChanged = false;
            } // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.


            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
              this._observeRenderChanges();
            }

            this._checkStickyStates();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rowOutlet.viewContainer.clear();

            this._noDataRowOutlet.viewContainer.clear();

            this._headerRowOutlet.viewContainer.clear();

            this._footerRowOutlet.viewContainer.clear();

            this._cachedRenderRowsMap.clear();

            this._onDestroy.next();

            this._onDestroy.complete();

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
              this.dataSource.disconnect(this);
            }
          }
          /**
           * Renders rows based on the table's latest set of data, which was either provided directly as an
           * input or retrieved through an Observable stream (directly or from a DataSource).
           * Checks for differences in the data since the last diff to perform only the necessary
           * changes (add/remove/move rows).
           *
           * If the table's data source is a DataSource or Observable, this will be invoked automatically
           * each time the provided Observable stream emits a new data array. Otherwise if your data is
           * an array, this function will need to be called to render any changes.
           */

        }, {
          key: "renderRows",
          value: function renderRows() {
            var _this7 = this;

            this._renderRows = this._getAllRenderRows();

            var changes = this._dataDiffer.diff(this._renderRows);

            if (!changes) {
              return;
            }

            var viewContainer = this._rowOutlet.viewContainer;
            changes.forEachOperation(function (record, prevIndex, currentIndex) {
              if (record.previousIndex == null) {
                _this7._insertRow(record.item, currentIndex);
              } else if (currentIndex == null) {
                viewContainer.remove(prevIndex);
              } else {
                var view = viewContainer.get(prevIndex);
                viewContainer.move(view, currentIndex);
              }
            }); // Update the meta context of a row's context data (index, count, first, last, ...)

            this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.


            changes.forEachIdentityChange(function (record) {
              var rowView = viewContainer.get(record.currentIndex);
              rowView.context.$implicit = record.item.data;
            });

            this._updateNoDataRow();

            this.updateStickyColumnStyles();
          }
          /** Adds a column definition that was not included as part of the content children. */

        }, {
          key: "addColumnDef",
          value: function addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
          }
          /** Removes a column definition that was not included as part of the content children. */

        }, {
          key: "removeColumnDef",
          value: function removeColumnDef(columnDef) {
            this._customColumnDefs["delete"](columnDef);
          }
          /** Adds a row definition that was not included as part of the content children. */

        }, {
          key: "addRowDef",
          value: function addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
          }
          /** Removes a row definition that was not included as part of the content children. */

        }, {
          key: "removeRowDef",
          value: function removeRowDef(rowDef) {
            this._customRowDefs["delete"](rowDef);
          }
          /** Adds a header row definition that was not included as part of the content children. */

        }, {
          key: "addHeaderRowDef",
          value: function addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Removes a header row definition that was not included as part of the content children. */

        }, {
          key: "removeHeaderRowDef",
          value: function removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs["delete"](headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Adds a footer row definition that was not included as part of the content children. */

        }, {
          key: "addFooterRowDef",
          value: function addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);

            this._footerRowDefChanged = true;
          }
          /** Removes a footer row definition that was not included as part of the content children. */

        }, {
          key: "removeFooterRowDef",
          value: function removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs["delete"](footerRowDef);

            this._footerRowDefChanged = true;
          }
          /**
           * Updates the header sticky styles. First resets all applied styles with respect to the cells
           * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
           * automatically called when the header row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyHeaderRowStyles",
          value: function updateStickyHeaderRowStyles() {
            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var thead = tableElement.querySelector('thead');

            if (thead) {
              thead.style.display = headerRows.length ? '' : 'none';
            }

            var stickyStates = this._headerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

            this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


            this._headerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the footer sticky styles. First resets all applied styles with respect to the cells
           * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
           * automatically called when the footer row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyFooterRowStyles",
          value: function updateStickyFooterRowStyles() {
            var footerRows = this._getRenderedRows(this._footerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var tfoot = tableElement.querySelector('tfoot');

            if (tfoot) {
              tfoot.style.display = footerRows.length ? '' : 'none';
            }

            var stickyStates = this._footerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


            this._footerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the column sticky styles. First resets all applied styles with respect to the cells
           * sticking to the left and right. Then sticky styles are added for the left and right according
           * to the column definitions for each cell in each row. This is automatically called when
           * the data source provides a new set of data or when a column definition changes its sticky
           * input. May be called manually for cases where the cell content changes outside of these events.
           */

        }, {
          key: "updateStickyColumnStyles",
          value: function updateStickyColumnStyles() {
            var _this8 = this;

            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var dataRows = this._getRenderedRows(this._rowOutlet);

            var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)


            this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


            headerRows.forEach(function (headerRow, i) {
              _this8._addStickyColumnStyles([headerRow], _this8._headerRowDefs[i]);
            }); // Update the sticky styles for each data row depending on its def's sticky state

            this._rowDefs.forEach(function (rowDef) {
              // Collect all the rows rendered with this row definition.
              var rows = [];

              for (var i = 0; i < dataRows.length; i++) {
                if (_this8._renderRows[i].rowDef === rowDef) {
                  rows.push(dataRows[i]);
                }
              }

              _this8._addStickyColumnStyles(rows, rowDef);
            }); // Update the sticky styles for each footer row depending on the def's sticky state


            footerRows.forEach(function (footerRow, i) {
              _this8._addStickyColumnStyles([footerRow], _this8._footerRowDefs[i]);
            }); // Reset the dirty state of the sticky input change since it has been used.

            Array.from(this._columnDefsByName.values()).forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Get the list of RenderRow objects to render according to the current list of data and defined
           * row definitions. If the previous list already contained a particular pair, it should be reused
           * so that the differ equates their references.
           */

        }, {
          key: "_getAllRenderRows",
          value: function _getAllRenderRows() {
            var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.

            var prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

            for (var i = 0; i < this._data.length; i++) {
              var data = this._data[i];

              var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

              if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
              }

              for (var j = 0; j < renderRowsForData.length; j++) {
                var renderRow = renderRowsForData[j];

                var cache = this._cachedRenderRowsMap.get(renderRow.data);

                if (cache.has(renderRow.rowDef)) {
                  cache.get(renderRow.rowDef).push(renderRow);
                } else {
                  cache.set(renderRow.rowDef, [renderRow]);
                }

                renderRows.push(renderRow);
              }
            }

            return renderRows;
          }
          /**
           * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
           * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
           * `(T, CdkRowDef)` pair.
           */

        }, {
          key: "_getRenderRowsForData",
          value: function _getRenderRowsForData(data, dataIndex, cache) {
            var rowDefs = this._getRowDefs(data, dataIndex);

            return rowDefs.map(function (rowDef) {
              var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

              if (cachedRenderRows.length) {
                var dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
              } else {
                return {
                  data: data,
                  rowDef: rowDef,
                  dataIndex: dataIndex
                };
              }
            });
          }
          /** Update the map containing the content's column definitions. */

        }, {
          key: "_cacheColumnDefs",
          value: function _cacheColumnDefs() {
            var _this9 = this;

            this._columnDefsByName.clear();

            var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(function (columnDef) {
              if (_this9._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
              }

              _this9._columnDefsByName.set(columnDef.name, columnDef);
            });
          }
          /** Update the list of all available row definitions that can be used. */

        }, {
          key: "_cacheRowDefs",
          value: function _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

            var defaultRowDefs = this._rowDefs.filter(function (def) {
              return !def.when;
            });

            if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
              throw getTableMultipleDefaultRowDefsError();
            }

            this._defaultRowDef = defaultRowDefs[0];
          }
          /**
           * Check if the header, data, or footer rows have changed what columns they want to display or
           * whether the sticky states have changed for the header or footer. If there is a diff, then
           * re-render that section.
           */

        }, {
          key: "_renderUpdatedColumns",
          value: function _renderUpdatedColumns() {
            var columnsDiffReducer = function columnsDiffReducer(acc, def) {
              return acc || !!def.getColumnsDiff();
            }; // Force re-render data rows if the list of column definitions have changed.


            if (this._rowDefs.reduce(columnsDiffReducer, false)) {
              this._forceRenderDataRows();
            } // Force re-render header/footer rows if the list of column definitions have changed..


            if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
              this._forceRenderHeaderRows();
            }

            if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
              this._forceRenderFooterRows();
            }
          }
          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the row outlet. Otherwise start listening for new data.
           */

        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            this._data = [];

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
              this.dataSource.disconnect(this);
            } // Stop listening for data from the previous data source.


            if (this._renderChangeSubscription) {
              this._renderChangeSubscription.unsubscribe();

              this._renderChangeSubscription = null;
            }

            if (!dataSource) {
              if (this._dataDiffer) {
                this._dataDiffer.diff([]);
              }

              this._rowOutlet.viewContainer.clear();
            }

            this._dataSource = dataSource;
          }
          /** Set up a subscription for the data provided by the data source. */

        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this10 = this;

            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
              return;
            }

            var dataStream;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
              dataStream = this.dataSource.connect(this);
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
              dataStream = this.dataSource;
            } else if (Array.isArray(this.dataSource)) {
              dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
            }

            if (dataStream === undefined) {
              throw getTableUnknownDataSourceError();
            }

            this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(function (data) {
              _this10._data = data || [];

              _this10.renderRows();
            });
          }
          /**
           * Clears any existing content in the header row outlet and creates a new embedded view
           * in the outlet using the header row definition.
           */

        }, {
          key: "_forceRenderHeaderRows",
          value: function _forceRenderHeaderRows() {
            var _this11 = this;

            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
              this._headerRowOutlet.viewContainer.clear();
            }

            this._headerRowDefs.forEach(function (def, i) {
              return _this11._renderRow(_this11._headerRowOutlet, def, i);
            });

            this.updateStickyHeaderRowStyles();
            this.updateStickyColumnStyles();
          }
          /**
           * Clears any existing content in the footer row outlet and creates a new embedded view
           * in the outlet using the footer row definition.
           */

        }, {
          key: "_forceRenderFooterRows",
          value: function _forceRenderFooterRows() {
            var _this12 = this;

            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
              this._footerRowOutlet.viewContainer.clear();
            }

            this._footerRowDefs.forEach(function (def, i) {
              return _this12._renderRow(_this12._footerRowOutlet, def, i);
            });

            this.updateStickyFooterRowStyles();
            this.updateStickyColumnStyles();
          }
          /** Adds the sticky column styles for the rows according to the columns' stick states. */

        }, {
          key: "_addStickyColumnStyles",
          value: function _addStickyColumnStyles(rows, rowDef) {
            var _this13 = this;

            var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
              var columnDef = _this13._columnDefsByName.get(columnName);

              if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
              }

              return columnDef;
            });
            var stickyStartStates = columnDefs.map(function (columnDef) {
              return columnDef.sticky;
            });
            var stickyEndStates = columnDefs.map(function (columnDef) {
              return columnDef.stickyEnd;
            });

            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
          }
          /** Gets the list of rows that have been rendered in the row outlet. */

        }, {
          key: "_getRenderedRows",
          value: function _getRenderedRows(rowOutlet) {
            var renderedRows = [];

            for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
              var viewRef = rowOutlet.viewContainer.get(i);
              renderedRows.push(viewRef.rootNodes[0]);
            }

            return renderedRows;
          }
          /**
           * Get the matching row definitions that should be used for this row data. If there is only
           * one row definition, it is returned. Otherwise, find the row definitions that has a when
           * predicate that returns true with the data. If none return true, return the default row
           * definition.
           */

        }, {
          key: "_getRowDefs",
          value: function _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
              return [this._rowDefs[0]];
            }

            var rowDefs = [];

            if (this.multiTemplateDataRows) {
              rowDefs = this._rowDefs.filter(function (def) {
                return !def.when || def.when(dataIndex, data);
              });
            } else {
              var rowDef = this._rowDefs.find(function (def) {
                return def.when && def.when(dataIndex, data);
              }) || this._defaultRowDef;

              if (rowDef) {
                rowDefs.push(rowDef);
              }
            }

            if (!rowDefs.length) {
              throw getTableMissingMatchingRowDefError(data);
            }

            return rowDefs;
          }
          /**
           * Create the embedded view for the data row template and place it in the correct index location
           * within the data row view container.
           */

        }, {
          key: "_insertRow",
          value: function _insertRow(renderRow, renderIndex) {
            var rowDef = renderRow.rowDef;
            var context = {
              $implicit: renderRow.data
            };

            this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
          }
          /**
           * Creates a new row template in the outlet and fills it with the set of cell templates.
           * Optionally takes a context to provide to the row and cells, as well as an optional index
           * of where to place the new row template in the outlet.
           */

        }, {
          key: "_renderRow",
          value: function _renderRow(outlet, rowDef, index) {
            var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

            var _iterator5 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var cellTemplate = _step5.value;

                if (CdkCellOutlet.mostRecentCellOutlet) {
                  CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Updates the index-related context for each row to reflect any changes in the index of the rows,
           * e.g. first/last/even/odd.
           */

        }, {
          key: "_updateRowIndexContext",
          value: function _updateRowIndexContext() {
            var viewContainer = this._rowOutlet.viewContainer;

            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
              var viewRef = viewContainer.get(renderIndex);
              var context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;

              if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
              } else {
                context.index = this._renderRows[renderIndex].dataIndex;
              }
            }
          }
          /** Gets the column definitions for the provided row def. */

        }, {
          key: "_getCellTemplates",
          value: function _getCellTemplates(rowDef) {
            var _this14 = this;

            if (!rowDef || !rowDef.columns) {
              return [];
            }

            return Array.from(rowDef.columns, function (columnId) {
              var column = _this14._columnDefsByName.get(columnId);

              if (!column) {
                throw getTableUnknownColumnError(columnId);
              }

              return rowDef.extractCellTemplate(column);
            });
          }
          /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

        }, {
          key: "_applyNativeTableSections",
          value: function _applyNativeTableSections() {
            var documentFragment = this._document.createDocumentFragment();

            var sections = [{
              tag: 'thead',
              outlets: [this._headerRowOutlet]
            }, {
              tag: 'tbody',
              outlets: [this._rowOutlet, this._noDataRowOutlet]
            }, {
              tag: 'tfoot',
              outlets: [this._footerRowOutlet]
            }];

            for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
              var section = _sections[_i2];

              var element = this._document.createElement(section.tag);

              element.setAttribute('role', 'rowgroup');

              var _iterator6 = _createForOfIteratorHelper(section.outlets),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var outlet = _step6.value;
                  element.appendChild(outlet.elementRef.nativeElement);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              documentFragment.appendChild(element);
            } // Use a DocumentFragment so we don't hit the DOM on each iteration.


            this._elementRef.nativeElement.appendChild(documentFragment);
          }
          /**
           * Forces a re-render of the data rows. Should be called in cases where there has been an input
           * change that affects the evaluation of which rows should be rendered, e.g. toggling
           * `multiTemplateDataRows` or adding/removing row definitions.
           */

        }, {
          key: "_forceRenderDataRows",
          value: function _forceRenderDataRows() {
            this._dataDiffer.diff([]);

            this._rowOutlet.viewContainer.clear();

            this.renderRows();
            this.updateStickyColumnStyles();
          }
          /**
           * Checks if there has been a change in sticky states since last check and applies the correct
           * sticky styles. Since checking resets the "dirty" state, this should only be performed once
           * during a change detection and after the inputs are settled (after content check).
           */

        }, {
          key: "_checkStickyStates",
          value: function _checkStickyStates() {
            var stickyCheckReducer = function stickyCheckReducer(acc, d) {
              return acc || d.hasStickyChanged();
            }; // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.


            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyHeaderRowStyles();
            }

            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyFooterRowStyles();
            }

            if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
              this.updateStickyColumnStyles();
            }
          }
          /**
           * Creates the sticky styler that will be used for sticky rows and columns. Listens
           * for directionality changes and provides the latest direction to the styler. Re-applies column
           * stickiness when directionality changes.
           */

        }, {
          key: "_setupStickyStyler",
          value: function _setupStickyStyler() {
            var _this15 = this;

            var direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(function (value) {
              _this15._stickyStyler.direction = value;

              _this15.updateStickyColumnStyles();
            });
          }
          /** Filters definitions that belong to this table from a QueryList. */

        }, {
          key: "_getOwnDefs",
          value: function _getOwnDefs(items) {
            var _this16 = this;

            return items.filter(function (item) {
              return !item._table || item._table === _this16;
            });
          }
          /** Creates or removes the no data row, depending on whether any data is being shown. */

        }, {
          key: "_updateNoDataRow",
          value: function _updateNoDataRow() {
            if (this._noDataRow) {
              var shouldShow = this._rowOutlet.viewContainer.length === 0;

              if (shouldShow !== this._isShowingNoDataRow) {
                var container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(this._noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
              }
            }
          }
        }, {
          key: "trackBy",
          get: function get() {
            return this._trackByFn;
          },
          set: function set(fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' && console && console.warn) {
              console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
            }

            this._trackByFn = fn;
          }
          /**
           * The table's source of data, which can be provided in three ways (in order of complexity):
           *   - Simple data array (each object represents one table row)
           *   - Stream that emits a data array each time the array changes
           *   - `DataSource` object that implements the connect/disconnect interface.
           *
           * If a data array is provided, the table must be notified when the array's objects are
           * added, removed, or moved. This can be done by calling the `renderRows()` function which will
           * render the diff since the last table render. If the data array reference is changed, the table
           * will automatically trigger an update to the rows.
           *
           * When providing an Observable stream, the table will trigger an update automatically when the
           * stream emits a new array of data.
           *
           * Finally, when providing a `DataSource` object, the table will use the Observable stream
           * provided by the connect function and trigger updates when that stream emits new data array
           * values. During the table's ngOnDestroy or when the data source is removed from the table, the
           * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
           * subscriptions registered during the connect process).
           */

        }, {
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
          /**
           * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
           * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
           * dataobject will render the first row that evaluates its when predicate to true, in the order
           * defined in the table, or otherwise the default row which does not have a when predicate.
           */

        }, {
          key: "multiTemplateDataRows",
          get: function get() {
            return this._multiTemplateDataRows;
          },
          set: function set(v) {
            this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.

            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
              this._forceRenderDataRows();
            }
          }
        }]);

        return CdkTable;
      }();

      CdkTable.ɵfac = function CdkTable_Factory(t) {
        return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
      };

      CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkTable,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
          }
        },
        viewQuery: function CdkTable_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
          }
        },
        hostAttrs: [1, "cdk-table"],
        inputs: {
          trackBy: "trackBy",
          dataSource: "dataSource",
          multiTemplateDataRows: "multiTemplateDataRows"
        },
        exportAs: ["cdkTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: CDK_TABLE,
          useExisting: CdkTable
        }])],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function CdkTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
        encapsulation: 2
      });

      CdkTable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['role']
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      CdkTable.propDecorators = {
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        multiTemplateDataRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _rowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [DataRowOutlet, {
            "static": true
          }]
        }],
        _headerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [HeaderRowOutlet, {
            "static": true
          }]
        }],
        _footerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [FooterRowOutlet, {
            "static": true
          }]
        }],
        _noDataRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [NoDataRowOutlet, {
            "static": true
          }]
        }],
        _contentColumnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkColumnDef, {
            descendants: true
          }]
        }],
        _contentRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkRowDef, {
            descendants: true
          }]
        }],
        _contentHeaderRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkHeaderRowDef, {
            descendants: true
          }]
        }],
        _contentFooterRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkFooterRowDef, {
            descendants: true
          }]
        }],
        _noDataRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkNoDataRow]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-table, table[cdk-table]',
            exportAs: 'cdkTable',
            template: CDK_TABLE_TEMPLATE,
            host: {
              'class': 'cdk-table'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
            // The view for `MatTable` consists entirely of templates declared in other views. As they are
            // declared elsewhere, they are checked when their declaration points are checked.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            providers: [{
              provide: CDK_TABLE,
              useExisting: CdkTable
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
              args: ['role']
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }];
        }, {
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, {
              "static": true
            }]
          }],
          _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, {
              "static": true
            }]
          }],
          _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, {
              "static": true
            }]
          }],
          _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NoDataRowOutlet, {
              "static": true
            }]
          }],
          _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, {
              descendants: true
            }]
          }],
          _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, {
              descendants: true
            }]
          }],
          _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
              descendants: true
            }]
          }],
          _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
              descendants: true
            }]
          }],
          _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkNoDataRow]
          }]
        });
      })();
      /** Utility function that gets a merged list of the entries in an array and values of a Set. */


      function mergeArrayAndSet(array, set) {
        return array.concat(Array.from(set));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var CdkTextColumn = /*#__PURE__*/function () {
        function CdkTextColumn(_table, _options) {
          _classCallCheck(this, CdkTextColumn);

          this._table = _table;
          this._options = _options;
          /** Alignment of the cell values. */

          this.justify = 'start';
          this._options = _options || {};
        }
        /** Column name that should be used to reference this column. */


        _createClass(CdkTextColumn, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._syncColumnDefName();

            if (this.headerText === undefined) {
              this.headerText = this._createDefaultHeaderText();
            }

            if (!this.dataAccessor) {
              this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
                return data[name];
              };
            }

            if (this._table) {
              // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
              // since the columnDef will not pick up its content by the time the table finishes checking
              // its content and initializing the rows.
              this.columnDef.cell = this.cell;
              this.columnDef.headerCell = this.headerCell;

              this._table.addColumnDef(this.columnDef);
            } else {
              throw getTableTextColumnMissingParentTableError();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._table) {
              this._table.removeColumnDef(this.columnDef);
            }
          }
          /**
           * Creates a default header text. Use the options' header text transformation function if one
           * has been provided. Otherwise simply capitalize the column name.
           */

        }, {
          key: "_createDefaultHeaderText",
          value: function _createDefaultHeaderText() {
            var name = this.name;

            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
              throw getTableTextColumnMissingNameError();
            }

            if (this._options && this._options.defaultHeaderTextTransform) {
              return this._options.defaultHeaderTextTransform(name);
            }

            return name[0].toUpperCase() + name.slice(1);
          }
          /** Synchronizes the column definition name with the text column name. */

        }, {
          key: "_syncColumnDefName",
          value: function _syncColumnDefName() {
            if (this.columnDef) {
              this.columnDef.name = this.name;
            }
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name; // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.

            this._syncColumnDefName();
          }
        }]);

        return CdkTextColumn;
      }();

      CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
        return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
      };

      CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CdkTextColumn,
        selectors: [["cdk-text-column"]],
        viewQuery: function CdkTextColumn_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          }
        },
        inputs: {
          justify: "justify",
          name: "name",
          headerText: "headerText",
          dataAccessor: "dataAccessor"
        },
        decls: 3,
        vars: 0,
        consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
        template: function CdkTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
        encapsulation: 2
      });

      CdkTextColumn.ctorParameters = function () {
        return [{
          type: CdkTable,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [TEXT_COLUMN_OPTIONS]
          }]
        }];
      };

      CdkTextColumn.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        headerText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataAccessor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        justify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        columnDef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkColumnDef, {
            "static": true
          }]
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkCellDef, {
            "static": true
          }]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkHeaderCellDef, {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'cdk-text-column',
            template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
          }]
        }], function () {
          return [{
            type: CdkTable,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [TEXT_COLUMN_OPTIONS]
            }]
          }];
        }, {
          justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, {
              "static": true
            }]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, {
              "static": true
            }]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet];

      var CdkTableModule = function CdkTableModule() {
        _classCallCheck(this, CdkTableModule);
      };

      CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: CdkTableModule
      });
      CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function CdkTableModule_Factory(t) {
          return new (t || CdkTableModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, {
          declarations: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet],
          exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            exports: EXPORTED_DECLARATIONS,
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=table.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
      \***************************************************************************/

    /*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function () {
        return MAT_PAGINATOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
        return MAT_PAGINATOR_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
        return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
        return MatPaginator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
        return MatPaginatorIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
        return MatPaginatorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
        return PageEvent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
       * include it in a custom provider
       */


      function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageSizeOption_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSizeOption_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
        }
      }

      function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7._changePageSize($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
        }
      }

      function MatPaginator_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.pageSize);
        }
      }

      function MatPaginator_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
        }
      }

      function MatPaginator_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.firstPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
        }
      }

      function MatPaginator_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.lastPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
        }
      }

      var MatPaginatorIntl = function MatPaginatorIntl() {
        _classCallCheck(this, MatPaginatorIntl);

        /**
         * Stream to emit from when labels are changed. Use this to notify components when the labels have
         * changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** A label for the page size selector. */

        this.itemsPerPageLabel = 'Items per page:';
        /** A label for the button that increments the current page. */

        this.nextPageLabel = 'Next page';
        /** A label for the button that decrements the current page. */

        this.previousPageLabel = 'Previous page';
        /** A label for the button that moves to the first page. */

        this.firstPageLabel = 'First page';
        /** A label for the button that moves to the last page. */

        this.lastPageLabel = 'Last page';
        /** A label for the range of items within the current page and the length of the whole list. */

        this.getRangeLabel = function (page, pageSize, length) {
          if (length == 0 || pageSize == 0) {
            return "0 of ".concat(length);
          }

          length = Math.max(length, 0);
          var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

          var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
          return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
        };
      };

      MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
        return new (t || MatPaginatorIntl)();
      };

      MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MatPaginatorIntl_Factory() {
          return new MatPaginatorIntl();
        },
        token: MatPaginatorIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatPaginatorIntl();
      }
      /** @docs-private */


      var MAT_PAGINATOR_INTL_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: MatPaginatorIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatPaginatorIntl]],
        useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The default page size if there is no page size and there are no provided page size options. */

      var DEFAULT_PAGE_SIZE = 50;
      /**
       * Change event object that is emitted when the user selects a
       * different page size or navigates to another page.
       */

      var PageEvent = function PageEvent() {
        _classCallCheck(this, PageEvent);
      };
      /** Injection token that can be used to provide the default options for the paginator module. */


      var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

      /** @docs-private */

      var MatPaginatorBase = function MatPaginatorBase() {
        _classCallCheck(this, MatPaginatorBase);
      };

      var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinInitialized"])(MatPaginatorBase));
      /**
       * Component to provide navigation between paged information. Displays the size of the current
       * page, user-selectable options to change that size, what items are being shown, and
       * navigational button to go to the previous or next page.
       */


      var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
        _inherits(MatPaginator, _MatPaginatorBase2);

        var _super12 = _createSuper(MatPaginator);

        function MatPaginator(_intl, _changeDetectorRef, defaults) {
          var _this17;

          _classCallCheck(this, MatPaginator);

          _this17 = _super12.call(this);
          _this17._intl = _intl;
          _this17._changeDetectorRef = _changeDetectorRef;
          _this17._pageIndex = 0;
          _this17._length = 0;
          _this17._pageSizeOptions = [];
          _this17._hidePageSize = false;
          _this17._showFirstLastButtons = false;
          /** Event emitted when the paginator changes the page size or page index. */

          _this17.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this17._intlChanges = _intl.changes.subscribe(function () {
            return _this17._changeDetectorRef.markForCheck();
          });

          if (defaults) {
            var pageSize = defaults.pageSize,
                pageSizeOptions = defaults.pageSizeOptions,
                hidePageSize = defaults.hidePageSize,
                showFirstLastButtons = defaults.showFirstLastButtons;

            if (pageSize != null) {
              _this17._pageSize = pageSize;
            }

            if (pageSizeOptions != null) {
              _this17._pageSizeOptions = pageSizeOptions;
            }

            if (hidePageSize != null) {
              _this17._hidePageSize = hidePageSize;
            }

            if (showFirstLastButtons != null) {
              _this17._showFirstLastButtons = showFirstLastButtons;
            }
          }

          return _this17;
        }
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */


        _createClass(MatPaginator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._initialized = true;

            this._updateDisplayedPageSizeOptions();

            this._markInitialized();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();
          }
          /** Advances to the next page if it exists. */

        }, {
          key: "nextPage",
          value: function nextPage() {
            if (!this.hasNextPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex++;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move back to the previous page if it exists. */

        }, {
          key: "previousPage",
          value: function previousPage() {
            if (!this.hasPreviousPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex--;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move to the first page if not already there. */

        }, {
          key: "firstPage",
          value: function firstPage() {
            // hasPreviousPage being false implies at the start
            if (!this.hasPreviousPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex = 0;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move to the last page if not already there. */

        }, {
          key: "lastPage",
          value: function lastPage() {
            // hasNextPage being false implies at the end
            if (!this.hasNextPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex = this.getNumberOfPages() - 1;

            this._emitPageEvent(previousPageIndex);
          }
          /** Whether there is a previous page. */

        }, {
          key: "hasPreviousPage",
          value: function hasPreviousPage() {
            return this.pageIndex >= 1 && this.pageSize != 0;
          }
          /** Whether there is a next page. */

        }, {
          key: "hasNextPage",
          value: function hasNextPage() {
            var maxPageIndex = this.getNumberOfPages() - 1;
            return this.pageIndex < maxPageIndex && this.pageSize != 0;
          }
          /** Calculate the number of pages */

        }, {
          key: "getNumberOfPages",
          value: function getNumberOfPages() {
            if (!this.pageSize) {
              return 0;
            }

            return Math.ceil(this.length / this.pageSize);
          }
          /**
           * Changes the page size so that the first item displayed on the page will still be
           * displayed using the new page size.
           *
           * For example, if the page size is 10 and on the second page (items indexed 10-19) then
           * switching so that the page size is 5 will set the third page as the current page so
           * that the 10th item will still be displayed.
           */

        }, {
          key: "_changePageSize",
          value: function _changePageSize(pageSize) {
            // Current page needs to be updated to reflect the new page size. Navigate to the page
            // containing the previous page's first item.
            var startIndex = this.pageIndex * this.pageSize;
            var previousPageIndex = this.pageIndex;
            this.pageIndex = Math.floor(startIndex / pageSize) || 0;
            this.pageSize = pageSize;

            this._emitPageEvent(previousPageIndex);
          }
          /** Checks whether the buttons for going forwards should be disabled. */

        }, {
          key: "_nextButtonsDisabled",
          value: function _nextButtonsDisabled() {
            return this.disabled || !this.hasNextPage();
          }
          /** Checks whether the buttons for going backwards should be disabled. */

        }, {
          key: "_previousButtonsDisabled",
          value: function _previousButtonsDisabled() {
            return this.disabled || !this.hasPreviousPage();
          }
          /**
           * Updates the list of page size options to display to the user. Includes making sure that
           * the page size is an option and that the list is sorted.
           */

        }, {
          key: "_updateDisplayedPageSizeOptions",
          value: function _updateDisplayedPageSizeOptions() {
            if (!this._initialized) {
              return;
            } // If no page size is provided, use the first page size option or the default page size.


            if (!this.pageSize) {
              this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
            }

            this._displayedPageSizeOptions = this.pageSizeOptions.slice();

            if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
              this._displayedPageSizeOptions.push(this.pageSize);
            } // Sort the numbers using a number-specific sort function.


            this._displayedPageSizeOptions.sort(function (a, b) {
              return a - b;
            });

            this._changeDetectorRef.markForCheck();
          }
          /** Emits an event notifying that a change of the paginator's properties has been triggered. */

        }, {
          key: "_emitPageEvent",
          value: function _emitPageEvent(previousPageIndex) {
            this.page.emit({
              previousPageIndex: previousPageIndex,
              pageIndex: this.pageIndex,
              pageSize: this.pageSize,
              length: this.length
            });
          }
        }, {
          key: "pageIndex",
          get: function get() {
            return this._pageIndex;
          },
          set: function set(value) {
            this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

            this._changeDetectorRef.markForCheck();
          }
          /** The length of the total number of items that are being paginated. Defaulted to 0. */

        }, {
          key: "length",
          get: function get() {
            return this._length;
          },
          set: function set(value) {
            this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Number of items to display on a page. By default set to 50. */

        }, {
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          },
          set: function set(value) {
            this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

            this._updateDisplayedPageSizeOptions();
          }
          /** The set of provided page size options to display to the user. */

        }, {
          key: "pageSizeOptions",
          get: function get() {
            return this._pageSizeOptions;
          },
          set: function set(value) {
            this._pageSizeOptions = (value || []).map(function (p) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(p);
            });

            this._updateDisplayedPageSizeOptions();
          }
          /** Whether to hide the page size selection UI from the user. */

        }, {
          key: "hidePageSize",
          get: function get() {
            return this._hidePageSize;
          },
          set: function set(value) {
            this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether to show the first/last buttons UI to the user. */

        }, {
          key: "showFirstLastButtons",
          get: function get() {
            return this._showFirstLastButtons;
          },
          set: function set(value) {
            this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatPaginator;
      }(_MatPaginatorBase);

      MatPaginator.ɵfac = function MatPaginator_Factory(t) {
        return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
      };

      MatPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatPaginator,
        selectors: [["mat-paginator"]],
        hostAttrs: [1, "mat-paginator"],
        inputs: {
          disabled: "disabled",
          pageIndex: "pageIndex",
          length: "length",
          pageSize: "pageSize",
          pageSizeOptions: "pageSizeOptions",
          hidePageSize: "hidePageSize",
          showFirstLastButtons: "showFirstLastButtons",
          color: "color"
        },
        outputs: {
          page: "page"
        },
        exportAs: ["matPaginator"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 14,
        consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
        template: function MatPaginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
              return ctx.previousPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatPaginator.ctorParameters = function () {
        return [{
          type: MatPaginatorIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatPaginator.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidePageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFirstLastButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-paginator',
            exportAs: 'matPaginator',
            template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled'],
            host: {
              'class': 'mat-paginator'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
          }]
        }], function () {
          return [{
            type: MatPaginatorIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          hidePageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          showFirstLastButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatPaginatorModule = function MatPaginatorModule() {
        _classCallCheck(this, MatPaginatorModule);
      };

      MatPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatPaginatorModule
      });
      MatPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatPaginatorModule_Factory(t) {
          return new (t || MatPaginatorModule)();
        },
        providers: [MAT_PAGINATOR_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
          declarations: function declarations() {
            return [MatPaginator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]];
          },
          exports: function exports() {
            return [MatPaginator];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]],
            exports: [MatPaginator],
            declarations: [MatPaginator],
            providers: [MAT_PAGINATOR_INTL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=paginator.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SortJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
        return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSort", function () {
        return MatSort;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
        return MatSortHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
        return MatSortHeaderIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
        return MatSortModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
        return matSortAnimations;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-sort-header", ""];

      function MatSortHeader_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._disableViewStateAnimation = true;
          })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3._disableViewStateAnimation = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
        }
      }

      var _c1 = ["*"];

      function getSortDuplicateSortableIdError(id) {
        return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
      }
      /** @docs-private */


      function getSortHeaderNotContainedWithinSortError() {
        return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
      }
      /** @docs-private */


      function getSortHeaderMissingIdError() {
        return Error("MatSortHeader must be provided with a unique id.");
      }
      /** @docs-private */


      function getSortInvalidDirectionError(direction) {
        return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatSort.

      /** @docs-private */


      var MatSortBase = function MatSortBase() {
        _classCallCheck(this, MatSortBase);
      };

      var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
      /** Container for MatSortables to manage the sort state and provide default sort parameters. */


      var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
        _inherits(MatSort, _MatSortMixinBase2);

        var _super13 = _createSuper(MatSort);

        function MatSort() {
          var _this18;

          _classCallCheck(this, MatSort);

          _this18 = _super13.apply(this, arguments);
          /** Collection of all registered sortables that this directive manages. */

          _this18.sortables = new Map();
          /** Used to notify any child components listening to state changes. */

          _this18._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * The direction to set when an MatSortable is initially sorted.
           * May be overriden by the MatSortable's sort start.
           */

          _this18.start = 'asc';
          _this18._direction = '';
          /** Event emitted when the user changes either the active sort or sort direction. */

          _this18.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this18;
        }
        /** The sort direction of the currently active MatSortable. */


        _createClass(MatSort, [{
          key: "register",

          /**
           * Register function to be used by the contained MatSortables. Adds the MatSortable to the
           * collection of MatSortables.
           */
          value: function register(sortable) {
            if (!sortable.id) {
              throw getSortHeaderMissingIdError();
            }

            if (this.sortables.has(sortable.id)) {
              throw getSortDuplicateSortableIdError(sortable.id);
            }

            this.sortables.set(sortable.id, sortable);
          }
          /**
           * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
           * collection of contained MatSortables.
           */

        }, {
          key: "deregister",
          value: function deregister(sortable) {
            this.sortables["delete"](sortable.id);
          }
          /** Sets the active sort id and determines the new sort direction. */

        }, {
          key: "sort",
          value: function sort(sortable) {
            if (this.active != sortable.id) {
              this.active = sortable.id;
              this.direction = sortable.start ? sortable.start : this.start;
            } else {
              this.direction = this.getNextSortDirection(sortable);
            }

            this.sortChange.emit({
              active: this.active,
              direction: this.direction
            });
          }
          /** Returns the next sort direction of the active sortable, checking for potential overrides. */

        }, {
          key: "getNextSortDirection",
          value: function getNextSortDirection(sortable) {
            if (!sortable) {
              return '';
            } // Get the sort direction cycle with the potential sortable overrides.


            var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
            var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

            var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

            if (nextDirectionIndex >= sortDirectionCycle.length) {
              nextDirectionIndex = 0;
            }

            return sortDirectionCycle[nextDirectionIndex];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._markInitialized();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(direction) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
              throw getSortInvalidDirectionError(direction);
            }

            this._direction = direction;
          }
          /**
           * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
           * May be overriden by the MatSortable's disable clear input.
           */

        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          },
          set: function set(v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          }
        }]);

        return MatSort;
      }(_MatSortMixinBase);

      MatSort.ɵfac = function MatSort_Factory(t) {
        return ɵMatSort_BaseFactory(t || MatSort);
      };

      MatSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatSort,
        selectors: [["", "matSort", ""]],
        hostAttrs: [1, "mat-sort"],
        inputs: {
          disabled: ["matSortDisabled", "disabled"],
          start: ["matSortStart", "start"],
          direction: ["matSortDirection", "direction"],
          disableClear: ["matSortDisableClear", "disableClear"],
          active: ["matSortActive", "active"]
        },
        outputs: {
          sortChange: "matSortChange"
        },
        exportAs: ["matSort"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MatSort.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortActive']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortStart']
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDirection']
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDisableClear']
        }],
        sortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['matSortChange']
        }]
      };

      var ɵMatSort_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSort);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matSort]',
            exportAs: 'matSort',
            host: {
              'class': 'mat-sort'
            },
            inputs: ['disabled: matSortDisabled']
          }]
        }], null, {
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortStart']
          }],
          sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['matSortChange']
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDirection']
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDisableClear']
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortActive']
          }]
        });
      })();
      /** Returns the sort direction cycle to use given the provided parameters of order and clear. */


      function getSortDirectionCycle(start, disableClear) {
        var sortOrder = ['asc', 'desc'];

        if (start == 'desc') {
          sortOrder.reverse();
        }

        if (!disableClear) {
          sortOrder.push('');
        }

        return sortOrder;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
      /**
       * Animations used by MatSort.
       * @docs-private
       */

      var matSortAnimations = {
        /** Animation that moves the sort indicator. */
        indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0px)'
        })), // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(10px)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
        leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(-45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
        rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'rotate(-45deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /** Animation that controls the arrow opacity. */
        arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: .54
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })), // Transition between all states except for immediate transitions
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation for the translation of the arrow as a whole. States are separated into two
         * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
         * peek, and active. The other states define a specific animation (source-to-destination)
         * and are determined as a function of their prev user-perceived state and what the next state
         * should be.
         */
        arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Below
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        })]))), // Hidden Below => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Above
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(-25%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'translateY(25%)'
        }))]),

        /** Necessary trigger that calls animate on children animations. */
        allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animateChild"])(), {
          optional: true
        })])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
       * include it in a custom provider.
       */

      var MatSortHeaderIntl = function MatSortHeaderIntl() {
        _classCallCheck(this, MatSortHeaderIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * ARIA label for the sorting button.
         * @deprecated Not used anymore. To be removed.
         * @breaking-change 8.0.0
         */

        this.sortButtonLabel = function (id) {
          return "Change sorting for ".concat(id);
        };
      };

      MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
        return new (t || MatSortHeaderIntl)();
      };

      MatSortHeaderIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatSortHeaderIntl_Factory() {
          return new MatSortHeaderIntl();
        },
        token: MatSortHeaderIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatSortHeaderIntl();
      }
      /** @docs-private */


      var MAT_SORT_HEADER_INTL_PROVIDER = {
        // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
        provide: MatSortHeaderIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
        useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to the sort header.

      /** @docs-private */

      var MatSortHeaderBase = function MatSortHeaderBase() {
        _classCallCheck(this, MatSortHeaderBase);
      };

      var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
      /**
       * Applies sorting behavior (click to change sort) and styles to an element, including an
       * arrow to display the current sort direction.
       *
       * Must be provided with an id and contained within a parent MatSort directive.
       *
       * If used on header cells in a CdkTable, it will automatically default its id from its containing
       * column definition.
       */


      var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
        _inherits(MatSortHeader, _MatSortHeaderMixinBa);

        var _super14 = _createSuper(MatSortHeader);

        function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
          var _this19;

          _classCallCheck(this, MatSortHeader);

          // Note that we use a string token for the `_columnDef`, because the value is provided both by
          // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
          // and we want to avoid having the sort header depending on the CDK table because
          // of this single reference.
          _this19 = _super14.call(this);
          _this19._intl = _intl;
          _this19._sort = _sort;
          _this19._columnDef = _columnDef;
          _this19._focusMonitor = _focusMonitor;
          _this19._elementRef = _elementRef;
          /**
           * Flag set to true when the indicator should be displayed while the sort is not active. Used to
           * provide an affordance that the header is sortable by showing on focus and hover.
           */

          _this19._showIndicatorHint = false;
          /** The direction the arrow should be facing according to the current state. */

          _this19._arrowDirection = '';
          /**
           * Whether the view state animation should show the transition between the `from` and `to` states.
           */

          _this19._disableViewStateAnimation = false;
          /** Sets the position of the arrow that displays when sorted. */

          _this19.arrowPosition = 'after';

          if (!_sort) {
            throw getSortHeaderNotContainedWithinSortError();
          }

          _this19._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(function () {
            if (_this19._isSorted()) {
              _this19._updateArrowDirection();
            } // If this header was recently active and now no longer sorted, animate away the arrow.


            if (!_this19._isSorted() && _this19._viewState && _this19._viewState.toState === 'active') {
              _this19._disableViewStateAnimation = false;

              _this19._setAnimationTransitionState({
                fromState: 'active',
                toState: _this19._arrowDirection
              });
            }

            changeDetectorRef.markForCheck();
          });
          return _this19;
        }
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


        _createClass(MatSortHeader, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.id && this._columnDef) {
              this.id = this._columnDef.name;
            } // Initialize the direction of the arrow and set the view state to be immediately that state.


            this._updateArrowDirection();

            this._setAnimationTransitionState({
              toState: this._isSorted() ? 'active' : this._arrowDirection
            });

            this._sort.register(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this20 = this;

            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              return _this20._setIndicatorHintVisible(!!origin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            this._sort.deregister(this);

            this._rerenderSubscription.unsubscribe();
          }
          /**
           * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
           * user showing what the active sort will become. If set to false, the arrow will fade away.
           */

        }, {
          key: "_setIndicatorHintVisible",
          value: function _setIndicatorHintVisible(visible) {
            // No-op if the sort header is disabled - should not make the hint visible.
            if (this._isDisabled() && visible) {
              return;
            }

            this._showIndicatorHint = visible;

            if (!this._isSorted()) {
              this._updateArrowDirection();

              if (this._showIndicatorHint) {
                this._setAnimationTransitionState({
                  fromState: this._arrowDirection,
                  toState: 'hint'
                });
              } else {
                this._setAnimationTransitionState({
                  fromState: 'hint',
                  toState: this._arrowDirection
                });
              }
            }
          }
          /**
           * Sets the animation transition view state for the arrow's position and opacity. If the
           * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
           * no animation appears.
           */

        }, {
          key: "_setAnimationTransitionState",
          value: function _setAnimationTransitionState(viewState) {
            this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
            // remove the fromState so that it jumps right to the toState.

            if (this._disableViewStateAnimation) {
              this._viewState = {
                toState: viewState.toState
              };
            }
          }
          /** Triggers the sort on this sort header and removes the indicator hint. */

        }, {
          key: "_toggleOnInteraction",
          value: function _toggleOnInteraction() {
            this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


            if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
              this._disableViewStateAnimation = true;
            } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
            // the direction it is facing.


            var viewState = this._isSorted() ? {
              fromState: this._arrowDirection,
              toState: 'active'
            } : {
              fromState: 'active',
              toState: this._arrowDirection
            };

            this._setAnimationTransitionState(viewState);

            this._showIndicatorHint = false;
          }
        }, {
          key: "_handleClick",
          value: function _handleClick() {
            if (!this._isDisabled()) {
              this._toggleOnInteraction();
            }
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
              event.preventDefault();

              this._toggleOnInteraction();
            }
          }
          /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */

        }, {
          key: "_isSorted",
          value: function _isSorted() {
            return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
          }
          /** Returns the animation state for the arrow direction (indicator and pointers). */

        }, {
          key: "_getArrowDirectionState",
          value: function _getArrowDirectionState() {
            return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
          }
          /** Returns the arrow position state (opacity, translation). */

        }, {
          key: "_getArrowViewState",
          value: function _getArrowViewState() {
            var fromState = this._viewState.fromState;
            return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
          }
          /**
           * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
           * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
           * active sorted direction. The reason this is updated through a function is because the direction
           * should only be changed at specific times - when deactivated but the hint is displayed and when
           * the sort is active and the direction changes. Otherwise the arrow's direction should linger
           * in cases such as the sort becoming deactivated but we want to animate the arrow away while
           * preserving its direction, even though the next sort direction is actually different and should
           * only be changed once the arrow displays again (hint or activation).
           */

        }, {
          key: "_updateArrowDirection",
          value: function _updateArrowDirection() {
            this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
          }
        }, {
          key: "_isDisabled",
          value: function _isDisabled() {
            return this._sort.disabled || this.disabled;
          }
          /**
           * Gets the aria-sort attribute that should be applied to this sort header. If this header
           * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
           * says that the aria-sort property should only be present on one header at a time, so removing
           * ensures this is true.
           */

        }, {
          key: "_getAriaSortAttribute",
          value: function _getAriaSortAttribute() {
            if (!this._isSorted()) {
              return 'none';
            }

            return this._sort.direction == 'asc' ? 'ascending' : 'descending';
          }
          /** Whether the arrow inside the sort header should be rendered. */

        }, {
          key: "_renderArrow",
          value: function _renderArrow() {
            return !this._isDisabled() || this._isSorted();
          }
        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          },
          set: function set(v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          }
        }]);

        return MatSortHeader;
      }(_MatSortHeaderMixinBase);

      MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
        return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSortHeader,
        selectors: [["", "mat-sort-header", ""]],
        hostAttrs: [1, "mat-sort-header"],
        hostVars: 3,
        hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
              return ctx._handleClick();
            })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(true);
            })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(false);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
          }
        },
        inputs: {
          disabled: "disabled",
          arrowPosition: "arrowPosition",
          disableClear: "disableClear",
          id: ["mat-sort-header", "id"],
          start: "start"
        },
        exportAs: ["matSortHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 6,
        consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
        template: function MatSortHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
        encapsulation: 2,
        data: {
          animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
        },
        changeDetection: 0
      });

      MatSortHeader.ctorParameters = function () {
        return [{
          type: MatSortHeaderIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: MatSort,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['MAT_SORT_HEADER_COLUMN_DEF']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatSortHeader.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mat-sort-header']
        }],
        arrowPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[mat-sort-header]',
            exportAs: 'matSortHeader',
            template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     role=\"button\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
            host: {
              'class': 'mat-sort-header',
              '(click)': '_handleClick()',
              '(keydown)': '_handleKeydown($event)',
              '(mouseenter)': '_setIndicatorHintVisible(true)',
              '(mouseleave)': '_setIndicatorHintVisible(false)',
              '[attr.aria-sort]': '_getAriaSortAttribute()',
              '[class.mat-sort-header-disabled]': '_isDisabled()'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
            styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
          }]
        }], function () {
          return [{
            type: MatSortHeaderIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: MatSort,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          arrowPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mat-sort-header']
          }],
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSortModule = function MatSortModule() {
        _classCallCheck(this, MatSortModule);
      };

      MatSortModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSortModule
      });
      MatSortModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatSortModule_Factory(t) {
          return new (t || MatSortModule)();
        },
        providers: [MAT_SORT_HEADER_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, {
          declarations: function declarations() {
            return [MatSort, MatSortHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]];
          },
          exports: function exports() {
            return [MatSort, MatSortHeader];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: [MatSort, MatSortHeader],
            declarations: [MatSort, MatSortHeader],
            providers: [MAT_SORT_HEADER_INTL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=sort.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
      \***********************************************************************/

    /*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCell", function () {
        return MatCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
        return MatCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
        return MatColumnDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
        return MatFooterCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
        return MatFooterCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
        return MatFooterRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
        return MatFooterRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
        return MatHeaderCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
        return MatHeaderCellDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
        return MatHeaderRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
        return MatHeaderRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function () {
        return MatNoDataRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRow", function () {
        return MatRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
        return MatRowDef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTable", function () {
        return MatTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
        return MatTableDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
        return MatTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
        return MatTextColumn;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/table */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Wrapper for the CdkTable with Material design styles.
       */


      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function MatTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function MatTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }

      var MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(MatTable, _angular_cdk_table__W);

        var _super15 = _createSuper(MatTable);

        function MatTable() {
          var _this21;

          _classCallCheck(this, MatTable);

          _this21 = _super15.apply(this, arguments);
          /** Overrides the sticky CSS class set by the `CdkTable`. */

          _this21.stickyCssClass = 'mat-table-sticky';
          return _this21;
        }

        return MatTable;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]);

      MatTable.ɵfac = function MatTable_Factory(t) {
        return ɵMatTable_BaseFactory(t || MatTable);
      };

      MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTable,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-table"],
        exportAs: ["matTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
          useExisting: MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
          useExisting: MatTable
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function MatTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]],
        styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"],
        encapsulation: 2
      });

      var ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-table, table[mat-table]',
            exportAs: 'matTable',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
            host: {
              'class': 'mat-table'
            },
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
              useExisting: MatTable
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
              useExisting: MatTable
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for the mat-table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */


      var MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
        _inherits(MatCellDef, _angular_cdk_table__W2);

        var _super16 = _createSuper(MatCellDef);

        function MatCellDef() {
          _classCallCheck(this, MatCellDef);

          return _super16.apply(this, arguments);
        }

        return MatCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]);

      MatCellDef.ɵfac = function MatCellDef_Factory(t) {
        return ɵMatCellDef_BaseFactory(t || MatCellDef);
      };

      MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCellDef,
        selectors: [["", "matCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
          useExisting: MatCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
              useExisting: MatCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Header cell definition for the mat-table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
        _inherits(MatHeaderCellDef, _angular_cdk_table__W3);

        var _super17 = _createSuper(MatHeaderCellDef);

        function MatHeaderCellDef() {
          _classCallCheck(this, MatHeaderCellDef);

          return _super17.apply(this, arguments);
        }

        return MatHeaderCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]);

      MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) {
        return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef);
      };

      MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderCellDef,
        selectors: [["", "matHeaderCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
          useExisting: MatHeaderCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matHeaderCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
              useExisting: MatHeaderCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Footer cell definition for the mat-table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
        _inherits(MatFooterCellDef, _angular_cdk_table__W4);

        var _super18 = _createSuper(MatFooterCellDef);

        function MatFooterCellDef() {
          _classCallCheck(this, MatFooterCellDef);

          return _super18.apply(this, arguments);
        }

        return MatFooterCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]);

      MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) {
        return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef);
      };

      MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterCellDef,
        selectors: [["", "matFooterCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
          useExisting: MatFooterCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matFooterCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
              useExisting: MatFooterCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Column definition for the mat-table.
       * Defines a set of cells available for a table column.
       */


      var MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
        _inherits(MatColumnDef, _angular_cdk_table__W5);

        var _super19 = _createSuper(MatColumnDef);

        function MatColumnDef() {
          _classCallCheck(this, MatColumnDef);

          return _super19.apply(this, arguments);
        }

        return MatColumnDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]);

      MatColumnDef.ɵfac = function MatColumnDef_Factory(t) {
        return ɵMatColumnDef_BaseFactory(t || MatColumnDef);
      };

      MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatColumnDef,
        selectors: [["", "matColumnDef", ""]],
        inputs: {
          sticky: "sticky",
          name: ["matColumnDef", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
          useExisting: MatColumnDef
        }, {
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: MatColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      MatColumnDef.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matColumnDef']
        }]
      };

      var ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
              useExisting: MatColumnDef
            }, {
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: MatColumnDef
            }]
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matColumnDef']
          }]
        });
      })();
      /** Header cell template container that adds the right classes and role. */


      var MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
        _inherits(MatHeaderCell, _angular_cdk_table__W6);

        var _super20 = _createSuper(MatHeaderCell);

        function MatHeaderCell(columnDef, elementRef) {
          var _this22;

          _classCallCheck(this, MatHeaderCell);

          _this22 = _super20.call(this, columnDef, elementRef);
          elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
          return _this22;
        }

        return MatHeaderCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]);

      MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) {
        return new (t || MatHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderCell,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      MatHeaderCell.ctorParameters = function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-header-cell, th[mat-header-cell]',
            host: {
              'class': 'mat-header-cell',
              'role': 'columnheader'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
        _inherits(MatFooterCell, _angular_cdk_table__W7);

        var _super21 = _createSuper(MatFooterCell);

        function MatFooterCell(columnDef, elementRef) {
          var _this23;

          _classCallCheck(this, MatFooterCell);

          _this23 = _super21.call(this, columnDef, elementRef);
          elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
          return _this23;
        }

        return MatFooterCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]);

      MatFooterCell.ɵfac = function MatFooterCell_Factory(t) {
        return new (t || MatFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterCell,
        selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      MatFooterCell.ctorParameters = function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-footer-cell, td[mat-footer-cell]',
            host: {
              'class': 'mat-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
        _inherits(MatCell, _angular_cdk_table__W8);

        var _super22 = _createSuper(MatCell);

        function MatCell(columnDef, elementRef) {
          var _this24;

          _classCallCheck(this, MatCell);

          _this24 = _super22.call(this, columnDef, elementRef);
          elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
          return _this24;
        }

        return MatCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]);

      MatCell.ɵfac = function MatCell_Factory(t) {
        return new (t || MatCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCell,
        selectors: [["mat-cell"], ["td", "mat-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      MatCell.ctorParameters = function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-cell, td[mat-cell]',
            host: {
              'class': 'mat-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Header row definition for the mat-table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
        _inherits(MatHeaderRowDef, _angular_cdk_table__W9);

        var _super23 = _createSuper(MatHeaderRowDef);

        function MatHeaderRowDef() {
          _classCallCheck(this, MatHeaderRowDef);

          return _super23.apply(this, arguments);
        }

        return MatHeaderRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]);

      MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) {
        return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef);
      };

      MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatHeaderRowDef,
        selectors: [["", "matHeaderRowDef", ""]],
        inputs: {
          columns: ["matHeaderRowDef", "columns"],
          sticky: ["matHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
          useExisting: MatHeaderRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matHeaderRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
              useExisting: MatHeaderRowDef
            }],
            inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Footer row definition for the mat-table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
        _inherits(MatFooterRowDef, _angular_cdk_table__W10);

        var _super24 = _createSuper(MatFooterRowDef);

        function MatFooterRowDef() {
          _classCallCheck(this, MatFooterRowDef);

          return _super24.apply(this, arguments);
        }

        return MatFooterRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]);

      MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) {
        return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef);
      };

      MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatFooterRowDef,
        selectors: [["", "matFooterRowDef", ""]],
        inputs: {
          columns: ["matFooterRowDef", "columns"],
          sticky: ["matFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
          useExisting: MatFooterRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matFooterRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
              useExisting: MatFooterRowDef
            }],
            inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Data row definition for the mat-table.
       * Captures the data row's template and other properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
        _inherits(MatRowDef, _angular_cdk_table__W11);

        var _super25 = _createSuper(MatRowDef);

        function MatRowDef() {
          _classCallCheck(this, MatRowDef);

          return _super25.apply(this, arguments);
        }

        return MatRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]);

      MatRowDef.ɵfac = function MatRowDef_Factory(t) {
        return ɵMatRowDef_BaseFactory(t || MatRowDef);
      };

      MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRowDef,
        selectors: [["", "matRowDef", ""]],
        inputs: {
          columns: ["matRowDefColumns", "columns"],
          when: ["matRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
          useExisting: MatRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
              useExisting: MatRowDef
            }],
            inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
          }]
        }], null, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
        _inherits(MatHeaderRow, _angular_cdk_table__W12);

        var _super26 = _createSuper(MatHeaderRow);

        function MatHeaderRow() {
          _classCallCheck(this, MatHeaderRow);

          return _super26.apply(this, arguments);
        }

        return MatHeaderRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]);

      MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) {
        return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow);
      };

      MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatHeaderRow,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-header-row"],
        exportAs: ["matHeaderRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
          useExisting: MatHeaderRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
        encapsulation: 2
      });

      var ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-header-row, tr[mat-header-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
            host: {
              'class': 'mat-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matHeaderRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
              useExisting: MatHeaderRow
            }]
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
        _inherits(MatFooterRow, _angular_cdk_table__W13);

        var _super27 = _createSuper(MatFooterRow);

        function MatFooterRow() {
          _classCallCheck(this, MatFooterRow);

          return _super27.apply(this, arguments);
        }

        return MatFooterRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]);

      MatFooterRow.ɵfac = function MatFooterRow_Factory(t) {
        return ɵMatFooterRow_BaseFactory(t || MatFooterRow);
      };

      MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatFooterRow,
        selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-footer-row"],
        exportAs: ["matFooterRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
          useExisting: MatFooterRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
        encapsulation: 2
      });

      var ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-footer-row, tr[mat-footer-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
            host: {
              'class': 'mat-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matFooterRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
              useExisting: MatFooterRow
            }]
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
        _inherits(MatRow, _angular_cdk_table__W14);

        var _super28 = _createSuper(MatRow);

        function MatRow() {
          _classCallCheck(this, MatRow);

          return _super28.apply(this, arguments);
        }

        return MatRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]);

      MatRow.ɵfac = function MatRow_Factory(t) {
        return ɵMatRow_BaseFactory(t || MatRow);
      };

      MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatRow,
        selectors: [["mat-row"], ["tr", "mat-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-row"],
        exportAs: ["matRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
          useExisting: MatRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
        encapsulation: 2
      });

      var ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-row, tr[mat-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
            host: {
              'class': 'mat-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            exportAs: 'matRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
              useExisting: MatRow
            }]
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var MatNoDataRow = /*#__PURE__*/function (_angular_cdk_table__W15) {
        _inherits(MatNoDataRow, _angular_cdk_table__W15);

        var _super29 = _createSuper(MatNoDataRow);

        function MatNoDataRow() {
          _classCallCheck(this, MatNoDataRow);

          return _super29.apply(this, arguments);
        }

        return MatNoDataRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"]);

      MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) {
        return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow);
      };

      MatNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatNoDataRow,
        selectors: [["ng-template", "matNoDataRow", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"],
          useExisting: MatNoDataRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[matNoDataRow]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"],
              useExisting: MatNoDataRow
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W16) {
        _inherits(MatTextColumn, _angular_cdk_table__W16);

        var _super30 = _createSuper(MatTextColumn);

        function MatTextColumn() {
          _classCallCheck(this, MatTextColumn);

          return _super30.apply(this, arguments);
        }

        return MatTextColumn;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"]);

      MatTextColumn.ɵfac = function MatTextColumn_Factory(t) {
        return ɵMatTextColumn_BaseFactory(t || MatTextColumn);
      };

      MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTextColumn,
        selectors: [["mat-text-column"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 0,
        consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
        template: function MatTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
        encapsulation: 2
      });

      var ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-text-column',
            template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [// Table
      MatTable, // Template defs
      MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
      MatHeaderCell, MatCell, MatFooterCell, // Row directives
      MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];

      var MatTableModule = function MatTableModule() {
        _classCallCheck(this, MatTableModule);
      };

      MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatTableModule
      });
      MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatTableModule_Factory(t) {
          return new (t || MatTableModule)();
        },
        imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, {
          declarations: function declarations() {
            return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
          },
          imports: function imports() {
            return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], EXPORTED_DECLARATIONS],
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
       * flaky browser support and the value not being defined in Closure's typings.
       */


      var MAX_SAFE_INTEGER = 9007199254740991;
      /**
       * Data source that accepts a client-side data array and includes native support of filtering,
       * sorting (using MatSort), and pagination (using MatPaginator).
       *
       * Allows for sort customization by overriding sortingDataAccessor, which defines how data
       * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
       * which defines how row data is converted to a string for filter matching.
       *
       * **Note:** This class is meant to be a simple data source to help you get started. As such
       * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
       * interactions. If your app needs to support more advanced use cases, consider implementing your
       * own `DataSource`.
       */

      var MatTableDataSource = /*#__PURE__*/function (_angular_cdk_table__W17) {
        _inherits(MatTableDataSource, _angular_cdk_table__W17);

        var _super31 = _createSuper(MatTableDataSource);

        function MatTableDataSource() {
          var _this25;

          var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, MatTableDataSource);

          _this25 = _super31.call(this);
          /** Stream emitting render data to the table (depends on ordered data changes). */

          _this25._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          /** Stream that emits when a new filter string is set on the data source. */

          _this25._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          /** Used to react to internal changes of the paginator that are made by the data source itself. */

          _this25._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Subscription to the changes that should trigger an update to the table's rendered rows, such
           * as filtering, sorting, pagination, or base data changes.
           */

          _this25._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Data accessor function that is used for accessing data properties for sorting through
           * the default sortData function.
           * This default function assumes that the sort header IDs (which defaults to the column name)
           * matches the data's properties (e.g. column Xyz represents data['Xyz']).
           * May be set to a custom function for different behavior.
           * @param data Data object that is being accessed.
           * @param sortHeaderId The name of the column that represents the data.
           */

          _this25.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];

            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
              var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
              // leave them as strings. For more info: https://goo.gl/y5vbSg

              return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }

            return value;
          };
          /**
           * Gets a sorted copy of the data array based on the state of the MatSort. Called
           * after changes are made to the filtered data or when sort changes are emitted from MatSort.
           * By default, the function retrieves the active sort and its direction and compares data
           * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
           * of data ordering.
           * @param data The array of data that should be sorted.
           * @param sort The connected MatSort that holds the current sort state.
           */


          _this25.sortData = function (data, sort) {
            var active = sort.active;
            var direction = sort.direction;

            if (!active || direction == '') {
              return data;
            }

            return data.sort(function (a, b) {
              var valueA = _this25.sortingDataAccessor(a, active);

              var valueB = _this25.sortingDataAccessor(b, active); // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
              // one value exists while the other doesn't. In this case, existing value should come last.
              // This avoids inconsistent results when comparing values to undefined/null.
              // If neither value exists, return 0 (equal).


              var comparatorResult = 0;

              if (valueA != null && valueB != null) {
                // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                if (valueA > valueB) {
                  comparatorResult = 1;
                } else if (valueA < valueB) {
                  comparatorResult = -1;
                }
              } else if (valueA != null) {
                comparatorResult = 1;
              } else if (valueB != null) {
                comparatorResult = -1;
              }

              return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
          };
          /**
           * Checks if a data object matches the data source's filter string. By default, each data object
           * is converted to a string of its properties and returns true if the filter has
           * at least one occurrence in that string. By default, the filter string has its whitespace
           * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
           * filter matching.
           * @param data Data object used to check against the filter.
           * @param filter Filter string that has been set on the data source.
           * @returns Whether the filter matches against the data
           */


          _this25.filterPredicate = function (data, filter) {
            // Transform the data into a lowercase string of all property values.
            var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
              // Use an obscure Unicode character to delimit the words in the concatenated string.
              // This avoids matches where the values of two columns combined will match the user's query
              // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
              // that has a very low chance of being typed in by somebody in a text field. This one in
              // particular is "White up-pointing triangle with dot" from
              // https://en.wikipedia.org/wiki/List_of_Unicode_characters
              return currentTerm + data[key] + '◬';
            }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
          };

          _this25._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);

          _this25._updateChangeSubscription();

          return _this25;
        }
        /** Array of data that should be rendered by the table, where each object represents one row. */


        _createClass(MatTableDataSource, [{
          key: "_updateChangeSubscription",

          /**
           * Subscribe to changes that should trigger an update to the table's rendered rows. When the
           * changes occur, process the current state of the filter, sort, and pagination along with
           * the provided base data and send it to the table for rendering.
           */
          value: function _updateChangeSubscription() {
            var _this26 = this;

            // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.
            var sortChange = this._sort ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var pageChange = this._paginator ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

            var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  data = _ref2[0];

              return _this26._filterData(data);
            })); // Watch for filtered data or sort changes to provide an ordered set of data.

            var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 1),
                  data = _ref4[0];

              return _this26._orderData(data);
            })); // Watch for ordered data or page changes to provide a paged set of data.

            var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 1),
                  data = _ref6[0];

              return _this26._pageData(data);
            })); // Watched for paged data changes and send the result to the table to render.

            this._renderChangesSubscription.unsubscribe();

            this._renderChangesSubscription = paginatedData.subscribe(function (data) {
              return _this26._renderData.next(data);
            });
          }
          /**
           * Returns a filtered data array where each filter object contains the filter string within
           * the result of the filterTermAccessor function. If no filter is set, returns the data array
           * as provided.
           */

        }, {
          key: "_filterData",
          value: function _filterData(data) {
            var _this27 = this;

            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData = !this.filter ? data : data.filter(function (obj) {
              return _this27.filterPredicate(obj, _this27.filter);
            });

            if (this.paginator) {
              this._updatePaginator(this.filteredData.length);
            }

            return this.filteredData;
          }
          /**
           * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
           * data array as provided. Uses the default data accessor for data lookup, unless a
           * sortDataAccessor function is defined.
           */

        }, {
          key: "_orderData",
          value: function _orderData(data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
              return data;
            }

            return this.sortData(data.slice(), this.sort);
          }
          /**
           * Returns a paged slice of the provided data array according to the provided MatPaginator's page
           * index and length. If there is no paginator provided, returns the data array as provided.
           */

        }, {
          key: "_pageData",
          value: function _pageData(data) {
            if (!this.paginator) {
              return data;
            }

            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
          }
          /**
           * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
           * index does not exceed the paginator's last page. Values are changed in a resolved promise to
           * guard against making property changes within a round of change detection.
           */

        }, {
          key: "_updatePaginator",
          value: function _updatePaginator(filteredDataLength) {
            var _this28 = this;

            Promise.resolve().then(function () {
              var paginator = _this28.paginator;

              if (!paginator) {
                return;
              }

              paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

              if (paginator.pageIndex > 0) {
                var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

                if (newPageIndex !== paginator.pageIndex) {
                  paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                  // we need our own stream so we know to should re-render the data.

                  _this28._internalPageChanges.next();
                }
              }
            });
          }
          /**
           * Used by the MatTable. Called when it connects to the data source.
           * @docs-private
           */

        }, {
          key: "connect",
          value: function connect() {
            return this._renderData;
          }
          /**
           * Used by the MatTable. Called when it is destroyed. No-op.
           * @docs-private
           */

        }, {
          key: "disconnect",
          value: function disconnect() {}
        }, {
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(data) {
            this._data.next(data);
          }
          /**
           * Filter term that should be used to filter out objects from the data array. To override how
           * data objects match to this filter string, provide a custom function for filterPredicate.
           */

        }, {
          key: "filter",
          get: function get() {
            return this._filter.value;
          },
          set: function set(filter) {
            this._filter.next(filter);
          }
          /**
           * Instance of the MatSort directive used by the table to control its sorting. Sort changes
           * emitted by the MatSort will trigger an update to the table's rendered data.
           */

        }, {
          key: "sort",
          get: function get() {
            return this._sort;
          },
          set: function set(sort) {
            this._sort = sort;

            this._updateChangeSubscription();
          }
          /**
           * Instance of the MatPaginator component used by the table to control what page of the data is
           * displayed. Page changes emitted by the MatPaginator will trigger an update to the
           * table's rendered data.
           *
           * Note that the data source uses the paginator's properties to calculate which page of data
           * should be displayed. If the paginator receives its properties as template inputs,
           * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
           * initialized before assigning it to this data source.
           */

        }, {
          key: "paginator",
          get: function get() {
            return this._paginator;
          },
          set: function set(paginator) {
            this._paginator = paginator;

            this._updateChangeSubscription();
          }
        }]);

        return MatTableDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=table.js.map

      /***/

    },

    /***/
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@iconify/icons-ic/twotone-cloud-download.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIconifyIconsIcTwotoneCloudDownloadJs(module, exports) {
      var data = {
        "body": "<path opacity=\".3\" d=\"M19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z\" fill=\"currentColor\"/><path d=\"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4l4-4h-2.55z\" fill=\"currentColor\"/>",
        "width": 24,
        "height": 24
      };
      exports.__esModule = true;
      exports["default"] = data;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-dashboards-~988f1159-es5.js.map