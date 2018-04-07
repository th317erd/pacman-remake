(function(root) {
  // "class" is like "object" but they store functions and constructors

  class Character {
    // constructor is a s special function - called whenever a class is called
    // pass these values into constructor
    constructor(x, y, imageSource) {
      // give constructor these properties(varibles)
      this.imageSource = imageSource;
      this.element = null;
      this.x = x;
      this.y = y;
      this.directionX = 0;
      this.directionY = 0;
      this.state = 0;
      this.classList = ['character'];
    }

    move() {
      //player object (access) "x"
      this.x += this.directionX;
      this.y += this.directionY;

      //access, access, access, assignemnt
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
    }
    // Add to the DOM
    mount() {
      var imageSource = (this.imageSource) ? this.imageSource : 'assets/images/ghost-up.svg',
          element = this.element = document.createElement('img');

      element.setAttribute('src', imageSource);
      element.classList = 'character';
      document.body.appendChild(element);
    }
    // Remove from DOM
    unmount() {
      document.body.removeChild(this.element);
      this.element = null;
    }

    // Empty stub function to allow child classes to add
    // custom update functionality
    update() {
      this.move();
    }

    updateState(newState) {
      this.state = newState;
    }
    // "...args" collect remaing arguemnt into an array, must be last
    addClasses(...args) {
      // Locally reference our instance variable for easier access / ease of use / caching
      var classList = this.classList;

      for (var i = 0, il = args.length; i < il; i++) {
        // Get our argument at index "i"
        var className = args[i];

        // Don't add to the class list if it is already in the list
        if (classList.indexOf(className) >= 0)
        // skip back to the top of the loop and ignore the code below
            continue;

        // Add class to list
        classList.push(className);
      }

      // If there is an element, update its classList to reflect the changes
      if (this.element)
        this.element.classList = this.classList.join(' ');
    }

    removeClasses(...args) {
      var newClassList = [],
          classList = this.classList;

      for (var i = 0, il = classList.length; i < il; i++) {
        var className = classList[i];

        // If this item isn't in the list of items being removed
        // then make sure it gets copied over
        if (args.indexOf(className) < 0)
          newClassList.push(className);
      }

      this.classList = newClassList;

      // If there is an element, update its classList to reflect the changes
      if (this.element)
        this.element.classList = this.classList.join(' ');
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
