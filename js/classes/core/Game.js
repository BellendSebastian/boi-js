define([
    'Loader',
    'Renderer',
    'CreatureFactory',
    'Input',
    'Projectile',
    'ScreenMain',
    'MainMenu',
    'WorldFactory'
], function (
    Loader,
    Renderer,
    CreatureFactory,
    Input,
    Projectile,
    ScreenMain,
    MainMenu,
    WorldFactory
) {
    'use strict';

    /**
     *  Game constructor
     */
    function Game() {
        this.loader = new Loader();
        this.loader.add('/assets/sprites/player-test.png');
        this.loader.add('/assets/sprites/projectile-test.png');
        this.loader.add('/assets/tiles/test.png');
        this.loader.loadAll();

        this.paused = false;
        this.loaded = false;
        this.input = new Input();

        this.renderer = new Renderer(document.getElementById('viewport'), 640, 480);
        this.renderer.useScreen(new ScreenMain());
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        this.entities = [];
        var cf = new CreatureFactory();
        this.player = cf.spawnPlayer(this.loader.assets['/assets/sprites/player-test.png']);
        this.entities.push(this.player);

        var wf = new WorldFactory();
        this.world = wf.buildWorld([this.loader.assets['/assets/tiles/test.png']]);
        console.log(this.world);

        this.loop();
    }

    /**
     *  Main update step, logic only, no visuals
     */
    Game.prototype.update = function () {
        if (!this.loader.checkLoaded()) return;

        this.handleKeys();

        if (this.paused) return;

        this.entities.forEach(function (entity) {
            entity.update();
        });
        this.renderer.update();
    };

    /**
     *  Main draw step, no logic, only visuals
     */
    Game.prototype.draw = function () {
        if (!this.loader.checkLoaded() || this.paused) return;
        this.renderer.draw();

        this.world.room.draw(this.renderer.ctx);

        var _this = this;
        this.entities.forEach(function (entity) {
            if (entity.pos.x < 0 || entity.pos.y < 0 || entity.pos.x > _this.renderer.canvas.width || entity.pos.y > _this.renderer.canvas.height || entity.checkCollisions(_this.entities, _this.world)) {
                _this.entities.splice(_this.entities.indexOf(entity), 1);
            }
            entity.draw(_this.renderer);
        });
    };

    /**
     *  The main game loop
     */
    Game.prototype.loop = function () {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    };

    /**
     *  Handle keystrokes
     */
    Game.prototype.handleKeys = function () {
        if (this.input.isPressed(77)) { // M
            this.paused = true;
            this.renderer.useSubscreen(new MainMenu());
            this.renderer.draw();
        } else if (this.input.isPressed(27)) {
            this.paused = false;
            this.renderer.clearSubscreen();
        } else if (this.input.isPressed(80)) {
            this.renderer.pause();
            this.paused = true;
        }

        var movement = {
            x: 0,
            y: 0
        };

        if (!this.paused) {
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
                    this.entities.push(new Projectile(this.loader.assets['/assets/sprites/projectile-test.png'], this.player.pos.x, this.player.pos.y, 0, -1, movement));
                    this.player.hasFired = true;
                }
            }
            if (this.input.isPressed(40)) { // Down
                if (!this.player.hasFired) {
                    this.entities.push(new Projectile(this.loader.assets['/assets/sprites/projectile-test.png'], this.player.pos.x, this.player.pos.y, 0, 1, movement));
                    this.player.hasFired = true;
                }
            }
            if (this.input.isPressed(37)) { // Left
                if (!this.player.hasFired) {
                    this.entities.push(new Projectile(this.loader.assets['/assets/sprites/projectile-test.png'], this.player.pos.x, this.player.pos.y, -1, 0, movement));
                    this.player.hasFired = true;
                }
            }
            if (this.input.isPressed(39)) { // Right
                if (!this.player.hasFired) {
                    this.entities.push(new Projectile(this.loader.assets['/assets/sprites/projectile-test.png'], this.player.pos.x, this.player.pos.y, 1, 0, movement));
                    this.player.hasFired = true;
                }
            }
        }
    };

    return Game;
});
