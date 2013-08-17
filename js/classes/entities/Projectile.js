define(function () {
    'use strict';

    function Projectile(x, y, velX, velY, modifier) {
        this.color = '#f00';
        this.glyph = '・';
        this.speed = 4.5;
        this.modifier = modifier;
        this.vel = {
            x: velX,
            y: velY
        };
        this.pos = {
            x: x,
            y: y
        };
    }

    Projectile.prototype.update = function () {
        this.pos.x += this.vel.x * this.speed + this.modifier.x;
        this.pos.y += this.vel.y * this.speed + this.modifier.y;
        return this;
    };

    Projectile.prototype.draw = function (renderer) {
        renderer.ctx.fillStyle = this.color;
        renderer.ctx.fillText(this.glyph, this.pos.x, this.pos.y);
        return this;
    };

    return Projectile;
});
