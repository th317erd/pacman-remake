(function(root) {
  class Character {
    constructor(x, y, imageSource) {
      var characterElement = document.createElement('img');
      characterElement.setAttribute('src', imageSource);
      characterElement.classList = 'character';
      document.body.appendChild(characterElement);

      this.element = characterElement;
      this.x = x;
      this.y = y;
      this.directionX = 0;
      this.directionY = 0;
    }

    move() {
      this.x += this.directionX;
      this.y += this.directionY;

      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
    }
  }

  root.Character = Character;
})((window.root) ? window.root : (window.root = {}));
