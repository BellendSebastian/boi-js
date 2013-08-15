define(function () {
    'use strict';

    function Screen(context) {
        this.ctx = context;
        this.title = null;
    }

    Screen.prototype.update = function () {
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('-- ' + this.title + ' --', 400, 20);
        return this;
    };

    Screen.prototype.draw = function () {
        return this;
    };

    return Screen;
});
