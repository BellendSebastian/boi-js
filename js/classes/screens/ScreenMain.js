define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    ScreenMain.prototype = new Screen();
    ScreenMain.prototype.constructor = ScreenMain;

    /**
     *  Main screen used for testing. Extends Screen.
     */
    function ScreenMain() {
        Screen.call(this);
        this.title = 'Main';
    }

    return ScreenMain;
});
