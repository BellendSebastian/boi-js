define(function () {
    'use strict';

    function Screen(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
    }

    Screen.prototype.update = function () {
        return this;
    };

    Screen.prototype.draw = function () {
        return this;
    };

    return Screen;
});
