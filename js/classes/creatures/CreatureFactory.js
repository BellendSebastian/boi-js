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
        player.setPos({ x: 50, y: 50 });
        return player;
    };

    return CreatureFactory;
});
