define(function () {
    'use strict';

    function Projectile(x, y, velX, velY, modifier) {
        this.color = '#fff';
        this.glyph = '・';
        this.sprite = new Image();
        this.sprite.src = '/assets/sprites/projectile-test.png';
        this.speed = 4.5;
        this.modifier = modifier;
        this.damage = 0;
        this.width = 16;
        this.height = 16;
        this.vel = {
            x: velX * this.speed,
            y: velY * this.speed
        };
        this.pos = {
            x: x,
            y: y
        };
    }

    Projectile.prototype.modDamage = function (amount) {
        this.damage += amount;
        if (this.damage > 5) {
            this.color = '#f00';
        }
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
