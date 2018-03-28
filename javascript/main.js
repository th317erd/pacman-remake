(function(root) {
  // const is same as var but is unchangeable
  // (you can only assign to it once)
  const Character = root.Character;

  function mainLoop() {
    window.requestAnimationFrame(mainLoop);

    for (var index = 0; index < players.length; index++) {
      var player = players[index];

      player.x += player.directionX;
      player.y += player.directionY;

      player.element.style.left = player.x + 'px';
      player.element.style.top = player.y + 'px';
    }
  }

  var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      players = [];

  // variables
  // statements
  // conditionals
  // loops
  // functions

  for (var amount = 0; amount < 150; amount++) {
    players.push(
      new Character(
        windowWidth * Math.random(),
        windowHeight * Math.random(),
        (Math.random() < 0.5)
          ? 'assets/images/pacman.svg'
          : 'assets/images/ghost-up.svg'
      )
    );
  }

  document.addEventListener('keydown', (event) => {
    var player1 = players[0];

    if (event.code === 'Space') {
      // Stop Pacman
      player1.directionX = 0;
      player1.directionY = 0;
    } else if (event.code === 'ArrowLeft') {
      // Tell Pacman to go left
      player1.directionX = -1;
      player1.directionY = 0;
      player1.element.classList = 'character direction-left';
    } else if (event.code === 'ArrowRight') {
      // Tell Pacman to go right
      player1.directionX = 1;
      player1.directionY = 0;
      player1.element.classList = 'character direction-right';
    } else if (event.code === 'ArrowUp') {
      // Tell Pacman to go up
      player1.directionY = -1;
      player1.directionX = 0;
      player1.element.classList = 'character direction-up';
    } else if (event.code === 'ArrowDown') {
      // Tell Pacman to go down
      player1.directionY = 1;
      player1.directionX = 0;
      player1.element.classList = 'character direction-down';
    }

    var player2 = players[1];
    if (event.code === 'KeyQ') {
      // Stop Pacman
      player2.directionX = 0;
      player2.directionY = 0;
    } else if (event.code === 'KeyA') {
      // Tell Pacman to go left
      player2.directionX = -1;
      player2.directionY = 0;
      player2.element.classList = 'character direction-left';
    } else if (event.code === 'KeyD') {
      // Tell Pacman to go right
      player2.directionX = 1;
      player2.directionY = 0;
      player2.element.classList = 'character direction-right';
    } else if (event.code === 'KeyW') {
      // Tell Pacman to go up
      player2.directionY = -1;
      player2.directionX = 0;
      player2.element.classList = 'character direction-up';
    } else if (event.code === 'KeyS') {
      // Tell Pacman to go down
      player2.directionY = 1;
      player2.directionX = 0;
      player2.element.classList = 'character direction-down';
    }
  }, true);

  window.requestAnimationFrame(mainLoop);
})((window.root) ? window.root : (window.root = {}));
