define(function () {
    'use strict';

    /**
     *  Basic projectile class, nothing fancy for now.
     *
     *  TODO: make fancy
     */
    function Projectile(sprite, x, y, velX, velY, modifier) {
        this.sprite = sprite;
        this.speed = 10;
        this.modifier = modifier;
        this.damage = 0;
        this.width = 16;
        this.height = 16;
        this.vel = {
            x: velX * this.speed + this.modifier.x,
            y: velY * this.speed + this.modifier.y
        };
        this.pos = {
            x: x,
            y: y
        };
    }

    /**
     *  Modify the damage of the projectile
     */
    Projectile.prototype.modDamage = function (amount) {
        this.damage += amount;
        return this;
    };

    /**
     *  Update the projectile's position.
     */
    Projectile.prototype.update = function () {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        return this;
    };

    /**
     *  Draw the projectile
     */
    Projectile.prototype.draw = function (renderer) {
        renderer.ctx.drawImage(this.sprite, this.pos.x - this.width / 2, this.pos.y - this.height / 2);
        return this;
    };

    return Projectile;
});
