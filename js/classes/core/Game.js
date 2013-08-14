define([
    'Renderer'
], function (
    Renderer
) {
    'use strict';

    function Game() {
        this.renderer = new Renderer(document.getElementById('viewport'));
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
        this.loop();
    }

    Game.prototype.update = function () {
        this.renderer.update();
    };

    Game.prototype.draw = function () {
        this.renderer.draw();
    };

    Game.prototype.loop = function () {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    };

    return Game;
});
