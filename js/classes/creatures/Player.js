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
        this.sprite.src = '/assets/sprites/player-test.png';
    }

    return Player;
});
