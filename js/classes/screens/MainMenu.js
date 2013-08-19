define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    MainMenu.prototype = new Screen();
    MainMenu.prototype.constructor = MainMenu;

    /**
     *  Subscreen used for testing. Extends Screen.
     *
     *  TODO: New subscreen class as parent
     */
    function MainMenu() {
        Screen.call(this);
        this.title = 'Ingame Menu';
    }

    MainMenu.prototype.draw = function (canvas, context) {
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fill();

        context.strokeStyle = '#fff';
        context.lineWidth = 2;
        context.rect(20, 40, canvas.width - 40, canvas.height - 60);
        context.stroke();

        context.fillStyle = '#fff';
        context.textAlign = 'center';
        context.fillText('-- ' + this.title + ' --', canvas.width / 2, 20);
        context.textAlign = 'right';
        context.fillText('[ESC] to return to game.', canvas.width - 40, canvas.height - 40);
    };

    return MainMenu;
});

