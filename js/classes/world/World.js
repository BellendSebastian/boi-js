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
    function World(tilesets) {
        this.tileSet = tilesets[0];
        this.floors = [];
        this.room = null;
        this.floor = null;
        this.floorCount = 0;
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

    /**
     *  Sets the number of floors
     */
    World.prototype.setFloors = function (floors) {
        this.floorCount = floors;
        return this;
    };

    /**
     *  Builds the world
     */
    World.prototype.build = function () {
        for (var i = 0; i < this.floorCount; i++) {
            this.floors.push(new Floor(this.tileSet, i));
        }
        this.floor = this.floors[0];
        this.room = this.floor.rooms[0];
        return this;
    };

    return World;
});
