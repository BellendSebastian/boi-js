define([
    'Loader',
    'Renderer',
    'CreatureFactory',
    'EntityFactory',
    'Input',
    'ScreenMain',
    'MainMenu',
    'WorldFactory',
    'CollisionMap'
], function (
    Loader,
    Renderer,
    CreatureFactory,
    EntityFactory,
    Input,
    ScreenMain,
    MainMenu,
    WorldFactory,
    CollisionMap
) {
    'use strict';

    /**
     *  Game constructor
     */
    function Game() {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        this.paused = false;
        this.loaded = false;
        this.entities = [];

        this.input = new Input();
        this.ef = new EntityFactory();
        this.cf = new CreatureFactory();
        this.wf = new WorldFactory();
        this.cm = new CollisionMap();
        this.loader = new Loader();
        this.renderer = new Renderer(document.getElementById('viewport'), 960, 640);

        this.loader.add('/assets/sprites/player-test.png');
        this.loader.add('/assets/sprites/projectile-test.png');
        this.loader.add('/assets/tiles/test.png');
        this.loader.add('/assets/sprites/poop-test.png');
        this.loader.add('/assets/sprites/fire-test.png');
        this.loader.loadAll();

        this.renderer.useScreen(new ScreenMain());

        this.world = this.wf.buildWorld([this.loader.get('test.png')]);

        this.player = this.cf.spawnPlayer(this.loader.get('player-test.png'));
        this.entities.push(this.player);
        var pt = this.ef.spawnPoop(this.loader.get('poop-test.png'), this.renderer.canvas.width / 2, this.renderer.canvas.height / 2);
        this.entities.push(pt);
        var ft = this.ef.spawnFire(this.loader.get('fire-test.png'), this.renderer.canvas.width / 4, this.renderer.canvas.height / 2);
        this.entities.push(ft);

        this.loop();
    }

    /**
     *  Main update step, logic only, no visuals
     */
    Game.prototype.update = function () {
        if (!this.loader.checkLoaded()) {
            return;
        }

        this.handleKeys();

        if (this.paused) {
            return;
        }

        this.entities.forEach(function (entity) {
            entity.update();
        });
        this.renderer.update();
    };

    /**
     *  Main draw step, no logic, only visuals
     */
    Game.prototype.draw = function () {
        if (!this.loader.checkLoaded() || this.paused) {
            return;
        }
        this.renderer.draw();

        this.world.room.draw(this.renderer.ctx);

        var _this = this;
        this.entities.forEach(function (entity) {
            if (entity.pos.x < 0 || entity.pos.y < 0 || entity.pos.x > _this.renderer.canvas.width || entity.pos.y > _this.renderer.canvas.height) {
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
                    this.entities.push(this.ef.spawnProjectile(this.loader.get('projectile-test.png'), this.player.pos.x, this.player.pos.y, 0, -1, movement));
                    this.player.hasFired = true;
                }
            }
            if (this.input.isPressed(40)) { // Down
                if (!this.player.hasFired) {
                    this.entities.push(this.ef.spawnProjectile(this.loader.get('projectile-test.png'), this.player.pos.x, this.player.pos.y, 0, 1, movement));
                    this.player.hasFired = true;
                }
            }
            if (this.input.isPressed(37)) { // Left
                if (!this.player.hasFired) {
                    this.entities.push(this.ef.spawnProjectile(this.loader.get('projectile-test.png'), this.player.pos.x, this.player.pos.y, -1, 0, movement));
                    this.player.hasFired = true;
                }
            }
            if (this.input.isPressed(39)) { // Right
                if (!this.player.hasFired) {
                    this.entities.push(this.ef.spawnProjectile(this.loader.get('projectile-test.png'), this.player.pos.x, this.player.pos.y, 1, 0, movement));
                    this.player.hasFired = true;
                }
            }
        }
    };

    return Game;
});
