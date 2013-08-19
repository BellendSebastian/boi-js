define(function () {
    'use strict';

    /**
     *  Screen class to handle rendering of the current scene
     */
    function Screen() {
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
    Screen.prototype.draw = function (canvas, context) {
        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.fillText('-- ' + this.title + ' --', 320, 20);
        return this;
    };

    return Screen;
});
