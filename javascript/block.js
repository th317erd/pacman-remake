(function(root) {
  class Block extends root.Actor {
    constructor(...args) {
      super(...args);

      this.classList.push('block');
      this.updateImageIndex(this.imageIndex);
    }

    updateImageIndex(index) {
      this.imageIndex = index || 0;
      this.imageSource = 'assets/images/map-tiles/' + index + '.svg';

      if (this.element)
        this.element.setAttribute('src', this.imageSource);
    }

    orImageIndex(bitmask) {
      this.updateImageIndex(this.imageIndex | bitmask);
    }

    andImageIndex(bitmask) {
      this.updateImageIndex(this.imageIndex & bitmask);
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
