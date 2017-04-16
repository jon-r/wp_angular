"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var routing_module_1 = require("./routing.module");
var list_component_1 = require("./list.component");
var detail_component_1 = require("./detail.component");
var project_service_1 = require("./project.service");
//import { FolioTransitionDirective }  from './transition.directive';
var htmlTemplate_component_1 = require("../shared/htmlTemplate.component");
//inline svg
var index_js_1 = require("../ng-inline-svg/lib/index.js");
var FolioModule = (function () {
    function FolioModule() {
    }
    return FolioModule;
}());
FolioModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            routing_module_1.FolioRoutingModule,
            http_1.HttpModule,
            index_js_1.InlineSVGModule
        ],
        declarations: [
            list_component_1.FolioListComponent,
            detail_component_1.FolioDetailComponent,
            //FolioTransitionDirective
            htmlTemplate_component_1.HtmlTemplateComponent
        ],
        providers: [
            project_service_1.FolioProjectService
        ]
    })
], FolioModule);
exports.FolioModule = FolioModule;
//# sourceMappingURL=folio.module.js.map