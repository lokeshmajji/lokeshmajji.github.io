(self["webpackChunkmasha"] = self["webpackChunkmasha"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/blog.component */ 38716);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.component */ 60980);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard.component */ 15445);
/* harmony import */ var _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/add-blog/add-blog.component */ 38026);
/* harmony import */ var _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/view-blog/view-blog.component */ 48168);
/* harmony import */ var _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/edit-blog/edit-blog.component */ 83080);
/* harmony import */ var _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/view-single/view-single.component */ 64188);
/* harmony import */ var _timelineview_timeline_view_timeline_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timelineview/timeline-view/timeline-view.component */ 85747);
/* harmony import */ var _timelineview_edit_blog_new_edit_blog_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timelineview/edit-blog-new/edit-blog-new.component */ 61339);
/* harmony import */ var _timelineview_add_blog_new_add_blog_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timelineview/add-blog-new/add-blog-new.component */ 96272);
/* harmony import */ var _timelineview2_timeline_view2_timeline_view2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timelineview2/timeline-view2/timeline-view2.component */ 26662);
/* harmony import */ var _timelineview3_timeline_view3_timeline_view3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timelineview3/timeline-view3/timeline-view3.component */ 99415);
/* harmony import */ var _timelineview_view_blog_new_view_blog_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timelineview/view-blog-new/view-blog-new.component */ 59201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);

















const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] },
    {
        path: "blogs",
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent,
        canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [
            { path: "add", component: _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_4__.AddBlogComponent },
            { path: "view", component: _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_5__.ViewBlogComponent },
            { path: "edit", component: _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_6__.EditBlogComponent },
            { path: "fullview", component: _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_7__.ViewSingleComponent },
        ],
    },
    { path: "auth", component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent },
    { path: "timelineview", component: _timelineview_timeline_view_timeline_view_component__WEBPACK_IMPORTED_MODULE_8__.TimeLineViewComponent, canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] },
    { path: "add", component: _timelineview_add_blog_new_add_blog_new_component__WEBPACK_IMPORTED_MODULE_10__.AddBlogNewComponent, canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] },
    { path: "edit", component: _timelineview_edit_blog_new_edit_blog_new_component__WEBPACK_IMPORTED_MODULE_9__.EditBlogNewComponent, canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] },
    { path: "view", component: _timelineview_view_blog_new_view_blog_new_component__WEBPACK_IMPORTED_MODULE_13__.ViewBlogNewComponent },
    { path: "timelineview2", component: _timelineview2_timeline_view2_timeline_view2_component__WEBPACK_IMPORTED_MODULE_11__.TimelineView2Component, canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] },
    { path: "timelineview3", component: _timelineview3_timeline_view3_timeline_view3_component__WEBPACK_IMPORTED_MODULE_12__.TimelineView3Component, canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ 50384);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 93482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);




class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'masha';
    }
    ngOnInit() {
        this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #296ca8;\n}\n\n.row[_ngcontent-%COMP%]{\n    \n    min-height: 89vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NmNhODtcbn1cblxuLnJvd3tcbiAgICBcbiAgICBtaW4taGVpZ2h0OiA4OXZoO1xufSJdfQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 63806);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 93482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 10970);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ 38716);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.component */ 60980);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner/spinner.component */ 64283);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ 32458);
/* harmony import */ var _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/add-blog/add-blog.component */ 38026);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-quill */ 14075);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputtext */ 82296);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/button */ 48266);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/table */ 72781);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/dialog */ 72689);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/view-blog/view-blog.component */ 48168);
/* harmony import */ var _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog/edit-blog/edit-blog.component */ 83080);
/* harmony import */ var _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/view-single/view-single.component */ 64188);
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/confirm-dialog/confirm-dialog.component */ 2362);
/* harmony import */ var _timelineview_edit_blog_new_edit_blog_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timelineview/edit-blog-new/edit-blog-new.component */ 61339);
/* harmony import */ var _timelineview_timeline_view_timeline_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./timelineview/timeline-view/timeline-view.component */ 85747);
/* harmony import */ var _timelineview_add_blog_new_add_blog_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timelineview/add-blog-new/add-blog-new.component */ 96272);
/* harmony import */ var _timelineview2_timeline_view2_timeline_view2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./timelineview2/timeline-view2/timeline-view2.component */ 26662);
/* harmony import */ var _timelineview3_timeline_view3_timeline_view3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./timelineview3/timeline-view3/timeline-view3.component */ 99415);
/* harmony import */ var _common_fullpage_view_fullpage_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/fullpage-view/fullpage-view.component */ 19237);
/* harmony import */ var _timelineview_view_blog_new_view_blog_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timelineview/view-blog-new/view-blog-new.component */ 59201);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ckeditor4-angular */ 22366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2316);



























// import { NgxEditorModule } from 'ngx-editor';
// import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS,
            useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_9__.AuthInterceptorService,
            multi: true
        },
        // {
        //   provide: HIGHLIGHT_OPTIONS,
        //   useValue: {
        //     fullLibraryLoader: () => import('highlight.js'),
        //   }
        // }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            primeng_editor__WEBPACK_IMPORTED_MODULE_26__.EditorModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_28__.TableModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__.InputTextModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_30__.DialogModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_31__.ButtonModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_32__.QuillModule.forRoot(),
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            // NgxEditorModule,
            // HighlightModule,
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_33__.CKEditorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__.BlogComponent,
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__.AuthComponent,
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__.HomeComponent,
        _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_10__.AddBlogComponent,
        _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_11__.ViewBlogComponent,
        _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_12__.EditBlogComponent,
        _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_13__.ViewSingleComponent,
        _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogComponent,
        _timelineview_timeline_view_timeline_view_component__WEBPACK_IMPORTED_MODULE_16__.TimeLineViewComponent,
        _timelineview_edit_blog_new_edit_blog_new_component__WEBPACK_IMPORTED_MODULE_15__.EditBlogNewComponent,
        _timelineview_add_blog_new_add_blog_new_component__WEBPACK_IMPORTED_MODULE_17__.AddBlogNewComponent,
        _timelineview2_timeline_view2_timeline_view2_component__WEBPACK_IMPORTED_MODULE_18__.TimelineView2Component,
        _timelineview3_timeline_view3_timeline_view3_component__WEBPACK_IMPORTED_MODULE_19__.TimelineView3Component,
        _common_fullpage_view_fullpage_view_component__WEBPACK_IMPORTED_MODULE_20__.FullpageViewComponent,
        _timelineview_view_blog_new_view_blog_new_component__WEBPACK_IMPORTED_MODULE_21__.ViewBlogNewComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        primeng_editor__WEBPACK_IMPORTED_MODULE_26__.EditorModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_28__.TableModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__.InputTextModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_30__.DialogModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_31__.ButtonModule, ngx_quill__WEBPACK_IMPORTED_MODULE_32__.QuillModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        // NgxEditorModule,
        // HighlightModule,
        ckeditor4_angular__WEBPACK_IMPORTED_MODULE_33__.CKEditorModule] }); })();


/***/ }),

/***/ 15445:
/*!**********************************************!*\
  !*** ./src/app/auth/auth-guard.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return this.authService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
            let authenticated = !!user;
            if (authenticated) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/auth']);
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32458:
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": function() { return /* binding */ AuthInterceptorService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 96958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 50384);




class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(user => {
            //console.log("Original Req:" + req)
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().append("auth", user.token)
            });
            //console.log("Modified Req:" + modifiedReq)
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ 60980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": function() { return /* binding */ AuthComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinner/spinner.component */ 64283);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);






function AuthComponent_app_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-spinner");
} }
function AuthComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
} }
function AuthComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthComponent_div_2_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthComponent_div_2_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_div_2_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.switchMode == false ? "SignIn" : "SignUp", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Switch to ", ctx_r1.switchMode == false ? "SignUp" : "SignIn", "");
} }
class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.switchMode = false;
        this.loading = false;
    }
    ngOnInit() {
    }
    onSwitchMode() {
        this.switchMode = !this.switchMode;
    }
    onSubmit(authForm) {
        this.loading = true;
        let authObservable;
        if (!this.switchMode) {
            authObservable = this.authService.signIn(authForm.value.email, authForm.value.password);
        }
        else {
            authObservable = this.authService.signUp(authForm.value.email, authForm.value.password);
        }
        authObservable.subscribe(responseData => {
            this.loading = false;
            this.router.navigate(["/home"]);
        }, error => {
            this.loading = false;
            this.errorMessage = error;
        });
        authForm.reset();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "container"], ["class", "row justify-content-center align-items-center ", 4, "ngIf"], [1, "row", "justify-content-center", "align-items-center"], [1, "loginform"], ["class", "alert alert-danger", "style", "text-align: center;", 4, "ngIf"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email", 1, "customcolordark"], ["type", "email", "id", "email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "form-control"], ["for", "password", 1, "customcolordark"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "custombgcolor", 3, "disabled"], ["type", "button", 1, "btn", "custombgcolor", 3, "click"], [1, "alert", "alert-danger", 2, "text-align", "center"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuthComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthComponent_div_2_Template, 19, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator], styles: [".container[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.loginform[_ngcontent-%COMP%]{\n    border: 3px solid #EDF5E1;\n    padding: 90px;\n        border-radius: 15px;\n        width: 525px;\n}\n\n.customcolor[_ngcontent-%COMP%] {\n    \n    color: #EDF5E1;\n}\n\n.customcolordark[_ngcontent-%COMP%] {\n    \n    color: #05386B;\n}\n\n.custombgcolor[_ngcontent-%COMP%] {\n    \n    background-color: #05386B;\n    color: #EDF5E1;\n\n}\n\n@media( max-width: 414px) {\n    .loginform[_ngcontent-%COMP%]{\n        border: 3px solid #EDF5E1;\n        padding: 90px;\n            border-radius: 15px;\n            width: 525px;\n    }\n    .container[_ngcontent-%COMP%] {\n        height: 50%;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtRQUNULG1CQUFtQjtRQUNuQixZQUFZO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO1lBQ1QsbUJBQW1CO1lBQ25CLFlBQVk7SUFDcEI7SUFDQTtRQUNJLFdBQVc7SUFDZjs7QUFFSiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5sb2dpbmZvcm17XG4gICAgYm9yZGVyOiAzcHggc29saWQgI0VERjVFMTtcbiAgICBwYWRkaW5nOiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB3aWR0aDogNTI1cHg7XG59XG5cbi5jdXN0b21jb2xvciB7XG4gICAgLyogY29sb3I6ICNFOTgwNzQ7ICovXG4gICAgY29sb3I6ICNFREY1RTE7XG59XG5cbi5jdXN0b21jb2xvcmRhcmsge1xuICAgIC8qIGNvbG9yOiAjRTk4MDc0OyAqL1xuICAgIGNvbG9yOiAjMDUzODZCO1xufVxuXG4uY3VzdG9tYmdjb2xvciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0U5ODA3NDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzODZCO1xuICAgIGNvbG9yOiAjRURGNUUxO1xuXG59XG5cbkBtZWRpYSggbWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5sb2dpbmZvcm17XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNFREY1RTE7XG4gICAgICAgIHBhZGRpbmc6IDkwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgfVxuICAgIFxufSJdfQ== */"] });


/***/ }),

/***/ 50384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 96958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ 53935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        //user = new Subject<User>();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDi8b7mjzP1mpNx_e87ZxItpoH7zF6yvcY';
        this.signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi8b7mjzP1mpNx_e87ZxItpoH7zF6yvcY';
        this.refreshTokenUrl = 'https://securetoken.googleapis.com/v1/token?key=AIzaSyDi8b7mjzP1mpNx_e87ZxItpoH7zF6yvcY';
    }
    ngOnInit() {
    }
    signUp(email, password) {
        return this.http.post(this.signUpUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(this.handleError(error));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(res => this.handleAuthentication(res)));
    }
    signIn(email, password) {
        return this.http.post(this.signInUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(this.handleError(error));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(res => this.handleAuthenticationSignIn(res)));
    }
    handleAuthentication(res) {
        const expirationDate = new Date(new Date().getTime() + +res.expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(res.email, res.localId, res.idToken, expirationDate, res.refreshToken);
        this.user.next(user);
        this.autoLogout(+res.expiresIn * 1000); //convert to ms for setinterval
        localStorage.setItem('userData', JSON.stringify(user));
    }
    getExpiry(expiresIn) {
        //TODO DEV Purposes only
        // return 180 * 1000;
        return +expiresIn * 1000; //convert to ms for setinterval 
    }
    handleAuthenticationSignIn(res) {
        console.log("In handleAuthenticationSignIn()");
        const expiryTime = this.getExpiry(res.expiresIn);
        const expirationDate = new Date(new Date().getTime() + expiryTime);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(res.email, res.localId, res.idToken, expirationDate, res.refreshToken);
        this.user.next(user);
        this.autoRenew(expiryTime); //convert to ms for setinterval 
        localStorage.setItem('userData', JSON.stringify(user));
        this.expirationDate = expirationDate;
    }
    handleAuthenticationAutoRefresh(res) {
        console.log("In handleAuthenticationAutoRefresh()");
        console.log(`res.expires_in`, +res.expires_in);
        console.log("Clearing the interval ");
        this.clearGivenInterval(this.autoRenewInterval);
        let userObj = JSON.parse(localStorage.getItem('userData'));
        console.log(`res`, res);
        console.log(`userObj`, userObj);
        const expiryTime = this.getExpiry(res.expires_in);
        const expirationDate = new Date(new Date().getTime() + expiryTime);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(userObj.email, userObj.id, res.id_token, expirationDate, res.refresh_token);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoRenew(expiryTime);
        this.expirationDate = expirationDate;
    }
    handleError(error) {
        let errorMessage = 'An invalid error occured';
        if (!error.error || !error.error.error) {
            return (errorMessage);
        }
        switch (error.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = "Email not found";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "Invalid password";
                break;
            default: errorMessage = "An unknown error occured";
        }
        return errorMessage;
    }
    autoLogin() {
        console.log("autologin");
        let userData = localStorage.getItem('userData');
        if (userData) {
            const user = JSON.parse(userData);
            const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(user.email, user.id, user._token, new Date(user._tokenExpirationDate), user._refreshToken);
            this.user.next(loadedUser);
            // this.autoLogout(new Date(user._tokenExpirationDate).getTime() - new Date().getTime()); //convert to ms for setinterval
            this.autoRenew(loadedUser.tokenExpirationDate.getTime() - new Date().getTime()); //convert to ms for setinterval
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(["/auth"]);
        localStorage.removeItem('userData');
        this.clearGivenInterval(this.logoutInterval);
        this.clearGivenInterval(this.autoRenewInterval);
    }
    clearGivenInterval(interval) {
        if (interval) {
            clearInterval(interval);
        }
        interval = null;
    }
    autoLogout(expiration) {
        this.logoutInterval = setInterval(() => {
            this.logout();
        }, expiration);
    }
    autoRenew(expiration) {
        if (expiration > 0) {
            console.log("In autorenew() method");
            this.autoRenewInterval = setInterval(() => {
                console.log("calling refreshtoken()");
                this.refreshToken();
            }, expiration);
        }
    }
    getUserEmail() {
        return this.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(user => {
            //console.log("AuthService:" + user.email)
            return user.email;
        }));
    }
    refreshToken() {
        console.log("In refreshToken() method");
        let userData = localStorage.getItem('userData');
        if (userData) {
            console.log("user data in sessinstoage found");
            const user = JSON.parse(userData);
            return this.http.post(this.refreshTokenUrl, {
                grant_type: "refresh_token",
                refresh_token: user._refreshToken,
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(this.handleError(error));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(res => this.handleAuthenticationAutoRefresh(res))).subscribe(data => {
                console.log("Auto refresh succesful", data);
            }, err => {
                console.log("Auto refresh failed", err);
            });
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53935:
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
class User {
    constructor(email, id, _token, _tokenExpirationDate, _refreshToken) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
        this._refreshToken = _refreshToken;
    }
    get token() {
        if (!this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
    get tokenExpirationDate() {
        if (!this._tokenExpirationDate) {
            return null;
        }
        return this._tokenExpirationDate;
    }
}


/***/ }),

/***/ 38026:
/*!*****************************************************!*\
  !*** ./src/app/blog/add-blog/add-blog.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBlogComponent": function() { return /* binding */ AddBlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 82296);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 48266);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner/spinner.component */ 64283);









const _c0 = ["blogForm"];
function AddBlogComponent_app_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-spinner");
} }
const _c1 = function () { return { "height": "220px" }; };
class AddBlogComponent {
    constructor(dataservice, sharedService) {
        this.dataservice = dataservice;
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        console.log(form.value);
        this.loading = true;
        this.dataservice.saveBlog({
            heading: form.value.heading,
            blogtext: form.value.blogtext,
            category: form.value.category,
            tags: form.value.tags,
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
        }).subscribe(res => {
            console.log(res);
            this.loading = false;
            this.sharedService.blogAddedSubject.next(true);
            this.sharedService.openSnackBar("Blog Saved successfully", "Yay");
            form.reset();
        }, err => {
            console.log(err);
            this.loading = false;
            this.sharedService.openSnackBar("Blog Saved failed", "Naa");
        });
    }
    clearForm() {
        this.blogForm.clear();
    }
}
AddBlogComponent.ɵfac = function AddBlogComponent_Factory(t) { return new (t || AddBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
AddBlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddBlogComponent, selectors: [["app-add-blog"]], viewQuery: function AddBlogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.blogForm = _t.first);
    } }, decls: 19, vars: 5, consts: [[1, "ui-g", "ui-fluid"], [1, "ui-g-12", "ui-md-12"], [4, "ngIf"], [3, "ngSubmit"], ["blogForm", "ngForm"], [1, "ui-inputgroup", "lightdarkcolor", 2, "margin-bottom", "10px"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-user", 2, "line-height", "1.25"], ["type", "text", "pInputText", "", "placeholder", "heading", "name", "heading", "ngModel", "", "required", ""], ["name", "blogtext", 3, "ngModel", "ngModelChange"], [1, "ui-inputgroup", 2, "margin-bottom", "10px"], ["type", "text", "pInputText", "", "placeholder", "category", "name", "category", "ngModel", ""], ["type", "text", "pInputText", "", "placeholder", "tags", "name", "tags", "ngModel", ""], ["pButton", "", "type", "submit", "icon", "pi pi-check", "iconPos", "left", "label", "Save", 1, "lightdarkcolor", "customcolordark"]], template: function AddBlogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddBlogComponent_app_spinner_2_Template, 1, 0, "app-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddBlogComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-editor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddBlogComponent_Template_p_editor_ngModelChange_9_listener($event) { return ctx.blogtext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.blogtext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, primeng_editor__WEBPACK_IMPORTED_MODULE_7__.Editor, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 38716:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": function() { return /* binding */ BlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.service */ 77420);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-blog/view-blog.component */ 48168);
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-blog/add-blog.component */ 38026);
/* harmony import */ var _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-blog/edit-blog.component */ 83080);
/* harmony import */ var _view_single_view_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-single/view-single.component */ 64188);








function BlogComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-add-blog");
} }
function BlogComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-edit-blog");
} }
function BlogComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-view-single");
} }
class BlogComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.selectedIndex = 0;
        this.blogUpdated = false;
        this.blogs = [{
                id: 1,
                heading: 'First',
                blogtext: 'Something goes here'
            },
            {
                id: 2,
                heading: 'Second',
                blogtext: 'Something goes here'
            }];
    }
    selectedIndexChange(val) {
        this.selectedIndex = val;
        console.log(this.selectedIndex);
        if (this.selectedIndex == 1 && this.blogUpdated) {
            this.blogUpdated = false;
            this.sharedService.blogReloadSubject.next(true);
        }
    }
    ngOnInit() {
        this.sharedService.tabChangeIndex.subscribe(index => {
            this.selectedIndex = index;
        });
        this.sharedService.blogAddedSubject.subscribe(val => {
            console.log("Blog: Received " + val);
            this.blogUpdated = true;
        });
    }
    outputUpdate(vol) {
        console.log(vol);
        this.selectedRange = vol.srcElement.value;
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService)); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 11, vars: 1, consts: [[1, "tabContainer"], ["mat-align-tabs", "center", 3, "selectedIndex", "selectedIndexChange"], ["label", "View"], ["label", "Add"], ["matTabContent", ""], ["label", "Edit"], ["label", "Page View"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedIndexChange", function BlogComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.selectedIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-view-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BlogComponent_ng_template_6_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BlogComponent_ng_template_8_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BlogComponent_ng_template_10_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_1__.ViewBlogComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabContent, _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_2__.AddBlogComponent, _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_3__.EditBlogComponent, _view_single_view_single_component__WEBPACK_IMPORTED_MODULE_4__.ViewSingleComponent], styles: [".tabContainer[_ngcontent-%COMP%] {\n  background-color: var(--main-bg-color-light);\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n  padding: 50px;\n  margin: 150px;\n  margin-top: 80px;\n  position: sticky;\n  top: 80px;\n}\n\n.slidecontainer[_ngcontent-%COMP%] {\n  width: 100%; \n  height: 500px;\n  border: 1px solid black;\n  position: absolute;\n  top: 30;\n  left: 5;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  width: 400px; \n  height: 50px; \n  background: #d3d3d3; \n  \n  \n  -webkit-appearance: slider-vertical;\n  \n  background-color: 3f91e5;\n  width: 250px;\n  height: 100px;\n}\n\n\n\n.slider[_ngcontent-%COMP%]:hover {\n  opacity: 1; \n}\n\n@media screen and (max-width: 414px) {\n  .tabContainer[_ngcontent-%COMP%] {\n    background-color: var(--main-bg-color-light);\n    box-shadow: none;\n    padding: 5px;\n    margin: 5px;\n    margin-top: 30px;\n    position: sticky;\n    top: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUE0QztFQUM1Qyw4RUFBOEU7RUFDOUUsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVcsRUFBRSxtQ0FBbUM7RUFDaEQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87QUFDVDs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsWUFBWSxFQUFFLGVBQWU7RUFDN0IsWUFBWSxFQUFFLHFCQUFxQjtFQUNuQyxtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekM7dUVBQ3FFO0VBQ3JFLGlFQUFpRTtFQUNqRSxtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxVQUFVLEVBQUUsOEJBQThCO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvci1saWdodCk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcbiAgcGFkZGluZzogNTBweDtcbiAgbWFyZ2luOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA4MHB4O1xufVxuXG4uc2xpZGVjb250YWluZXIge1xuICB3aWR0aDogMTAwJTsgLyogV2lkdGggb2YgdGhlIG91dHNpZGUgY29udGFpbmVyICovXG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzA7XG4gIGxlZnQ6IDU7XG59XG5cbi8qIFRoZSBzbGlkZXIgaXRzZWxmICovXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDQwMHB4OyAvKiBGdWxsLXdpZHRoICovXG4gIGhlaWdodDogNTBweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgLyogLXdlYmtpdC10cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKTsgKi9cbiAgLyogdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZSg0NWRlZyk7ICovXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogc2xpZGVyLXZlcnRpY2FsO1xuICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IDNmOTFlNTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC50YWJDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3ItbGlnaHQpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDgwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 83080:
/*!*******************************************************!*\
  !*** ./src/app/blog/edit-blog/edit-blog.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBlogComponent": function() { return /* binding */ EditBlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.service */ 77420);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 82296);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 48266);







const _c0 = ["peditor"];
const _c1 = function () { return { "height": "400px" }; };
class EditBlogComponent {
    constructor(dataservice, sharedService) {
        this.dataservice = dataservice;
        this.sharedService = sharedService;
        this.blogtext = "<ul><li>1</li><li>2</li></ul>";
        this.heading = "default heading";
        this.tags = [];
        this.category = "";
        this.modules = {
            toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                ['image', 'code-block']
            ]
        };
    }
    ngOnInit() {
        console.log("EditBlog->NgOnInit->" + this.heading);
        this.dataservice.blogSubject.subscribe(item => {
            //console.log("Received:--------"+ new Date())
            //console.log( item.value.blogtext);
            this.blogtext = item.value.blogtext;
            this.heading = item.value.heading;
            this.tags = item.value.tags;
            this.category = item.value.category;
            this.key = item.key;
            //setTimeout(this.handleRefresh,2000);
        });
    }
    handleRefresh(event) {
        console.log("called refresh" + this.blogtext);
        Array
            .from(this.peditor.el.nativeElement.children)
            // .filter( (c: HTMLElement) => c.className.includes('ql-blank'))
            .forEach((c) => {
            console.log(c.children[1].children[0]);
            if (this.blogtext) {
                console.log("Why the text is null " + this.blogtext);
                c.children[1].children[0].innerHTML = this.blogtext;
            }
        });
    }
    ngAfterViewInit() {
        //console.log("After view checked");
        //console.log(this.heading)
        //   Array
        //   .from(this.peditor.el.nativeElement.children)
        //  // .filter( (c: HTMLElement) => c.className.includes('ql-blank'))
        //   .forEach( (c :HTMLElement) =>  {
        //     console.log(c.children[1].children[0])
        //     if(this.blogtext) {
        //       console.log("Why the text is null " + this.blogtext)
        //       c.children[1].children[0].innerHTML = this.blogtext;
        //     }
        //    //c.children[1].children[0].innerHTML = '<p> A paragraph </p> <ul><li>1</li><li>2</li></ul>';
        //    //c.children[1].children[0].innerHTML =  '<ol><li><strong>First Description</strong></li><li><strong>Second Description </strong></li><li><strong>Third description</strong></li></ol>'
        //    }
        //     );
        //setTimeout(this.handleRefresh,2000);
        //var x = this.peditor.el.nativeElement.children
        //x.querySelector(".ql-editor").innerHTML = this.blogtext
        //  console.log(this.peditor.el.nativeElement.children)
        //var result = document.getElementsByClassName("ql-editor")[0].innerHTML = '<p> A paragraph </p>';
        //console.log(result)
    }
    ngAfterViewChecked() {
        //setTimeout(this.handleRefresh,2000);
    }
    ngOnDestroy() {
        console.log("Destroying Edit Blog:" + this.heading);
    }
    onSubmit(form) {
        console.log(form);
        this.dataservice.updateBlog(this.key, {
            heading: form.value.heading,
            blogtext: form.value.blogtext,
            category: form.value.category,
            tags: form.value.tags,
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
        }).subscribe(res => {
            //console.log(res)
            this.sharedService.blogAddedSubject.next(true);
            this.sharedService.openSnackBar('Post updated successfully', 'Yayyy');
        }, err => {
            console.log(err);
        });
    }
    logChange($event) {
        console.log($event);
    }
}
EditBlogComponent.ɵfac = function EditBlogComponent_Factory(t) { return new (t || EditBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
EditBlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditBlogComponent, selectors: [["app-edit-blog"]], viewQuery: function EditBlogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.peditor = _t.first);
    } }, decls: 19, vars: 7, consts: [[1, "ui-g", "ui-fluid"], [1, "ui-g-12", "ui-md-12"], [3, "ngSubmit"], ["blogForm", "ngForm"], [1, "ui-inputgroup", 2, "margin-bottom", "10px"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-user", 2, "line-height", "1.25"], ["type", "text", "pInputText", "", "placeholder", "heading", "name", "heading", 3, "ngModel", "ngModelChange"], ["name", "blogtext", 3, "ngModel"], ["peditor", ""], ["type", "text", "pInputText", "", "placeholder", "category", "name", "category", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "tags", "name", "tags", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "submit", "icon", "pi pi-check", "iconPos", "left", "label", "Update", 1, "lightdarkcolor", "customcolordark"]], template: function EditBlogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditBlogComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditBlogComponent_Template_input_ngModelChange_7_listener($event) { return ctx.heading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-editor", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditBlogComponent_Template_input_ngModelChange_13_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditBlogComponent_Template_input_ngModelChange_17_listener($event) { return ctx.tags = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.blogtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tags);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_editor__WEBPACK_IMPORTED_MODULE_5__.Editor, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 48168:
/*!*******************************************************!*\
  !*** ./src/app/blog/view-blog/view-blog.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBlogComponent": function() { return /* binding */ ViewBlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/confirm-dialog/confirm-dialog.component */ 2362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 48266);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ 64283);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/api */ 46976);






















function ViewBlogComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", category_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r12, " ");
} }
function ViewBlogComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", tag_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tag_r13);
} }
function ViewBlogComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r14, " ");
} }
function ViewBlogComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r4.blogsFiltered.length, " item(s) found in category:", ctx_r4.selected, ".\u00A0");
} }
function ViewBlogComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r5.blogs.length, " items in category:", ctx_r5.selected, ". \u00A0");
} }
function ViewBlogComponent_a_52_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_a_52_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.handlePage(ctx_r15.page1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.page1);
} }
function ViewBlogComponent_a_54_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_a_54_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.handlePage(ctx_r17.page2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.page2);
} }
function ViewBlogComponent_a_58_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_a_58_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.handlePage(ctx_r19.page3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.page3);
} }
function ViewBlogComponent_a_60_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_a_60_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.handlePage(ctx_r21.page4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.page4);
} }
function ViewBlogComponent_app_spinner_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-spinner");
} }
function ViewBlogComponent_div_66_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Category:", blog_r23.value.category, " \u00A0");
} }
function ViewBlogComponent_div_66_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Tags:", blog_r23.value.tags, "");
} }
function ViewBlogComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ViewBlogComponent_div_66_div_7_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ViewBlogComponent_div_66_div_8_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_div_66_Template_div_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const blog_r23 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.onFullPageView($event, blog_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_div_66_Template_div_click_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const blog_r23 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.onEdit($event, blog_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_div_66_Template_div_click_22_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const blog_r23 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.openDialog($event, blog_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ViewBlogComponent_div_66_Template_p_editor_ngModelChange_28_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const blog_r23 = restoredCtx.$implicit; return blog_r23.value.blogtext = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "p-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r24 + 1 + (ctx_r11.currentPage - 1) * ctx_r11.pageSize, ".", blog_r23.value.heading, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", blog_r23.value.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", blog_r23.value.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, blog_r23.value.datemodified));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", blog_r23.value.blogtext)("readonly", true);
} }
class ViewBlogComponent {
    constructor(dataService, router, sharedService, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.blogs = [];
        this.categories = new Set().add('All');
        this.tags = new Map();
        this.searchInput = '';
        this.searchInputFilter = '';
        this.selected = 'All';
        this.sortOrder = true;
        this.blogsFiltered = [];
        this.blogsPager = [];
        this.currentPage = 0;
        this.pageSize = 5;
        this.filtered = false;
        this.page1 = 1;
        this.page2 = 2;
        this.page3 = 3;
        this.page4 = 4;
        this.showPage1 = false;
        this.showPage2 = false;
        this.showPage3 = false;
        this.showPage4 = false;
        this.tagsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.tagsArr = [];
        this.tagsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.tagsOptions = [];
        this.editBlogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngAfterViewInit() {
        console.log("NgAfterViewInit: ViewBlog: ");
    }
    ngOnChanges() {
        console.log("ngOnChanges: ViewBlog: ");
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.tagsOptions.filter(option => option.toLowerCase().includes(filterValue));
    }
    ngOnInit() {
        console.log("View Blog: Init" + this.currentPage);
        this.fetchData(true);
        // this.sharedService.blogAddedSubject.subscribe(val => {
        //   console.log("blog added/updated")
        //   this.fetchData(false)
        //   //this.handleFirstPage()
        // })
        this.sharedService.blogReloadSubject.subscribe(val => {
            console.log("blog added/updated");
            this.fetchData(false);
            this.handleFirstPage();
        });
    }
    fetchData(initialLoad, keyDeleted) {
        this.loading = true;
        this.blogs = [];
        this.categories.clear();
        this.categories.add('All');
        this.blogsPager = this.blogsPager.filter(item => item.key != keyDeleted);
        //this.blogsFiltered.filter(item => item.key != keyDeleted) 
        this.subs = this.dataService.getBlogs().subscribe(res => {
            for (let key of Object.keys(res)) {
                //console.log(key)
                //console.log(res[key])
                this.blogs.push({
                    key: key,
                    value: res[key]
                });
                this.categories.add(res[key].category == "" ? 'NA' : res[key].category);
                if (res[key].tags) {
                    res[key].tags.split(" ").forEach(element => {
                        if (element == "") {
                            //console.log("NA")
                            if (this.tags.get("NA"))
                                this.tags.set("NA", this.tags.get("NA") + 1);
                            else
                                this.tags.set("NA", 1);
                        }
                        else if (this.tags.has(element))
                            this.tags.set(element, this.tags.get(element) + 1);
                        else {
                            this.tags.set(element, 1);
                        }
                    });
                }
            }
            //console.log(this.tags.values)
            for (let tag of this.tags.keys()) {
                this.tagsArr.push(tag + " : " + this.tags.get(tag));
                this.tagsOptions.push(tag);
            }
            this.filteredTagsOptions = this.tagsControl.valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value)));
            // this.handleFirstPage();
            // this.blogsFiltered = this.blogs;
            //this.blogsPager = this.blogs;
            if (initialLoad)
                this.handleNext(null);
            //this.handleNextV2();
            this.loading = false;
            // for(let obj of Object.values(res)){
            //       console.log(obj)
            //       this.blogs.push(obj);
            // }
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    handleFirstPage() {
        console.log(this.blogs.length);
        if (this.blogs.length <= this.pageSize) {
            this.blogsPager = this.blogs;
        }
        else {
            // this.blogsPager = this.blogs
            for (let i = 0; i < this.pageSize; i++)
                this.blogsPager.push(this.blogs[i]);
        }
    }
    handleRefresh(event) {
        this.fetchData(false);
    }
    handleNext(event) {
        console.log("Blog Count:" + this.blogs.length);
        this.loading = true;
        let limit;
        let tempBlog;
        if (this.filtered) {
            limit = this.blogsFiltered.length / this.pageSize;
            tempBlog = this.blogsFiltered;
            this.currentpagessize = this.currentPage * this.pageSize;
            console.log("current page size:" + this.currentpagessize);
            console.log("processing filtered");
        }
        else {
            limit = this.blogs.length / this.pageSize;
            tempBlog = this.blogs;
            //this.currentPage = 0;
            this.currentpagessize = this.currentPage * this.pageSize;
            console.log("current page size:" + this.currentpagessize);
        }
        console.log("Limit : " + limit);
        if (this.currentPage < limit) {
            this.currentPage++;
            this.blogsPager = [];
            let looplimit;
            if (tempBlog.length - this.currentpagessize > this.pageSize) {
                console.log("Difference:" + (tempBlog.length - this.currentpagessize));
                looplimit = this.currentpagessize + this.pageSize;
            }
            else
                looplimit = (this.currentpagessize) - (this.currentpagessize - tempBlog.length);
            console.log("Loop Limit:" + looplimit);
            for (let i = this.currentpagessize; i < looplimit; i++) {
                // console.log( this.currentpagessize + " " +  this.currentpagessize + " " + this.pageSize )
                this.blogsPager.push(tempBlog[i]);
            }
        }
        this.loading = false;
    }
    handleLast(event) {
        console.log("Blog Count:" + this.blogs.length);
        this.loading = true;
        let limit;
        let tempBlog;
        if (this.filtered) {
            limit = this.blogsFiltered.length / this.pageSize;
            this.currentPage = Math.ceil(limit);
            tempBlog = this.blogsFiltered;
            this.currentpagessize = (this.currentPage - 1) * this.pageSize;
            console.log("current page size:" + this.currentpagessize + " current page:" + this.currentPage);
            console.log("processing filtered");
        }
        else {
            limit = this.blogs.length / this.pageSize;
            tempBlog = this.blogs;
            this.currentPage = Math.ceil(limit);
            //this.currentPage = 0;
            this.currentpagessize = (this.currentPage - 1) * this.pageSize;
            console.log("current page size:" + this.currentpagessize + " current page:" + this.currentPage);
        }
        console.log("Limit : " + limit);
        this.blogsPager = [];
        let looplimit;
        if (tempBlog.length - this.currentpagessize > this.pageSize) {
            console.log("Difference:" + (tempBlog.length - this.currentpagessize));
            looplimit = this.currentpagessize + this.pageSize;
        }
        else
            looplimit = (this.currentpagessize) - (this.currentpagessize - tempBlog.length);
        console.log("Loop Limit:" + looplimit);
        for (let i = this.currentpagessize; i < looplimit; i++) {
            // console.log( this.currentpagessize + " " +  this.currentpagessize + " " + this.pageSize )
            this.blogsPager.push(tempBlog[i]);
        }
        this.loading = false;
    }
    handlePrev(event) {
        let tempBlog;
        if (this.filtered) {
            tempBlog = this.blogsFiltered;
        }
        else {
            tempBlog = this.blogs;
        }
        this.currentpagessize = this.currentPage * this.pageSize;
        console.log("page size = " + this.currentpagessize);
        if (this.currentPage > 1) {
            this.currentPage--;
            this.blogsPager = [];
            for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
                //console.log("i=" + i )
                this.blogsPager.push(tempBlog[i]);
            }
        }
    }
    handleFirst(event) {
        console.log("Blog Count:" + this.blogs.length);
        this.loading = true;
        let limit;
        let tempBlog;
        if (this.filtered) {
            limit = this.blogsFiltered.length / this.pageSize;
            this.currentPage = 1;
            tempBlog = this.blogsFiltered;
            this.currentpagessize = (this.currentPage - 1) * this.pageSize;
            console.log("current page size:" + this.currentpagessize + " current page:" + this.currentPage);
            console.log("processing filtered");
        }
        else {
            limit = this.blogs.length / this.pageSize;
            tempBlog = this.blogs;
            this.currentPage = 1;
            //this.currentPage = 0;
            this.currentpagessize = (this.currentPage - 1) * this.pageSize;
            console.log("current page size:" + this.currentpagessize + " current page:" + this.currentPage);
        }
        console.log("Limit : " + limit);
        this.blogsPager = [];
        let looplimit;
        if (tempBlog.length - this.currentpagessize > this.pageSize) {
            console.log("Difference:" + (tempBlog.length - this.currentpagessize));
            looplimit = this.currentpagessize + this.pageSize;
        }
        else
            looplimit = (this.currentpagessize) - (this.currentpagessize - tempBlog.length);
        console.log("Loop Limit:" + looplimit);
        for (let i = this.currentpagessize; i < looplimit; i++) {
            // console.log( this.currentpagessize + " " +  this.currentpagessize + " " + this.pageSize )
            this.blogsPager.push(tempBlog[i]);
        }
        this.loading = false;
    }
    onEdit(event, blogkv) {
        console.log("Sending:" + blogkv.key + " at " + new Date());
        this.dataService.blogSubject.next(blogkv);
        this.sharedService.tabChangeIndex.next(2);
        this.router.navigate(['blog', 'edit']);
    }
    onAddComment(event, blogkv) {
    }
    onFullPageView(event, blogkv) {
        console.log("Sending to full page view:" + blogkv.key + " at " + new Date());
        this.dataService.blogSubject.next(blogkv);
        this.sharedService.tabChangeIndex.next(3);
        this.router.navigate(['blog', 'fullview']);
    }
    keypressEvent(event) {
        //console.log(event);
        //console.log(this.searchInput)
    }
    handleSearch(event) {
        this.hidePageNos();
        this.searchInputFilter = this.searchInput.toLowerCase();
        this.blogsFiltered = [];
        this.blogsPager = [];
        console.log("searching for " + this.searchInputFilter);
        if (this.searchInputFilter !== undefined && this.searchInputFilter !== ' ') {
            this.blogsFiltered = this.blogs
                .filter(x => {
                return ((x.value.heading.toLowerCase().includes(this.searchInputFilter) ||
                    (this.tagsFormControl.value != "" && x.value.tags.includes(this.tagsFormControl.value)))
                    &&
                        ((x.value.category == this.selected || this.selected == 'All') ||
                            (this.selected == 'NA' && x.value.category == '')));
            });
            //this.blogsPager = this.blogsFiltered
        }
        else {
            console.log("Else case");
            this.blogsFiltered = this.blogs
                .filter(x => ((x.value.category == this.selected || this.selected == 'All') || (this.selected == 'NA' && x.value.category == '')));
        }
        console.log(this.blogsFiltered);
        this.filtered = true;
        this.currentPage = 0;
        this.handleNext(null);
    }
    handleAutoCompleteSelectChange(event) {
        let selectedTag = event.option.value;
        //console.log(selectedTag)
        this.blogsFiltered = this.blogs
            .filter(x => {
            //console.log(x.value.tags);
            return x.value.tags.toLowerCase().includes(selectedTag.toLowerCase());
        });
        this.filtered = true;
        this.currentPage = 0;
        this.handleNext(null);
    }
    handleTagOpenChange(event) {
        let searchArr = this.tagsFormControl.value ? this.tagsFormControl.value.map(x => x.split(":")[0].trim()) : null;
        if (searchArr == null || searchArr.length <= 0) {
            //console.log("Return from the search")
            return;
        }
    }
    handleTagChange(event) {
        //console.log(event);
        let searchArr = this.tagsFormControl.value ? this.tagsFormControl.value.map(x => x.split(":")[0].trim()) : null;
        if (searchArr == null || searchArr.length <= 0) {
            console.log("Return from the search");
            this.filtered = false;
            this.currentPage = 0;
            this.handleNext(null);
            return;
        }
        this.hidePageNos();
        this.searchInputFilter = this.searchInput;
        this.blogsFiltered = [];
        this.blogsPager = [];
        if (this.searchInputFilter !== undefined && this.searchInputFilter !== ' ') {
            this.blogsFiltered = this.blogs
                .filter(x => {
                //console.log(x.value.tags + " :comparing: " +  searchArr.filter(y => (x.value.tags.includes(y)  ) ) )
                //console.log(searchArr.filter(y => (x.value.tags.includes(y) )))
                return searchArr.filter(y => {
                    //console.log(y + " : " + x.value.tags)
                    if (y == "NA")
                        return x.value.tags == "";
                    else
                        return (x.value.tags.includes(y));
                }).length > 0;
            });
            //this.blogsPager = this.blogsFiltered
        }
        else {
            this.blogsFiltered = this.blogs
                .filter(x => (x.value.tags.includes(this.tagsFormControl.value)));
        }
        console.log("Filtered Blogs");
        console.log(this.blogsFiltered);
        this.filtered = true;
        this.currentPage = 0;
        this.handleNext(null);
    }
    handleClear(event) {
        this.searchInputFilter = '';
        this.searchInput = '';
        this.currentPage = 0;
        this.filtered = false;
        this.selected = 'All';
        this.selectedTagValue = '';
        this.handleNext(null);
        this.hidePageNos();
    }
    hidePageNos() {
        this.showPage1 = false;
        this.showPage2 = false;
        this.showPage3 = false;
        this.showPage4 = false;
    }
    onDeletePost(event, post) {
        this.dataService.deletePost(post.key).subscribe(msg => {
            //console.log(msg)
            this.sharedService.openSnackBar('Post Deleted Successfully', 'Tadaaa');
            this.fetchData(false, post.key);
        }, err => {
            console.log(err);
            this.sharedService.openSnackBar('Post Delete failed', 'Ding...');
        });
    }
    openDialog(event, blog) {
        const dialogRef = this.dialog.open(_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            width: '250px',
            data: {
                title: "Confirm",
                message: "Do you wanna delete the item?"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result == true) {
                this.onDeletePost(event, blog);
            }
        });
    }
    onCategoryChange(event) {
        console.log("filter");
        //this.blogs = this.blogs.filter(x => x.value.category == this.selected)
        //this.blogsPager = this.blogsFiltered
        //  console.log(this.blogsFiltered)
        //  this.filtered = true
        //  this.currentPage = 0;
        //  this.handleNext(null)
        this.handleSearch(null);
    }
    onTagChange(event) {
        console.log("tag change");
        this.handleSearch(null);
    }
    handlePageNumberChange(event) {
        this.currentPage = 0;
        this.handleSearch(null);
    }
    onSortGlobal(event) {
        //console.log(this.blogs[0])
        this.sortOrder = !this.sortOrder;
        if (this.sortOrder) {
            if (this.filtered)
                this.blogsFiltered.sort((x, y) => Date.parse(x.value.datemodified) - Date.parse(y.value.datemodified));
            else
                this.blogs.sort((x, y) => Date.parse(x.value.datemodified) - Date.parse(y.value.datemodified));
        }
        else {
            if (this.filtered)
                this.blogsFiltered.sort((x, y) => Date.parse(y.value.datemodified) - Date.parse(x.value.datemodified));
            else
                this.blogs.sort((x, y) => Date.parse(y.value.datemodified) - Date.parse(x.value.datemodified));
        }
        this.handlePage(1);
        // this.handleFirstPage()
        // this.handlePage(1)
        //this.handleFirst(null)
    }
    onSortSearch(event) {
        //console.log(this.blogs[0])
        this.sortOrder = !this.sortOrder;
        if (this.sortOrder) {
            this.blogsPager.sort((x, y) => Date.parse(x.value.datemodified) - Date.parse(y.value.datemodified));
        }
        else {
            this.blogsPager.sort((x, y) => Date.parse(y.value.datemodified) - Date.parse(x.value.datemodified));
        }
    }
    ngOnDestroy() {
        console.log("Destroying: ViewBlog");
        this.subs.unsubscribe();
    }
    // 32 
    // < 1 2 > 
    // < 1 2 3>
    // < 1 2 3 4>
    // < 2 3 4 5>
    // < 1 2 3 4> 
    //   handlePage1(){
    //     let limit = this.blogs.length / this.pageSize
    //     if(limit != 1) {
    //       this.currentPage = 1
    //       if(this.blogs.length  - (this.currentPage * this.pageSize) > 0 ){
    //         this.blogsPager = this.blogs.slice((this.currentPage -1) * this.pageSize, this.currentPage * this.pageSize)
    //       }
    //       this.showPage2 = true;
    //     }
    // }
    isMoreItemsAvailable(arr, pageno) {
        if ((arr.length - (pageno * this.pageSize)) >= 0 || ((this.pageSize - (pageno * this.pageSize - arr.length))) > 0) {
            console.log(" length - totalpages:" + (arr.length - (pageno * this.pageSize)));
            console.log((this.pageSize - (pageno * this.pageSize - arr.length)));
            return true;
        }
        else {
            return false;
        }
    }
    handlePage(pagetogo) {
        console.log("page to go:" + pagetogo);
        let blogsLocal = [];
        if (this.filtered) {
            blogsLocal = this.blogsFiltered;
        }
        else {
            blogsLocal = this.blogs;
        }
        if (pagetogo == 1) {
            this.showPage1 = false;
            this.showPage2 = false;
            this.page3 = pagetogo + 1;
            this.page4 = pagetogo + 2;
            // this.showPage3 = true
            // this.showPage4= true
        }
        else if (pagetogo == 2) {
            this.showPage1 = false;
            this.showPage2 = true;
            this.page2 = pagetogo - 1;
            if (this.isMoreItemsAvailable(blogsLocal, pagetogo + 1)) {
                this.showPage3 = true;
                this.page3 = pagetogo + 1;
            }
            if (this.isMoreItemsAvailable(blogsLocal, pagetogo + 2)) {
                this.showPage4 = true;
                this.page4 = pagetogo + 2;
            }
        }
        else {
            this.showPage1 = true;
            this.showPage2 = true;
            this.page1 = pagetogo - 2;
            this.page2 = pagetogo - 1;
            console.log(this.isMoreItemsAvailable(blogsLocal, pagetogo + 1));
            if (this.isMoreItemsAvailable(blogsLocal, pagetogo + 1)) {
                this.showPage3 = true;
                this.page3 = pagetogo + 1;
            }
            else {
                this.showPage3 = false;
            }
            console.log(this.isMoreItemsAvailable(blogsLocal, pagetogo + 2));
            if (this.isMoreItemsAvailable(blogsLocal, pagetogo + 2)) {
                this.showPage4 = true;
                this.page4 = pagetogo + 2;
            }
            else {
                this.showPage4 = false;
            }
        }
        //let limit = blogsLocal.length / this.pageSize
        this.currentPage = pagetogo;
        if (blogsLocal.length - (this.currentPage * this.pageSize) >= 0) {
            this.blogsPager = blogsLocal.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        }
        else {
            let index = (this.pageSize - (this.currentPage * this.pageSize - blogsLocal.length));
            this.blogsPager = blogsLocal.slice((this.currentPage - 1) * this.pageSize);
            this.showPage3 = false;
            this.showPage4 = false;
        }
    }
    handleNextV2() {
        let arr = [];
        if (this.filtered)
            arr = this.blogsFiltered;
        else
            arr = this.blogs;
        if (arr.length - (this.currentPage * this.pageSize) > 0) {
            this.currentPage++;
            this.handlePage(this.currentPage);
        }
    }
    handlePrevV2() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.handlePage(this.currentPage);
        }
    }
}
ViewBlogComponent.ɵfac = function ViewBlogComponent_Factory(t) { return new (t || ViewBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
ViewBlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewBlogComponent, selectors: [["app-view-blog"]], outputs: { editBlogEvent: "editBlogItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 67, vars: 22, consts: [[1, "master-container"], [1, "form"], ["appearance", "fill"], ["type", "text", "size", "100", "matInput", "", "placeholder", "Ex. Unix", "name", "search", 3, "ngModel", "ngModelChange"], [1, "control-btn-container"], ["mat-fab", "", "color", "accent", 1, "toggleMenu", 3, "click"], ["appearance", "fill", 1, "margin"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", 3, "ngModel", "formControl", "ngModelChange", "selectionChange", "openedChange"], ["type", "text", "placeholder", "Search Tags", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], [1, "paginator-container"], [1, "paginator"], [2, "margin-right", "40px"], [4, "ngIf"], [1, "items-perpage"], ["type", "number", "name", "pageSize", "size", "2", "min", "1", 1, "paginatorinput", 3, "ngModel", "ngModelChange", "change"], [1, "paginator-controls"], ["pButton", "", "type", "submit", "iconPos", "left", "label", "<<", 1, "paginator-btn", 3, "click"], ["pButton", "", "type", "submit", "iconPos", "left", "label", "<", 1, "paginator-btn", 3, "click"], [3, "click", 4, "ngIf"], ["type", "number", "name", "pageNumber", "size", "2", "disabled", "", 1, "paginatorinput", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "submit", "iconPos", "left", "label", ">", 1, "paginator-btn", 3, "click"], ["pButton", "", "type", "submit", "iconPos", "left", "label", ">>", 1, "paginator-btn", 3, "click"], ["class", "blog", 4, "ngFor", "ngForOf"], [3, "value"], [3, "click"], [1, "blog"], [1, "view-heading"], [1, "view-heading-controls"], [1, "view-heading-controls-2"], ["mat-mini-fab", "", "color", "accent", 1, "toggleMenu"], ["id", "scrolling-container"], ["id", "quill-container"], ["name", "blogtext", 1, "quill-editor", 3, "ngModel", "readonly", "ngModelChange"]], template: function ViewBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ViewBlogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_7_listener($event) { return ctx.handleSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_10_listener($event) { return ctx.handleClear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_13_listener() { return ctx.handleRefresh(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_16_listener($event) { return ctx.onSortGlobal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ViewBlogComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.selected = $event; })("selectionChange", function ViewBlogComponent_Template_mat_select_selectionChange_22_listener($event) { return ctx.onCategoryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ViewBlogComponent_mat_option_23_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ViewBlogComponent_Template_mat_select_ngModelChange_27_listener($event) { return ctx.selectedTagValue = $event; })("selectionChange", function ViewBlogComponent_Template_mat_select_selectionChange_27_listener($event) { return ctx.handleTagChange($event); })("openedChange", function ViewBlogComponent_Template_mat_select_openedChange_27_listener($event) { return ctx.handleTagOpenChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ViewBlogComponent_mat_option_28_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-autocomplete", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function ViewBlogComponent_Template_mat_autocomplete_optionSelected_31_listener($event) { return ctx.handleAutoCompleteSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ViewBlogComponent_mat_option_33_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ViewBlogComponent_span_41_Template, 2, 2, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ViewBlogComponent_span_42_Template, 2, 2, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Items per page \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ViewBlogComponent_Template_input_ngModelChange_46_listener($event) { return ctx.pageSize = $event; })("change", function ViewBlogComponent_Template_input_change_46_listener($event) { return ctx.handlePageNumberChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_49_listener($event) { return ctx.handleFirst($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_50_listener() { return ctx.handlePrevV2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ViewBlogComponent_a_52_Template, 2, 1, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ViewBlogComponent_a_54_Template, 2, 1, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ViewBlogComponent_Template_input_ngModelChange_56_listener($event) { return ctx.currentPage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, ViewBlogComponent_a_58_Template, 2, 1, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ViewBlogComponent_a_60_Template, 2, 1, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_62_listener() { return ctx.handleNextV2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewBlogComponent_Template_button_click_63_listener($event) { return ctx.handleLast($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, ViewBlogComponent_app_spinner_65_Template, 1, 0, "app-spinner", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ViewBlogComponent_div_66_Template, 30, 9, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedTagValue)("formControl", ctx.tagsFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tagsArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.tagsControl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 20, ctx.filteredTagsOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Results for:", ctx.searchInput, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filtered);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.filtered);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPage1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPage2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPage3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPage4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.blogsPager);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent, primeng_editor__WEBPACK_IMPORTED_MODULE_19__.Editor, primeng_api__WEBPACK_IMPORTED_MODULE_20__.Header], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: [".ql-toolbar.ql-snow {\n    padding: 0px;\n    \n}\n\n  .ql-container.ql-snow {\n    \n    \n}\n\n\n\n#quill-container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100%;\n    padding: 50px;\n  }\n\n#quill-container[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n    font-size: 18px;\n    overflow-y: visible; \n  }\n\n\n\n#scrolling-container[_ngcontent-%COMP%] {\n    height: 100%;\n    min-height: 100%;\n    overflow-y: auto;\n}\n\n.quill-editor[_ngcontent-%COMP%]{\n  height: 200px;\n}\n\n.view-heading[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: space-between;\n  \n  padding: 5px;\n}\n\n.view-heading-controls[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.view-heading-controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.blog[_ngcontent-%COMP%]{\n  border: 1px solid black;\n  margin-bottom: 20px;\n  padding: 5px;\n\n}\n\n.master-container[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.form[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  \n}\n\n.control-btn-container[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  padding-bottom: 6px;\n  width: 100%;\n\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 25px;\n\n}\n\n.big-icons[_ngcontent-%COMP%]{\n  font-size: 35px;\n}\n\n.big-icons[_ngcontent-%COMP%]:hover{\n  font-size: 30px;\n  padding: 5px;\n  margin: 1px;\n  border: 2px solid #05386B;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.paginator-container[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n}\n\n.paginator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n    align-items: center;\n\n}\n\n.paginator-controls[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 10px;\n\n}\n\n.paginator-btn[_ngcontent-%COMP%]{\n  background-color: #ff4081;\n  color: white;\n  border-color: #ff4081;\n  margin-right: 1px;\n  font-size: 20px;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #05386B;\n  border-bottom: 2px solid black;\n  \n  margin: 5px;\n  \n}\n\n.margin[_ngcontent-%COMP%]{\n  margin: 5px;\n\n}\n\n.items-perpage[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n}\n\n.paginatorinput[_ngcontent-%COMP%]{\n  font-size: 20px;\n  font-weight: 600;\n  color: #ff4081;\n  width: 40px;\n  padding: 6px;\n}\n\n.example-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\n  margin-right: 10px;\n}\n\n.example-full-width[_ngcontent-%COMP%]{\n  width: 25%;\n}\n\n@media screen and (max-width: 414px) {\n  .master-container[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n  }\n    \n\n  .form[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n\n\n  }\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .paginator-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  \n  }\n  .paginator[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    margin-left: 20px;\n    margin-bottom: 20px;\n  }\n  .paginator-controls[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    margin-top: 2ppx;\n    margin-left: 20px;\n    margin-bottom: 20px;\n  \n  }\n  .view-heading[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  \n  }\n  .view-heading-controls[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n}\n.view-heading-controls-2[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n  #quill-container[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n\n  .quill-editor[_ngcontent-%COMP%]{\n    height: auto;\n  }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBR0EsNkJBQTZCOztBQUM3QjtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFRix3Q0FBd0M7O0FBQ3hDO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVzs7QUFFYjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2Qjs7QUFFL0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtJQUNyQixtQkFBbUI7O0FBRXZCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7OztFQUdBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjs7O0VBR3hCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCOztFQUVoQztFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1COztFQUVyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7O0VBRWhDO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7RUFFRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7O0FBR0YiLCJmaWxlIjoidmlldy1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnFsLXRvb2xiYXIucWwtc25vdyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbn1cblxuOjpuZy1kZWVwIC5xbC1jb250YWluZXIucWwtc25vdyB7XG4gICAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7ICovXG4gICAgLyogaGVpZ2h0OiAxMGVtOyAgKi9cbn1cblxuXG4vKiBUZWxsIFF1aWxsIG5vdCB0byBzY3JvbGwgKi9cbiNxdWlsbC1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuI3F1aWxsLWNvbnRhaW5lciAucWwtZWRpdG9yIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTsgXG4gIH1cbiAgXG4vKiBTcGVjaWZ5IG91ciBvd24gc2Nyb2xsaW5nIGNvbnRhaW5lciAqL1xuI3Njcm9sbGluZy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5xdWlsbC1lZGl0b3J7XG4gIGhlaWdodDogMjAwcHg7XG59XG4udmlldy1oZWFkaW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICBwYWRkaW5nOiA1cHg7XG59XG4udmlldy1oZWFkaW5nLWNvbnRyb2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpZXctaGVhZGluZy1jb250cm9scyA+ICoge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmJsb2d7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG5cbn1cblxuLm1hc3Rlci1jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3Jte1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgLyogbWF4LXdpZHRoOiAzMTBweDsgKi9cbn1cbi5jb250cm9sLWJ0bi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICB3aWR0aDogMTAwJTtcblxufVxubWF0LWljb24ge1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcblxufVxuLmJpZy1pY29uc3tcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLmJpZy1pY29uczpob3ZlcntcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUzODZCO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG5cbi5wYWdpbmF0b3ItY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxufVxuLnBhZ2luYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5wYWdpbmF0b3ItY29udHJvbHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG4ucGFnaW5hdG9yLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICNmZjQwODE7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDUzODZCO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xuICBtYXJnaW46IDVweDtcbiAgXG59XG5cbi5tYXJnaW57XG4gIG1hcmdpbjogNXB4O1xuXG59XG5cbi5pdGVtcy1wZXJwYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2luYXRvcmlucHV0e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmY0MDgxO1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogNnB4O1xufVxuXG4uZXhhbXBsZS1mb3JtID4gKntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmV4YW1wbGUtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAubWFzdGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgICBcblxuICAuZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblxuICB9XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5wYWdpbmF0b3ItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIFxuICB9XG4gIC5wYWdpbmF0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5wYWdpbmF0b3ItY29udHJvbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAycHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIFxuICB9XG4gIC52aWV3LWhlYWRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgXG4gIH1cbiAgLnZpZXctaGVhZGluZy1jb250cm9sc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4udmlldy1oZWFkaW5nLWNvbnRyb2xzLTJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4gICNxdWlsbC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5xdWlsbC1lZGl0b3J7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cblxufSJdfQ== */"] });


/***/ }),

/***/ 64188:
/*!***********************************************************!*\
  !*** ./src/app/blog/view-single/view-single.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSingleComponent": function() { return /* binding */ ViewSingleComponent; }
/* harmony export */ });
/* harmony import */ var _model_comment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/comment.model */ 89836);
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/confirm-dialog/confirm-dialog.component */ 2362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 46976);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 82296);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 48266);













function ViewSingleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewSingleComponent_div_7_Template_span_click_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const comment_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.updateComment($event, comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewSingleComponent_div_7_Template_span_click_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const comment_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.openDialog($event, comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ViewSingleComponent_div_7_Template_input_ngModelChange_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const comment_r2 = restoredCtx.$implicit; return comment_r2.value.comment_heading = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p-editor", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ViewSingleComponent_div_7_Template_p_editor_ngModelChange_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const comment_r2 = restoredCtx.$implicit; return comment_r2.value.comment_text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", comment_r2.value.comment_heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", comment_r2.value.comment_text)("readonly", false);
} }
const _c0 = function () { return { "height": "220px" }; };
class ViewSingleComponent {
    constructor(dataservice, authService, sharedService, dialog) {
        this.dataservice = dataservice;
        this.authService = authService;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.comments = [];
    }
    ngOnInit() {
        this.dataservice.blogSubject.subscribe(item => {
            //console.log("Received:--------"+ new Date())
            //console.log( item.value.blogtext);
            this.currentBlogItem = item;
            this.loadPostAndComments(item);
        });
    }
    loadPostAndComments(item) {
        this.blogtext = item.value.blogtext;
        this.heading = item.value.heading;
        this.tags = item.value.tags;
        this.category = item.value.category;
        this.key = item.key;
        this.comments.splice(0);
        //console.log("Try to fetch comments with key:" + this.key)
        this.dataservice.getComments(this.key.trim()).subscribe(res => {
            //console.log(res);
            if (res) {
                for (let key of Object.keys(res)) {
                    this.comments.push({
                        key: key,
                        value: res[key]
                    });
                }
            }
        }, err => {
            console.log(err);
        });
    }
    onSubmit(form) {
        //console.log(form.value);
        this.dataservice
            .addComment(this.key, new _model_comment_model__WEBPACK_IMPORTED_MODULE_0__.BlogComment(form.value.commentheading, form.value.commenttext))
            .subscribe(res => {
            //console.log(res)
            this.sharedService.openSnackBar('New Comment saved successfully', 'Yayyy');
            this.loadPostAndComments(this.currentBlogItem);
            form.reset();
        }, err => { console.log(err); });
    }
    updateComment($event, comment) {
        this.dataservice
            .updateComment(this.key, comment.key, comment.value)
            .subscribe(res => {
            this.sharedService.openSnackBar('Comment updated successfully', 'Yayyy');
        }, err => { console.log(err); });
    }
    deleteComment($event, comment) {
        this.dataservice
            .deleteComment(this.key, comment.key)
            .subscribe(res => {
            console.log(res);
            this.sharedService.openSnackBar('Comment Deleted successfully', 'Yayyy');
            this.loadPostAndComments(this.currentBlogItem);
        }, err => { console.log(err); });
    }
    openDialog(event, comment) {
        const dialogRef = this.dialog.open(_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            width: '250px',
            data: {
                title: "Confirm",
                message: "Do you wanna delete the item?"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result == true) {
                this.deleteComment(event, comment);
            }
        });
    }
}
ViewSingleComponent.ɵfac = function ViewSingleComponent_Factory(t) { return new (t || ViewSingleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
ViewSingleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ViewSingleComponent, selectors: [["app-view-single"]], decls: 21, vars: 8, consts: [[1, ""], ["id", "quill-container"], ["name", "blogtext", 3, "ngModel", "readonly", "ngModelChange"], ["class", "ui-g ui-fluid comments", 4, "ngFor", "ngForOf"], [1, "ui-g", "ui-fluid"], [1, "ui-g-12", "ui-md-12"], [3, "ngSubmit"], ["blogForm", "ngForm"], [1, "ui-inputgroup", 2, "margin-bottom", "10px"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-pencil", 2, "line-height", "1.25"], ["type", "text", "pInputText", "", "placeholder", "commentheading", "name", "commentheading", "ngModel", ""], ["name", "commenttext", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "submit", "icon", "pi pi-check", "iconPos", "left", "label", "Save Comment", 1, "lightdarkcolor", "customcolordark"], [1, "ui-g", "ui-fluid", "comments"], [1, "updateButtonsDiv"], [1, "material-icons", 3, "click"], [1, "pi", "pi-user", 2, "line-height", "1.25"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["name", "commenttext", 3, "ngModel", "readonly", "ngModelChange"]], template: function ViewSingleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ViewSingleComponent_Template_p_editor_ngModelChange_4_listener($event) { return ctx.blogtext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ViewSingleComponent_div_7_Template, 14, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ViewSingleComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Add new comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p-editor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ViewSingleComponent_Template_p_editor_ngModelChange_18_listener($event) { return ctx.commenttext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.blogtext)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.commenttext);
    } }, directives: [primeng_editor__WEBPACK_IMPORTED_MODULE_7__.Editor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_9__.Header, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective], styles: [".updateButtonsDiv[_ngcontent-%COMP%]{\n    width: 100%;\n    display: flex;\n    flex-direction: rrow;\n    text-align: right;\n    justify-content: flex-end;\n\n}\n\n.comments[_ngcontent-%COMP%]{\n    border-top: 2px solid rgb(228, 230, 232);\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctc2luZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InZpZXctc2luZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlQnV0dG9uc0RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBycm93O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbn1cblxuLmNvbW1lbnRze1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjI4LCAyMzAsIDIzMik7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 19237:
/*!*****************************************************************!*\
  !*** ./src/app/common/fullpage-view/fullpage-view.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullpageViewComponent": function() { return /* binding */ FullpageViewComponent; }
/* harmony export */ });
/* harmony import */ var src_app_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/confirm-dialog/confirm-dialog.component */ 2362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 46976);













function FullpageViewComponent_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.blog.blogtext, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function FullpageViewComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-editor", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FullpageViewComponent_div_0_div_31_Template_p_editor_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r3.blog.blogtext = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.blog.blogtext)("readonly", true);
} }
function FullpageViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FullpageViewComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.handlClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FullpageViewComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.handlClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close_fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FullpageViewComponent_div_0_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.openDialog($event, ctx_r8.blog.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FullpageViewComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.editBlog(ctx_r9.blog.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FullpageViewComponent_div_0_Template_mat_slide_toggle_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.handleToggleChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Toggle View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, FullpageViewComponent_div_0_div_30_Template, 1, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, FullpageViewComponent_div_0_div_31_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.blog.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Category: ", ctx_r0.blog.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Tags: ", ctx_r0.blog.tags, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 6, ctx_r0.blog.datecreated), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.toggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.toggle);
} }
class FullpageViewComponent {
    constructor(dataService, router, sharedService, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.show = -1;
        this.toggle = false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // console.log(`changes`, changes)
    }
    handlClose() {
        this.show = -1;
    }
    handleToggleChange() {
        this.toggle = !this.toggle;
    }
    openDialog(event, id) {
        const dialogRef = this.dialog.open(src_app_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            width: '250px',
            data: {
                title: "Confirm",
                message: "Do you wanna delete the item?"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result == true) {
                this.onDeletePost();
            }
        });
    }
    onDeletePost() {
        this.dataService.deletePost(this.blog.id).subscribe(msg => {
            this.sharedService.openSnackBar('Post Deleted Successfully', 'Tadaaa');
        }, err => {
            console.log(err);
            this.sharedService.openSnackBar('Post Delete failed', 'Ding...');
        });
    }
    editBlog(key) {
        this.router.navigate(['edit'], { queryParams: { blogId: key }, queryParamsHandling: 'merge' });
    }
}
FullpageViewComponent.ɵfac = function FullpageViewComponent_Factory(t) { return new (t || FullpageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
FullpageViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FullpageViewComponent, selectors: [["app-fullpage-view"]], inputs: { show: "show", blog: "blog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "full-view", 3, "click"], [1, "master-container"], ["mat-mini-fab", "", "color", "accent", 1, "close-btn", 3, "click"], [1, "blog-header"], [1, "title"], [1, "title-right"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "extra"], [1, "info"], [3, "change"], ["class", "toggle-parent", 3, "innerHTML", 4, "ngIf"], ["class", "toggle-parent", 4, "ngIf"], [1, "toggle-parent", 3, "innerHTML"], [1, "toggle-parent"], ["id", "scrolling-container"], ["id", "quill-container"], ["name", "blogtext", 3, "ngModel", "readonly", "ngModelChange"]], template: function FullpageViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FullpageViewComponent_div_0_Template, 32, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show > -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, primeng_editor__WEBPACK_IMPORTED_MODULE_10__.Editor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_12__.Header], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".full-view[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 60px;\n    left: 0px;\n    background-color: darkgrey;\n    opacity: 0.5;\n    z-index: 1;\n}\n\n.master-container[_ngcontent-%COMP%]{\n    width: 70%;\n    \n    background-color: white;\n    position: absolute;\n    top: 25%;\n    left: 15%;\n    border: 1px solid red;\n    border-radius: 10px;\n    z-index: 2;\n    overflow:scroll;\n    padding: 10px;\n    \n}\n\n.close-btn[_ngcontent-%COMP%]{\n   \n    \n    \n    float: right;\n    color: white;\n    \n\n}\n\n.close-btn[_ngcontent-%COMP%]:hover{\n    font-weight: 700;\n    font-size: 40px;\n    color: blue;\n}\n\n.blog-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 1200px;\n    flex-direction: column;\n    margin-left: 10px;\n  }\n\n.blog-search[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n    align-items: baseline;\n    justify-content: space-between;\n  }\n\n.blog-group[_ngcontent-%COMP%] {\n    border: 1px solid rgb(231 237 243);\n    padding: 10px;\n    margin: 10px;\n  }\n\n.blog[_ngcontent-%COMP%] {\n    border: 1px solid rgb(226 195 219);\n    padding: 10px;\n    margin: 10px;\n  }\n\n.blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-break: strict;\n    white-space: pre-wrap;\n  }\n\n.blog-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-bottom: 1px solid #ffc6f0;\n  }\n\n.blog-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 5px;\n    padding: 5px;\n  }\n\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-size: 16px;\n  }\n\n.title-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n\n@media (max-width: 414px) {\n    .full-view[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        background-color: darkgrey;\n        opacity: 0.5;\n        z-index: 1;\n    }\n    \n    .master-container[_ngcontent-%COMP%]{\n        width: 99%;\n        \n        background-color: white;\n        position: absolute;\n        top: 60%;\n        left: 1%;\n        border: 1px solid red;\n        border-radius: 10px;\n        z-index: 2;\n        overflow:scroll;\n        padding: 5px;\n        \n    }\n    .title-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n        margin-right: 2px;\n      }\n    \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxwYWdlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCOzs7O21CQUllO0lBQ2YsWUFBWTtJQUNaLFlBQVk7OztBQUdoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0VBQ2xDOztBQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0FBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUlGO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixRQUFRO1FBQ1IsU0FBUztRQUNULDBCQUEwQjtRQUMxQixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTs7UUFFVix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixRQUFRO1FBQ1IscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxpQkFBaUI7TUFDbkI7OztBQUdOIiwiZmlsZSI6ImZ1bGxwYWdlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXZpZXd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubWFzdGVyLWNvbnRhaW5lcntcbiAgICB3aWR0aDogNzAlO1xuICAgIC8qIGhlaWdodDogODAlOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1JTtcbiAgICBsZWZ0OiAxNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBcbn1cblxuLmNsb3NlLWJ0bntcbiAgIFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7ICovXG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcblxufVxuLmNsb3NlLWJ0bjpob3ZlcntcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuXG4uYmxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAuYmxvZy1zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC5ibG9nLWdyb3VwIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMxIDIzNyAyNDMpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5ibG9nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI2IDE5NSAyMTkpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5ibG9nIHAge1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbiAgLmJsb2ctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZjNmYwO1xuICB9XG4gIC5ibG9nLWhlYWRlciAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmJsb2ctaGVhZGVyIC5leHRyYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLmJsb2ctaGVhZGVyIC5leHRyYSAuaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmJsb2ctaGVhZGVyIC5leHRyYSAuaW5mbyA+ICoge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnRpdGxlLXJpZ2h0ID4gKiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5mdWxsLXZpZXd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgXG4gICAgLm1hc3Rlci1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgbGVmdDogMSU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAudGl0bGUtcmlnaHQgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICB9XG4gICAgXG4gICAgXG59XG4iXX0= */"] });


/***/ }),

/***/ 62140:
/*!*************************************!*\
  !*** ./src/app/dao/data.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var _model_blog_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/blog.model */ 80088);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 50384);





class DataService {
    //blogSubject  = new Subject<{key: string, value: Blog}>();
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.blogSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            key: "gsdgf",
            value: new _model_blog_model__WEBPACK_IMPORTED_MODULE_0__.Blog("", "", new Date(), new Date(), [""], "", []),
        });
    }
    ngOnInit() { }
    getUserEmail() {
        return this.authService.user.value.email
            .replace(".", "-")
            .replace("@", "-");
    }
    saveBlog(blog) {
        //return this.http.post('https://masha-3f6b0.firebaseio.com/posts.json',blog);
        if (this.getUserEmail()) {
            return this.http.post(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}.json`, blog);
        }
        else {
            console.log("retun nothing");
        }
    }
    getBlogs() {
        return this.http.get(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}.json`);
    }
    getBlogsRecent(blogLimit) {
        // https://masha-3f6b0.firebaseio.com/posts/lokeshinspire-gmail-com.json?auth=<token>&orderBy="datecreated"&equalTo="2021-09-30T19:08:19.161Z"&=
        //https://firebase.google.com/docs/database/rest/retrieve-data
        const date = new Date();
        const weekbefore = date.setDate(date.getDate() - 7);
        return this.http.get(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}.json?&orderBy="datecreated"&startAt="${date.toISOString()}"&limitToLast=${blogLimit}`);
    }
    updateBlog(key, blog) {
        // curl -X PUT -d '{
        //     "alanisawesome": {
        //       "name": "Alan Turing",
        //       "birthday": "June 23, 1912"
        //     }
        //   }' 'https://docs-examples.firebaseio.com/rest/saving-data/fireblog/users.json'
        return this.http.put(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}/${key}.json`, blog);
    }
    addComment(key, comment) {
        return this.http.post(`https://masha-3f6b0.firebaseio.com/comments/${this.getUserEmail()}/${key}.json`, comment);
    }
    getComments(key) {
        //console.log(`https://masha-3f6b0.firebaseio.com/comments/${this.getUserEmail()}}/${key}.json`)
        return this.http.get(`https://masha-3f6b0.firebaseio.com/comments/${this.getUserEmail()}/${key}.json`);
    }
    updateComment(postkey, commentkey, comment) {
        // curl -X PUT -d '{
        //     "alanisawesome": {
        //       "name": "Alan Turing",
        //       "birthday": "June 23, 1912"
        //     }
        //   }' 'https://docs-examples.firebaseio.com/rest/saving-data/fireblog/users.json'
        return this.http.put(`https://masha-3f6b0.firebaseio.com/comments/${this.getUserEmail()}/${postkey}/${commentkey}.json`, comment);
    }
    deletePost(key) {
        console.log(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}/${key}.json`);
        return this.http.delete(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}/${key}.json`);
    }
    deleteComment(postkey, commentkey) {
        return this.http.delete(`https://masha-3f6b0.firebaseio.com/comments/${this.getUserEmail()}/${postkey}/${commentkey}.json`);
    }
    getBlog(postkey) {
        return this.http.get(`https://masha-3f6b0.firebaseio.com/posts/${this.getUserEmail()}/${postkey}.json`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 2362:
/*!********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": function() { return /* binding */ ConfirmDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 70781);





class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 12, vars: 2, consts: [[1, "card-container"], [1, "example-card"], ["display-2", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_10_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n    width: 200px;\n    background-color: #EDF5E1;\n  }\n  \n\n.card-container[_ngcontent-%COMP%]{\n    width: 300px;\n    \n\n}\n  \n\n.mat-dialog-container[_ngcontent-%COMP%]{\n    width: 800px;\n    background-color: #EDF5E1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7O0FBR0Y7SUFDSSxZQUFZO0lBQ1osK0JBQStCOztBQUVuQzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGNUUxO1xuICB9XG4gIFxuXG4uY2FyZC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNFREY1RTE7ICovXG5cbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVye1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGNUUxO1xufVxuICAiXX0= */"] });


/***/ }),

/***/ 10970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row", "bg-light", "text-center"], [1, "col-sm-12"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All rights reserved 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 93482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 50384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Regular View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Timeline View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Scroll View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Session Timeout in Min: ", ctx_r6.expiry, " ");
} }
const _c0 = function (a0) { return { "hideme": a0 }; };
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.authenticated = false;
        this.toggleMenu = true;
    }
    ngOnInit() {
        this.userSubscription = this.authService.user.subscribe(user => {
            this.authenticated = !!user;
        });
        setInterval(this.timeRemaining.bind(this), 1000);
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    handleMenuClick() {
        console.log(`toggleMenu`, this.toggleMenu);
        this.toggleMenu = !this.toggleMenu;
    }
    timeRemaining() {
        if (localStorage.getItem("userData")) {
            const expirationDate = new Date(JSON.parse(localStorage.getItem("userData"))._tokenExpirationDate);
            const currentDate = new Date();
            // console.log('currentDate',expirationDate)
            // console.log('expirationDate',expirationDate)
            this.expiry = this.getExpiryTime(expirationDate.getTime() - currentDate.getTime());
        }
    }
    getExpiryTime(ms) {
        const min = ms / 60000;
        const sec = (ms % 60000) / 1000;
        return `${min.toFixed(0)}:${sec.toFixed(0)}`;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "justify-content-between"], ["href", "#", "routerLink", "/home", 1, "navbar-brand", "customcolordark"], ["mat-mini-fab", "", "color", "accent", 1, "toggleMenu", 3, "click"], ["id", "navbarNav", 1, "row", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item", "active"], ["class", "nav-link customcolordark", "href", "#", "routerLink", "/home", 4, "ngIf"], [1, "nav-item"], ["class", "nav-link customcolordark", "href", "#", "routerLink", "/blogs", 4, "ngIf"], ["class", "nav-link customcolordark", "href", "#", "routerLink", "/auth", 4, "ngIf"], ["class", "nav-link customcolordark", "href", "#", "routerLink", "/timelineview", 4, "ngIf"], ["class", "nav-link customcolordark", "href", "#", "routerLink", "/timelineview3", 4, "ngIf"], [1, "nav", "navbar-nav", "ml-auto"], ["class", "nav-link customcolordark", "href", "#", "routerLink", "/Logout", 3, "click", 4, "ngIf"], ["class", "session-expiry", 4, "ngIf"], ["href", "#", "routerLink", "/home", 1, "nav-link", "customcolordark"], [1, "sr-only"], ["href", "#", "routerLink", "/blogs", 1, "nav-link", "customcolordark"], ["href", "#", "routerLink", "/auth", 1, "nav-link", "customcolordark"], ["href", "#", "routerLink", "/timelineview", 1, "nav-link", "customcolordark"], ["href", "#", "routerLink", "/timelineview3", 1, "nav-link", "customcolordark"], ["href", "#", "routerLink", "/Logout", 1, "nav-link", "customcolordark", 3, "click"], [1, "session-expiry"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Masha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.handleMenuClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 4, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_a_11_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_a_13_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HeaderComponent_a_17_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HeaderComponent_div_21_Template, 3, 1, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.toggleMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".navbar[_ngcontent-%COMP%]{\n    border-bottom: 2px solid #ffc6f0;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: #fff3fc;\n    z-index:1; \n}\n.hideme[_ngcontent-%COMP%]{\n   display: flex;\n}\n.toggleMenu[_ngcontent-%COMP%]{\n    display: none;\n}\n.session-expiry[_ngcontent-%COMP%]{\n    \n    display: block;\n    width: 190px;\n    align-items: flex-end;\n    position: absolute;\n    right: 1px;\n    top: 40px;\n    z-index: 2;\n    \n}\n.session-expiry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0px;\n    font-size: small;\n    margin: 0px;\n    font-style: italic;\n}\n@media( max-width: 414px) {\n    .navbar[_ngcontent-%COMP%] {\n        display:flex;\n        flex-direction: column;\n        align-items:flex-start;\n        padding-left: 40px;\n        position: relative;\n    }\n\n    #navbarNav[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .hideme[_ngcontent-%COMP%]{\n        display: none;\n\n    }\n\n\n    .toggleMenu[_ngcontent-%COMP%]{\n        display: block;\n    }\n\n    .row[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .navbar-nav[_ngcontent-%COMP%]{\n                margin: 0;\n\n    }\n    .timeline-margin[_ngcontent-%COMP%]{\n        margin-top: 10px;\n    }\n    .ml-auto[_ngcontent-%COMP%]{\n        margin-left: 0 !important;\n    }\n    .session-expiry[_ngcontent-%COMP%]{\n      \n      \n        top: 75px;\n      \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsU0FBUztBQUNiO0FBQ0E7R0FDRyxhQUFhO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhOztJQUVqQjs7O0lBR0E7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7Z0JBQ1ksU0FBUzs7SUFFckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7OztRQUdJLFNBQVM7O0lBRWI7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmM2ZjA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2ZjO1xuICAgIHotaW5kZXg6MTsgXG59XG4uaGlkZW1le1xuICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvZ2dsZU1lbnV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlc3Npb24tZXhwaXJ5e1xuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXB4O1xuICAgIHRvcDogNDBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZmM7ICovXG59XG4uc2Vzc2lvbi1leHBpcnkgcCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5cbkBtZWRpYSggbWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNuYXZiYXJOYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5oaWRlbWV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICB9XG5cblxuICAgIC50b2dnbGVNZW51e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAubmF2YmFyLW5hdntcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICB9XG4gICAgLnRpbWVsaW5lLW1hcmdpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLm1sLWF1dG97XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zZXNzaW9uLWV4cGlyeXtcbiAgICAgIFxuICAgICAgXG4gICAgICAgIHRvcDogNzVweDtcbiAgICAgIFxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dao/data.service */ 62140);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner/spinner.component */ 64283);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);








function HomeComponent_app_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-spinner");
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.editBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.userEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Blog changes lastweek:", ctx_r1.blogs.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.randomBlog.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Tags: ", ctx_r1.randomBlog.tags, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.randomBlog.blogtext, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class HomeComponent {
    constructor(router, dataService, authService) {
        this.router = router;
        this.dataService = dataService;
        this.authService = authService;
        this.loading = false;
        this.blogs = [];
        this.userEmail = '';
    }
    ngOnInit() {
        this.loading = true;
        this.authService.getUserEmail().subscribe(email => {
            this.userEmail += email;
        });
        this.dataService.getBlogsRecent(2).subscribe(res => {
            for (let key of Object.keys(res)) {
                this.blogs.push({
                    id: key,
                    value: res[key]
                });
            }
            if (this.blogs.length > 0) {
                let randomInt = this.getRandomInt(this.blogs.length);
                this.randomBlog = this.blogs[randomInt].value;
                this.randomId = this.blogs[randomInt].id;
            }
            this.loading = false;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    ngAfterViewInit() {
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    editBlog() {
        this.router.navigate(['edit'], { queryParams: { blogId: this.randomId }, queryParamsHandling: 'merge' });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "home-container"], [4, "ngIf"], [1, "grid"], [1, "heading"], [1, "formatcode"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [3, "innerHTML"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HomeComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 16, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: [".home-container[_ngcontent-%COMP%] {\n    margin: 5px;\n    padding: 1px;\n    margin-top: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n\n}\n\n.grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr;\n    \n    margin: 5px;\n    \n}\n\n.heading[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 5px;\n    padding: 5px;\n}\n\n.formatcode[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    line-break: strict;\n    padding: 5px;\n    margin: 30px;\n    overflow: scroll;\n    border: 2px solid #ffc6f0 ;\n}\n\n@media screen and ( max-width: 400px)  {\n    .container[_ngcontent-%COMP%] {\n        margin-top: 0px;\n        height: 85%;\n        display: block;\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixxSUFBcUk7O0FBRXpJOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjs7SUFFMUIsV0FBVztJQUNYLDJJQUEySTtBQUMvSTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcblxufVxuXG4uZ3JpZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIFxuICAgIG1hcmdpbjogNXB4O1xuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7ICovXG59XG5cbi5oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4uZm9ybWF0Y29kZXtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgbGluZS1icmVhazogc3RyaWN0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZjNmYwIDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDQwMHB4KSAge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIGhlaWdodDogODUlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 28417);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
























class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatNativeDateModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule] }); })();


/***/ }),

/***/ 80088:
/*!*************************************!*\
  !*** ./src/app/model/blog.model.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blog": function() { return /* binding */ Blog; }
/* harmony export */ });
class Blog {
    constructor(heading, blogtext, datecreated, datemodified, tags, category, comments) {
        this.heading = heading;
        this.blogtext = blogtext;
        this.datecreated = datecreated;
        this.datemodified = datemodified;
        this.tags = tags;
        this.category = category;
        this.comments = comments;
    }
}


/***/ }),

/***/ 89836:
/*!****************************************!*\
  !*** ./src/app/model/comment.model.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComment": function() { return /* binding */ BlogComment; }
/* harmony export */ });
class BlogComment {
    constructor(comment_heading, comment_text) {
        this.comment_heading = comment_heading;
        this.comment_text = comment_text;
    }
}


/***/ }),

/***/ 77420:
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": function() { return /* binding */ SharedService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);



class SharedService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.tabChangeIndex = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.blogAddedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.blogReloadSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar)); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 64283:
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": function() { return /* binding */ SpinnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%] {\n    color: #05386B;\n    font-size: 10px;\n    margin: 50px auto;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    -webkit-animation: load4 1.3s infinite linear;\n    animation: load4 1.3s infinite linear;\n    transform: translateZ(0);\n  }\n  @-webkit-keyframes load4 {\n    0%,\n    100% {\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n  }\n  @keyframes load4 {\n    0%,\n    100% {\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsNkNBQTZDO0lBQzdDLHFDQUFxQztJQUdyQyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFOztNQUVFLHFJQUFxSTtJQUN2STtJQUNBO01BQ0UsbUlBQW1JO0lBQ3JJO0lBQ0E7TUFDRSxxSUFBcUk7SUFDdkk7SUFDQTtNQUNFLHlJQUF5STtJQUMzSTtJQUNBO01BQ0UsdUlBQXVJO0lBQ3pJO0lBQ0E7TUFDRSxtSUFBbUk7SUFDckk7SUFDQTtNQUNFLHlJQUF5STtJQUMzSTtJQUNBO01BQ0Usb0lBQW9JO0lBQ3RJO0VBQ0Y7RUFDQTtJQUNFOztNQUVFLHFJQUFxSTtJQUN2STtJQUNBO01BQ0UsbUlBQW1JO0lBQ3JJO0lBQ0E7TUFDRSxxSUFBcUk7SUFDdkk7SUFDQTtNQUNFLHlJQUF5STtJQUMzSTtJQUNBO01BQ0UsdUlBQXVJO0lBQ3pJO0lBQ0E7TUFDRSxtSUFBbUk7SUFDckk7SUFDQTtNQUNFLHlJQUF5STtJQUMzSTtJQUNBO01BQ0Usb0lBQW9JO0lBQ3RJO0VBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XG4gICAgY29sb3I6ICMwNTM4NkI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkNCB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICAgIH1cbiAgICAxMi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDM3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICA2Mi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICAgIH1cbiAgICA4Ny41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbG9hZDQge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcbiAgICB9XG4gICAgMTIuNSUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICAzNy41JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNjIuNSUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcbiAgICB9XG4gICAgODcuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICAgIH1cbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ 96272:
/*!*********************************************************************!*\
  !*** ./src/app/timelineview/add-blog-new/add-blog-new.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBlogNewComponent": function() { return /* binding */ AddBlogNewComponent; }
/* harmony export */ });
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-editor */ 35372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ckeditor4-angular */ 22366);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);










const _c0 = ["blogForm"];
class AddBlogNewComponent {
    constructor(route, service, sharedService) {
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.heading = '';
        this.category = '';
        this.tags = '';
        this.toolbar = [
            ["bold", "italic"],
            ["underline", "strike"],
            ["code", "blockquote"],
            ["ordered_list", "bullet_list"],
            [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
            ["link", "image"],
            ["text_color", "background_color"],
            ["align_left", "align_center", "align_right", "align_justify"]
        ];
    }
    ngOnInit() {
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_2__.Editor();
    }
    onSubmit(form) {
        if (form.value.heading.trim() == '' || form.value.category.trim() == '' || form.value.tags.trim() == '') {
            this.sharedService.openSnackBar("Please enter mandatory fields", "oops");
            return;
        }
        // const html = toHTML(this.blogtext, schema);
        this.loading = true;
        this.service.saveBlog({
            heading: form.value.heading.trim(),
            blogtext: form.value.blogtext,
            category: form.value.category.trim(),
            tags: form.value.tags.trim(),
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
        }).subscribe(res => {
            console.log(res);
            this.loading = false;
            this.sharedService.blogAddedSubject.next(true);
            this.sharedService.openSnackBar("Blog Added successfully", "Yay");
            form.reset();
            this.blogtext = '';
        }, err => {
            console.log(err);
            this.loading = false;
            this.sharedService.openSnackBar("Blog Add failed", "Naa");
        });
    }
    clearForm() {
        this.blogForm.clear();
        this.blogtext = '';
    }
    ngOnDestroy() {
        this.editor.destroy();
    }
    onEditorReady() {
    }
}
AddBlogNewComponent.ɵfac = function AddBlogNewComponent_Factory(t) { return new (t || AddBlogNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
AddBlogNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddBlogNewComponent, selectors: [["app-add-blog-new"]], viewQuery: function AddBlogNewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.blogForm = _t.first);
    } }, inputs: { blogId: "blogId" }, decls: 23, vars: 5, consts: [[1, "blog-container"], [3, "ngSubmit"], ["blogForm", "ngForm"], ["appearance", "fill", 1, "matinput-container"], ["matInput", "", "name", "heading", "required", "", 3, "ngModel", "ngModelChange"], ["name", "blogtext", "editorUrl", "/assets/ckeditor/ckeditor.js", 3, "ngModel", "ngModelChange", "ready"], ["type", "text", "matInput", "", "placeholder", "category", "name", "category", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "tags", "name", "tags", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function AddBlogNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddBlogNewComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Blog Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddBlogNewComponent_Template_input_ngModelChange_9_listener($event) { return ctx.heading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ckeditor", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddBlogNewComponent_Template_ckeditor_ngModelChange_11_listener($event) { return ctx.blogtext = $event; })("ready", function AddBlogNewComponent_Template_ckeditor_ready_11_listener() { return ctx.onEditorReady(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Blog Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddBlogNewComponent_Template_input_ngModelChange_15_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddBlogNewComponent_Template_input_ngModelChange_19_listener($event) { return ctx.tags = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Add Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.blogId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.blogtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__.CKEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".blog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  padding: 10px;\n  border: 2px solid #ffc6f0;\n  padding: 50px;\n  background-color: #fff6fd;\n  border-radius: 20px;\n  margin-top: 70px;\n\n}\n.blog-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  display: block;\n  color: rgb(122, 14, 155);\n}\n.matinput-container[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.mat-form-field[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\nwidth: 75%;\nmax-width: 900px;\nmin-width: 320px;\nmargin: auto;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmin-height: 250px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\nwidth: 100%;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\nwidth: 75%;\nheight: 250px;\n}\n.container[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nmargin-bottom: 1rem;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ntext-align: center;\nmargin-bottom: 0.5rem;\n}\n .editor {\nborder: 2px solid rgba(0, 0, 0, 0.2);\nborder-radius: 4px;\n}\n .NgxEditor__MenuBar {\nborder-top-left-radius: 4px;\nborder-top-right-radius: 4px;\nborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\n\n}\n .NgxEditor {\nborder-top-left-radius: 0;\nborder-top-right-radius: 0;\nborder: none;\nflex-wrap: wrap;\n\n}\n .NgxEditor__Content {\n  min-height: 300px; \n}\n .CodeMirror {\nborder: 1px solid #eee;\nheight: auto;\nmargin-bottom: 0.7rem;\n}\n  pre {\nwhite-space: pre !important;\n}\n@media( max-width: 414px) {\n .NgxEditor__MenuBar {\n  flex-wrap: wrap;\n }\n .matinput-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.blog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #ffc6f0;\n  background-color: #fff6fd;\n  border-radius: 20px;\n  margin: 5px;\n  padding: 5px;\n  margin-top: 10px;\n\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ibG9nLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBR0EsV0FBVztBQUNYO0FBQ0EsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUVBO0FBQ0EsVUFBVTtBQUNWLGFBQWE7QUFDYjtBQUVBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CO0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCO0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDJDQUEyQzs7QUFFM0M7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsWUFBWTtBQUNaLGVBQWU7O0FBRWY7QUFDQTtFQUNFLGlCQUFpQixFQUFFLDBDQUEwQztBQUMvRDtBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUdBO0FBQ0E7RUFDRSxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOztBQUVBIiwiZmlsZSI6ImFkZC1ibG9nLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmM2ZjA7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cbn1cbi5ibG9nLWNvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmdiKDEyMiwgMTQsIDE1NSk7XG59IFxuXG4ubWF0aW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59IFxuXG5cbi8qIEVkaXRvciAqL1xuLmNvbnRhaW5lciB7XG53aWR0aDogNzUlO1xubWF4LXdpZHRoOiA5MDBweDtcbm1pbi13aWR0aDogMzIwcHg7XG5tYXJnaW46IGF1dG87XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbm1pbi1oZWlnaHQ6IDI1MHB4O1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xud2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIgLmNvbnRlbnQge1xud2lkdGg6IDc1JTtcbmhlaWdodDogMjUwcHg7XG59XG5cbi5jb250YWluZXIgLmRpc3BsYXkge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRhaW5lciAubG9nbyB7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5tYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbjo6bmctZGVlcC5lZGl0b3Ige1xuYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuYm9yZGVyLXJhZGl1czogNHB4O1xufVxuOjpuZy1kZWVwLk5neEVkaXRvcl9fTWVudUJhciB7XG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcblxufVxuXG46Om5nLWRlZXAuTmd4RWRpdG9yIHtcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbmJvcmRlcjogbm9uZTtcbmZsZXgtd3JhcDogd3JhcDtcblxufVxuOjpuZy1kZWVwLk5neEVkaXRvcl9fQ29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4OyAvKiBtYWtlIGFsbCBvZiB0aGUgZWRpdG9yIGFyZWEgY2xpY2thYmxlICovXG59XG5cbjo6bmctZGVlcC5Db2RlTWlycm9yIHtcbmJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG5oZWlnaHQ6IGF1dG87XG5tYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG46Om5nLWRlZXAgcHJlIHtcbndoaXRlLXNwYWNlOiBwcmUgIWltcG9ydGFudDtcbn1cblxuXG5AbWVkaWEoIG1heC13aWR0aDogNDE0cHgpIHtcbjo6bmctZGVlcC5OZ3hFZGl0b3JfX01lbnVCYXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gfVxuIC5tYXRpbnB1dC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ibG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmM2ZjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cblxufSJdfQ== */"] });


/***/ }),

/***/ 61339:
/*!***********************************************************************!*\
  !*** ./src/app/timelineview/edit-blog-new/edit-blog-new.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBlogNewComponent": function() { return /* binding */ EditBlogNewComponent; }
/* harmony export */ });
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-editor */ 35372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ckeditor4-angular */ 22366);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);










const _c0 = ["blogForm"];
class EditBlogNewComponent {
    constructor(route, service, sharedService) {
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.blogtext = '';
        this.toolbar = [
            ["bold", "italic"],
            ["underline", "strike"],
            ["code", "blockquote"],
            ["ordered_list", "bullet_list"],
            [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
            ["link", "image"],
            ["text_color", "background_color"],
            ["align_left", "align_center", "align_right", "align_justify"]
        ];
    }
    ngOnInit() {
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_2__.Editor();
        this.route.queryParams.subscribe(params => {
            this.blogId = params.blogId;
            console.log(`blogId`, this.blogId);
            this.service.getBlog(this.blogId).subscribe((data) => {
                this.blogtext = data.blogtext;
                this.heading = data.heading;
                this.category = data.category;
                this.tags = data.tags;
            });
        });
    }
    onSubmit(form) {
        console.log(form.value);
        this.loading = true;
        if (form.value.heading.trim() == '' || form.value.category.trim() == '' || form.value.tags.trim() == '') {
            this.sharedService.openSnackBar("Please enter mandatory fields", "oops");
            return;
        }
        this.service.updateBlog(this.blogId, {
            heading: form.value.heading.trim(),
            blogtext: form.value.blogtext.trim(),
            category: form.value.category.trim(),
            tags: form.value.tags.toString().trim(),
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
        }).subscribe(res => {
            console.log(res);
            this.loading = false;
            this.sharedService.blogAddedSubject.next(true);
            this.sharedService.openSnackBar("Blog Updated successfully", "Yay");
        }, err => {
            console.log(err);
            this.loading = false;
            this.sharedService.openSnackBar("Blog Update failed", "Naa");
        });
    }
    clearForm() {
        this.blogForm.form.reset({});
        this.blogtext = '';
    }
    ngOnDestroy() {
        this.editor.destroy();
    }
    onEditorReady() {
    }
}
EditBlogNewComponent.ɵfac = function EditBlogNewComponent_Factory(t) { return new (t || EditBlogNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
EditBlogNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditBlogNewComponent, selectors: [["app-edit-blog-new"]], viewQuery: function EditBlogNewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.blogForm = _t.first);
    } }, inputs: { blogId: "blogId" }, decls: 22, vars: 4, consts: [[1, "blog-container"], [3, "ngSubmit"], ["blogForm", "ngForm"], [1, "input-container"], ["appearance", "fill", 1, "matinput-container"], ["matInput", "", "name", "heading", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "category", "name", "category", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "tags", "name", "tags", 3, "ngModel", "ngModelChange"], [1, "NgxEditor__Wrapper"], ["name", "blogtext", "editorUrl", "/assets/ckeditor/ckeditor.js", 3, "ngModel", "ngModelChange", "ready"], [1, "margin-left:", "80px"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function EditBlogNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditBlogNewComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Blog Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditBlogNewComponent_Template_input_ngModelChange_8_listener($event) { return ctx.heading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Blog Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditBlogNewComponent_Template_input_ngModelChange_12_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditBlogNewComponent_Template_input_ngModelChange_16_listener($event) { return ctx.tags = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ckeditor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditBlogNewComponent_Template_ckeditor_ngModelChange_18_listener($event) { return ctx.blogtext = $event; })("ready", function EditBlogNewComponent_Template_ckeditor_ready_18_listener() { return ctx.onEditorReady(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Update Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.blogtext);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__.CKEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".blog-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n    padding: 10px;\n    border: 2px solid #ffc6f0;\n    padding: 50px;\n    background-color: #fff6fd;\n    border-radius: 20px;\n    margin-top: 70px;\n\n}\n.blog-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    color: rgb(122, 14, 155);\n}\n.matinput-container[_ngcontent-%COMP%] {\n    \n  }\n.input-container[_ngcontent-%COMP%]{\n    display: grid; \n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 1rem;\n  }\n.mat-form-field[_ngcontent-%COMP%]{\n      margin-top: 10px;\n  }\n\n.container[_ngcontent-%COMP%] {\n  width: 75%;\n  max-width: 900px;\n  min-width: 320px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 250px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 250px;\n}\n.container[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 0.5rem;\n}\n .editor {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n .NgxEditor__MenuBar {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n\n}\n .NgxEditor {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border: none;\n  flex-wrap: wrap;\n\n}\n .NgxEditor__Content {\n    min-height: 300px; \n  }\n .editor .CodeMirror {\n  border: 1px solid #eee;\n  height: auto;\n  margin-bottom: 0.7rem;\n}\n .editor pre {\n  white-space: pre !important;\n}\n@media( max-width: 414px) {\n   .NgxEditor__MenuBar {\n    flex-wrap: wrap;\n   }\n   .matinput-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .input-container[_ngcontent-%COMP%]{\n    display: grid; \n    grid-template-columns: 1fr;\n  }\n  .blog-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border: 2px solid #ffc6f0;\n    background-color: #fff6fd;\n    border-radius: 20px;\n    margin: 5px;\n    padding: 5px;\n    margin-top: 10px;\n\n}\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYmxvZy1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsY0FBYztFQUNoQjtBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCO0FBR0YsV0FBVztBQUNYO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDJDQUEyQzs7QUFFN0M7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGVBQWU7O0FBRWpCO0FBQ0E7SUFDSSxpQkFBaUIsRUFBRSwwQ0FBMEM7RUFDL0Q7QUFFQTtFQUNBLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFHQTtFQUNFO0lBQ0UsZUFBZTtHQUNoQjtHQUNBO0lBQ0MsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjs7QUFFQSIsImZpbGUiOiJlZGl0LWJsb2ctbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ibG9nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmM2ZjA7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmZkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcblxufVxuLmJsb2ctY29udGFpbmVyIGlucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiByZ2IoMTIyLCAxNCwgMTU1KTtcbn0gXG5cbi5tYXRpbnB1dC1jb250YWluZXIge1xuICAgIC8qIHdpZHRoOiA3NSU7ICovXG4gIH1cbiAgLmlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAxcmVtO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfSBcblxuICBcbi8qIEVkaXRvciAqL1xuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA3NSU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciAuY29udGVudCB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5jb250YWluZXIgLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY29udGFpbmVyIC5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbjo6bmctZGVlcC5lZGl0b3Ige1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbjo6bmctZGVlcC5OZ3hFZGl0b3JfX01lbnVCYXIge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbn1cblxuOjpuZy1kZWVwLk5neEVkaXRvciB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxufVxuOjpuZy1kZWVwLk5neEVkaXRvcl9fQ29udGVudCB7XG4gICAgbWluLWhlaWdodDogMzAwcHg7IC8qIG1ha2UgYWxsIG9mIHRoZSBlZGl0b3IgYXJlYSBjbGlja2FibGUgKi9cbiAgfVxuXG4gIDo6bmctZGVlcC5lZGl0b3IgLkNvZGVNaXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbn1cbjo6bmctZGVlcC5lZGl0b3IgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZSAhaW1wb3J0YW50O1xufVxuXG5cbkBtZWRpYSggbWF4LXdpZHRoOiA0MTRweCkge1xuICA6Om5nLWRlZXAuTmd4RWRpdG9yX19NZW51QmFyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICB9XG4gICAubWF0aW5wdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW5wdXQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5ibG9nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmM2ZjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjZmZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG4gIFxufSJdfQ== */"] });


/***/ }),

/***/ 85747:
/*!***********************************************************************!*\
  !*** ./src/app/timelineview/timeline-view/timeline-view.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeLineViewComponent": function() { return /* binding */ TimeLineViewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-editor */ 35372);
/* harmony import */ var src_app_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/confirm-dialog/confirm-dialog.component */ 2362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _dao_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dao/data.service */ 62140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ 64283);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/editor */ 38903);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 46976);


















function TimeLineViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 3);
} }
function TimeLineViewComponent_app_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-spinner");
} }
function TimeLineViewComponent_div_2_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeLineViewComponent_div_2_div_2_div_3_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const tag_r9 = restoredCtx.$implicit; const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.handleTagClick($event, category_r6, tag_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r8.getStyle(category_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tag_r9);
} }
function TimeLineViewComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function TimeLineViewComponent_div_2_div_2_Template_div_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const category_r6 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.mouseEnter(category_r6); })("mouseLeave", function TimeLineViewComponent_div_2_div_2_Template_div_mouseLeave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.mouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeLineViewComponent_div_2_div_2_Template_div_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const category_r6 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.handleCategoryClick($event, category_r6, undefined); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TimeLineViewComponent_div_2_div_2_div_3_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.tagsObj[category_r6]);
} }
function TimeLineViewComponent_div_2_div_16_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 37);
} if (rf & 2) {
    const blog_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", blog_r22.blogtext, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function TimeLineViewComponent_div_2_div_16_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-editor", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TimeLineViewComponent_div_2_div_16_div_1_div_27_Template_p_editor_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const blog_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return blog_r22.blogtext = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", blog_r22.blogtext)("readonly", true);
} }
function TimeLineViewComponent_div_2_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeLineViewComponent_div_2_div_16_div_1_Template_button_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const blog_r22 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r31.openDialog($event, blog_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeLineViewComponent_div_2_div_16_div_1_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const blog_r22 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r33.editBlog(blog_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-slide-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TimeLineViewComponent_div_2_div_16_div_1_Template_mat_slide_toggle_change_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const j_r23 = restoredCtx.index; const obj_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r34.handleToggleChange(obj_r19.key, j_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Toggle View");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, TimeLineViewComponent_div_2_div_16_div_1_div_26_Template, 1, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, TimeLineViewComponent_div_2_div_16_div_1_div_27_Template, 5, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](blog_r22.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Category: ", blog_r22.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Tags: ", blog_r22.tags, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 6, ctx_r21.getDate(blog_r22.datecreated)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !blog_r22.toggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", blog_r22.toggle);
} }
function TimeLineViewComponent_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TimeLineViewComponent_div_2_div_16_div_1_Template, 28, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", obj_r19.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", obj_r19.value);
} }
function TimeLineViewComponent_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r5.nextDrag, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx_r5.datesarr[ctx_r5.nextTick]));
} }
const _c0 = function () { return ["/add"]; };
function TimeLineViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TimeLineViewComponent_div_2_div_2_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Search Blogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function TimeLineViewComponent_div_2_Template_input_keydown_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.keyDown($event); })("keypress", function TimeLineViewComponent_div_2_Template_input_keypress_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r38.keyPress($event); })("ngModelChange", function TimeLineViewComponent_div_2_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.searchInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Search Results: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "post_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TimeLineViewComponent_div_2_div_16_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dragover", function TimeLineViewComponent_div_2_Template_div_dragover_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r40.onDragOver($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dragover", function TimeLineViewComponent_div_2_Template_div_dragover_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r41.onDragOver($event); })("click", function TimeLineViewComponent_div_2_Template_div_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r42.lineClick($event); })("dragstart", function TimeLineViewComponent_div_2_Template_div_dragstart_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r43.onDragStart($event); })("dragend", function TimeLineViewComponent_div_2_Template_div_dragend_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r44.onDragEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TimeLineViewComponent_div_2_div_30_Template, 3, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.searchInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.getCounts());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 20, ctx_r2.filteredBlogs));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r2.dragged, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r2.ticksarr[0], "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 22, ctx_r2.datesarr[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r2.prevDrag, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 24, ctx_r2.datesarr[ctx_r2.prevTick]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r2.dragged, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 26, ctx_r2.datesarr[ctx_r2.currentTick]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r2.ticksarr[ctx_r2.ticksarr.length - 1], "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 28, ctx_r2.datesarr[ctx_r2.datesarr.length - 1]));
} }
class TimeLineViewComponent {
    constructor(dataService, router, sharedService, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.dragged = 0;
        this.startpos = 0;
        this.curpos = 0;
        this.endpos = 735;
        this.noofticks = 5;
        this.stepsize = this.endpos / this.noofticks;
        this.ticksarr = [this.startpos, ...[...Array(this.noofticks).keys()].map(x => (x + 1) * this.endpos / this.noofticks), this.endpos];
        // datesarr = ["2021-01-01", "2021-02-01", "2021-03-01", "2021-04-01", "2021-05-01", , "2021-06-01"]
        this.datesset = new Set();
        this.datesarr = [];
        this.blogs = [
            {
                date: "2021-01-01",
                blog: `1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est! 1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere es
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      1111 Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!
      `
            },
            {
                date: "2021-02-01",
                blog: "2222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!"
            },
            {
                date: "2021-03-01",
                blog: "3333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!"
            },
            {
                date: "2021-04-01",
                blog: "4444 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!"
            },
            {
                date: "2021-05-01",
                blog: "5555 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!"
            },
            {
                date: "2021-06-01",
                blog: "6666 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt repudiandae ratione ullam numquam consequatur, dignissimos corrupti, voluptas eveniet atque voluptate sunt dolorem architecto non nisi? Amet quaerat facere est!"
            }
        ];
        this.slider = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.blogItems = {};
        //   {
        //     "blogtext": "<ul><li>Add Jenkins file to the project</li><li>Scan organization to get Updated Jenkins file</li><li>Run Build/Build with Parameters</li></ul>",
        //     "category": "Tech",
        //     "datecreated": "2020-05-20T17:47:57.777Z",
        //     "datemodified": "2020-05-20T17:47:57.777Z",
        //     "heading": "Jenkins",
        //     "tags": "Jenkins"
        // }
        this.loading = true;
        this.isChecked = false;
        this.categoriesset = new Set();
        this.tagsObj = {};
        this.categories = [];
        this.filteredBlogs = {};
        this.showEnd = true;
        this.tags = [];
        this.filteredTags = [];
        this.toggleTag = false;
    }
    sortDateDesc(d1, d2) {
        if (d1 < d2)
            return 1;
        else if (d1 > d2)
            return -1;
        else
            return 0;
    }
    sortDateAsc(d1, d2) {
        if (d2 < d1)
            return 1;
        else if (d2 > d1)
            return -1;
        else
            return 0;
    }
    ngOnInit() {
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_6__.Editor();
        this.fetchDataFromDB();
    }
    fetchDataFromDB() {
        this.dataService.getBlogs().subscribe(data => {
            this.processInput(data);
            this.processBlogs(this.blogItems);
        });
    }
    processInput(data) {
        // get the keys in the data
        // for each key create an object with date as key : [all the blogs as an array]
        Object.keys(data).forEach(key => {
            let blogObj = data[key];
            blogObj["id"] = key;
            blogObj["toggle"] = false;
            let catKey = blogObj["category"] || 'NA';
            if (catKey == 'NA')
                console.log(`blogObj`, blogObj);
            let tagsKey = this.tagsObj[catKey];
            this.categoriesset.add(catKey);
            const tagslocal = blogObj["tags"] || "";
            if (tagsKey)
                tagslocal.split(' ').forEach(x => this.tagsObj[catKey].add(x));
            else
                this.tagsObj[catKey] = new Set([...tagslocal.split(' ')]);
            const dateKey = blogObj["datecreated"].split("T")[0];
            // blogObj["datecreated"] = new Date(blogObj["datecreated"])
            dateKey in this.blogItems ? this.blogItems[dateKey].push(blogObj) : this.blogItems[dateKey] = [blogObj];
            // this.datesset.add(blogObj["datecreated"].split("T")[0])
        });
        this.filteredBlogs = Object.assign({}, this.blogItems);
        this.tempFilteredBlogs = Object.assign({}, this.filteredBlogs);
        //console.log('blog array structure', this.blogItems)
        // console.log(`this.tagsObj`, this.tagsObj)
    }
    processBlogs(blogItems) {
        // console.log(`Object.keys(blogItems)`, Object.keys(blogItems))
        this.datesarr = [...Object.keys(blogItems)].map(date => new Date(date + "T06:00:01.000Z"));
        this.datesarr = this.datesarr.sort(this.sortDateAsc);
        this.categories = ['All', ...this.categoriesset];
        this.setTicks();
    }
    // make sure to destory the editor
    ngOnDestroy() {
        this.editor.destroy();
    }
    setTicks() {
        this.noofticks = this.datesarr.length;
        this.stepsize = this.endpos / this.noofticks;
        this.ticksarr = [this.startpos, ...[...Array(this.noofticks).keys()].map(x => (x + 1) * this.endpos / this.noofticks), this.endpos];
        this.loading = false;
    }
    onDragStart(event) {
        console.log(`starting`, event);
        if (this.startpos === 0)
            this.startpos = event.clientY;
        console.log('y=', event.clientY);
    }
    onDragEnd(event) {
        console.log('drag end', event);
        console.log('y=', event.clientY);
        this.changeDragged(event);
    }
    changeDragged(event) {
        if (event.clientY <= 0)
            this.dragged = 0;
        if (event.clientY < this.endpos && event.clientY >= this.startpos) {
            this.prevDrag = event.clientY - 80 > 0 ? event.clientY - 80 : undefined;
            this.dragged = event.clientY - 40 > 0 ? event.clientY - 40 : 0;
            this.nextDrag = event.clientY < this.endpos ? event.clientY : undefined;
        }
        if (event.clientY >= this.endpos)
            this.dragged = this.endpos - 10;
        this.scrollToDiv(this.dragged);
    }
    resetDragPositions() {
        this.prevDrag = undefined;
        this.nextDrag = undefined;
        this.dragged = 0;
        let datekey = this.datesarr[0].toISOString().split("T")[0];
        console.log(`datekey`, datekey);
        document.getElementsByClassName('blog-search')[0].scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    onDragOver($event) {
        $event.preventDefault();
        // console.log(event)
    }
    lineClick($event) {
        console.log($event);
    }
    scrollToDiv(curpos) {
        const endIndex = this.ticksarr.findIndex(v => v > curpos);
        const startIndex = endIndex ? endIndex - 1 : 0;
        this.currentTick = startIndex;
        this.prevTick = startIndex > 2 ? startIndex - 1 : undefined;
        this.nextTick = startIndex < this.ticksarr.length - 2 ? startIndex + 1 : undefined;
        // this.scroller.scrollToAnchor("" + startIndex);
        let datekey = this.datesarr[startIndex].toISOString().split("T")[0];
        document.getElementById(datekey).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    handleCategoryClick(event, category, tag) {
        if (this.clickedCategory != category) {
            this.toggleTag = false;
        }
        this.clickedCategory = category;
        this.toggleTag = !this.toggleTag;
        this.filterBlogs(category, tag);
        this.processBlogs(this.filteredBlogs);
        this.resetDragPositions();
    }
    filterBlogs(category, tag) {
        if (category == 'All') {
            this.filteredBlogs = this.blogItems;
            return;
        }
        else if (category == 'NA') {
            this.filteredBlogs = this.blogItems;
        }
        this.filteredBlogs = {};
        for (let item in this.blogItems) {
            const fb = this.blogItems[item].filter(blog => {
                if (!tag)
                    return blog.category == (category == 'NA' ? '' : category);
                else
                    return (blog.category == (category == 'NA' ? '' : category)) && (blog.tags && blog.tags.indexOf(tag) >= 0);
            });
            if (fb.length > 0)
                this.filteredBlogs[item] = fb;
        }
        this.tempFilteredBlogs = Object.assign({}, this.filteredBlogs);
        // console.log(this.tempFilteredBlogs)
    }
    getTags(category) {
        this.tags = [...this.tagsObj[category]] || [];
    }
    mouseEnter(category) {
        this.getTags(category);
    }
    mouseLeave() {
    }
    handleTagClick($event, category, tag) {
        this.filterBlogs(category, tag);
        this.processBlogs(this.filteredBlogs);
    }
    getStyle(category) {
        // console.log(`style `, this.toggleTag)
        if (this.clickedCategory == category && this.toggleTag)
            return "block";
        else
            return "none";
    }
    handleTagShow(category) {
        return this.clickedCategory == category && this.toggleTag;
    }
    keyPress(event) {
        this.searchBlog();
    }
    keyDown($event) {
        if ($event.target.value.substring(0, $event.target.value.length - 1) == '' || $event.target.value.length <= 1)
            this.filteredBlogs = this.tempFilteredBlogs;
        this.searchBlog();
    }
    searchBlog() {
        let tempBlogs = Object.assign({}, this.tempFilteredBlogs);
        let searchTag = this.searchInput ? this.searchInput.toLowerCase() : '';
        for (let key in tempBlogs) {
            let blogs = tempBlogs[key].filter(blog => {
                return blog.heading.toLowerCase().includes(searchTag) ||
                    blog.category.toLowerCase().includes(searchTag) ||
                    blog.tags.toLowerCase().includes(searchTag);
            });
            if (blogs.length > 0)
                tempBlogs[key] = blogs;
            else
                delete tempBlogs[key];
        }
        this.filteredBlogs = tempBlogs;
    }
    editBlog(key) {
        console.log(key);
        this.router.navigate(['edit'], { queryParams: { blogId: key }, queryParamsHandling: 'merge' });
    }
    getCounts() {
        return Object.keys(this.filteredBlogs).length;
    }
    handleToggleChange(key, blogNumber) {
        console.log(key, blogNumber);
        this.filteredBlogs[key][blogNumber]["toggle"] = !this.filteredBlogs[key][blogNumber]["toggle"];
    }
    getDate(date) {
        return new Date(date);
    }
    openDialog(event, blogId) {
        const dialogRef = this.dialog.open(src_app_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            width: '250px',
            data: {
                title: "Confirm",
                message: "Do you wanna delete the item?"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result == true) {
                this.onDeletePost(event, blogId);
            }
        });
    }
    onDeletePost(event, blogId) {
        this.dataService.deletePost(blogId).subscribe(msg => {
            this.sharedService.openSnackBar('Post Deleted Successfully', 'Tadaaa');
            this.fetchDataFromDB();
        }, err => {
            console.log(err);
            this.sharedService.openSnackBar('Post Delete failed', 'Ding...');
        });
    }
}
TimeLineViewComponent.ɵfac = function TimeLineViewComponent_Factory(t) { return new (t || TimeLineViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dao_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
TimeLineViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TimeLineViewComponent, selectors: [["timeline-view"]], decls: 3, vars: 3, consts: [["style", "margin-top: 150px;", 4, "ngIf"], [4, "ngIf"], ["class", "master-container", 4, "ngIf"], [2, "margin-top", "150px"], [1, "master-container"], [1, "categories-container"], ["class", "category-container", 3, "mouseenter", "mouseLeave", 4, "ngFor", "ngForOf"], [1, "blog-container"], [1, "blog-search"], ["appearance", "fill", 1, "matinput-container"], ["type", "text", "matInput", "", "placeholder", "Ex. Spring Boot...", "name", "search", 3, "ngModel", "keydown", "keypress", "ngModelChange"], ["mat-fab", "", "color", "accent", 3, "routerLink"], ["class", "blog-group", 3, "id", 4, "ngFor", "ngForOf"], [1, "slider-container"], [1, "line", 3, "dragover"], ["draggable", "true", 1, "control", 3, "dragover", "click", "dragstart", "dragend"], [1, "tick-text"], [1, "tick-text", 2, "color", "gray"], [1, "tick-text", 2, "color", "rgb(207, 146, 207)"], ["class", "tick-text", "style", "color: rgb(235, 175, 175);", 3, "top", 4, "ngIf"], [1, "category-container", 3, "mouseenter", "mouseLeave"], [1, "category", 3, "click"], ["class", "tags-container", 3, "display", "click", 4, "ngFor", "ngForOf"], [1, "tags-container", 3, "click"], [1, "tags"], [1, "blog-group", 3, "id"], ["class", "blog", 4, "ngFor", "ngForOf"], [1, "blog"], [1, "blog-header"], [1, "title"], [1, "title-right"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "extra"], [1, "info"], [3, "change"], ["class", "toggle-parent", 3, "innerHTML", 4, "ngIf"], ["class", "toggle-parent", 4, "ngIf"], [1, "toggle-parent", 3, "innerHTML"], [1, "toggle-parent"], ["id", "scrolling-container"], ["id", "quill-container"], ["name", "blogtext", 3, "ngModel", "readonly", "ngModelChange"], [1, "tick-text", 2, "color", "rgb(235, 175, 175)"]], template: function TimeLineViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TimeLineViewComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TimeLineViewComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TimeLineViewComponent_div_2_Template, 34, 31, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, primeng_editor__WEBPACK_IMPORTED_MODULE_15__.Editor, primeng_api__WEBPACK_IMPORTED_MODULE_16__.Header], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".master-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  padding-bottom: 20px;\n  margin-bottom: 20px;;\n}\n\n.categories-container[_ngcontent-%COMP%] {\n  width: 250px;\n  border: 1px solid lightblue;\n  position: sticky;\n  top: 80px;\n  left: 10px;\n  height: 90vh;\n  overflow-y: scroll;\n}\n\n.category[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ffc6f0;\n  padding: 5px;\n  background-color: #fff6fd;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n  background-color: pink;\n  cursor: pointer;\n}\n\n.category-container[_ngcontent-%COMP%]{\n    display: block;\n}\n\n.tags[_ngcontent-%COMP%] {\n    background-color: #774fd8;\n    color: white;\n    text-align: center;\n    margin: 5px;\n    padding: 5px;\n    text-align: center;\n    border: 1px solid #ffc6f0;\n    display: none;\n    border-radius: 15px;\n\n}\n\n.tagshow[_ngcontent-%COMP%] {\n  transform: translateY(0%);\n  border-bottom: 1px solid #ffc6f0;\n  transition: all 0.5s ease;\n  color: black;\n  display: none;\n}\n\n.tags[_ngcontent-%COMP%]:hover {\n  background-color: pink;\n  cursor: pointer;\n}\n\n.blog-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1200px;\n  flex-direction: column;\n  margin-left: 10px;\n}\n\n.blog-search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  align-items: baseline;\n  justify-content: space-between;\n}\n\n.blog-group[_ngcontent-%COMP%] {\n  border: 1px solid rgb(231 237 243);\n  padding: 10px;\n  margin: 10px;\n}\n\n.blog[_ngcontent-%COMP%] {\n  border: 1px solid rgb(226 195 219);\n  padding: 10px;\n  margin: 10px;\n}\n\n.blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-break: strict;\n  white-space: pre-wrap;\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-bottom: 1px solid #ffc6f0;\n}\n\n.blog-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 5px;\n  padding: 5px;\n}\n\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 16px;\n}\n\n.title-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  border: 1px solid rgb(231 237 243);\n  padding: 10px 0px 30px 0;\n  width: 95px;\n  height: 750px;\n  margin-top: 10px;\n  margin-left: 10px;\n  position: sticky;\n  top: 80px;\n  right: 40px;\n}\n\n.inner-container[_ngcontent-%COMP%] {\n  padding: auto;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 730px;\n  border: 2px solid rgb(156, 98, 194);\n  margin-left: 10px;\n}\n\n.control[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 30px;\n  border: 1px solid rgb(39, 71, 70);\n  border-radius: 35%;\n  background: rgb(113, 0, 128);\n  position: absolute;\n  top: 0px;\n  left: 6px;\n  \n  cursor: pointer;\n}\n\n.control[_ngcontent-%COMP%]:hover {\n  cursor: all-scroll;\n}\n\n.tick[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  width: 30px;\n  height: 1px;\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  font-size: 10px;\n}\n\n.tick-text[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 5px;\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  font-size: 10px;\n}\n\n.matinput-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n.toggle-parent[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    white-space: break-spaces;\n    overflow: hidden;\n}\n\n.toggle-parent[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    white-space: pre-wrap;\n}\n\n.tags-container[_ngcontent-%COMP%]{\n   display: none;\n}\n\n@media (max-width: 414px) {\n  .navbar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 40px;\n    position: relative;\n  }\n\n  #navbarNav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .timeline-margin[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .master-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    align-items: flex-start;\n    justify-content: space-between;\n    position: relative;\n  }\n  .categories-container[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-y: unset;\n    height: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding: 10px;\n    position: static;\n    position: initial;\n  }\n  .category-container[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: flex-start;\n      justify-content: space-between;\n  }\n  .category[_ngcontent-%COMP%] {\n    background-color:  #ff4081;\n    color: white;\n    border-radius: 5px;\n    text-align: center;\n    margin: 5px;\n  }\n  .tags-container[_ngcontent-%COMP%]{\n    display: none;\n}\n  .tagshow[_ngcontent-%COMP%] {\n    display: block;\n    transform: translateY(0%);\n    border-bottom: 1px solid #ffc6f0;\n    transition: all 0.5s ease;\n  }\n  .tags[_ngcontent-%COMP%] {\n      display: block;\n  }\n  \n  .tags[_ngcontent-%COMP%]:hover {\n    background-color: pink;\n    cursor: pointer;\n  }\n\n  \n  .slider-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .blog-container[_ngcontent-%COMP%] {\n    position: relative;\n   \n    width: 375px;\n    \n    \n  }\n\n  .blog-search[_ngcontent-%COMP%]{\n      display: block;\n  }\n  .blog-group[_ngcontent-%COMP%] {\n    border: 1px solid rgb(231 237 243);\n    padding: 0px;\n    margin: 0px;\n  }\n  .blog[_ngcontent-%COMP%]{\n    border: 1px solid rgb(226 195 219);\n    padding: 0px;\n    margin: 0px;\n    margin-bottom: 10px;\n    width: 100%;\n  }\n\n  .blog[_ngcontent-%COMP%]   .blog-header[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: column;\n      margin: 5px;\n      padding: 1px;\n  }\n\n  .blog[_ngcontent-%COMP%]   .blog-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n  }\n  .blog[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .blog[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGdCQUFpQjtJQUFqQixpQkFBaUI7RUFDbkI7RUFDQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHVCQUF1QjtNQUN2Qiw4QkFBOEI7RUFDbEM7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7QUFDakI7RUFDRTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtFQUMzQjtFQUNBO01BQ0ksY0FBYztFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOzs7RUFHQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7O0VBRUE7TUFDSSxjQUFjO0VBQ2xCO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtNQUNJLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFlBQVk7RUFDaEI7O0VBRUE7TUFDSSxhQUFhO01BQ2Isc0JBQXNCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoidGltZWxpbmUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7O1xufVxuXG4uY2F0ZWdvcmllcy1jb250YWluZXIge1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA4MHB4O1xuICBsZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5jYXRlZ29yeSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZjNmYwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZmQ7XG59XG4uY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2F0ZWdvcnktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFncyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NGZkODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzZmMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLnRhZ3Nob3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYzZmMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFnczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJsb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEyMDBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5ibG9nLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYmxvZy1ncm91cCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzEgMjM3IDI0Myk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5ibG9nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyNiAxOTUgMjE5KTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmJsb2cgcCB7XG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmJsb2ctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYzZmMDtcbn1cbi5ibG9nLWhlYWRlciAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYmxvZy1oZWFkZXIgLmV4dHJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmJsb2ctaGVhZGVyIC5leHRyYSAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ibG9nLWhlYWRlciAuZXh0cmEgLmluZm8gPiAqIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udGl0bGUtcmlnaHQgPiAqIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzEgMjM3IDI0Myk7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDMwcHggMDtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogNzUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDgwcHg7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4uaW5uZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogYXV0bztcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDczMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU2LCA5OCwgMTk0KTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY29udHJvbCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzOSwgNzEsIDcwKTtcbiAgYm9yZGVyLXJhZGl1czogMzUlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTEzLCAwLCAxMjgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA2cHg7XG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250cm9sOmhvdmVyIHtcbiAgY3Vyc29yOiBhbGwtc2Nyb2xsO1xufVxuLnRpY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4udGljay10ZXh0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1hdGlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udG9nZ2xlLXBhcmVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRvZ2dsZS1wYXJlbnQgPiAqIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4udGFncy1jb250YWluZXJ7XG4gICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgI25hdmJhck5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubmF2YmFyLW5hdiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC50aW1lbGluZS1tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAubWFzdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IHVuc2V0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gIH1cbiAgLmNhdGVnb3J5LWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmNhdGVnb3J5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmNDA4MTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAudGFncy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiAgLnRhZ3Nob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM2ZjA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgfVxuICAudGFncyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnRhZ3M6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgXG4gIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJsb2ctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBcbiAgICB3aWR0aDogMzc1cHg7XG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xuICAgIC8qIG92ZXJmbG93LXg6IHVuc2V0OyAqL1xuICB9XG5cbiAgLmJsb2ctc2VhcmNoe1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmJsb2ctZ3JvdXAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzEgMjM3IDI0Myk7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5ibG9ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjYgMTk1IDIxOSk7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYmxvZyAuYmxvZy1oZWFkZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgcGFkZGluZzogMXB4O1xuICB9XG5cbiAgLmJsb2cgLmJsb2ctaGVhZGVyIC50aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYmxvZyAuZXh0cmEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYmxvZyAuZXh0cmEgLmluZm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 59201:
/*!***********************************************************************!*\
  !*** ./src/app/timelineview/view-blog-new/view-blog-new.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBlogNewComponent": function() { return /* binding */ ViewBlogNewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ 22366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 70781);







const _c0 = ["blogForm"];
// import * as Editor from '../../../../ckeditor5/build/ckeditor';
// import * as Editor from '../../../../ckeditor/ckeditor';
class ViewBlogNewComponent {
    constructor(route, service, sharedService) {
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.heading = '';
        this.category = '';
        this.editorConfig = {
            height: '550px',
            uiColor: '#F7B42C',
            codeSnippet_theme: 'xcode',
            toolbarCanCollapse: true,
            toolbar: [
                { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
                { name: 'codeSnippet', items: ['codeSnippet'] },
            ]
        };
        this.template = `<pre>
  <code class="language-javascript">  onSubmit(form: NgForm){
      if (form.value.heading.trim() == ''|| form.value.category.trim() == ''|| form.value.tags.trim() == '') {
        this.sharedService.openSnackBar("Please enter mandatory fields", "oops")
        return;
      }</code></pre>
  
  <p>&nbsp;</p>`;
        this.ckeditorConfig = {
            toolbar: {
                items: [
                    'Heading',
                    'bold',
                    'italic',
                    'underline',
                    'Link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'indent',
                    'outdent',
                    'Alignment',
                    '|',
                    'ImageUpload',
                    'BlockQuote',
                    'InsertTable',
                    'undo',
                    'redo',
                    '|',
                    'Code',
                    'codeBlock',
                    '|',
                    'FontBackgroundColor',
                    'FontColor',
                    'FontFamily',
                    'FontSize',
                    'Highlight',
                    'HorizantalLine',
                    'HtmlEmbed',
                    'ImageInsert',
                    'SpecialCharacters',
                ]
            },
            image: {
                toolbar: [
                    'imageStyle:full',
                    'imageStyle:side',
                    '|',
                    'imageTextAlternative'
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            },
            // This value must be kept in sync with the language defined in webpack.config.js.
            language: 'en'
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.blogId = params.blogId;
            this.service.getBlog(this.blogId).subscribe((data) => {
                console.log(`data`, data);
                this.blogtext = data.blogtext;
                this.heading = data.heading;
                this.category = data.category;
                this.tags = data.tags;
            });
        });
    }
    onEditorReady() {
    }
    showCode() {
        console.log(this.template);
    }
    saveBlog() {
        this.service.updateBlog(this.blogId, {
            heading: this.heading,
            blogtext: this.blogtext,
            category: this.category,
            tags: this.tags,
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
        }).subscribe(res => {
            console.log(res);
            this.loading = false;
            this.sharedService.blogAddedSubject.next(true);
            this.sharedService.openSnackBar("Changes saved successfully", "Yay");
        }, err => {
            console.log(err);
            this.loading = false;
            this.sharedService.openSnackBar("Blog Update failed", "Naa");
        });
    }
}
ViewBlogNewComponent.ɵfac = function ViewBlogNewComponent_Factory(t) { return new (t || ViewBlogNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
ViewBlogNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewBlogNewComponent, selectors: [["app-view-blog-new"]], viewQuery: function ViewBlogNewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.blogForm = _t.first);
    } }, inputs: { blogId: "blogId" }, decls: 19, vars: 4, consts: [[2, "margin-top", "100px"], [1, "editor-container"], [1, "blog-header"], [1, "title"], [1, "extra"], [1, "info"], ["name", "blogtext", "editorUrl", "/assets/ckeditor/ckeditor.js", 3, "ngModel", "ngModelChange", "ready"], [1, "margin-top:", "20px"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "click"]], template: function ViewBlogNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ckeditor", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ViewBlogNewComponent_Template_ckeditor_ngModelChange_15_listener($event) { return ctx.blogtext = $event; })("ready", function ViewBlogNewComponent_Template_ckeditor_ready_15_listener() { return ctx.onEditorReady(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewBlogNewComponent_Template_button_click_17_listener() { return ctx.saveBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Category: ", ctx.category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Tags: ", ctx.tags, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.blogtext);
    } }, directives: [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__.CKEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".ck-editor__editable {\n    min-height: 500px !important;\n}\n .ck-editor__editable_inline {\n    min-height: 500px !important;\n}\n.editor-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    width: 80%;\n}\n.blog[_ngcontent-%COMP%] {\n    border: 1px solid rgb(226 195 219);\n    padding: 10px;\n    margin: 10px;\n  }\n.blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-break: strict;\n    white-space: pre-wrap;\n  }\n.blog-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-bottom: 1px solid #ffc6f0;\n  }\n.blog-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 5px;\n    padding: 5px;\n  }\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n.blog-header[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-size: 16px;\n  }\n.title-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYmxvZy1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7RUFDbEM7QUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InZpZXctYmxvZy1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5jay1lZGl0b3JfX2VkaXRhYmxlIHtcbiAgICBtaW4taGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgICBtaW4taGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG5cbi5lZGl0b3ItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmJsb2cge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjYgMTk1IDIxOSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgLmJsb2cgcCB7XG4gICAgbGluZS1icmVhazogc3RyaWN0O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgfVxuICAuYmxvZy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM2ZjA7XG4gIH1cbiAgLmJsb2ctaGVhZGVyIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuYmxvZy1oZWFkZXIgLmV4dHJhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuYmxvZy1oZWFkZXIgLmV4dHJhIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuYmxvZy1oZWFkZXIgLmV4dHJhIC5pbmZvID4gKiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAudGl0bGUtcmlnaHQgPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 26662:
/*!**************************************************************************!*\
  !*** ./src/app/timelineview2/timeline-view2/timeline-view2.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineView2Component": function() { return /* binding */ TimelineView2Component; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function TimelineView2Component_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const obj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", blog_r4.heading, " Category: ", blog_r4.category, " , Tags: ", blog_r4.tags, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", blog_r4.blogtext, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", obj_r1.key, " ");
} }
function TimelineView2Component_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const obj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", obj_r1.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", blog_r4.heading, " Category: ", blog_r4.category, " , Tags: ", blog_r4.tags, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", blog_r4.blogtext, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function TimelineView2Component_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TimelineView2Component_div_2_div_1_div_1_Template, 10, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TimelineView2Component_div_2_div_1_div_2_Template, 10, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 % 2 == 1);
} }
function TimelineView2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TimelineView2Component_div_2_div_1_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", obj_r1.value);
} }
class TimelineView2Component {
    constructor(dataService, router, sharedService, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.blogItems = {};
        this.categoriesset = new Set();
        this.tagsObj = {};
        this.filteredBlogs = {};
        this.tempFilteredBlogs = {};
    }
    ngOnInit() {
        this.fetchDataFromDB();
    }
    fetchDataFromDB() {
        this.dataService.getBlogs().subscribe(data => {
            this.processInput(data);
        });
    }
    processInput(data) {
        // get the keys in the data
        // for each key create an object with date as key : [all the blogs as an array]
        // {
        //   
        //}
        Object.keys(data).forEach(key => {
            let blogObj = data[key];
            blogObj["id"] = key;
            blogObj["toggle"] = false;
            let catKey = blogObj["category"] || 'NA';
            if (catKey == 'NA')
                console.log(`blogObj`, blogObj);
            let tagsKey = this.tagsObj[catKey];
            this.categoriesset.add(catKey);
            const tagslocal = blogObj["tags"] || "";
            if (tagsKey)
                tagslocal.split(' ').forEach(x => this.tagsObj[catKey].add(x));
            else
                this.tagsObj[catKey] = new Set([...tagslocal.split(' ')]);
            const dateKey = blogObj["datecreated"].split("T")[0];
            // blogObj["datecreated"] = new Date(blogObj["datecreated"])
            dateKey in this.blogItems ? this.blogItems[dateKey].push(blogObj) : this.blogItems[dateKey] = [blogObj];
            // this.datesset.add(blogObj["datecreated"].split("T")[0])
        });
        this.filteredBlogs = Object.assign({}, this.blogItems);
        this.tempFilteredBlogs = Object.assign({}, this.filteredBlogs);
        //console.log('blog array structure', this.blogItems) 
        // console.log(`this.tagsObj`, this.tagsObj)
    }
}
TimelineView2Component.ɵfac = function TimelineView2Component_Factory(t) { return new (t || TimelineView2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
TimelineView2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TimelineView2Component, selectors: [["app-timeline-view2"]], decls: 4, vars: 3, consts: [[2, "margin-top", "80px"], [1, "master-container"], ["class", "blog-container", 4, "ngFor", "ngForOf"], [1, "blog-container"], [4, "ngFor", "ngForOf"], ["class", "even", 4, "ngIf"], ["class", "odd", 4, "ngIf"], [1, "even"], [1, "blog"], [3, "innerHTML"], [1, "center-left"], [1, "dot-left"], [1, "odd"], [1, "center-right"], [1, "dot-right"]], template: function TimelineView2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TimelineView2Component_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.filteredBlogs));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe], styles: [".master-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    \n    margin: 50px;\n    padding: 50px;\n    position: relative;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.even[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    \n    \n    width: 800px;\n    margin-top: 50px;\n}\n\n.odd[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    transform: translateX(749px);\n    width: 800px;\n    margin-top: 50px;\n\n}\n\n.blog[_ngcontent-%COMP%]{\n    width: 600px;\n    \n    overflow: hidden;\n    padding: 10px;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n.center-left[_ngcontent-%COMP%]{\n    \n    border-right: 10px solid lavender; \n    display: flex;\n}\n\n.center-right[_ngcontent-%COMP%]{\n    border-left: 10px solid lavender; \n    display: flex;\n    \n}\n\n.line-container[_ngcontent-%COMP%]{\n    position: absolute;\n    height: 100%;\n    top: 100px;\n    left: 730px;\n    border: 2px solid red;\n}\n\n.dot-left[_ngcontent-%COMP%]{\n    width: 150px;\n    height: 100px;\n    \n    \n    transform: translateY(-50px) translateX(10px);\n  \n    text-align: center;\n    opacity: 1;\n\n    border-right: 10px solid lavender; \n    \n}\n\n.dot-right[_ngcontent-%COMP%]{\n    width: 150px;\n    height: 100px;\n    \n    \n    transform: translateY(-50px) translateX(-9px);\n  \n    text-align: center;\n    opacity: 1;\n    border-left: 10px solid lavender; \n    \n}\n\n.dot-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dot-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 10px;\n    border-radius: 50%;\n    border: 2px solid lavender;\n    background-color: lavender;\n    padding: 5px;\n    font-size: 16px;\n    font-weight: 500;\n    border: 1px solid lavenderblush;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLXZpZXcyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFJQUFxSTtBQUN6STs7QUFDQTs7SUFFSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQzs7SUFFbEMsNkNBQTZDOztJQUU3QyxrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixpQ0FBaUM7SUFDakMsdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7O0lBRWxDLDZDQUE2Qzs7SUFFN0Msa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7O0FBRW5DIiwiZmlsZSI6InRpbWVsaW5lLXZpZXcyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG5cbi5ldmVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpOyAqL1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ub2RkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDc0OXB4KTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcblxufVxuLmJsb2d7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XG59XG4uY2VudGVyLWxlZnR7XG4gICAgXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIGxhdmVuZGVyOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNlbnRlci1yaWdodHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBsYXZlbmRlcjsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cblxuLmxpbmUtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiA3MzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG4uZG90LWxlZnR7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDsgKi9cbiAgICBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpIHRyYW5zbGF0ZVgoMTBweCk7XG4gIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIGxhdmVuZGVyOyBcbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgYmx1ZXZpb2xldDsgICovXG59XG4uZG90LXJpZ2h0e1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7ICovXG4gICAgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KSB0cmFuc2xhdGVYKC05cHgpO1xuICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBsYXZlbmRlcjsgXG4gICAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7ICAqL1xufVxuLmRvdC1sZWZ0IHAsLmRvdC1yaWdodCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGF2ZW5kZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxhdmVuZGVyYmx1c2g7XG5cbn0iXX0= */"] });


/***/ }),

/***/ 99415:
/*!**************************************************************************!*\
  !*** ./src/app/timelineview3/timeline-view3/timeline-view3.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineView3Component": function() { return /* binding */ TimelineView3Component; }
/* harmony export */ });
/* harmony import */ var src_app_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/confirm-dialog/confirm-dialog.component */ 2362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/data.service */ 62140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ 64283);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _common_fullpage_view_fullpage_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/fullpage-view/fullpage-view.component */ 19237);












function TimelineView3Component_app_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-spinner");
} }
function TimelineView3Component_div_2_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_mat_chip_10_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const cat_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.handleClick(cat_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cat_r4);
} }
function TimelineView3Component_div_2_mat_chip_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_mat_chip_16_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const tag_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.handleTagClick(tag_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r7);
} }
const _c0 = function () { return ["/add"]; };
function TimelineView3Component_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add a Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "post_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-chip-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TimelineView3Component_div_2_mat_chip_10_Template, 2, 1, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-chip-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TimelineView3Component_div_2_mat_chip_16_Template, 2, 1, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_Template_button_click_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.openDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.editBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.viewFull(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.viewSeparately(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_Template_span_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.handleCarouselClick(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineView3Component_div_2_Template_span_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.handleCarouselClick(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "app-fullpage-view", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Selected category: ", ctx_r1.selectedCategory, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tags for ", ctx_r1.selectedCategory, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCategoryTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Selected category: ", ctx_r1.selectedTag, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.index + 1, "/ ", ctx_r1.selectedCategoryLength, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tags: ", ctx_r1.tags, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r1.blogtext, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.index + 1, "/ ", ctx_r1.selectedCategoryLength, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("show", ctx_r1.fullPageViewShow)("blog", ctx_r1.fullPageBlog);
} }
class TimelineView3Component {
    constructor(dataService, router, sharedService, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.blogItems = {};
        this.categoriesset = new Set();
        this.tagsObj = {};
        this.filteredBlogs = {};
        this.tempFilteredBlogs = {};
        this.categories = [];
        this.loading = true;
        this.selectedChips = [];
        this.index = 0;
        this.selectedCategoryTags = [];
        this.fullPageViewShow = -1;
        this.fullPageBlog = {};
    }
    ngOnInit() {
        this.fetchDataFromDB();
    }
    fetchDataFromDB() {
        this.loading = true;
        this.dataService.getBlogs().subscribe(data => {
            this.processInput(data);
            this.loading = false;
        });
    }
    processInput(data) {
        Object.keys(data).forEach(key => {
            let blogObj = data[key];
            blogObj["id"] = key;
            blogObj["toggle"] = false;
            let catKey = blogObj["category"] || 'NA';
            if (catKey == 'NA')
                console.log(`blogObj`, blogObj);
            let tagsKey = this.tagsObj[catKey];
            this.categoriesset.add(catKey);
            const tagslocal = blogObj["tags"].toString() || "";
            if (tagsKey)
                tagslocal.split(' ').forEach(x => this.tagsObj[catKey].add(x));
            else
                this.tagsObj[catKey] = new Set([...tagslocal.split(' ')]);
            catKey in this.blogItems ? this.blogItems[catKey].push(blogObj) : this.blogItems[catKey] = [blogObj];
        });
        this.categories = [...this.categoriesset];
        this.filteredBlogs = Object.assign({}, this.blogItems);
        this.handleClick(this.categories[0]);
    }
    handleCarouselClick(step) {
        this.selectedCategoryLength = this.blogItems[this.selectedCategory].length;
        console.log(`itemslength`, this.selectedCategoryLength);
        if (this.selectedCategoryLength > 0) {
            if (step >= 1) {
                if (this.index < this.selectedCategoryLength - 1) {
                    this.index = this.index + step;
                }
            }
            else {
                if (this.index >= 1) {
                    this.index = this.index + step;
                }
            }
        }
        this.setCard(this.selectedCategory, this.index);
        console.log(`this.heading `, this.heading);
    }
    setCard(cat, index) {
        console.log(`index`, index);
        this.heading = this.blogItems[cat][index].heading;
        this.blogtext = this.blogItems[cat][index].blogtext;
        this.category = this.blogItems[cat][index].category;
        this.tags = this.blogItems[cat][index].tags;
        this.id = this.blogItems[cat][index].id;
    }
    handleClick(cat) {
        this.selectedCategory = cat;
        this.index = 0;
        this.selectedCategoryLength = this.blogItems[this.selectedCategory].length;
        this.selectedCategoryTags = [...this.tagsObj[this.selectedCategory]];
        this.setCard(cat, 0);
    }
    handleTagClick(tag) {
        this.selectedTag = tag;
        let index = this.blogItems[this.selectedCategory].findIndex(x => x.tags.includes(tag));
        this.setCard(this.selectedCategory, index);
    }
    editBlog() {
        this.router.navigate(['edit'], { queryParams: { blogId: this.id }, queryParamsHandling: 'merge' });
    }
    viewSeparately() {
        this.router.navigate(['view'], { queryParams: { blogId: this.id }, queryParamsHandling: 'merge' });
    }
    openDialog(event) {
        const dialogRef = this.dialog.open(src_app_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            width: '250px',
            data: {
                title: "Confirm",
                message: "Do you wanna delete the item?"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result == true) {
                this.onDeletePost();
            }
        });
    }
    onDeletePost() {
        this.dataService.deletePost(this.id).subscribe(msg => {
            this.sharedService.openSnackBar('Post Deleted Successfully', 'Tadaaa');
            this.fetchDataFromDB();
        }, err => {
            console.log(err);
            this.sharedService.openSnackBar('Post Delete failed', 'Ding...');
        });
    }
    viewFull() {
        this.fullPageViewShow++;
        this.fullPageBlog = this.blogItems[this.category][this.index];
    }
}
TimelineView3Component.ɵfac = function TimelineView3Component_Factory(t) { return new (t || TimelineView3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
TimelineView3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TimelineView3Component, selectors: [["app-timeline-view3"]], decls: 3, vars: 2, consts: [[1, "timeline-margin"], [4, "ngIf"], ["class", "master-container", 4, "ngIf"], [1, "master-container"], [1, "addblog"], ["mat-fab", "", "color", "accent", 3, "routerLink"], [1, "categoryheading"], ["aria-label", "Category selection"], ["color", "accent", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "categoryheadingselected"], [1, "tagsheading"], ["aria-label", "Tags selection"], ["color", "primary", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "categorytagselected"], [1, "slider-container"], [1, "pagenumbertop"], [1, "formatcode"], [1, "title-right"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "formatcode", 3, "innerHTML"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "pagenumber"], [3, "show", "blog"], ["color", "accent", "selected", "", 3, "click"], ["color", "primary", "selected", "", 3, "click"]], template: function TimelineView3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TimelineView3Component_app_spinner_1_Template, 1, 0, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TimelineView3Component_div_2_Template, 48, 16, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _common_fullpage_view_fullpage_view_component__WEBPACK_IMPORTED_MODULE_4__.FullpageViewComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChip], styles: [".master-container[_ngcontent-%COMP%]{\n    max-width: 1250px;\n    margin: auto;\n    padding: 20px;\n    margin-top: 60px;;\n}\n.card[_ngcontent-%COMP%]{\n    margin-top: 10px;\n   \n}\n.addblog[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-bottom: 10px;\n    background-color: #fbe1f2;\n    border-radius: 10px;\n    color: black;\n    padding: 5px;\n}\n.addblog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 10px;\n}\n.slider-container[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    \n    position: relative;\n    \n    margin-bottom: 20px;\n    padding-bottom: 20px;;\n}\n.formatcode[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    line-break: strict;\n    padding: 5px;\n    margin: 30px;\n}\n.formatcode[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    white-space: pre-wrap !important; \n}\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 100%;\n    position: absolute;\n    top: 0%;\n    text-align: center;\n    font-size: 28px;\n    font-weight: 500;\n    background-color: #d4aec8;\n    color: black;\n    opacity: 0.2;\n    cursor: pointer;\n    padding-top: 20px;\n    transition: 0.5s ease;\n    border-radius: 0 5px 5px 0;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;;\n\n\n}\n.left[_ngcontent-%COMP%]{\n    left: 0px;\n}\n.next[_ngcontent-%COMP%] {\n    right: 0px;\n    border-radius: 3px 0 0 3px;\n}\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover{\n    background-color: #e9adda;\n    color: white;\n    opacity: 1;\n}\n.pagenumber[_ngcontent-%COMP%]{\n    width: 60px;\n    height: 25px;\n    position: absolute;\n    bottom:0;\n    right: 40%;\n    text-align: center;\n    font-size: 15px;\n    font-weight: 500;\n    background-color: #d4aec8;\n    color: black;\n    opacity: 0.4;\n    border: 0 5px 5px 5px;\n\n}\n.pagenumbertop[_ngcontent-%COMP%]{\n    width: 60px;\n    height: 25px;\n    position: absolute;\n    top:0;\n    left: 40%;\n    text-align: center;\n    font-size: 15px;\n    font-weight: 500;\n    background-color: #d4aec8;\n    color: black;\n    opacity: 0.4;\n    border: 0 5px 5px 5px;\n\n}\n.title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.title-right[_ngcontent-%COMP%] {\n    \n    position: absolute;\n    right: 30px;\n    top: 1px;\n}\n.title-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 5px;\n}\n.categoryheading[_ngcontent-%COMP%]{\n    font-size: large;\n    margin-top: 10px;\n    background-color: #ff4081;;\n    color: white;\n    text-align: center;\n    padding: 5px;\n    border-radius: 10px;\n\n}\n.categoryheadingselected[_ngcontent-%COMP%]{\n    font-size: large;\n    margin-top: 10px;\n    color: #ff4081;\n}\n.categorytagselected[_ngcontent-%COMP%]{\n    font-size: large;\n    margin-top: 10px;\n    color: #3f51b5;\n}\n.tagsheading[_ngcontent-%COMP%]{\n    font-size: large;\n    margin-top: 10px;\n    background-color: #3f51b5;\n    color: white;\n    text-align: center;\n    padding: 5px;\n    border-radius: 10px;\n\n}\n@media( max-width: 414px) {\n    .navbar[_ngcontent-%COMP%] {\n        display:flex;\n        flex-direction: column;\n        align-items:flex-start;\n        padding: 40px;\n        position: relative;\n    }\n\n    #navbarNav[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n    }\n    .row[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .navbar-nav[_ngcontent-%COMP%]{\n                margin: 0;\n\n    }\n    .timeline-margin[_ngcontent-%COMP%]{\n        margin-top: 10px;\n    }\n\n    .master-container[_ngcontent-%COMP%] {\n        margin-top: 5px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLXZpZXczLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0FBR3RCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCOztBQUV6QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7QUFDWjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1COztBQUV2QjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7Z0JBQ1ksU0FBUzs7SUFFckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoidGltZWxpbmUtdmlldzMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXItY29udGFpbmVye1xuICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7O1xufVxuLmNhcmR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIFxufVxuXG4uYWRkYmxvZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmUxZjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmFkZGJsb2cgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2xpZGVyLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA1cHg7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4Oztcbn1cblxuLmZvcm1hdGNvZGV7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAzMHB4O1xufVxuLmZvcm1hdGNvZGUgcHJlIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDsgXG59XG5cbi5wcmV2LCAubmV4dCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhZWM4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OztcblxuXG59XG4ubGVmdHtcbiAgICBsZWZ0OiAwcHg7XG59XG4ubmV4dCB7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWFkZGE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cblxuXG4ucGFnZW51bWJlcntcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowO1xuICAgIHJpZ2h0OiA0MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGFlYzg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBib3JkZXI6IDAgNXB4IDVweCA1cHg7XG5cbn1cbi5wYWdlbnVtYmVydG9we1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhZWM4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgYm9yZGVyOiAwIDVweCA1cHggNXB4O1xuXG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50aXRsZS1yaWdodCB7XG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDFweDtcbn1cbi50aXRsZS1yaWdodCA+ICoge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2F0ZWdvcnloZWFkaW5ne1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59XG4uY2F0ZWdvcnloZWFkaW5nc2VsZWN0ZWR7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjZmY0MDgxO1xufVxuLmNhdGVnb3J5dGFnc2VsZWN0ZWR7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG4udGFnc2hlYWRpbmd7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuQG1lZGlhKCBtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNuYXZiYXJOYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAubmF2YmFyLW5hdntcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICB9XG4gICAgLnRpbWVsaW5lLW1hcmdpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAubWFzdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG5cbn1cblxuIl19 */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




// import 'hammerjs'
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map