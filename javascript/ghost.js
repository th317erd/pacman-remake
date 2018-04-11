(function(root) {
  class Ghost extends root.Enemy {
    constructor(_opts) {
      super(Object.assign({
        imageSource: 'assets/images/ghost-up.svg'
      }, _opts || {}));
    }
  }

  root.Ghost = Ghost;
})((window.root) ? window.root : (window.root = {}));
