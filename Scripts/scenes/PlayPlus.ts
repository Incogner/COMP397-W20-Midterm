module scenes
{
    export class PlayPlus extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton:objects.Button;
        private _finishButton:objects.Button;
        private _backButton:objects.Button;
        private _diceArray:objects.GameObject[];
        private _dices:object[];
        private _dice1Txt:objects.Label;
        private _dice2Txt:objects.Label;
        private _dice3Txt:objects.Label;
        private _dice4Txt:objects.Label;
        private _result:objects.Label;
 

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS
        /**
         * This Method will generate a random number (1-6)
         *
         * @protected
         * @returns {number}
         * @memberof Play
         */
        protected _generateRandomNumber():number{
            return Math.floor(Math.random() * 6);
        }

        /**
         * This method will take top 3 result and return the result
         *
         * @protected
         * @param {number[]} numberArray
         * @returns {number}
         * @memberof PlayPlus
         */
        protected _getTopValues(numberArray:number[]):number{

            let newArray = numberArray.sort();
            //remove the least amount
            newArray.splice(0, 1);
            let result = 0;

            for (let i = 0 ; i < newArray.length ; i++) {
                result += newArray[i];
              }

            return result;
        }

        /**
         * This method will assign new values to dices and add them to the scene
         *
         * @protected
         * @memberof Play
         */
        protected _rollClick():void{

            // assign random numbers
            let that = this;
            let rand01 = this._generateRandomNumber();
            let rand02 = this._generateRandomNumber();
            let rand03 = this._generateRandomNumber();
            let rand04 = this._generateRandomNumber();
            let rndArray = new Array();
            rndArray.push(rand01+1);
            rndArray.push(rand02+1);
            rndArray.push(rand03+1);
            rndArray.push(rand04+1);

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
            this._result.text = "Result = " + (this._getTopValues(rndArray)).toString();;

            // refresh the objects
            this.removeAllChildren();
            this.addChild(this._rollButton);
            this.addChild(this._backButton);
            this.addChild(this._finishButton);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._dice3Txt);
            this.addChild(this._dice4Txt);
            this.addChild(this._result);
            this._diceArray.forEach((dice) => {
                that.addChild(dice);
            })
        }

        // PUBLIC METHODS

        //initialize and instatiate
        /**
         * This method will initialize the scene and place objects
         *
         * @memberof Play
         */
        public Start(): void 
        {
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
        }        
        
        public Update(): void 
        {
        }
        
        /**
         * This method will handle the click event and add children
         *
         * @memberof Play
         */
        public Main(): void 
        {
            let that = this;

            // Adding Children
            this._diceArray.forEach((dice) => {
                that.addChild(dice);
            })
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._dice3Txt);
            this.addChild(this._dice4Txt);
            this.addChild(this._result);
            this.addChild(this._rollButton);
            this.addChild(this._backButton);
            this.addChild(this._finishButton);

            // Roll Button Click Event
            this._rollButton.on("click", () => {
                that._rollClick();
            });
            this._finishButton.on("click", () => {
                config.Game.SCENE = scenes.State.END;
            });
            this._backButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });
        }
    }
}