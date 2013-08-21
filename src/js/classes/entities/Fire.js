define([
    'BaseEntity'
], function (
    BaseEntity
) {
    'use strict';

    Fire.prototype = new BaseEntity();
    Fire.prototype.constructor = Fire;

    function Fire(sprite, x, y) {
        BaseEntity.call(this, sprite, x, y);
    }

    return Fire;
});
