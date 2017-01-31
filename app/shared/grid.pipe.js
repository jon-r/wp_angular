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
var ScreenGridPipe = (function () {
    function ScreenGridPipe() {
    }
    /*  private _window: Window;

      constructor(private windowRef: WindowRefService) {
        this._window = windowRef.nativeWindow;
      }*/
    ScreenGridPipe.prototype.transform = function (value) {
        var x = value[0] * window.innerWidth / 10, y = value[1] * window.innerHeight / 10;
        return [x, y];
    };
    ScreenGridPipe = __decorate([
        core_1.Pipe({ name: 'screenGrid' }),
        __metadata('design:paramtypes', [])
    ], ScreenGridPipe);
    return ScreenGridPipe;
}());
exports.ScreenGridPipe = ScreenGridPipe;
//# sourceMappingURL=grid.pipe.js.map