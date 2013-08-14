define([
    'Player'
], function (
    Player
) {
    'use strict';

    function CreatureFactory() { }

    CreatureFactory.prototype.spawnPlayer = function () {
        var player = new Player();
        return player;
    };

    return CreatureFactory;
})
