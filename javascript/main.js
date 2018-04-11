// Anonymous function to avoid pollution of the global scope
// single root "argument" that will store all variables
(function(root) {
  var mode = 'game';


  if (mode === 'editor') {
    var editor = new root.Editor();
    editor.start();
  } else {
    var game = new root.Game();
    game.start();
  }

// does window have a "root" key/object, if so use that key, if not create it and assing an empty objcet. pass object to "root" scope
// enables you to use objects across different files
})((window.root) ? window.root : (window.root = {}));
