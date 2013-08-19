define(function () {
    'use strict';

    /**
     *  Screen class to handle rendering of the current scene
     */
    function Screen(context) {
        this.ctx = context;
        this.title = null;
    }

    /**
     *  Update screen logic (menus or whatever)
     */
    Screen.prototype.update = function () {
        return this;
    };

    /**
     *  Draw the current screen
     */
    Screen.prototype.draw = function () {
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('-- ' + this.title + ' --', 320, 20);
        return this;
    };

    return Screen;
});
