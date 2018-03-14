
(function(){
    // ANIMATION LOOP
    function mainLoop() {
        window.requestAnimationFrame(mainLoop);

        x = x + directionX;
        y = y + directionY;

        pacmanElement.style.left = x + 'px';
        pacmanElement.style.top = y + 'px';
    }

    // CHECK FOR PACMAN
    var pacmanElement = document.getElementById('pacman');
    if (!pacmanElement)
        throw new Error('cant find');

    // MOVEMENT VARIABLES
    var x = 0,
        y = 0,
        directionX = 0,
        directionY = 0;
        
    // KEYBOARD EVENT LISTENERS
    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft'){
            directionX = -10;
            directionY = 0;
            pacmanElement.classList = 'direction-left';
        } else if (event.code === 'ArrowRight'){
            directionX = +10;
            directionY = 0;
            pacmanElement.classList = 'direction-right';
        } else if (event.code === 'ArrowUp'){
            directionY = -10;
            directionX = 0;
            pacmanElement.classList = 'direction-up';
        } else if (event.code === 'ArrowDown'){
            directionY = +10;
            directionX = 0;
            pacmanElement.classList = 'direction-down';
        }
    }, true)

    window.requestAnimationFrame(mainLoop);

})();