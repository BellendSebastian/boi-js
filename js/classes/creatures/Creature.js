define(function () {
    'use strict';

    function Creature() {
        this.player = false;
        this.hp = 0;
    }

    Creature.prototype.setPlayer = function (bool) {
        this.player = bool;
        return this;
    };

    Creature.prototype.isPlayer = function () {
        return this.player;
    };

    Creature.prototype.getHp = function () {
        return this.hp;
    };

    Creature.prototype.modHp = function (amt) {
        this.hp += amt;
        return this;
    };

    return Creature;
});
