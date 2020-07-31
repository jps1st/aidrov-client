(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-button-group-components-button-group-module~components-buttons-components-buttons~273ca99a"], {
    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js ***!
      \*******************************************************************************/

    /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ButtonToggleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP", function () {
        return MAT_BUTTON_TOGGLE_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
        return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
        return MatButtonToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
        return MatButtonToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
        return MatButtonToggleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
        return MatButtonToggleModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to configure the
       * default options for all button toggles within an app.
       */


      var _c0 = ["button"];
      var _c1 = ["*"];
      var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to reference instances of `MatButtonToggleGroup`.
       * It serves as alternative token to the actual `MatButtonToggleGroup` class which
       * could cause unnecessary retention of the class and its component metadata.
       */

      var MAT_BUTTON_TOGGLE_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatButtonToggleGroup');
      /**
       * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)].
       * @docs-private
       */

      var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatButtonToggleGroup;
        }),
        multi: true
      };
      var _uniqueIdCounter = 0;
      /** Change event object emitted by MatButtonToggle. */

      var MatButtonToggleChange = function MatButtonToggleChange(
      /** The MatButtonToggle that emits the event. */
      source,
      /** The value assigned to the MatButtonToggle. */
      value) {
        _classCallCheck(this, MatButtonToggleChange);

        this.source = source;
        this.value = value;
      };
      /** Exclusive selection button toggle group that behaves like a radio-button group. */


      var MatButtonToggleGroup = /*#__PURE__*/function () {
        function MatButtonToggleGroup(_changeDetector, defaultOptions) {
          _classCallCheck(this, MatButtonToggleGroup);

          this._changeDetector = _changeDetector;
          this._vertical = false;
          this._multiple = false;
          this._disabled = false;
          /**
           * The method to be called in order to update ngModel.
           * Now `ngModel` binding is not supported in multiple selection mode.
           */

          this._controlValueAccessorChangeFn = function () {};
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */


          this._onTouched = function () {};

          this._name = "mat-button-toggle-group-".concat(_uniqueIdCounter++);
          /**
           * Event that emits whenever the value of the group changes.
           * Used to facilitate two-way data binding.
           * @docs-private
           */

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Event emitted when the group's value changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        }
        /** `name` attribute for the underlying `input` element. */


        _createClass(MatButtonToggleGroup, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this$_selectionModel;

            (_this$_selectionModel = this._selectionModel).select.apply(_this$_selectionModel, _toConsumableArray(this._buttonToggles.filter(function (toggle) {
              return toggle.checked;
            })));
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value Value to be set to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            this._changeDetector.markForCheck();
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /** Dispatch change event with current selection and group value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            var selected = this.selected;
            var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
            var event = new MatButtonToggleChange(source, this.value);

            this._controlValueAccessorChangeFn(event.value);

            this.change.emit(event);
          }
          /**
           * Syncs a button toggle's selected state with the model value.
           * @param toggle Toggle to be synced.
           * @param select Whether the toggle should be selected.
           * @param isUserInput Whether the change was a result of a user interaction.
           * @param deferEvents Whether to defer emitting the change events.
           */

        }, {
          key: "_syncButtonToggle",
          value: function _syncButtonToggle(toggle, select) {
            var _this = this;

            var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var deferEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            // Deselect the currently-selected toggle, if we're in single-selection
            // mode and the button being toggled isn't selected at the moment.
            if (!this.multiple && this.selected && !toggle.checked) {
              this.selected.checked = false;
            }

            if (this._selectionModel) {
              if (select) {
                this._selectionModel.select(toggle);
              } else {
                this._selectionModel.deselect(toggle);
              }
            } else {
              deferEvents = true;
            } // We need to defer in some cases in order to avoid "changed after checked errors", however
            // the side-effect is that we may end up updating the model value out of sequence in others
            // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


            if (deferEvents) {
              Promise.resolve().then(function () {
                return _this._updateModelValue(isUserInput);
              });
            } else {
              this._updateModelValue(isUserInput);
            }
          }
          /** Checks whether a button toggle is selected. */

        }, {
          key: "_isSelected",
          value: function _isSelected(toggle) {
            return this._selectionModel && this._selectionModel.isSelected(toggle);
          }
          /** Determines whether a button toggle should be checked on init. */

        }, {
          key: "_isPrechecked",
          value: function _isPrechecked(toggle) {
            if (typeof this._rawValue === 'undefined') {
              return false;
            }

            if (this.multiple && Array.isArray(this._rawValue)) {
              return this._rawValue.some(function (value) {
                return toggle.value != null && value === toggle.value;
              });
            }

            return toggle.value === this._rawValue;
          }
          /** Updates the selection state of the toggles in the group based on a value. */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this2 = this;

            this._rawValue = value;

            if (!this._buttonToggles) {
              return;
            }

            if (this.multiple && value) {
              if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
              }

              this._clearSelection();

              value.forEach(function (currentValue) {
                return _this2._selectValue(currentValue);
              });
            } else {
              this._clearSelection();

              this._selectValue(value);
            }
          }
          /** Clears the selected toggles. */

        }, {
          key: "_clearSelection",
          value: function _clearSelection() {
            this._selectionModel.clear();

            this._buttonToggles.forEach(function (toggle) {
              return toggle.checked = false;
            });
          }
          /** Selects a value if there's a toggle that corresponds to it. */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var correspondingOption = this._buttonToggles.find(function (toggle) {
              return toggle.value != null && toggle.value === value;
            });

            if (correspondingOption) {
              correspondingOption.checked = true;

              this._selectionModel.select(correspondingOption);
            }
          }
          /** Syncs up the group's value with the model and emits the change event. */

        }, {
          key: "_updateModelValue",
          value: function _updateModelValue(isUserInput) {
            // Only emit the change event for user input.
            if (isUserInput) {
              this._emitChangeEvent();
            } // Note: we emit this one no matter whether it was a user interaction, because
            // it is used by Angular to sync up the two-way data binding.


            this.valueChange.emit(this.value);
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            var _this3 = this;

            this._name = value;

            if (this._buttonToggles) {
              this._buttonToggles.forEach(function (toggle) {
                toggle.name = _this3._name;

                toggle._markForCheck();
              });
            }
          }
          /** Whether the toggle group is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Value of the toggle group. */

        }, {
          key: "value",
          get: function get() {
            var selected = this._selectionModel ? this._selectionModel.selected : [];

            if (this.multiple) {
              return selected.map(function (toggle) {
                return toggle.value;
              });
            }

            return selected[0] ? selected[0].value : undefined;
          },
          set: function set(newValue) {
            this._setSelectionByValue(newValue);

            this.valueChange.emit(this.value);
          }
          /** Selected button toggles in the group. */

        }, {
          key: "selected",
          get: function get() {
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            return this.multiple ? selected : selected[0] || null;
          }
          /** Whether multiple button toggles can be selected. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether multiple button toggle group is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (this._buttonToggles) {
              this._buttonToggles.forEach(function (toggle) {
                return toggle._markForCheck();
              });
            }
          }
        }]);

        return MatButtonToggleGroup;
      }();

      MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) {
        return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
      };

      MatButtonToggleGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatButtonToggleGroup,
        selectors: [["mat-button-toggle-group"]],
        contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
        hostVars: 5,
        hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
          }
        },
        inputs: {
          appearance: "appearance",
          name: "name",
          vertical: "vertical",
          value: "value",
          multiple: "multiple",
          disabled: "disabled"
        },
        outputs: {
          valueChange: "valueChange",
          change: "change"
        },
        exportAs: ["matButtonToggleGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
          provide: MAT_BUTTON_TOGGLE_GROUP,
          useExisting: MatButtonToggleGroup
        }])]
      });

      MatButtonToggleGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return MatButtonToggle;
          }), {
            // Note that this would technically pick up toggles
            // from nested groups, but that's not a case that we support.
            descendants: true
          }]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-button-toggle-group',
            providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
              provide: MAT_BUTTON_TOGGLE_GROUP,
              useExisting: MatButtonToggleGroup
            }],
            host: {
              'role': 'group',
              'class': 'mat-button-toggle-group',
              '[attr.aria-disabled]': 'disabled',
              '[class.mat-button-toggle-vertical]': 'vertical',
              '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
            },
            exportAs: 'matButtonToggleGroup'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _buttonToggles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatButtonToggle;
            }), {
              // Note that this would technically pick up toggles
              // from nested groups, but that's not a case that we support.
              descendants: true
            }]
          }]
        });
      })(); // Boilerplate for applying mixins to the MatButtonToggle class.

      /** @docs-private */


      var MatButtonToggleBase = function MatButtonToggleBase() {
        _classCallCheck(this, MatButtonToggleBase);
      };

      var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
      /** Single button inside of a toggle group. */


      var MatButtonToggle = /*#__PURE__*/function (_MatButtonToggleMixin) {
        _inherits(MatButtonToggle, _MatButtonToggleMixin);

        var _super = _createSuper(MatButtonToggle);

        function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
          var _this4;

          _classCallCheck(this, MatButtonToggle);

          _this4 = _super.call(this);
          _this4._changeDetectorRef = _changeDetectorRef;
          _this4._elementRef = _elementRef;
          _this4._focusMonitor = _focusMonitor;
          _this4._isSingleSelector = false;
          _this4._checked = false;
          /**
           * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
           */

          _this4.ariaLabelledby = null;
          _this4._disabled = false;
          /** Event emitted when the group value changes. */

          _this4.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          var parsedTabIndex = Number(defaultTabIndex);
          _this4.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
          _this4.buttonToggleGroup = toggleGroup;
          _this4.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
          return _this4;
        }
        /** Unique ID for the underlying `button` element. */


        _createClass(MatButtonToggle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var group = this.buttonToggleGroup;
            this._isSingleSelector = group && !group.multiple;
            this.id = this.id || "mat-button-toggle-".concat(_uniqueIdCounter++);

            if (this._isSingleSelector) {
              this.name = group.name;
            }

            if (group) {
              if (group._isPrechecked(this)) {
                this.checked = true;
              } else if (group._isSelected(this) !== this._checked) {
                // As as side effect of the circular dependency between the toggle group and the button,
                // we may end up in a state where the button is supposed to be checked on init, but it
                // isn't, because the checked value was assigned too early. This can happen when Ivy
                // assigns the static input value before the `ngOnInit` has run.
                group._syncButtonToggle(this, this._checked);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var group = this.buttonToggleGroup;

            this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
            // on the next tick in order to avoid "changed after checked" errors.


            if (group && group._isSelected(this)) {
              group._syncButtonToggle(this, false, false, true);
            }
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._buttonElement.nativeElement.focus(options);
          }
          /** Checks the button toggle due to an interaction with the underlying native button. */

        }, {
          key: "_onButtonClick",
          value: function _onButtonClick() {
            var newChecked = this._isSingleSelector ? true : !this._checked;

            if (newChecked !== this._checked) {
              this._checked = newChecked;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

                this.buttonToggleGroup._onTouched();
              }
            } // Emit a change event when it's the single selector


            this.change.emit(new MatButtonToggleChange(this, this.value));
          }
          /**
           * Marks the button toggle as needing checking for change detection.
           * This method is exposed because the parent button toggle group will directly
           * update bound properties of the radio button.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // When the group value changes, the button will not be notified.
            // Use `markForCheck` to explicit update button toggle's status.
            this._changeDetectorRef.markForCheck();
          }
        }, {
          key: "buttonId",
          get: function get() {
            return "".concat(this.id, "-button");
          }
          /** The appearance style of the button. */

        }, {
          key: "appearance",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
          },
          set: function set(value) {
            this._appearance = value;
          }
          /** Whether the button is checked. */

        }, {
          key: "checked",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (newValue !== this._checked) {
              this._checked = newValue;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked);
              }

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the button is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatButtonToggle;
      }(_MatButtonToggleMixinBase);

      MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) {
        return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
      };

      MatButtonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatButtonToggle,
        selectors: [["mat-button-toggle"]],
        viewQuery: function MatButtonToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
          }
        },
        hostAttrs: [1, "mat-button-toggle"],
        hostVars: 11,
        hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() {
              return ctx.focus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", 0 - 1)("id", ctx.id)("name", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          tabIndex: "tabIndex",
          appearance: "appearance",
          checked: "checked",
          disabled: "disabled",
          id: "id",
          name: "name",
          ariaLabel: ["aria-label", "ariaLabel"],
          value: "value"
        },
        outputs: {
          change: "change"
        },
        exportAs: ["matButtonToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 9,
        consts: [["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
        template: function MatButtonToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() {
              return ctx._onButtonClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]],
        styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatButtonToggle.ctorParameters = function () {
        return [{
          type: MatButtonToggleGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_GROUP]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatButtonToggle.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        _buttonElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['button']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-button-toggle',
            template: "<button #button class=\"mat-button-toggle-button mat-focus-indicator\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <div class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </div>\n</button>\n\n<div class=\"mat-button-toggle-focus-overlay\"></div>\n<div class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matButtonToggle',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disableRipple'],
            host: {
              '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
              '[class.mat-button-toggle-checked]': 'checked',
              '[class.mat-button-toggle-disabled]': 'disabled',
              '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
              'class': 'mat-button-toggle',
              // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
              // but can still receive focus from things like cdkFocusInitial.
              '[attr.tabindex]': '-1',
              '[attr.id]': 'id',
              '[attr.name]': 'null',
              '(focus)': 'focus()'
            },
            styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
          }]
        }], function () {
          return [{
            type: MatButtonToggleGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_BUTTON_TOGGLE_GROUP]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
          }],
          _buttonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['button']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
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


      var MatButtonToggleModule = function MatButtonToggleModule() {
        _classCallCheck(this, MatButtonToggleModule);
      };

      MatButtonToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatButtonToggleModule
      });
      MatButtonToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatButtonToggleModule_Factory(t) {
          return new (t || MatButtonToggleModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatButtonToggleModule, {
          declarations: function declarations() {
            return [MatButtonToggleGroup, MatButtonToggle];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
            declarations: [MatButtonToggleGroup, MatButtonToggle]
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
      //# sourceMappingURL=button-toggle.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~components-button-group-components-button-group-module~components-buttons-components-buttons~273ca99a-es5.js.map