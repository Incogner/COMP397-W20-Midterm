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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        /**
         * This Method will generate a random number (1-6)
         *
         * @protected
         * @returns {number}
         * @memberof Play
         */
        Play.prototype._generateRandomNumber = function () {
            return Math.floor(Math.random() * 6);
        };
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            // Buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._dices = new Array();
            this._dices.push(config.Game.ASSETS.getResult('dice01'));
            this._dices.push(config.Game.ASSETS.getResult('dice02'));
            this._dices.push(config.Game.ASSETS.getResult('dice03'));
            this._dices.push(config.Game.ASSETS.getResult('dice04'));
            this._dices.push(config.Game.ASSETS.getResult('dice05'));
            this._dices.push(config.Game.ASSETS.getResult('dice06'));
            // Dices
            this._dice1 = new objects.Dice(this._dices[0], 150, 170);
            this._dice2 = new objects.Dice(this._dices[0], 480, 170);
            // Labels
            this._dice1Txt = new objects.Label("1", "40px", "Arial", "black", 150, 310, true);
            this._dice2Txt = new objects.Label("1", "40px", "Arial", "black", 480, 310, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var that = this;
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._rollButton);
            this._rollButton.on("click", function () {
                var rand01 = that._generateRandomNumber();
                var rand02 = that._generateRandomNumber();
                that._dice1 = new objects.Dice(that._dices[rand01], 150, 170);
                that._dice2 = new objects.Dice(that._dices[rand02], 480, 170);
                that._dice1Txt.text = (rand01 + 1).toFixed().toString();
                that._dice2Txt.text = (rand02 + 1).toFixed().toString();
                that.removeAllChildren();
                that.addChild(that._rollButton);
                that.addChild(that._dice1Txt);
                that.addChild(that._dice2Txt);
                that.addChild(that._dice1);
                that.addChild(that._dice2);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map