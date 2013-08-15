define([
    'Renderer',
    'CreatureFactory',
    'DebugTools'
], function (
    Renderer,
    CreatureFactory,
    DebugTools
) {
    'use strict';

    function Game() {
        this.renderer = new Renderer(document.getElementById('viewport'));
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        this.dt = new DebugTools();
        var cf = new CreatureFactory();
        this.player = cf.spawnPlayer();

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
        this.dt.fpsCounter();
        window.requestAnimationFrame(this.loop.bind(this));
    };

    return Game;
});
