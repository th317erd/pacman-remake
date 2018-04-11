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

      this.sizeX = 15;
      this.sizeY = 15;

      var gridSizeX = this.gridSizeX = 15 * 3,
          gridSizeY = this.gridSizeY = 15 * 3,
          tileSizeX = this.tileSizeX = 1,
          tileSizeY = this.tileSizeY = 1,
          tiles = this.tiles = new Array(gridSizeX * gridSizeY);

      for (var y = 0, yl = gridSizeY; y < yl; y++) {
        for (var x = 0, xl = gridSizeX; x < xl; x++) {
          var actor = tiles[y * gridSizeX + x] = new root.Block({
            x: x * tileSizeX,
            y: y * tileSizeY,
            imageSource: 'assets/images/map-tiles/15.svg'
          });
        }
      }

      window.addEventListener('mousedown', this.mouseEventHandler.bind(this), false);
      window.addEventListener('mousemove', this.mouseEventHandler.bind(this), false);

      this.updateDOM();
    }

    indexToCoordinates(index) {
      return {
        x: index % this.gridSizeX,
        y: Math.floor(index / this.gridSizeX)
      };
    }

    coordinatesToIndex(_x, _y) {
      var x = (_x % this.gridSizeX) ,
          y = (_y % this.gridSizeY);

      if (x < 0)
        x = this.gridSizeX + x;

      if (y < 0)
        y = this.gridSizeY + y;

      return (y * this.gridSizeX) + x;
    }

    mouseEventHandler(event) {
      var actor = event.target._actor;
      if (!actor)
        return;

      if (!event.buttons)
        return;

      if (actor instanceof root.Block) {
        var blockIndex = this.tiles.indexOf(actor);
        if (blockIndex < 0)
          return;

        console.log("OUR BLOCK INDEX IS: ", blockIndex);
        //????.updateImageIndex(?????);
        // var l = this.tiles.length,
        //     topNeighborIndex = (blockIndex < this.gridSizeX)
        //       ? (l - (this.gridSizeX - (blockIndex % this.gridSizeX)))
        //       : blockIndex - this.gridSizeX,
        //     bottomNeighborIndex = (blockIndex >= (l - this.gridSizeX))
        //       ? (blockIndex % this.gridSizeX)
        //       : blockIndex + this.gridSizeX,
        //     leftNeighbor = (blockIndex - 1)
        //     topNeighbor = this.tiles[topNeighborIndex],
        //     bottomNeighbor = this.tiles[bottomNeighborIndex];

        // topNeighbor.updateImageIndex(15);
        // bottomNeighbor.updateImageIndex(15);

        var coords = this.indexToCoordinates(blockIndex),
            neighbors = [
              [ -1, -1, 2 ],
              [ +0, -1, 6 ],
              [ +1, -1, 4 ],
              [ +1, +0, 12 ],
              [ +1, +1, 8 ],
              [ +0, +1, 9 ],
              [ -1, +1, 1 ],
              [ -1, +0, 3 ]
            ].map((offset) => {
              var x = offset[0],
                  y = offset[1],
                  bitmask = offset[2];

              return {
                index: this.coordinatesToIndex(coords.x + x, coords.y + y),
                bitmask
              };
            });

        neighbors.forEach((info) => {
          var index = info.index,
              bitmask = info.bitmask,
              neighborActor = this.tiles[index];

          neighborActor.orImageIndex(bitmask);
        });

        actor.updateImageIndex(15);
      }
    }

    updateDOM() {
      this.removeActors(this.tiles);
      this.addActors(this.tiles);
    }
  }

  root.Editor = Editor;
})((window.root) ? window.root : (window.root = {}));
