(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GGL":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "vG3S");
/* harmony import */ var _nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nucleoicons.component.scss */ "IBmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    NucleoiconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nucleoicons',
            template: _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\YASH\Downloads\now-ui-kit-angular-master\src\main.ts */"zUnb");


/***/ }),

/***/ "0Inq":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1E4i":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n");

/***/ }),

/***/ "1RpN":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <div id=\"buttons\">\n          <h4>Buttons</h4>\n          <p class=\"category\">Pick your style</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n                  </button>\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  </button>\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your size</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\n                  <button class=\"btn btn-primary\">Regular</button>\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your color</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn\">Default</button>\n                  <button class=\"btn btn-primary\">Primary</button>\n                  <button class=\"btn btn-info\">Info</button>\n                  <button class=\"btn btn-success\">Success</button>\n                  <button class=\"btn btn-warning\">Warning</button>\n                  <button class=\"btn btn-danger\">Danger</button>\n                  <button class=\"btn btn-neutral\">Neutral</button>\n              </div>\n          </div>\n          <h4>Links</h4>\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <button class=\"btn btn-link\">Default</button>\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\n                  <button class=\"btn btn-link btn-info\">Info</button>\n                  <button class=\"btn btn-link btn-success\">Success</button>\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\n              </div>\n          </div>\n      </div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"fa fa-user-circle\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row\" id=\"checkRadios\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\">\n                    <span class=\"form-check-sign\"></span>\n                    Unchecked\n                </label>\n            </div>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Checked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Unchecked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Checked\n                </label>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                    <span class=\"form-check-sign\"></span>\n                    Radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Radio is on\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is on\n                </label>\n            </div>\n        </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "48c9":
/*!***********************************************!*\
  !*** ./src/app/careers/careers.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJlZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "4R/m":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n");

/***/ }),

/***/ "4Wxn":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5QX9":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"page-header\" filter-color=\"orange\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-4 content-center\">\n            <div class=\"card card-login card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header header-primary text-center\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"content\">\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                        </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                      </div>\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                        </div>\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                      </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                    </div>\n                    <div class=\"pull-left\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\n                        </h6>\n                    </div>\n                    <div class=\"pull-right\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                        </h6>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n              {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "7BkA":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "P6R5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    NgbdModalBasic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ngbd-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "7pPp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_5__);






var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_5__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordionConfig"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-components',
            template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s 1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "9GRG":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <h1 class=\"title\">This is our great company.</h1>\n                <div class=\"text-center\">\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-google-plus\"></i>\n                  </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-about-us\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Who we are?</h2>\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\n                </div>\n            </div>\n            <div class=\"separator separator-primary\"></div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                <br>\n                                <br>\n                                <small>-NOAA</small>\n                            </p>\n                        </div>\n                        <!-- Second image on the left side of the article -->\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                        <p>\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\n                        </p>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-team text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Here is our team</h2>\n            <div class=\"team\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Romina Hadid</h4>\n                            <p class=\"category text-primary\">Model</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Ryan Tompson</h4>\n                            <p class=\"category text-primary\">Designer</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Eva Jenner</h4>\n                            <p class=\"category text-primary\">Fashion</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-google-plus\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-youtube\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-contact-us text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Want to work with us?</h2>\n            <p class=\"description\">Your project is very important to us.</p>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"now-ui-icons users_circle-08\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                    <div class=\"textarea-container\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                    </div>\n                    <div class=\"send-button\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "9ldr":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "1E4i");
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component.scss */ "oy3u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NotificationComponent.ctorParameters = function () { return []; };
    NotificationComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-notification',
            template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "ARBA":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AXTl":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "9GRG");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component.scss */ "ARBA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "D+Yx":
/*!**********************************************!*\
  !*** ./src/app/careers/careers.component.ts ***!
  \**********************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_careers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./careers.component.html */ "W5zf");
/* harmony import */ var _careers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./careers.component.css */ "48c9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CareersComponent = /** @class */ (function () {
    function CareersComponent() {
    }
    CareersComponent.prototype.ngOnInit = function () {
    };
    CareersComponent.ctorParameters = function () { return []; };
    CareersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-careers',
            template: _raw_loader_careers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_careers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "I0SY":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "IBmT":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxudWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQSwrREFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUksY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBOztFQUVJLGdCQUFBO0FBQUo7O0FBR0E7O0VBRUksWUFBQTtBQUFKOztBQUdBOzs7O0VBSUksV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFLQTs7Ozs7O2tDQUFBOztBQVFBOzs7O2tDQUFBOztBQU1BOzs7RUFHSSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9BOzs7O2tDQUFBOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtBQUxKOztBQVFBOzs7RUFHSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBRUE7O0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFMSjs7QUFRQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFMTjtBQUNGOztBQVFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFOTjtBQUNGOztBQVNBOzs7O2tDQUFBOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnSUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBS0EsbUJBQUE7RUFLQSwyQkFBQTtFQUdBLDhDQUFBO0FBUko7O0FBV0E7RUFDSSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksc0JBQUE7QUFSSjs7QUFXQTtFQUNJLG1CQUFBO0VBS0EsbUJBQUE7RUFHQSw0Q0FBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFSSjs7QUFXQTtFQUNJLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUdBLDJCQUFBO0FBUko7O0FBV0E7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUtBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUdBLHlDQUFBO0FBUko7O0FBV0E7RUFDSSxTQUFBO0VBS0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFLQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGlDQUFBO0FBUko7O0FBV0E7O0VBRUksbUJBQUE7QUFSSjs7QUFXQTtFQUNJLE1BQUE7RUFLQSx5QkFBQTtBQVJKOztBQVdBO0VBQ0ksU0FBQTtFQUtBLHlCQUFBO0FBUko7O0FBV0E7RUFDSSxxQkFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQVJKIiwiZmlsZSI6Im51Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5OdWNsZW8gT3V0bGluZSBXZWIgRm9udCAtIG51Y2xlb2FwcC5jb20vXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xuQ3JlYXRlZCB1c2luZyBJY29Nb29uIC0gaWNvbW9vbi5pb1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5QcmltYXJ5IHN0eWxlXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuYSB7XG4gICAgY29sb3I6ICM3NjZhY2Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NYWluIGNvbXBvbmVudHNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTIwcHggMCAwO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNmVtO1xufVxuXG5oZWFkZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIHBhZGRpbmc6IDAgMCAxZW0gLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG51bDo6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbnVsIGxpIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG59XG5cbnVsIHAsXG51bCBlbSxcbnVsIGlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCBwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gICAgY29sb3I6ICNlZmVmZWY7XG59XG5cbnVsIGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnVsIGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdbJztcbn1cblxudWwgZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnXSc7XG59XG5cbnVsIGlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY2QtbmF2IHVsIHtcbiAgICAvKiBtb2JpbGUgZmlyc3QgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICByaWdodDogNSU7XG4gICAgYm90dG9tOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xufVxuXG4jY2QtbmF2IHVsIGxpIHtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG59XG5cbiNjZC1uYXYgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY2O1xufVxuXG4jY2QtbmF2IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1JTtcbiAgICByaWdodDogNSU7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW4ge1xuICAgIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xuICAgIHRvcDogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCA3NCwgMTAwLCAwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbi5ub3ctdWktaWNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcbiAgICBzcGVhazogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuIl19 */");

/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "ez78");
/* harmony import */ var _product_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.css */ "7BkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.ctorParameters = function () { return []; };
    ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-product',
            template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_product_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n\n    <div class=\"page-header clear-filter\" filter-color=\"blue\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\n\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center brand text-center\" style=\"padding-top: 150px;\">\n                <img @fade class=\"n-logo\" width=\"300\" src=\"assets/img/now-logo.png\" alt=\"\">\n                <h1 class=\"h1-seo\" style=\"font-weight: bolder;font-family: BigJohn;letter-spacing: 12px;\">GOAT AI</h1>\n                <h3 typingAnimation [typeSpeed]=\"50\" [startDelay]=\" 2000 \" (complete)=\"onComplete() \">We are making tomorrow</h3>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"main \">\n        <div class=\"section section-about-us \">\n            <div class=\"container \">\n                <div class=\"row \">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center \">\n                        <h2 class=\"title \">UNLOCK THE POWER OF YOUR SURROUNDINGS</h2>\n                        <h5 class=\"description \" style=\"font-weight: 400; \">Goat AI delivers world class products by leveraging AI to solve everyday problems. Use it to accelerate your industrial growth.</h5>\n                    </div>\n                </div>\n                <div class=\"separator separator-info \"></div>\n                <div class=\"section-story-overview \">\n                    <div class=\"row \">\n                        <div class=\"col-md-6 \">\n                            <div class=\"image-container image-left \" style=\"background-image: url( 'assets/img/product-2a.jpg') \">\n                                <!-- First image on the left side -->\n                                <p class=\"blockquote blockquote-info \">\"Modernizing our homes with AI is not a thing of future anymore. \"\n                                    <br>\n                                    <br>\n                                    <small>-Jake Shelton</small>\n                                </p>\n                            </div>\n                            <!-- Second image on the left side of the article -->\n\n                        </div>\n                        <div class=\"col-md-5 \">\n                            <!-- First image on the right side, above the article -->\n                            <div class=\"image-container image-right \" style=\"background-image: url( 'assets/img/bg1.jpg') \"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"separator separator-info \"></div>\n\n        <div class=\"section section-team text-center \">\n            <div class=\"container \">\n                <h2 class=\"title \">Our Products</h2>\n                <div class=\"team \">\n                    <div class=\"row \">\n                        <div class=\"col-md-6 \">\n                            <div class=\"team-player \">\n                                <img src=\"assets/img/product-1.jpg \" width=\"300 \" alt=\"Thumbnail Image \" class=\"rounded-circle img-fluid img-raised \">\n                                <h4 class=\"title \">ETDMS-1</h4>\n                                <p class=\"category text-info \">DRIVER FATIGUE MONITORING</p>\n\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 \">\n                            <div class=\"team-player \">\n                                <img src=\"assets/img/product-2.jpg \" width=\"300 \" alt=\"Thumbnail Image \" class=\"rounded-circle img-fluid img-raised \">\n                                <h4 class=\"title \">ST-CD-24V-SS S-Type CoolDome</h4>\n                                <p class=\"category text-info \">Active Cooling Enclosure</p>\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row \">\n                        <div class=\"col-md-12 \">\n                            <a class=\"btn btn-info btn-round btn-lg \" routerLink='/products'>Learn More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"section section-contact-us text-center \">\n            <div class=\"container \">\n                <h2 class=\"title \">Want to work with us?</h2>\n                <p class=\"description \">Your project is very important to us.</p>\n                <div class=\"row \">\n                    <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto \">\n                        <div class=\"send-button \">\n                            <a href=\"#pablo \" class=\"btn btn-info btn-round btn-block btn-lg \">Contact Us</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n\n\n        <div class=\"section section-signup \" style=\"background-image: url( 'assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px; \">\n            <div class=\"container \" style=\"text-align: center; \">\n                <div class=\"header header-primary text-center \">\n                    <div class=\"logo-container \" style=\"padding-bottom: 100px; \">\n                        <img width=\"50 \" src=\"assets/img/now-logo.png \" alt=\" \">\n                    </div>\n                </div>\n                <h2 class=\"title text-light \">Want to work with us?</h2>\n                <p class=\"description text-light \">Your project is very important to us.</p>\n                <div class=\"row \">\n                    <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto \">\n                        <div class=\"send-button \">\n                            <a routerLink='/contactus' class=\"btn btn-info btn-round btn-block btn-lg \">Contact Us</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "NqkC":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-us.component.html */ "wibN");
/* harmony import */ var _contact_us_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.component.css */ "I0SY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.ctorParameters = function () { return []; };
    ContactUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contact-us',
            template: _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_contact_us_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "P6R5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\n Launch Modal\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n   Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "QhSr":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "4R/m");
/* harmony import */ var _typography_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography.component.scss */ "0Inq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");










var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location, spinner) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.spinner = spinner;
        this.loaded = false;
        this.data = new Date();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 2000);
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_this.location.path() === '/index' || _this.location.path() === '/') {
                    // remove logic
                    console.log(_this.location.path());
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T9Od":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>\n</app-navbar>\n<router-outlet></router-outlet>\n<footer class=\"footer\" data-background-color=\"black\">\n    <div class=\"container\">\n        <nav>\n            <ul>\n                <li>\n                    <a routerLink='/'>\n                        GOAT AI\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/about-us \">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a routerLink='/careers '>\n                        Careers\n                    </a>\n                </li>\n                <li>\n                    <a routerLink='/products '>Products</a>\n                </li>\n                <li>\n                    <a routerLink='/contactus'>Contact Us</a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\" copyright \">\n            &copy; {{data | date: 'yyyy '}},\n            <a href=\"https://www.creative-tim.com \" target=\"_blank \">Goat AI</a>.\n        </div>\n    </div>\n</footer>\n<ngx-spinner></ngx-spinner>");

/***/ }),

/***/ "W5zf":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"section  text-center\" style=\"margin-top: 100px\">\n        <div class=\"container\">\n            <h2 class=\"title text\" style=\"margin-bottom: 100px;\">Careers</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <img src=\"/assets/img/careers-side.jpg\" alt=\"\">\n                </div>\n                <div class=\"col-md-6\">\n                    <h2 class=\"text-info\">Making things official</h2>\n                    <h4>We hire people who are good at what they do. But just as important, are a <span class=\"text-info\">good match for us</span>.</h4>\n                </div>\n            </div>\n\n            <br>\n            <div class=\"separator separator-info\"></div>\n\n            <div class=\"row \">\n                <div class=\"col-md-12\">\n                    <h3 class=\"text-center \">Job Openings</h3>\n                    <div class=\"text-left\">\n                        <h5 class=\"text-info\">Software Engineer (AI and Robotics Team)</h5>\n                        <p>We are a start-up company with the aim of providing complete engineering solutions to address some of the toughest challenges in the industry. Our expertise should span across robotics, unmanned systems, autonomous vehicles (UAV,\n                            UGV, USV), CV (Computer Vision), AR, VR, Machine learning, Deep Learning, and vehicle building for the defence, security and rescue, logistics, and medical sector, ranging from product conceptualization and prototype development\n                            to mass production. To ensure commitment to the highest quality and performance, we are hiring engineers with the skill and the passion. We are tinkerers, innovators, and makers, and seek the like-minded to join us.\n                        </p>\n                        <br>\n                        <h6>Responsibilities </h6>\n                        <p>The team focuses on the development and testing of navigation software for autonomous ground, air, and water surface vehicles, aiming at continuous operation in dynamic and human-robot shared environments. We work on control, localization,\n                            path planning, multi-agent systems, perception and decision-making, and develop robust software to ensure constant reliability in safety-critical applications. Fast prototyping and iterations, progressive hardware-in-the-loop\n                            development, and extension of quality open-source software is at the core of our team’s activity.\n                        </p>\n                        <p>Main Tasks: </p>\n                        <ul>\n                            <li>Quickly assimilate large code libraries and algorithms from scientific literature\n                            </li>\n                            <li>Develop and maintain proprietary and open-source software applied to AI and robotic navigation problems using professional software development practices to ensure maximum code robustness and extensibility\n                            </li>\n                            <li>Provide support for on-site deployment of the software on robots and ground stations at our customers' facilities\n                            </li>\n                        </ul>\n                        <br>\n                        <h6>Requirements </h6>\n                        <p> Essential requirements:</p>\n                        <ul>\n                            <li>Solid background in software development, algorithms, and AI-related problems\n                            </li>\n                            <li>Background and/or demonstrated interest in robotics or AI problems\n                            </li>\n                            <li>Excellent C++ skills, Python and shell scripting are a strong plus\n                            </li>\n                            <li>Strong Linux skills (experience with RTOS is a plus)\n                            </li>\n                            <li>Proficient in version control and release cycles, preferably using Git\n                            </li>\n                            <li>Proficient in unit testing (preferably using the GTest framework) and static/dynamic code analysis\n                            </li>\n                            <li>Proficient in an advanced IDE\n                            </li>\n                            <li>Desire to work in a fast-paced, dynamic, small-team environment\n                            </li>\n                            <li>Strong sense of initiative and rock-solid team spirit\n                            </li>\n\n                        </ul>\n                        <br>\n                        <h6> Desired qualifications and skills:\n                        </h6>\n                        <ul>\n                            <li>Master or Bachelor degree in Computer Engineering or equivalent\n                            </li>\n                            <li>Young graduates and freshers with relevant backgrounds are encouraged to apply\n                            </li>\n                            <li>Experience working with ROS (Robot Operating System) is a strong plus\n                            </li>\n                            <li>Experience in open-source software development is a strong plus\n                            </li>\n                            <li>Experience in QT, WPF, or Android applications is a plus\n                            </li>\n                        </ul>\n\n                        <br>\n                        <h5 class=\"text-danger\">Important!</h5>\n                        <p>We are looking for someone with great passion for robotics, all new applicants from the date of posting of this ad MUST answer the following two questions ( applications that do not include answers to the questions will NOT be\n                            read) :\n                        </p>\n                        <ul>\n                            <li>What do you think makes you a good candidate for this position? (1 paragraph) </li>\n                            <li>Which previous projects/activities demonstrate your interest for working on robotics or AI related problems? (1 paragraph) </li>\n                        </ul>\n                        <p style=\"font-weight: bold;\">Email your answer to the two questions with your resume on application to business@goatai.io\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/examples.module */ "ieWF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./careers/careers.component */ "D+Yx");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "NqkC");

 // this is needed!













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _careers_careers_component__WEBPACK_IMPORTED_MODULE_12__["CareersComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "93si");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "AXTl");
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/login/login.component */ "lznb");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/profile/profile.component */ "xQKc");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "+GGL");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./careers/careers.component */ "D+Yx");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "NqkC");













var routes = [
    { path: '', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] },
    { path: 'index', redirectTo: '', pathMatch: 'full' },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"] },
    { path: 'examples/landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'examples/login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'examples/profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"] },
    { path: 'careers', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_11__["CareersComponent"] },
    { path: 'contactus', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ez78":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"section section-team text-center\" style=\"margin-top: 100px\">\n        <div class=\"container\">\n            <h2 class=\"title\" style=\"margin-bottom: 100px;\">Our Products</h2>\n            <div class=\"team\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/product-1.jpg\" width=\"400\" alt=\"Thumbnail Image\" class=\" img-fluid img-raised\">\n                            <h4 class=\"title\">ETDMS-1</h4>\n                            <p class=\"category text-info\">Driver Fatigue Monitoring</p>\n                            <p class=\"description\" style=\"font-weight: 400;\">With real-time incident detection and preventative in-cab coaching, The ETDMS-1 is proven to protect drivers and lower costs.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/product-2.jpg\" width=\"400\" alt=\"Thumbnail Image\" class=\" img-fluid img-raised\">\n                            <h4 class=\"title\">ST-CD-24V-SS S-Type CoolDome (24V)</h4>\n                            <p class=\"category text-info\">Active Cooling Enclosure</p>\n                            <p class=\"description\" style=\"font-weight: 400;\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "gqYc":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  examples works!\n</p>\n");

/***/ }),

/***/ "hMDP":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./examples.component.html */ "gqYc");
/* harmony import */ var _examples_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples.component.scss */ "w1at");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent.ctorParameters = function () { return []; };
    ExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-examples',
            template: _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_examples_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "ieWF":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "AXTl");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "lznb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "xQKc");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples.component */ "hMDP");












var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "o8F2");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "mvyS");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "QhSr");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "+GGL");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "93si");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "9ldr");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");
/* harmony import */ var angular_typing_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-typing-animation */ "x4NA");
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"],
                angular_typing_animation__WEBPACK_IMPORTED_MODULE_15__["TypingAnimationDirective"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "lznb":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "5QX9");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "T9Od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent.ctorParameters = function () { return []; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "7pPp");
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component.scss */ "r7bM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "o8F2":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basicelements.component.html */ "1RpN");
/* harmony import */ var _basicelements_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicelements.component.scss */ "4Wxn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.ctorParameters = function () { return []; };
    BasicelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-basicelements',
            template: _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_basicelements_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "oy3u":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "q3QT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <div class=\"photo-container\">\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\n                </div>\n                <h3 class=\"title\">Ryan Scheinder</h3>\n                <p class=\"category\">Photographer</p>\n                <div class=\"content\">\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>48</h2>\n                        <p>Bookmarks</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n            <div class=\"button-container\">\n                <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                    <i class=\"fab fa-twitter\"></i>\n                </a>\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                    <i class=\"fab fa-instagram\"></i>\n                </a>\n            </div>\n            <h3 class=\"title\">About me</h3>\n            <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable\n                range.</h5>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"title text-center\">My Portfolio</h4>\n                    <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\n                        <ngb-tab>\n                            <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons design_image\"></i>\n                            </ng-template>\n                            <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                    <div class=\"col-md-10 ml-auto mr-auto\">\n                                        <div class=\"row collections\">\n                                            <div class=\"col-md-6\">\n                                                <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\n                                                <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                                <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab>\n                            <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons location_world\"></i>\n                            </ng-template>\n                            <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                    <div class=\"col-md-10 ml-auto mr-auto\">\n                                        <div class=\"row collections\">\n                                            <div class=\"col-md-6\">\n                                                <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                                <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                                <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab>\n                            <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons sport_user-run\"></i>\n                            </ng-template>\n                            <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                    <div class=\"col-md-10 ml-auto mr-auto\">\n                                        <div class=\"row collections\">\n                                            <div class=\"col-md-6\">\n                                                <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                                <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                                <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>");

/***/ }),

/***/ "r7bM":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vG3S":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n");

/***/ }),

/***/ "w1at":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wibN":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"section  text-center\" style=\"margin-top: 100px\">\n        <div class=\"container\">\n            <h2 class=\"title text\" style=\"margin-bottom: 100px;\">Contact Us</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <img src=\"/assets/img/contactus.jpg\" alt=\"\">\n                </div>\n                <div class=\"col-md-6\">\n                    <h2 class=\"text-info\">Lets Get to Business</h2>\n                    <h4>Just contact us for any your questions or concerns and we will give you the help you need.</h4>\n                </div>\n            </div>\n\n            <div class=\"row \">\n                <div class=\"col-md-12\">\n                    <div class=\"text-left\">\n                        <p>We are a start-up company with the aim of providing complete engineering solutions to address some of the toughest challenges in the industry. Our expertise should span across robotics, unmanned systems, autonomous vehicles (UAV,\n                            UGV, USV), CV (Computer Vision), AR, VR, Machine learning, Deep Learning, and vehicle building for the defence, security and rescue, logistics, and medical sector, ranging from product conceptualization and prototype development\n                            to mass production. To ensure commitment to the highest quality and performance, we are hiring engineers with the skill and the passion. We are tinkerers, innovators, and makers, and seek the like-minded to join us.\n                        </p>\n                        <br>\n                        <h6>Contact Details</h6>\n                        <p>\n                            <strong>Address: </strong> Bistpur, Jamshedpur JH India, 831001 <br>\n                            <strong>Ph No:   </strong>+91 787979874059/7634925777 <br>\n                            <strong>Email:   </strong> info@goatai.io <br>\n                        </p>\n                        <div class=\"row\">\n\n                            <div class=\"col-md-6\"><a class=\"btn btn-info btn-round btn-block btn-lg\" href=\"tel:+917979874059\">Click to Call</a></div>\n\n                            <div class=\"col-md-6\"> <a class=\"btn btn-info btn-round btn-block btn-lg\" href=\"mailto:info@goatai.io\">Click to Mail</a></div>\n                        </div>\n\n                        <br>\n\n\n                        <br>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-md-center sharing-area text-center\">\n                <div class=\"text-center col-md-12 col-lg-8\">\n                    <h3>Keep in touch with us!</h3>\n                </div>\n                <div class=\"text-center col-md-12 col-lg-8\">\n                    <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\n                        <i class=\"fab fa-twitter\"></i>\n                    </a>\n                    <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\n                        <i class=\"fab fa-facebook-square\"></i>\n                    </a>\n                    <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\n                        <i class=\"fab fa-linkedin\"></i>\n                    </a>\n                    <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\n                        <i class=\"fab fa-github\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n    </div>");

/***/ }),

/***/ "xQKc":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "q3QT");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "zXGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-info fixed-top navbar\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\">\n                <img src=\"/assets/img/nav-logo.png\" width=\"50\" alt=\"\"> GOAT AI\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"blue\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"[ '/products']\">\n                        <p>Products</p>\n                    </a>\n                </li>\n                <li class=\" nav-item \">\n                    <a class=\"nav-link \" [routerLink]=\"['/careers']\">\n                        <p>Careers</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink='/contactus'>Contact Us</a>\n                </li>\n                <li class=\"nav-item \">\n                    <a class=\"nav-link \" rel=\"tooltip \" title=\"Follow us on Twitter \" data-placement=\"bottom \" href=\"https://twitter.com/CreativeTim \" target=\"_blank \">\n                        <i class=\"fab fa-twitter \"></i>\n                        <p class=\"d-lg-none d-xl-none \">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item \">\n                    <a class=\"nav-link \" rel=\"tooltip \" title=\"Like us on Facebook \" data-placement=\"bottom \" href=\"https://www.facebook.com/CreativeTim \" target=\"_blank \">\n                        <i class=\"fab fa-facebook-square \"></i>\n                        <p class=\"d-lg-none d-xl-none \">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item \">\n                    <a class=\"nav-link \" rel=\"tooltip \" title=\"Follow us on Instagram \" data-placement=\"bottom \" href=\"https://www.instagram.com/CreativeTimOfficial \" target=\"_blank \">\n                        <i class=\"fab fa-instagram \"></i>\n                        <p class=\"d-lg-none d-xl-none \">Instagram</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Now UI Kit Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zXGc":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map