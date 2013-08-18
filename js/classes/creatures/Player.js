define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    Player.prototype = new Creature();
    Player.prototype.constructor = Player;

    function Player(sprite) {
        Creature.call(this);
        this.sprite = sprite;
    }

    return Player;
});
