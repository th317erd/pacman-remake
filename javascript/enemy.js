(function(root) {
  class Enemy extends root.Character {
    constructor(...args) {
      super(...args);
    }
  }

  root.Enemy = Enemy;
})((window.root) ? window.root : (window.root = {}));
