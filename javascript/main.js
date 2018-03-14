(function() {
  function mainLoop() {
    window.requestAnimationFrame(mainLoop);

    x = x + directionX;
    y = y + directionY;

    pacmanElement.style.left = x + 'px';
    pacmanElement.style.top = y + 'px';
  }

  var pacmanElement = document.getElementById('pacman');
  if (!pacmanElement)
    throw new Error('CAN NOT FIND THE SHIT!');

  var x = 0,
      y = 0,
      directionX = 0,
      directionY = 0;

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      // Stop Pacman
      directionX = 0;
      directionY = 0;
    } else if (event.code === 'ArrowLeft') {
      // Tell Pacman to go left
      directionX = -1;
      directionY = 0;
      pacmanElement.classList = 'direction-left';
    } else if (event.code === 'ArrowRight') {
      // Tell Pacman to go right
      directionX = 1;
      directionY = 0;
      pacmanElement.classList = 'direction-right';
    } else if (event.code === 'ArrowUp') {
      // Tell Pacman to go up
      directionY = -1;
      directionX = 0;
      pacmanElement.classList = 'direction-up';
    } else if (event.code === 'ArrowDown') {
      // Tell Pacman to go down
      directionY = 1;
      directionX = 0;
      pacmanElement.classList = 'direction-down';
    }
  }, true);

  window.requestAnimationFrame(mainLoop);
})();
