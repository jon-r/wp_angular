//CURRENTLY UNUSED. KEEPING FOR REFERENCE (fancy hover effects?);
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FolioTransitionDirective = (function () {
    function FolioTransitionDirective(el) {
        this.el = el;
    }
    FolioTransitionDirective.prototype.onClick = function () {
        console.log(this);
        this.setPos();
    };
    FolioTransitionDirective.prototype.setPos = function () {
        this.el.nativeElement.style.backgroundColor = 'red';
    };
    __decorate([
        core_1.Input('activePosition'),
        __metadata('design:type', Object)
    ], FolioTransitionDirective.prototype, "position", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', void 0)
    ], FolioTransitionDirective.prototype, "onClick", null);
    FolioTransitionDirective = __decorate([
        core_1.Directive({ selector: '[activePosition]' }),
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FolioTransitionDirective);
    return FolioTransitionDirective;
}());
exports.FolioTransitionDirective = FolioTransitionDirective;
//# sourceMappingURL=transition.directive.js.map
