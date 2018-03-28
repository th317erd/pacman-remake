// Anonymous function to avoid pollution of the global scope
// single root "argument" that will store all variables
(function(root){ 

    // ANIMATION LOOP
    function mainLoop() {
        // access window object
        // access windows propery by key: Request animaiton frame
        // function(value)
        // mainLoop is an argument being passed
        window.requestAnimationFrame(mainLoop);

        // defining a for loop
        // for loop (intailzier; conditional; incrimentor)
        // creating index as 0, aslong as less than 0, incrimate 1
        for (var index = 0; index < players.length; index++) {
            var player = players[index];
            player.move();
        }
    }

    // GAME VARIABLES
    var windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        players = [];

    for (var amount = 0; amount < 10; amount++) {
        
        // define player objects
        // stores player properties
        players.push( 

            // create character giving it arguments, pushing it into array
            // passing these arguments through the constructor
            new root.Player(
                windowWidth * Math.random(),
                windowHeight * Math.random(),
            )
        );
    }

    window.requestAnimationFrame(mainLoop);


// does window have a "root" key/object, if so use that key, if not create it and assing an empty objcet. pass object to "root" scope
// enables you to use objects across differnt files
})((window.root) ? window.root : (window.root = {}));
