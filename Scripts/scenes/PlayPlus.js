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
    var PlayPlus = /** @class */ (function (_super) {
        __extends(PlayPlus, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function PlayPlus() {
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
        PlayPlus.prototype._generateRandomNumber = function () {
            return Math.floor(Math.random() * 6);
        };
        /**
         * This method will take top 3 result and return the result
         *
         * @protected
         * @param {number[]} numberArray
         * @returns {number}
         * @memberof PlayPlus
         */
        PlayPlus.prototype._getTopValues = function (numberArray) {
            var newArray = numberArray.sort();
            //remove the least amount
            newArray.splice(0, 1);
            var result = 0;
            for (var i = 0; i < newArray.length; i++) {
                result += newArray[i];
            }
            return result;
        };
        /**
         * This method will assign new values to dices and add them to the scene
         *
         * @protected
         * @memberof Play
         */
        PlayPlus.prototype._rollClick = function () {
            // assign random numbers
            var that = this;
            var rand01 = this._generateRandomNumber();
            var rand02 = this._generateRandomNumber();
            var rand03 = this._generateRandomNumber();
            var rand04 = this._generateRandomNumber();
            var rndArray = new Array();
            rndArray.push(rand01 + 1);
            rndArray.push(rand02 + 1);
            rndArray.push(rand03 + 1);
            rndArray.push(rand04 + 1);
            // create new dice objects with new images
            this._diceArray = new Array();
            this._diceArray.push(new objects.Dice(this._dices[rand01], 150, 170));
            this._diceArray.push(new objects.Dice(this._dices[rand02], 250, 170));
            this._diceArray.push(new objects.Dice(this._dices[rand03], 350, 170));
            this._diceArray.push(new objects.Dice(this._dices[rand04], 450, 170));
            // change the value for the labels based on new random number
            this._dice1Txt.text = (rand01 + 1).toFixed().toString();
            this._dice2Txt.text = (rand02 + 1).toFixed().toString();
            this._dice3Txt.text = (rand03 + 1).toFixed().toString();
            this._dice4Txt.text = (rand04 + 1).toFixed().toString();
            this._result.text = "Result = " + (this._getTopValues(rndArray)).toString();
            ;
            // refresh the objects
            this.removeAllChildren();
            this.addChild(this._background);
            this.addChild(this._rollButton);
            this.addChild(this._backButton);
            this.addChild(this._finishButton);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._dice3Txt);
            this.addChild(this._dice4Txt);
            this.addChild(this._result);
            this._diceArray.forEach(function (dice) {
                that.addChild(dice);
            });
        };
        // PUBLIC METHODS
        //initialize and instatiate
        /**
         * This method will initialize the scene and place objects
         *
         * @memberof Play
         */
        PlayPlus.prototype.Start = function () {
            // background
            this._background = new createjs.Bitmap(config.Game.ASSETS.getResult('tableBack'));
            // Buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 400, true);
            this._finishButton = new objects.Button(config.Game.ASSETS.getResult("finishButton"), 120, 400, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 520, 400, true);
            // Array of dice faces to easily assign by setting index
            this._dices = new Array();
            this._dices.push(config.Game.ASSETS.getResult('dice01'));
            this._dices.push(config.Game.ASSETS.getResult('dice02'));
            this._dices.push(config.Game.ASSETS.getResult('dice03'));
            this._dices.push(config.Game.ASSETS.getResult('dice04'));
            this._dices.push(config.Game.ASSETS.getResult('dice05'));
            this._dices.push(config.Game.ASSETS.getResult('dice06'));
            // Dices
            this._diceArray = new Array();
            this._diceArray.push(new objects.Dice(this._dices[0], 150, 170));
            this._diceArray.push(new objects.Dice(this._dices[0], 250, 170));
            this._diceArray.push(new objects.Dice(this._dices[0], 350, 170));
            this._diceArray.push(new objects.Dice(this._dices[0], 450, 170));
            // Labels
            this._dice1Txt = new objects.Label("1", "30px", "Arial", "black", 150, 250, true);
            this._dice2Txt = new objects.Label("1", "30px", "Arial", "black", 250, 250, true);
            this._dice3Txt = new objects.Label("1", "30px", "Arial", "black", 350, 250, true);
            this._dice4Txt = new objects.Label("1", "30px", "Arial", "black", 450, 250, true);
            this._result = new objects.Label("Result = 3", "30px", "Arial", "black", 320, 320, true);
            this.Main();
        };
        PlayPlus.prototype.Update = function () {
        };
        /**
         * This method will handle the click event and add children
         *
         * @memberof Play
         */
        PlayPlus.prototype.Main = function () {
            var that = this;
            // Adding Children
            this.addChild(this._background);
            this._diceArray.forEach(function (dice) {
                that.addChild(dice);
            });
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._dice3Txt);
            this.addChild(this._dice4Txt);
            this.addChild(this._result);
            this.addChild(this._rollButton);
            this.addChild(this._backButton);
            this.addChild(this._finishButton);
            // Roll Button Click Event
            this._rollButton.on("click", function () {
                that._rollClick();
            });
            this._finishButton.on("click", function () {
                config.Game.SCENE = scenes.State.END;
            });
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return PlayPlus;
    }(objects.Scene));
    scenes.PlayPlus = PlayPlus;
})(scenes || (scenes = {}));
//# sourceMappingURL=PlayPlus.js.map