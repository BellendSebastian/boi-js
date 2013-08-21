define(function () {
    'use strict';

    /**
     *  Base creature class. Extend, don't use this directly
     */
    function Creature(sprite) {
        this.player = false;
        this.hp = 0;
        this.speed = 3;
        this.rof = 3;
        this.fireCooldown = 0;
        this.hasFired = false;
        this.damage = 1;
        this.sprite = sprite;
        this.width = 16;
        this.height = 16;
        this.pos = {
            x: 0,
            y: 0
        };
    }

    /**
     *  Update creature position, other stuff like that.
     */
    Creature.prototype.update = function () {
        if (this.hasFired) {
            this.fireCooldown++;
        }
        if (this.fireCooldown >= (15 - this.rof) * 2) {
            this.hasFired = false;
            this.fireCooldown = 0;
        }
        return this;
    };

    /**
     *  Draw creature
     */
    Creature.prototype.draw = function (renderer) {
        renderer.ctx.drawImage(this.sprite.image, this.pos.x - this.width / 2, this.pos.y - this.height / 2);
        return this;
    };

    /**
     *  Move creature
     */
    Creature.prototype.move = function (x, y) {
        this.pos.x += x * this.speed;
        this.pos.y += y * this.speed;
        return this;
    };

    /**
     *  Get current position
     */
    Creature.prototype.getPos = function () {
        return this.pos;
    };

    /**
     *  Set current position
     */
    Creature.prototype.setPos = function (pos) {
        this.pos = pos;
        return this;
    };

    /**
     *  Set player boolean (defaults to false)
     */
    Creature.prototype.setPlayer = function (bool) {
        this.player = bool;
        return this;
    };

    /**
     * Check if current creature is player
     */
    Creature.prototype.isPlayer = function () {
        return this.player;
    };

    /**
     *  Get current creature hp
     */
    Creature.prototype.getHp = function () {
        return this.hp;
    };

    /**
     *  modify current creature hp
     */
    Creature.prototype.modHp = function (amt) {
        this.hp += amt;
        return this;
    };

    /**
     *  Set creature damage
     */
    Creature.prototype.setDamage = function (amount) {
        this.damage = amount;
        return this;
    };

    /**
     *  Get creature damage
     */
    Creature.prototype.getDamage = function () {
        return this.damage;
    };

    /**
     *  Check to see if the creature has collided
     */
    Creature.prototype.checkCollisions = function (entities, world) {

    };

    return Creature;
});
