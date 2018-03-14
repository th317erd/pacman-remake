// Anonymous function to avoid pollution of the global scope
(function(){ 

    // ANIMATION LOOP
    function mainLoop() {
        window.requestAnimationFrame(mainLoop);
        
        // 
        for (var index = 0; index < players.length; index++){
            var player = players[index];
            
            // 
            player.x += player.directionX;
            player.y += player.directionY;
            
            // 
            player.element.style.left = player.x + 'px';
            player.element.style.top = player.y + 'px';
        }
    }

    // GAME VARIABLES
    var windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        players = [];

    for (var amount = 0; amount < 10; amount++){

        // create pacman "player"
        var pacmanElement = document.createElement('img');
            pacmanElement.setAttribute('src', 'assets/images/pacman.svg');
            pacmanElement.classList = 'pacman';
            document.body.appendChild(pacmanElement);
        
        // define player objects
        players.push({ 
            element: pacmanElement,  
            x: windowWidth * Math.random(),
            y: windowHeight * Math.random(),
            directionX: 0,
            directionY: 0
        });
    }

    // KEYBOARD EVENT LISTENERS
    document.addEventListener('keydown', (event) => {
        
        var player1 = players[0];
        var player2 = players[1];

        //pacman1
        if (event.code === 'Space'){
            player1.directionX = 0;
            player1.directionY = 0;
        } else if (event.code === 'ArrowLeft'){
            player1.directionX = -1;
            player1.directionY = 0;
            player1.element.classList = 'pacman direction-left';
        } else if (event.code === 'ArrowRight'){
            player1.directionX = +1;
            player1.directionY = 0;
            player1.element.classList = 'pacman direction-right';
        } else if (event.code === 'ArrowUp'){
            player1.directionY = -1;
            player1.directionX = 0;
            player1.element.classList = 'pacman direction-up';
        } else if (event.code === 'ArrowDown'){
            player1.directionY = +1;
            player1.directionX = 0;
            player1.element.classList = 'pacman direction-down';
        }

         //pacman2
         if (event.code === 'KeyQ'){
            player2.directionX = 0;
            player2.directionY = 0;
        } else if (event.code === 'KeyA'){
            player2.directionX = -1;
            player2.directionY = 0;
            player2.element.classList = 'pacman direction-left';
        } else if (event.code === 'KeyD'){
            player2.directionX = +1;
            player2.directionY = 0;
            player2.element.classList = 'pacman direction-right';
        } else if (event.code === 'KeyW'){
            player2.directionY = -1;
            player2.directionX = 0;
            player2.element.classList = 'pacman direction-up';
        } else if (event.code === 'KeyS'){
            player2.directionY = +1;
            player2.directionX = 0;
            player2.element.classList = 'pacman direction-down';
        }

    }, true)

    window.requestAnimationFrame(mainLoop);

})();