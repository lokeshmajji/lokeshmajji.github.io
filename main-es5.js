function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-spinner *ngIf=\"loading\"></app-spinner>\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"!loading\">\n        <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\n            <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" style=\"text-align: center;\">\n                {{errorMessage}}\n            </div>\n            <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input  type=\"email\" id=\"email\" class=\"form-control\" name=\"email\" ngModel required email>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input  type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" ngModel required minlength=\"6\">\n                </div>\n                <div>\n                    <button  type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!authForm.valid\"> {{switchMode == false ? 'SignIn' : 'SignUp' }}</button> |\n                    <button  type=\"button\" class=\"btn btn-primary\" (click)=\"onSwitchMode()\">Switch to {{switchMode == false ? 'SignUp' : 'SignIn' }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/add-blog/add-blog.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/add-blog/add-blog.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogAddBlogAddBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-12 ui-md-12\">\n            <form (ngSubmit)=\"onSubmit(blogForm)\" #blogForm=\"ngForm\">  \n                <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"heading\" name=\"heading\" ngModel>         \n                </div> \n                <p-editor [(ngModel)]=\"blogtext\" [style]=\"{'height':'220px'}\" name=\"blogtext\"></p-editor>\n                <p>Value: {{blogtext||'empty'}}</p>\n                \n                <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"category\" name=\"category\" ngModel>         \n                </div>\n                <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"tags\" name=\"tags\" ngModel>         \n                </div>\n\n                <button pButton type=\"submit\" icon=\"pi pi-check\" iconPos=\"left\" label=\"Save\"></button>\n\n            </form>\n        </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <a class=\"btn btn-primary\" routerLink=\"/blog/add\">Add Post</a>\n        <a class=\"btn btn-primary\" routerLink=\"/blog/view\">View Posts</a>\n\n    </div>\n</div>\n<div class=\"container\" >\n    <router-outlet></router-outlet>\n\n</div>\n\n\n<!-- <p>Category</p>\n<p>Tags</p>\n<p>DC</p>\n<p>DM</p> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/edit-blog/edit-blog.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/edit-blog/edit-blog.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogEditBlogEditBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-md-12\">\n        <form (ngSubmit)=\"onSubmit(blogForm)\" #blogForm=\"ngForm\">  \n            <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"heading\" name=\"heading\" [(ngModel)]=\"heading\">         \n            </div> \n            <p-editor [(ngModel)]=\"blogtext\" [style]=\"{'height':'500px'}\" name=\"blogtext\"></p-editor>            \n            <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"category\" name=\"category\" [(ngModel)]=\"category\">         \n            </div>\n            <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"tags\" name=\"tags\" [(ngModel)]=\"tags\">         \n            </div>\n\n            <button pButton type=\"submit\" icon=\"pi pi-check\" iconPos=\"left\" label=\"Update\"></button>\n\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/view-blog/view-blog.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/view-blog/view-blog.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogViewBlogViewBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div>\n      <h4>Search</h4>\n      <input type=\"text\" class=\"\" (keydown)=\"keypressEvent($event)\" [(ngModel)]=\"searchInput\">\n      <div> Results:{{searchInput}} </div>\n    </div>\n    <div class=\"\" *ngFor=\"let blog of blogs\">\n\n            <div *ngIf=\"searchInput !== undefined && searchInput !== ' '  && blog.value.heading.includes(searchInput)\">\n                    <h4>{{blog.value.heading}}            </h4>\n                  <div>\n                    <a  class=\"badge badge-primary\" (click)=\"onFullPageView($event,blog)\">Full Page View</a>\n                    <a  class=\"badge badge-primary\" (click)=\"onEdit($event,blog)\">Edit</a>\n                    <a  class=\"badge badge-primary\" (click)=\"onAddComment($event,blog)\">Add Comment</a>\n                    <a  class=\"badge badge-primary\" (click)=\"onDeletePost($event,blog)\">Delete Post</a>\n\n                  </div>\n                  <!-- <div [innerHTML]=\"blog.blogtext\"></div> -->\n                  \n                  \n                  <!-- <div class=\"ql-container ql-snow\">\n                      <div class=\"ql-editor\" [innerHTML]=\"blog.blogtext\">\n                      </div>\n                  </div> -->\n\n                  <div id=\"scrolling-container\">\n                    <div id=\"quill-container\">\n                    <p-editor  [(ngModel)]=\"blog.value.blogtext\"  name=\"blogtext\" [readonly]=\"true\"> \n                      <p-header> </p-header>    \n                    </p-editor>  \n                    </div>\n                  </div>\n            </div>\n\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/view-single/view-single.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/view-single/view-single.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogViewSingleViewSingleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"\">\n    <h4>{{heading}} </h4>\n    <div id=\"scrolling-container\">\n      <div id=\"quill-container\">\n       <p-editor  [(ngModel)]=\"blogtext\"  name=\"blogtext\" [readonly]=\"true\"> \n        <p-header> </p-header>    \n      </p-editor>  \n      </div>\n    </div>\n    <hr>\n    <div>\n        <div *ngFor=\"let comment of comments\">\n            <h4>{{comment.value.comment_heading}} </h4>  \n            <p-editor  [(ngModel)]=\"comment.value.comment_text\"  name=\"commenttext\" [readonly]=\"false\"> \n                <p-header> </p-header>    \n              </p-editor>  \n              <button pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\" (click)=\"updateComment($event,comment)\"label=\"Update\"></button>\n              <button pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\" (click)=\"deleteComment($event,comment)\"label=\"Delete\"></button>\n\n        </div>\n    </div>\n    <hr>\n    <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-12 ui-md-12\">\n            <form (ngSubmit)=\"onSubmit(blogForm)\" #blogForm=\"ngForm\">  \n                <div class=\"ui-inputgroup\" style=\"margin-bottom: 10px;\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\" style=\"line-height: 1.25;\"></i></span>\n                    <input type=\"text\" pInputText placeholder=\"commentheading\" name=\"commentheading\" ngModel>         \n                </div> \n                <p-editor [(ngModel)]=\"commenttext\" [style]=\"{'height':'220px'}\" name=\"commenttext\"></p-editor>\n                <button pButton type=\"submit\" icon=\"pi pi-check\" iconPos=\"left\" label=\"Save Comment\"></button>\n            </form>\n        </div>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n    <div class=\"container\">\n        <div class=\"row bg-light text-center\">\n            <div class=\"col-sm-12\">\n                <p>All rights reserved 2020</p>\n            </div>\n        </div>\n    </div>\n    \n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" href=\"#\" routerLink=\"/home\">Masha</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/home\" *ngIf=\"authenticated\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/blog\" *ngIf=\"authenticated\">Blog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/auth\" *ngIf=\"!authenticated\">Authentication</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/Logout\" *ngIf=\"authenticated\" (click)=\"onLogout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4>Welcome Voyager</h4>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loader\">Loading...</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth-guard.component */
    "./src/app/auth/auth-guard.component.ts");
    /* harmony import */


    var _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./blog/add-blog/add-blog.component */
    "./src/app/blog/add-blog/add-blog.component.ts");
    /* harmony import */


    var _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog/view-blog/view-blog.component */
    "./src/app/blog/view-blog/view-blog.component.ts");
    /* harmony import */


    var _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./blog/edit-blog/edit-blog.component */
    "./src/app/blog/edit-blog/edit-blog.component.ts");
    /* harmony import */


    var _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./blog/view-single/view-single.component */
    "./src/app/blog/view-single/view-single.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
      canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
      canActivate: [_auth_auth_guard_component__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      children: [{
        path: 'add',
        component: _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_7__["AddBlogComponent"]
      }, {
        path: 'view',
        component: _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_8__["ViewBlogComponent"]
      }, {
        path: 'edit',
        component: _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_9__["EditBlogComponent"]
      }, {
        path: 'fullview',
        component: _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_10__["ViewSingleComponent"]
      }]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\n    background-color: #296ca8;\n}\n\n.row{\n    \n    min-height: 89vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTZjYTg7XG59XG5cbi5yb3d7XG4gICAgXG4gICAgbWluLWhlaWdodDogODl2aDtcbn0iXX0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'masha';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoLogin();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth-interceptor.service */
    "./src/app/auth/auth-interceptor.service.ts");
    /* harmony import */


    var _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./blog/add-blog/add-blog.component */
    "./src/app/blog/add-blog/add-blog.component.ts");
    /* harmony import */


    var primeng_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/editor */
    "./node_modules/primeng/fesm2015/primeng-editor.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./blog/view-blog/view-blog.component */
    "./src/app/blog/view-blog/view-blog.component.ts");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
    /* harmony import */


    var _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./blog/edit-blog/edit-blog.component */
    "./src/app/blog/edit-blog/edit-blog.component.ts");
    /* harmony import */


    var _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./blog/view-single/view-single.component */
    "./src/app/blog/view-single/view-single.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _blog_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__["AddBlogComponent"], _blog_view_blog_view_blog_component__WEBPACK_IMPORTED_MODULE_21__["ViewBlogComponent"], _blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_23__["EditBlogComponent"], _blog_view_single_view_single_component__WEBPACK_IMPORTED_MODULE_24__["ViewSingleComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_editor__WEBPACK_IMPORTED_MODULE_15__["EditorModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"], primeng_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_22__["QuillModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-guard.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/auth-guard.component.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            var authenticated = !!user;

            if (authenticated) {
              return true;
            } else {
              return _this.router.createUrlTree(['/auth']);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth-interceptor.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/auth/auth-interceptor.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppAuthAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptorService = /*#__PURE__*/function () {
      function AuthInterceptorService(authService) {
        _classCallCheck(this, AuthInterceptorService);

        this.authService = authService;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (user) {
            //console.log("Original Req:" + req)
            if (!user) {
              return next.handle(req);
            }

            var modifiedReq = req.clone({
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append("auth", user.token)
            }); //console.log("Modified Req:" + modifiedReq)

            return next.handle(modifiedReq);
          }));
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(authService, router) {
        _classCallCheck(this, AuthComponent);

        this.authService = authService;
        this.router = router;
        this.switchMode = false;
        this.loading = false;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSwitchMode",
        value: function onSwitchMode() {
          this.switchMode = !this.switchMode;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(authForm) {
          var _this2 = this;

          this.loading = true;
          var authObservable;

          if (!this.switchMode) {
            authObservable = this.authService.signIn(authForm.value.email, authForm.value.password);
          } else {
            authObservable = this.authService.signUp(authForm.value.email, authForm.value.password);
          }

          authObservable.subscribe(function (responseData) {
            _this2.loading = false;

            _this2.router.navigate(["/blog"]);
          }, function (error) {
            _this2.loading = false;
            _this2.errorMessage = error;
          });
          authForm.reset();
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"]
    })], AuthComponent);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/auth/user.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router; //user = new Subject<User>();

        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDi8b7mjzP1mpNx_e87ZxItpoH7zF6yvcY';
        this.signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi8b7mjzP1mpNx_e87ZxItpoH7zF6yvcY';
      }

      _createClass(AuthService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp(email, password) {
          var _this3 = this;

          return this.http.post(this.signUpUrl, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_this3.handleError(error));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            return _this3.handleAuthentication(res);
          }));
        }
      }, {
        key: "signIn",
        value: function signIn(email, password) {
          var _this4 = this;

          return this.http.post(this.signInUrl, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_this4.handleError(error));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            return _this4.handleAuthentication(res);
          }));
        }
      }, {
        key: "handleAuthentication",
        value: function handleAuthentication(res) {
          var expirationDate = new Date(new Date().getTime() + +res.expiresIn * 1000);
          var user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](res.email, res.localId, res.idToken, expirationDate);
          this.user.next(user);
          this.autoLogout(+res.expiresIn * 1000); //convert to ms for setinterval

          localStorage.setItem('userData', JSON.stringify(user));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = 'An invalid error occured';

          if (!error.error || !error.error.error) {
            return errorMessage;
          }

          switch (error.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errorMessage = "Email not found";
              break;

            case 'INVALID_PASSWORD':
              errorMessage = "Invalid password";
              break;

            default:
              errorMessage = "An unknown error occured";
          }

          return errorMessage;
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var userData = localStorage.getItem('userData');

          if (userData) {
            var user = JSON.parse(userData);
            var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](user.email, user.id, user._token, new Date(user._tokenExpirationDate));
            this.user.next(loadedUser);
            this.autoLogout(new Date(user._tokenExpirationDate).getTime() - new Date().getTime()); //convert to ms for setinterval
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user.next(null);
          this.router.navigate(["/auth"]);
          localStorage.removeItem('userData');

          if (this.logoutInterval) {
            clearInterval(this.logoutInterval);
          }

          this.logoutInterval = null;
        }
      }, {
        key: "autoLogout",
        value: function autoLogout(expiration) {
          var _this5 = this;

          this.logoutInterval = setInterval(function () {
            _this5.logout();
          }, expiration);
        }
      }, {
        key: "getUserEmail",
        value: function getUserEmail() {
          return this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (user) {
            return user.email;
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = /*#__PURE__*/function () {
      function User(email, id, _token, _tokenExpirationDate) {
        _classCallCheck(this, User);

        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
      }

      _createClass(User, [{
        key: "token",
        get: function get() {
          if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
          }

          return this._token;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/blog/add-blog/add-blog.component.css":
  /*!******************************************************!*\
    !*** ./src/app/blog/add-blog/add-blog.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogAddBlogAddBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/blog/add-blog/add-blog.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/blog/add-blog/add-blog.component.ts ***!
    \*****************************************************/

  /*! exports provided: AddBlogComponent */

  /***/
  function srcAppBlogAddBlogAddBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function () {
      return AddBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/dao/data.service */
    "./src/app/dao/data.service.ts");

    var AddBlogComponent = /*#__PURE__*/function () {
      function AddBlogComponent(dataservice) {
        _classCallCheck(this, AddBlogComponent);

        this.dataservice = dataservice;
      }

      _createClass(AddBlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form.value);
          this.dataservice.saveBlog({
            heading: form.value.heading,
            blogtext: form.value.blogtext,
            category: form.value.category,
            tags: form.value.tags,
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
          }).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return AddBlogComponent;
    }();

    AddBlogComponent.ctorParameters = function () {
      return [{
        type: src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    AddBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/add-blog/add-blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-blog.component.css */
      "./src/app/blog/add-blog/add-blog.component.css"))["default"]]
    })], AddBlogComponent);
    /***/
  },

  /***/
  "./src/app/blog/blog.component.css":
  /*!*****************************************!*\
    !*** ./src/app/blog/blog.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row{\n    /* color: #fff; */\n    /* background-color: #4992d3; */\n}\n\n\n.myblog{\n    display: flex;\n    color: #fff;\n    background-color: #4992d3;\n    position: relative;\n}\n\n\n.blogid{\n    background-color: #4992d3;\n    color:white;\n    /* border: 1px solid white; */\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    align-items: center;\n    justify-content: center;  \n    text-align: center;\n    top: -15px;\n    left: -15px;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MmQzOyAqL1xufVxuXG5cbi5teWJsb2d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MmQzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJsb2dpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MmQzO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);

        this.blogs = [{
          id: 1,
          heading: 'First',
          blogtext: 'Something goes here'
        }, {
          id: 2,
          heading: 'Second',
          blogtext: 'Something goes here'
        }];
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.css */
      "./src/app/blog/blog.component.css"))["default"]]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/blog/edit-blog/edit-blog.component.css":
  /*!********************************************************!*\
    !*** ./src/app/blog/edit-blog/edit-blog.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogEditBlogEditBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvZWRpdC1ibG9nL2VkaXQtYmxvZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/blog/edit-blog/edit-blog.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/blog/edit-blog/edit-blog.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditBlogComponent */

  /***/
  function srcAppBlogEditBlogEditBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function () {
      return EditBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/dao/data.service */
    "./src/app/dao/data.service.ts");

    var EditBlogComponent = /*#__PURE__*/function () {
      function EditBlogComponent(dataservice) {
        _classCallCheck(this, EditBlogComponent);

        this.dataservice = dataservice;
        this.blogtext = "default blog ";
        this.heading = "default heading";
        this.tags = [];
        this.category = "";
      }

      _createClass(EditBlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          console.log(this.heading);
          this.dataservice.blogSubject.subscribe(function (item) {
            console.log("Received:--------" + new Date());
            console.log(item.value.blogtext);
            _this6.blogtext = item.value.blogtext;
            _this6.heading = item.value.heading;
            _this6.tags = item.value.tags;
            _this6.category = item.value.category;
            _this6.key = item.key;
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {//console.log("After view checked");
          //console.log(this.heading)
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("Destroying:" + this.heading);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form);
          this.dataservice.updateBlog(this.key, {
            heading: form.value.heading,
            blogtext: form.value.blogtext,
            category: form.value.category,
            tags: form.value.tags,
            datecreated: new Date(),
            datemodified: new Date(),
            comments: [new Comment()]
          }).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return EditBlogComponent;
    }();

    EditBlogComponent.ctorParameters = function () {
      return [{
        type: src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    EditBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/edit-blog/edit-blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-blog.component.css */
      "./src/app/blog/edit-blog/edit-blog.component.css"))["default"]]
    })], EditBlogComponent);
    /***/
  },

  /***/
  "./src/app/blog/view-blog/view-blog.component.css":
  /*!********************************************************!*\
    !*** ./src/app/blog/view-blog/view-blog.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogViewBlogViewBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .ql-toolbar.ql-snow {\n    padding: 0px;\n    /* border: none; */\n}\n\n::ng-deep .ql-container.ql-snow {\n    /* border-top: 1px solid #ccc; */\n    /* height: 10em;  */\n}\n\n/* Tell Quill not to scroll */\n\n#quill-container {\n    height: auto;\n    min-height: 100%;\n    padding: 50px;\n  }\n\n#quill-container .ql-editor {\n    font-size: 18px;\n    overflow-y: visible; \n  }\n\n/* Specify our own scrolling container */\n\n#scrolling-container {\n    height: 100%;\n    min-height: 100%;\n    overflow-y: auto;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy92aWV3LWJsb2cvdmlldy1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFHQSw2QkFBNkI7O0FBQzdCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVGLHdDQUF3Qzs7QUFDeEM7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvdmlldy1ibG9nL3ZpZXctYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5xbC10b29sYmFyLnFsLXNub3cge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvKiBib3JkZXI6IG5vbmU7ICovXG59XG5cbjo6bmctZGVlcCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjOyAqL1xuICAgIC8qIGhlaWdodDogMTBlbTsgICovXG59XG5cblxuLyogVGVsbCBRdWlsbCBub3QgdG8gc2Nyb2xsICovXG4jcXVpbGwtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG5cbiNxdWlsbC1jb250YWluZXIgLnFsLWVkaXRvciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7IFxuICB9XG4gIFxuLyogU3BlY2lmeSBvdXIgb3duIHNjcm9sbGluZyBjb250YWluZXIgKi9cbiNzY3JvbGxpbmctY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/blog/view-blog/view-blog.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/blog/view-blog/view-blog.component.ts ***!
    \*******************************************************/

  /*! exports provided: ViewBlogComponent */

  /***/
  function srcAppBlogViewBlogViewBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewBlogComponent", function () {
      return ViewBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/dao/data.service */
    "./src/app/dao/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewBlogComponent = /*#__PURE__*/function () {
      function ViewBlogComponent(dataService, router) {
        _classCallCheck(this, ViewBlogComponent);

        this.dataService = dataService;
        this.router = router;
        this.blogs = [];
        this.searchInput = '';
        this.editBlogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ViewBlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.dataService.getBlogs().subscribe(function (res) {
            for (var _i = 0, _Object$keys = Object.keys(res); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];

              //console.log(key)
              //console.log(res[key])
              _this7.blogs.push({
                key: key,
                value: res[key]
              });
            } // for(let obj of Object.values(res)){
            //       console.log(obj)
            //       this.blogs.push(obj);
            // }

          }, function (err) {
            console.log(err);
          }); //  var quill = new Quill('#quill-container', {
          //   modules: {
          //     toolbar: [
          //       [{ header: [1, 2, false] }],
          //       ['bold', 'italic', 'underline'],
          //       ['image', 'code-block']
          //     ]
          //   },
          //   scrollingContainer: '#scrolling-container', 
          //   placeholder: 'Compose an epic...',
          //   theme: 'bubble'
          // });
        }
      }, {
        key: "onEdit",
        value: function onEdit(event, blogkv) {
          console.log("Sending:" + blogkv.key + " at " + new Date());
          this.dataService.blogSubject.next(blogkv);
          this.router.navigate(['blog', 'edit']);
        }
      }, {
        key: "onAddComment",
        value: function onAddComment(event) {}
      }, {
        key: "onFullPageView",
        value: function onFullPageView(event, blogkv) {
          console.log("Sending to full page view:" + blogkv.key + " at " + new Date());
          this.dataService.blogSubject.next(blogkv);
          this.router.navigate(['blog', 'fullview']);
        }
      }, {
        key: "keypressEvent",
        value: function keypressEvent(event) {//console.log(event);
          //console.log(this.searchInput)
        }
      }, {
        key: "onDeletePost",
        value: function onDeletePost(event, post) {
          this.dataService.deletePost(post.key).subscribe(function (msg) {
            console.log(msg);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ViewBlogComponent;
    }();

    ViewBlogComponent.ctorParameters = function () {
      return [{
        type: src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('editBlogItem')], ViewBlogComponent.prototype, "editBlogEvent", void 0);
    ViewBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/view-blog/view-blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-blog.component.css */
      "./src/app/blog/view-blog/view-blog.component.css"))["default"]]
    })], ViewBlogComponent);
    /***/
  },

  /***/
  "./src/app/blog/view-single/view-single.component.css":
  /*!************************************************************!*\
    !*** ./src/app/blog/view-single/view-single.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogViewSingleViewSingleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvdmlldy1zaW5nbGUvdmlldy1zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/blog/view-single/view-single.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/blog/view-single/view-single.component.ts ***!
    \***********************************************************/

  /*! exports provided: ViewSingleComponent */

  /***/
  function srcAppBlogViewSingleViewSingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSingleComponent", function () {
      return ViewSingleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/dao/data.service */
    "./src/app/dao/data.service.ts");
    /* harmony import */


    var _model_comment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/comment.model */
    "./src/app/model/comment.model.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var ViewSingleComponent = /*#__PURE__*/function () {
      function ViewSingleComponent(dataservice, authService) {
        _classCallCheck(this, ViewSingleComponent);

        this.dataservice = dataservice;
        this.authService = authService;
        this.comments = [];
      }

      _createClass(ViewSingleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.dataservice.blogSubject.subscribe(function (item) {
            //console.log("Received:--------"+ new Date())
            //console.log( item.value.blogtext);
            _this8.blogtext = item.value.blogtext;
            _this8.heading = item.value.heading;
            _this8.tags = item.value.tags;
            _this8.category = item.value.category;
            _this8.key = item.key;
            console.log("Try to fetch comments with key:" + _this8.key);

            _this8.dataservice.getComments(_this8.key.trim()).subscribe(function (res) {
              //console.log(res);
              for (var _i2 = 0, _Object$keys2 = Object.keys(res); _i2 < _Object$keys2.length; _i2++) {
                var key = _Object$keys2[_i2];

                _this8.comments.push({
                  key: key,
                  value: res[key]
                });
              }
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form.value);
          this.dataservice.addComment(this.key, new _model_comment_model__WEBPACK_IMPORTED_MODULE_3__["BlogComment"](form.value.commentheading, form.value.commenttext)).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateComment",
        value: function updateComment($event, comment) {
          this.dataservice.updateComment(this.key, comment.key, comment.value).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "deleteComment",
        value: function deleteComment($event, comment) {
          this.dataservice.deleteComment(this.key, comment.key).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ViewSingleComponent;
    }();

    ViewSingleComponent.ctorParameters = function () {
      return [{
        type: src_app_dao_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ViewSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-single',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-single.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/view-single/view-single.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-single.component.css */
      "./src/app/blog/view-single/view-single.component.css"))["default"]]
    })], ViewSingleComponent);
    /***/
  },

  /***/
  "./src/app/dao/data.service.ts":
  /*!*************************************!*\
    !*** ./src/app/dao/data.service.ts ***!
    \*************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDaoDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _model_blog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/blog.model */
    "./src/app/model/blog.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var DataService = /*#__PURE__*/function () {
      //blogSubject  = new Subject<{key: string, value: Blog}>();
      function DataService(http, authService) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.authService = authService;
        this.blogSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          key: "TEST ",
          value: new _model_blog_model__WEBPACK_IMPORTED_MODULE_3__["Blog"]("", "", new Date(), new Date(), [""], "", [])
        });
      }

      _createClass(DataService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUserEmail",
        value: function getUserEmail() {
          return this.authService.user.value.email.replace('.', '-').replace('@', '-');
        }
      }, {
        key: "saveBlog",
        value: function saveBlog(blog) {
          //return this.http.post('https://masha-3f6b0.firebaseio.com/posts.json',blog);  
          if (this.getUserEmail()) {
            return this.http.post("https://masha-3f6b0.firebaseio.com/posts/".concat(this.getUserEmail(), ".json"), blog);
          } else {
            console.log("retun nothing");
          }
        }
      }, {
        key: "getBlogs",
        value: function getBlogs() {
          return this.http.get("https://masha-3f6b0.firebaseio.com/posts/".concat(this.getUserEmail(), ".json"));
        }
      }, {
        key: "updateBlog",
        value: function updateBlog(key, blog) {
          // curl -X PUT -d '{
          //     "alanisawesome": {
          //       "name": "Alan Turing",
          //       "birthday": "June 23, 1912"
          //     }
          //   }' 'https://docs-examples.firebaseio.com/rest/saving-data/fireblog/users.json'
          return this.http.put("https://masha-3f6b0.firebaseio.com/posts/".concat(this.getUserEmail(), "/").concat(key, ".json"), blog);
        }
      }, {
        key: "addComment",
        value: function addComment(key, comment) {
          return this.http.post("https://masha-3f6b0.firebaseio.com/comments/".concat(this.getUserEmail(), "/").concat(key, ".json"), comment);
        }
      }, {
        key: "getComments",
        value: function getComments(key) {
          //console.log(`https://masha-3f6b0.firebaseio.com/comments/${this.getUserEmail()}}/${key}.json`)
          return this.http.get("https://masha-3f6b0.firebaseio.com/comments/".concat(this.getUserEmail(), "/").concat(key, ".json"));
        }
      }, {
        key: "updateComment",
        value: function updateComment(postkey, commentkey, comment) {
          // curl -X PUT -d '{
          //     "alanisawesome": {
          //       "name": "Alan Turing",
          //       "birthday": "June 23, 1912"
          //     }
          //   }' 'https://docs-examples.firebaseio.com/rest/saving-data/fireblog/users.json'
          return this.http.put("https://masha-3f6b0.firebaseio.com/comments/".concat(this.getUserEmail(), "/").concat(postkey, "/").concat(commentkey, ".json"), comment);
        }
      }, {
        key: "deletePost",
        value: function deletePost(key) {
          console.log("https://masha-3f6b0.firebaseio.com/posts/".concat(this.getUserEmail(), "/").concat(key, ".json"));
          return this.http["delete"]("https://masha-3f6b0.firebaseio.com/posts/".concat(this.getUserEmail(), "/").concat(key, ".json"));
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(postkey, commentkey) {
          return this.http["delete"]("https://masha-3f6b0.firebaseio.com/comments/".concat(this.getUserEmail(), "/").concat(postkey, "/").concat(commentkey, ".json"));
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav{\n    background-color: #296ca8;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk2Y2E4O1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.authenticated = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.userSubscription = this.authService.user.subscribe(function (user) {
            _this9.authenticated = !!user;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSubscription.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/model/blog.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/blog.model.ts ***!
    \*************************************/

  /*! exports provided: Blog */

  /***/
  function srcAppModelBlogModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog", function () {
      return Blog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Blog = function Blog(heading, blogtext, datecreated, datemodified, tags, category, comments) {
      _classCallCheck(this, Blog);

      this.heading = heading;
      this.blogtext = blogtext;
      this.datecreated = datecreated;
      this.datemodified = datemodified;
      this.tags = tags;
      this.category = category;
      this.comments = comments;
    };
    /***/

  },

  /***/
  "./src/app/model/comment.model.ts":
  /*!****************************************!*\
    !*** ./src/app/model/comment.model.ts ***!
    \****************************************/

  /*! exports provided: BlogComment */

  /***/
  function srcAppModelCommentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComment", function () {
      return BlogComment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BlogComment = function BlogComment(comment_heading, comment_text) {
      _classCallCheck(this, BlogComment);

      this.comment_heading = comment_heading;
      this.comment_text = comment_text;
    };
    /***/

  },

  /***/
  "./src/app/spinner/spinner.component.css":
  /*!***********************************************!*\
    !*** ./src/app/spinner/spinner.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpinnerSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader {\n    color: #ffffff;\n    font-size: 10px;\n    margin: 50px auto;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    -webkit-animation: load4 1.3s infinite linear;\n    animation: load4 1.3s infinite linear;\n    transform: translateZ(0);\n  }\n  @-webkit-keyframes load4 {\n    0%,\n    100% {\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n  }\n  @keyframes load4 {\n    0%,\n    100% {\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3QyxxQ0FBcUM7SUFHckMsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRTs7TUFFRSxxSUFBcUk7SUFDdkk7SUFDQTtNQUNFLG1JQUFtSTtJQUNySTtJQUNBO01BQ0UscUlBQXFJO0lBQ3ZJO0lBQ0E7TUFDRSx5SUFBeUk7SUFDM0k7SUFDQTtNQUNFLHVJQUF1STtJQUN6STtJQUNBO01BQ0UsbUlBQW1JO0lBQ3JJO0lBQ0E7TUFDRSx5SUFBeUk7SUFDM0k7SUFDQTtNQUNFLG9JQUFvSTtJQUN0STtFQUNGO0VBQ0E7SUFDRTs7TUFFRSxxSUFBcUk7SUFDdkk7SUFDQTtNQUNFLG1JQUFtSTtJQUNySTtJQUNBO01BQ0UscUlBQXFJO0lBQ3ZJO0lBQ0E7TUFDRSx5SUFBeUk7SUFDM0k7SUFDQTtNQUNFLHVJQUF1STtJQUN6STtJQUNBO01BQ0UsbUlBQW1JO0lBQ3JJO0lBQ0E7TUFDRSx5SUFBeUk7SUFDM0k7SUFDQTtNQUNFLG9JQUFvSTtJQUN0STtFQUNGIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gICAgfVxuICAgIDEyLjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgMzcuNSUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDYyLjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gICAgfVxuICAgIDg3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkNCB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xuICAgIH1cbiAgICAxMi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDM3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xuICAgIH1cbiAgICA2Mi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xuICAgIH1cbiAgICA4Ny41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XG4gICAgfVxuICB9XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/spinner/spinner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/spinner/spinner.component.ts ***!
    \**********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.css */
      "./src/app/spinner/spinner.component.css"))["default"]]
    })], SpinnerComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! /home/lokeshmajji/lokesh/github/masha/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map