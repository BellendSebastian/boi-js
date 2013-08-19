define([
    'Room'
], function (
    Room
) {
    'use strict';

    /**
     *  Floor object
     *
     *  TODO: Make this more than just a simple lil placeholder
     */
    function Floor(tileset) {
        this.tileSet = tileset;
        this.rooms = [];
        this.rooms.push(new Room(this.tileSet));
    }

    return Floor;
});
