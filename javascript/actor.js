(function(root) {
  class Actor {
    constructor(x, y, imageSource) {
      // give constructor these properties(varibles)
      this.imageSource = imageSource;
      this.element = null;
      this.x = x;
      this.y = y;
      this.state = 0;
      this.classList = [];
    }

    // Add to the DOM
    mount() {
      var imageSource = (this.imageSource) ? this.imageSource : 'assets/images/ghost-up.svg',
          element = this.element = document.createElement('img');

      element.setAttribute('src', imageSource);
      element.classList = 'character';
      element.style.left = this.x + 'rem';
      element.style.top = this.y + 'rem';
      document.body.appendChild(element);
    }

    // Remove from DOM
    unmount() {
      document.body.removeChild(this.element);
      this.element = null;
    }

    update() {
      // Do nothing (for now)
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
  }

  root.Actor = Actor;
})((window.root) ? window.root : (window.root = {}));