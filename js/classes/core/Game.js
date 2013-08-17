define([
    'Renderer',
    'CreatureFactory',
    'Input',
    'Projectile'
], function (
    Renderer,
    CreatureFactory,
    Input,
    Projectile
) {
    'use strict';

    function Game() {
        this.paused = false;
        this.renderer = new Renderer(document.getElementById('viewport'), 640, 480);
        this.entities = [];
        this.input = new Input();
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        var cf = new CreatureFactory();
        this.player = cf.spawnPlayer();
        this.player.setDamage(8);
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
        var _this = this;
        this.entities.forEach(function (entity) {
            if (entity.pos.x < 0 || entity.pos.y < 0 || entity.pos.x > _this.renderer.canvas.width || entity.pos.y > _this.renderer.canvas.height) {
                _this.entities.splice(_this.entities.indexOf(entity), 1);
            }
            entity.draw(_this.renderer);
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

        var movement = {
            x: 0,
            y: 0
        };

        if (this.input.isPressed(87)) { // W
            this.player.move(0, -1);
            movement.y = -1;
        }
        if (this.input.isPressed(83)) { // S
            this.player.move(0, 1);
            movement.y = 1;
        }
        if (this.input.isPressed(65)) { // A
            this.player.move(-1, 0);
            movement.x = -1;
        }
        if (this.input.isPressed(68)) { // D
            this.player.move(1, 0);
            movement.x = 1;
        }

        if (this.input.isPressed(38)) { // Up
            if (!this.player.hasFired) {
                this.entities.push(new Projectile(this.player.pos.x, this.player.pos.y, 0, -1, movement).modDamage(this.player.getDamage()));
                this.player.hasFired = true;
            }
        }
        if (this.input.isPressed(40)) { // Down
            if (!this.player.hasFired) {
                this.entities.push(new Projectile(this.player.pos.x, this.player.pos.y, 0, 1, movement).modDamage(this.player.getDamage()));
                this.player.hasFired = true;
            }
        }
        if (this.input.isPressed(37)) { // Left
            if (!this.player.hasFired) {
                this.entities.push(new Projectile(this.player.pos.x, this.player.pos.y, -1, 0, movement).modDamage(this.player.getDamage()));
                this.player.hasFired = true;
            }
        }
        if (this.input.isPressed(39)) { // Right
            if (!this.player.hasFired) {
                this.entities.push(new Projectile(this.player.pos.x, this.player.pos.y, 1, 0, movement).modDamage(this.player.getDamage()));
                this.player.hasFired = true;
            }
        }
    };

    return Game;
});
