(function(root) {
  class Game extends root.Context {
    constructor() {
      super(); // call parent class

      // GAME VARIABLES
      for (var amount = 0; amount < 10; amount++) {
        // define player objects
        // stores player properties
        this.addActor(
          // create character giving it arguments, pushing it into array
          // passing these arguments through the constructor
          new root.Player(
            this.windowWidth * Math.random(),
            this.windowHeight * Math.random(),
          )
        );
      }
    }
  }

  root.Game = Game;
})((window.root) ? window.root : (window.root = {}));
