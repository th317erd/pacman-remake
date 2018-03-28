(function(root) {
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

  for (var amount = 0; amount < 150; amount++) {
    players.push(
      new root.Player(
        windowWidth * Math.random(),
        windowHeight * Math.random()
      )
    );
  }

  window.requestAnimationFrame(mainLoop);
})((window.root) ? window.root : (window.root = {}));
