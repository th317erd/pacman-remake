(function(root) {
  class Context {
    constructor() {
      this.state = 0;
      this.actors = [];

      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }

    // ANIMATION LOOP
    render() {
      // Assign this.actors to local variable
      // for easier access / caching
      var actors = this.actors;

      // defining a for loop
      // for loop (intailzier; conditional; incrimentor)
      // creating index as 0, aslong as less than 0, incrimate 1

      for (var i = 0, il = actors.length; i < il; i++) {
          var actor = actors[i],
              t; // t will be time (TODO)

          actor.update(t);
      }

      // If context is shutting down
      // then skip requesting another
      // render frame
      if (!(this.state & 0x01))
        return;

      // access window object
      // access windows propery by key: Request animaiton frame
      // function(value)
      // mainLoop is an argument being passed
      window.requestAnimationFrame(this.render.bind(this));
    }

    start() {
      this.state = 0x01;
      window.requestAnimationFrame(this.render.bind(this));
    }

    stop() {
      var actors = this.actors;
      // Free references (also will end up freeing memory)
      for (var i = 0, il = actors.length; i < il; i++) {
        var actor = actors[i];
        actor.unmount();
      }

      this.actors = [];
      this.state = 0x00;
    }

    addActor(actor) {
      actor.mount();
      this.actors.push(actor);
    }
  }

  root.Context = Context;
})((window.root) ? window.root : (window.root = {}));
