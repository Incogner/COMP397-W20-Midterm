"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Dice = /** @class */ (function (_super) {
        __extends(Dice, _super);
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Dice(image, x, y) {
            if (image === void 0) { image = config.Game.ASSETS.getResult("placeholder"); }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, image, x, y, true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Dice.prototype._checkBounds = function () {
        };
        Dice.prototype._move = function () {
        };
        // PUBLIC METHODS
        Dice.prototype.Start = function () {
        };
        Dice.prototype.Update = function () {
        };
        Dice.prototype.Reset = function () {
        };
        return Dice;
    }(objects.GameObject));
    objects.Dice = Dice;
})(objects || (objects = {}));
//# sourceMappingURL=Dice.js.map