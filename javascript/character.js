(function(root){
    // "class" is like "object" but they store functions and constructors
    
    class Character {
        // constructor is a s special function - called whenever a class is called
        // pass these values into constructor
        constructor(x, y, imageSource){
            
            var characterElement = document.createElement('img');
            var image = (imageSource) ? imageSource : 'assets/images/ghost-up.svg';

            characterElement.setAttribute('src', imageSource);
            characterElement.classList = 'character';
            document.body.appendChild(characterElement);

            // give constructor these properties
            this.element = characterElement;
            this.x = x;
            this.y = y;
            this.directionX = 0; 
            this.directionY = 0;   

        }
        move(){
                
            //player object (access) "x" 
            this.x += this.directionX;
            this.y += this.directionY;
            
            //access, access, access, assignemnt
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
        }
    }
    // every exprssion has a result
    // an object = result
    //
    root.Character = Character;

// tunary - true or false {condition} ? true : false;
// if window.root exists, use it
// if false create empty object and assign it to root
// a function in class is called a method
})((window.root) ? window.root : (window.root = {}));