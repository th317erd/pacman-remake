(function(root) {
  class Editor extends root.Context {
    constructor() {
      super({
        editor: true
      });
      // Block index bits
      // First bit = upper right corner set
      // Second bit = lower right corner set
      // Third bit = lower left corner set
      // Forth bit = upper left corner set

      var gridSizeX = this.gridSizeX = 15,
          gridSizeY = this.gridSizeY = 15,
          tileSizeX = this.tileSizeX = 3,
          tileSizeY = this.tileSizeY = 3,
          tiles = this.tiles = new Array(gridSizeX * gridSizeY);

      for (var y = 0, yl = gridSizeY; y < yl; y++) {
        for (var x = 0, xl = gridSizeX; x < xl; x++) {
          var actor = tiles[y * gridSizeX + x] = new root.Actor({
            x: x * tileSizeX,
            y: y * tileSizeY,
            imageSource: 'assets/images/map-tiles/15.svg',
            editor: true
          });
        }
      }

      window.addEventListener('mousemove', (event) => {
        console.log('Mouse Move', event);
      }, false);

      this.updateDOM();
    }

    updateDOM() {
      this.removeActors(this.tiles);
      this.addActors(this.tiles);
    }
  }

  root.Editor = Editor;
})((window.root) ? window.root : (window.root = {}));
