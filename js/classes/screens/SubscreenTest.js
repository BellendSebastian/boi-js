define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    SubscreenTest.prototype = new Screen();
    SubscreenTest.prototype.constructor = SubscreenTest;

    /**
     *  Subscreen used for testing. Extends Screen.
     *
     *  TODO: New subscreen class as parent
     */
    function SubscreenTest() {
        Screen.call(this);
        this.title = 'Subscreen';
    }

    SubscreenTest.prototype.draw = function (canvas, context) {
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fill();
        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.fillText('-- ' + this.title + ' --', canvas.width / 2, 20);
        context.textAlign = 'right';
        context.fillText('[ESC] to return to game.', canvas.width - 10, canvas.height - 10);
    };

    return SubscreenTest;
});
