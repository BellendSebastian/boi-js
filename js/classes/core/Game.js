define([
    'Renderer',
    'CreatureFactory',
    'DebugTools',
    'Input'
], function (
    Renderer,
    CreatureFactory,
    DebugTools,
    Input
) {
    'use strict';

    function Game() {
        this.paused = false;
        this.renderer = new Renderer(document.getElementById('viewport'));
        this.input = new Input();
        var requestAnimationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        this.dt = new DebugTools();
        var cf = new CreatureFactory();
        this.player = cf.spawnPlayer();

        this.loop();
    }

    Game.prototype.update = function () {
        this.handleKeys();
        if (this.paused) return;
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

    Game.prototype.handleKeys = function () {
        if (this.input.isPressed(73)) {
            this.renderer.test();
        } else if (this.input.isPressed(27)) {
            this.renderer.untest();
        }
    };

    return Game;
});
