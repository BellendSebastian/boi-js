define([
    'Floor'
], function (
    Floor
) {
    'use strict';

    /**
     *  World object, contains all floors and rooms.
     *
     *  TODO: Actually write it all, yeah?
     */
    function World(tileset) {
        this.tileSet = tileset;
        this.floors = [];
        this.floors.push(new Floor(this.tileSet));
        this.floor = this.floors[0];
        this.room = this.floor.rooms[0];
    }

    /**
     *  Get the current floor
     */
    World.prototype.getFloor = function () {
        return this.floor;
    };

    /**
     *  Get the current room
     */
    World.prototype.getRoom = function () {
        return this.room;
    };

    return World;
});
