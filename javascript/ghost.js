(function(root) {
  class Ghost extends root.Enemy {
    constructor(x, y) {
      super(x, y, 'assets/images/ghost-up.svg');
    }
  }

  root.Ghost = Ghost;
})((window.root) ? window.root : (window.root = {}));
