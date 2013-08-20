define([
    'Room',
    'RoomLayouts'
], function (
    Room,
    RoomLayouts
) {
    'use strict';

    /**
     *  Floor object
     *
     *  TODO: Make this more than just a simple lil placeholder
     */
    function Floor(tileset, depth) {
        this.tileSet = tileset;
        this.depth = depth;
        this.roomCount = 5;
        this.rooms = [];
        var layout = new RoomLayouts();

        for (var i = 0; i < this.roomCount; i++) {
            this.rooms.push(new Room(this.tileSet, layout.getRandomLayout()));
        }

    }

    return Floor;
});
