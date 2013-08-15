define([
    'Renderer',
    'CreatureFactory',
    'Input'
], function (
    Renderer,
    CreatureFactory,
    Input
) {
    'use strict';

    function Game() {
        this.paused = false;
        this.renderer = new Renderer(document.getElementById('viewport'));
        this.entities = [];
        this.input = new Input();
        var requestAnimationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        var cf = new CreatureFactory();
        this.player = cf.spawnPlayer();
        this.entities.push(this.player);
        this.loop();
    }

    Game.prototype.update = function () {
        this.handleKeys();
        if (this.paused) return;

        this.entities.forEach(function (entity) {
            entity.update();
        });
        this.renderer.update();
    };

    Game.prototype.draw = function () {
        if (this.paused) return;

        this.entities.forEach(function (entity) {
            entity.draw();
        });
        this.renderer.draw();
    };

    Game.prototype.loop = function () {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    };

    Game.prototype.handleKeys = function () {
        if (this.input.isPressed(73)) {
            this.renderer.test();
        } else if (this.input.isPressed(27)) {
            this.paused = false;
            this.renderer.untest();
        } else if (this.input.isPressed(80)) {
            this.renderer.pause();
            this.paused = true;
        }

        if (this.input.isPressed(91)) {
            this.player.move(1);
        }
    };

    return Game;
});
