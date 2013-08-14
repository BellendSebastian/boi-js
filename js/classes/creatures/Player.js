define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    function Player() {
        Creature.call(this);
    }

    Player.prototype = new Creature();

    Player.prototype.constructor = Player;

    return Player;
});
