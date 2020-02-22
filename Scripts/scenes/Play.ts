module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton:objects.Button;
        private _dice1:objects.GameObject;
        private _dice2:objects.GameObject;
        private _dices:object[];
        private _dice1Txt:objects.Label;
        private _dice2Txt:objects.Label;
 

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
         * This method will assign new values to dices and add them to the scene
         *
         * @protected
         * @memberof Play
         */
        protected _rollClick():void{

            // assign random numbers
            let rand01 = this._generateRandomNumber();
            let rand02 = this._generateRandomNumber();

            // create new dice objects with new images
            this._dice1 = new objects.Dice(this._dices[rand01], 150, 170);
            this._dice2 = new objects.Dice(this._dices[rand02], 480, 170);
            // change the value for the labels based on new random number
            this._dice1Txt.text = (rand01 + 1).toFixed().toString();
            this._dice2Txt.text = (rand02 + 1).toFixed().toString();

            // refresh the objects
            this.removeAllChildren();
            this.addChild(this._rollButton);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
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
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            // Array of dice faces to easily assign by setting index
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
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._rollButton);

            // Roll Button Click Event
            this._rollButton.on("click", () => {
                that._rollClick();
            });
        }
    }
}