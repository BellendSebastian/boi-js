define(function () {
    'use strict';

    function Creature() {
        this.player = false;
        this.hp = 0;
        this.pos = {
            x: 0,
            y: 0
        }
    }

    Creature.prototype.update = function () {
    
    };

    Creature.prototype.draw = function () {
    
    };

    Creature.prototype.move = function (x, y) {
    
    };

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
