define([
    'Player'
], function (
    Player
) {
    'use strict';

    /**
     *  Creature Factory class for spawning mobs / players
     */
    function CreatureFactory() { }

    /**
     *  Spawn a new player, set default values and return the object
     */
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
