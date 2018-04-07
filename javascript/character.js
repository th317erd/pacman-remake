(function(root) {
  // "class" is like "object" but they store functions and constructors

  class Character extends root.Actor {
    // constructor is a s special function - called whenever a class is called
    // pass these values into constructor
    constructor(...args) {
      super(...args);

      this.addClasses('character');
      this.directionX = 0;
      this.directionY = 0;
    }

    move() {
      //player object (access) "x"
      this.x += this.directionX;
      this.y += this.directionY;

      //access, access, access, assignemnt
      this.element.style.left = this.x + 'rem';
      this.element.style.top = this.y + 'rem';
    }

    // Empty stub function to allow child classes to add
    // custom update functionality
    update() {
      super.update();
      this.move();
    }

    resetDirection() {
      this.removeClasses('direction-left', 'direction-right', 'direction-up', 'direction-down');
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
