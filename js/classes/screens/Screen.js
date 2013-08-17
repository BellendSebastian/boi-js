define(function () {
    'use strict';

    function Screen(context) {
        this.ctx = context;
        this.title = null;
    }

    Screen.prototype.update = function () {
        return this;
    };

    Screen.prototype.draw = function () {
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('-- ' + this.title + ' --', 320, 20);
        return this;
    };

    return Screen;
});
