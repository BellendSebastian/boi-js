define([
    'World'
], function (
    World
) {
    'use strict';

    /**
     *  Factory class for world building
     */
    function WorldFactory() {}

    /**
     *  Builds a world and returns it
     */
    WorldFactory.prototype.buildWorld = function (tilesets) {
        var world = new World(tilesets);
        world.setFloors(4);
        world.build();
        return world;
    };

    return WorldFactory;
})
