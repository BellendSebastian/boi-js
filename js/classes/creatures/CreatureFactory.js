define([
    'Player'
], function (
    Player
) {
    'use strict';

    function CreatureFactory() { }

    CreatureFactory.prototype.spawnPlayer = function () {
        var player = new Player();
        player.setPlayer(true);
        player.modHp(3);
        return player;
    };

    return CreatureFactory;
});
