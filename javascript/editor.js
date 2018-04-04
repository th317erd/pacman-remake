(function(root) {
  class Editor extends root.Context {
    constructor() {
      super();
      // Block index bits
      // First bit = upper right corner set
      // Second bit = lower right corner set
      // Third bit = lower left corner set
      // Forth bit = upper left corner set


    }
  }

  root.Editor = Editor;
})((window.root) ? window.root : (window.root = {}));
