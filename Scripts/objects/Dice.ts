module objects
{
    export class Dice extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor(image:object = config.Game.ASSETS.getResult("placeholder"), x:number = 0, y:number = 0)
        {
            super(image, x, y, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
        }        

        private _move(): void
        {
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
        }

        public Update(): void 
        {

        }

        public Reset(): void 
        {

        }
    }

}