define([
    'Player'
], function (
    Player
) {
    'use strict';

    function CreatureFactory() { }

    CreatureFactory.prototype.spawnPlayer = function (sprite) {
        var player = new Player(sprite);
        player.setPlayer(true);
        player.setDamage(8);
        player.modHp(3);
        player.setPos({ x: 50, y: 50 });
        return player;
    };

    return CreatureFactory;
});
