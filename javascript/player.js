(function(root) {
  class Player extends root.Character {
    constructor(x, y) {
      super(x, y, 'assets/images/pacman.svg');

      document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
          // Stop Pacman
          this.directionX = 0;
          this.directionY = 0;
        } else if (event.code === 'ArrowLeft') {
          // Tell Pacman to go left
          this.directionX = -1;
          this.directionY = 0;
          this.element.classList = 'character direction-left';
        } else if (event.code === 'ArrowRight') {
          // Tell Pacman to go right
          this.directionX = 1;
          this.directionY = 0;
          this.element.classList = 'character direction-right';
        } else if (event.code === 'ArrowUp') {
          // Tell Pacman to go up
          this.directionY = -1;
          this.directionX = 0;
          this.element.classList = 'character direction-up';
        } else if (event.code === 'ArrowDown') {
          // Tell Pacman to go down
          this.directionY = 1;
          this.directionX = 0;
          this.element.classList = 'character direction-down';
        }
      }, true);
    }
  }

  root.Player = Player;
})((window.root) ? window.root : (window.root = {}));
