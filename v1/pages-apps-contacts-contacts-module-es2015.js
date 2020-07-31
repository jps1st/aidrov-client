(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-contacts-contacts-module"],{

/***/ "./src/app/pages/apps/contacts/contacts-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'grid',
                loadChildren: () => Promise.all(/*! import() | contacts-grid-contacts-grid-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~d705f6b5"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module"), __webpack_require__.e("common"), __webpack_require__.e("contacts-grid-contacts-grid-module")]).then(__webpack_require__.bind(null, /*! ./contacts-grid/contacts-grid.module */ "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts")).then(m => m.ContactsGridModule)
            },
            {
                path: 'table',
                loadChildren: () => Promise.all(/*! import() | contacts-table-contacts-table-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~d93b5abc"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~e261e393"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aidrov-citizen-profile-citizen-profile-modul~2c769fd0"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~d705f6b5"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-dashboards-~988f1159"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module"), __webpack_require__.e("common"), __webpack_require__.e("contacts-table-contacts-table-module")]).then(__webpack_require__.bind(null, /*! ./contacts-table/contacts-table.module */ "./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts")).then(m => m.ContactsTableModule)
            }
        ]
    }
];
class ContactsRoutingModule {
}
ContactsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactsRoutingModule });
ContactsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactsRoutingModule_Factory(t) { return new (t || ContactsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts.module.ts ***!
  \********************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/pages/apps/contacts/contacts-routing.module.ts");




class ContactsModule {
}
ContactsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactsModule });
ContactsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactsModule_Factory(t) { return new (t || ContactsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _contacts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-apps-contacts-contacts-module-es2015.js.map