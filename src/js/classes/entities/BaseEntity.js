define(function () {
    'use strict';

    function BaseEntity(sprite, x, y) {
        this.sprite = sprite;
        this.size = 64;
        this.pos = {
            x: x,
            y: y
        };
    }

    BaseEntity.prototype.update = function () {
    
    };

    BaseEntity.prototype.draw = function (renderer) {
        renderer.ctx.drawImage(this.sprite, this.pos.x - (this.size / 2), this.pos.y - (this.size / 2), this.size, this.size);
    };

    return BaseEntity;
});
