(function(root) {
  class Editor extends root.Context {
    constructor() {
      super();
      // Block index bits
      // First bit = upper right corner set
      // Second bit = lower right corner set
      // Third bit = lower left corner set
      // Forth bit = upper left corner set
      
      this.sizeX = 15;
      this.sizeY = 15;

      for (var y = 0, yl = this.SizeY; y < yl; y++){}

    }
  }

  root.Editor = Editor;
})((window.root) ? window.root : (window.root = {}));
