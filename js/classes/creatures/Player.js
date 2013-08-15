define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    Player.prototype = new Creature();
    Player.prototype.constructor = Player;
    function Player() {
        Creature.call(this);
    }

    return Player;
});
