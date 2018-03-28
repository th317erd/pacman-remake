// PARTS OF CODE:
// variables
// statements
// conditionas
// loops
// functions



// FUNCTION
// object.key(argument)
// () calls the function, contents are the argument

// single root "argument" that will store all variables
(function(root){})

// tunary - true or false {condition} ? true : false;
// if window.root exists, use it
// if false create empty object and assign it to root
// a function in class is called a method
((window.root) ? window.root : (window.root = {}));


//POLYMORPHISM - inherits functionality from other classses
    class Animal {
        constructor(){
            this.alive = true;
        }
        //walk function
        move(){
            console.log('im moving')
        }
    }
    // gets functionality from animal
    class Mammal extends Animal {
        constructor(){
            this.alive = true;
        }
    }

    class Reptile extends Animal {
        constructor(){
            this.alive = true;
        }
    }

    // create new animal
    var a = new Animal();

    //tell the animal to walk
    a.walk();


// ...args pass all argments through that function
    constructor(...args){}

  // constructor is a s special function - called whenever a class is called
        // pass these values into constructor
        // needs matching arguments 
        // ...args pass all argments through that function
        constructor(x, y){
            // overload by making a function with the same name
            // go to your parent constructor (character)
            super(x, y, 'assets/images/pacman.svg');
           
        }



// give me the key character and assing to const Character
// const is a variable that cant change
const Character = root.Character;

// access math object by key "random" to return a value,
// as long as that number is less than .5
(Math.random() < 0.5)
    ? 'assets/images/pacman.svg'
    : 'assets/images/ghost-up.svg'


    (function(root){

        // "class" is like "object" but they store functions and constructors
        // Chacter is stored in root. Get character key from root object
        class Player extends root.Character {
    
            // constructor is a s special function - called whenever a class is called
            // pass these values into constructor
            // needs matching arguments 
            // ...args pass all argments through that function
            constructor(x, y){
    
                // overload by making a function with the same name
                // go to your parent constructor (character)
                super(x, y, 'assets/images/pacman.svg');
                
            }
        }
    
        // every exprssion has a result
        // object = result
        root.Player = Player;
    
    })((window.root) ? window.root : (window.root = {}));