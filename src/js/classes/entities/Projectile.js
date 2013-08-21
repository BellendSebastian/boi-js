define([
    'BaseEntity'
], function (
    BaseEntity
) {
    'use strict';

    Projectile.prototype = new BaseEntity();
    Projectile.prototype.constructor = Projectile;

    /**
     *  Basic projectile class, nothing fancy for now.
     *
     *  TODO: make fancy
     */
    function Projectile(sprite, x, y, velX, velY, modifier) {
        this.speed = 10;
        this.modifier = modifier;
        this.damage = 0;
        this.vel = {
            x: velX * this.speed + (this.modifier.x * 2),
            y: velY * this.speed + (this.modifier.y * 2)
        };
        BaseEntity.call(this, sprite, x, y);
        this.size = 32;
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
     *  Check to see if the projectile has collided
     */
    Projectile.prototype.checkCollisions = function (entities, world) {
        
    };

    return Projectile;
});
