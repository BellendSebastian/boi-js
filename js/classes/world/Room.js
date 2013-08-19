define(function () {
    'use strict';

    /**
     *  Room object.
     *
     *  TODO: Layouts should be randomised
     */
    function Room(tileset) {
        this.tileSize = 32;
        this.tileSet = tileset;
        this.layout = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }

    /**
     *  Returns the layout;
     */
    Room.prototype.getLayout = function () {
        return this.layout;
    };

    /**
     *  Draws the current layout
     *
     *  TODO: make less rubbish
     */
    Room.prototype.draw = function (context) {
        for (var y = 0; y < this.layout.length; y++) {
            for (var x = 0; x < this.layout[0].length; x++) {
                context.drawImage(this.tileSet, this.layout[y][x] * this.tileSize, 0, this.tileSize, this.tileSize, this.tileSize * x + 100, this.tileSize * y + 100, this.tileSize, this.tileSize);
            }
        }
        return this;
    };

    return Room;
});
