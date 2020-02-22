module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _endLabel: objects.Label;
        private _backButton: objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void 
        {
             //instantiate a new Text object
            this._endLabel = new objects.Label("Thank you for Playing", "60px", "Arial", "black", 320, 180, true);
            // buttons
             this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            
             this.Main();
        }        
        
        public Update(): void 
        {
        }
        
        public Main(): void 
        {

            this.addChild(this._endLabel);

        
            this.addChild(this._backButton);

            this._backButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

        }

        
    }
}