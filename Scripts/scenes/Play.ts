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

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
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
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {

            let that = this;
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice1Txt);
            this.addChild(this._dice2Txt);
            this.addChild(this._rollButton);
            this._rollButton.on("click", ()=>{
                
                let rand01 = that._generateRandomNumber();
                let rand02 = that._generateRandomNumber();

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

        }



        
    }
}