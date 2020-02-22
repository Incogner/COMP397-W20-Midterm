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
        /**
         * This method will assign new values to dices and add them to the scene
         *
         * @protected
         * @memberof Play
         */
        Play.prototype._rollClick = function () {
            // assign random numbers
            var rand01 = this._generateRandomNumber();
            var rand02 = this._generateRandomNumber();
            // create new dice objects with new images
            this._dice1 = new objects.Dice(this._dices[rand01], 200, 170);
            this._dice2 = new objects.Dice(this._dices[rand02], 400, 170);
            // change the value for the labels based on new random number
            this._dice1Txt.text = (rand01 + 1).toFixed().toString();
            this._dice2Txt.text = (rand02 + 1).toFixed().toString();
            // refresh the objects
            this.removeAllChildren();
            this.addChild(this._background);
            this.addChild(this._rollButton);
            this.addChild(this._rollPlusButton);
            this.addChild(this._finishButton);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
        };
        // PUBLIC METHODS
        //initialize and instatiate
        /**
         * This method will initialize the scene and place objects
         *
         * @memberof Play
         */
        Play.prototype.Start = function () {
            // background
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult('tableBack'));
            // Buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 400, true);
            this._finishButton = new objects.Button(config.Game.ASSETS.getResult("finishButton"), 120, 400, true);
            this._rollPlusButton = new objects.Button(config.Game.ASSETS.getResult("advanceButton"), 520, 400, true);
            // Array of dice faces to easily assign by setting index
            this._dices = new Array();
            this._dices.push(config.Game.ASSETS.getResult('dice01'));
            this._dices.push(config.Game.ASSETS.getResult('dice02'));
            this._dices.push(config.Game.ASSETS.getResult('dice03'));
            this._dices.push(config.Game.ASSETS.getResult('dice04'));
            this._dices.push(config.Game.ASSETS.getResult('dice05'));
            this._dices.push(config.Game.ASSETS.getResult('dice06'));
            // Dices
            this._dice1 = new objects.Dice(this._dices[0], 200, 170);
            this._dice2 = new objects.Dice(this._dices[0], 400, 170);
            // Labels
            this._dice1Txt = new objects.Label("1", "40px", "Arial", "black", 200, 280, true);
            this._dice2Txt = new objects.Label("1", "40px", "Arial", "black", 400, 280, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        /**
         * This method will handle the click event and add children
         *
         * @memberof Play
         */
        Play.prototype.Main = function () {
            var that = this;
            // Adding Children
            this.addChild(this._background);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._rollButton);
            this.addChild(this._rollPlusButton);
            this.addChild(this._finishButton);
            // Roll Button Click Event
            this._rollButton.on("click", function () {
                that._rollClick();
            });
            this._finishButton.on("click", function () {
                config.Game.SCENE = scenes.State.END;
            });
            this._rollPlusButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAYPLUS;
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map