define([
    'BaseEntity'
], function (
    BaseEntity
) {
    'use strict';

    Poop.prototype = new BaseEntity();
    Poop.prototype.constructor = Poop;

    function Poop(sprite, x, y) {
        BaseEntity.call(this, sprite, x, y);
    }

    return Poop;
});
