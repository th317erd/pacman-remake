(function(root) {
  class Block extends root.Actor {
    constructor(...args) {
      super(...args);
    }

    mount(...args) {
      super.mount(...args);

      // if (!this.editor)
      //   return;

      // this.element.addEventListener('mouseMove', (event) => {
      //   console.log('Mouse Move', event);
      // }, true);
    }

    unmount(...args) {
      // if (this.editor)
      //   this.element.removeEventListener('mouseMove');

      super.unmount(...args);
    }
  }

  root.Block = Block;
})((window.root) ? window.root : (window.root = {}));
