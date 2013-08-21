define([
    'Collider'
], function (
    Collider
) {
    'use strict';

    function CollisionMap() {
        this.collisions = [];

    }

    CollisionMap.prototype.add = function (collider) {
        this.collisions.push(collider);
        return this;
    };

    CollisionMap.prototype.clear = function () {
        this.collisions = [];
        return this;
    };

    return CollisionMap;
});
