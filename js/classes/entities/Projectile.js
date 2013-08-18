define(function () {
    'use strict';

    function Projectile(sprite, x, y, velX, velY, modifier) {
        console.log('fuck you');
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

    Projectile.prototype.modDamage = function (amount) {
        this.damage += amount;
        return this;
    };

    Projectile.prototype.update = function () {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        return this;
    };

    Projectile.prototype.draw = function (renderer) {
        renderer.ctx.drawImage(this.sprite, this.pos.x - this.width / 2, this.pos.y - this.height / 2);
        return this;
    };

    return Projectile;
});
