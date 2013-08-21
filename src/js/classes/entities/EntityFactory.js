define([
    'Projectile',
    'Poop',
    'Fire'
], function (
    Projectile,
    Poop,
    Fire
) {
    'use strict';

    function EntityFactory() {}

    EntityFactory.prototype.spawnPoop = function (sprite, x, y) {
        var poop = new Poop(sprite, x, y);
        return poop;
    };

    EntityFactory.prototype.spawnFire = function (sprite, x, y) {
        var fire = new Fire(sprite, x, y);
        return fire;
    };

    EntityFactory.prototype.spawnProjectile = function (sprite, x, y, velX, velY, modifier) {
        var projectile = new Projectile(sprite, x, y, velX, velY, modifier);
        return projectile;
    };

    return EntityFactory;
});
