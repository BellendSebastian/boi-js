define(function () {
    'use strict';

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

    Creature.prototype.draw = function (renderer) {
        renderer.ctx.drawImage(this.sprite, this.pos.x - this.width / 2, this.pos.y - this.height / 2);
        return this;
    };

    Creature.prototype.move = function (x, y) {
        this.pos.x += x * this.speed;
        this.pos.y += y * this.speed;
        return this;
    };

    Creature.prototype.getPos = function () {
        return this.pos;
    };

    Creature.prototype.setPos = function (pos) {
        this.pos = pos;
        return this;
    };

    Creature.prototype.setPlayer = function (bool) {
        this.player = bool;
        return this;
    };

    Creature.prototype.isPlayer = function () {
        return this.player;
    };

    Creature.prototype.getHp = function () {
        return this.hp;
    };

    Creature.prototype.modHp = function (amt) {
        this.hp += amt;
        return this;
    };

    Creature.prototype.setDamage = function (amount) {
        this.damage = amount;
        return this;
    };

    Creature.prototype.getDamage = function () {
        return this.damage;
    }

    return Creature;
});
