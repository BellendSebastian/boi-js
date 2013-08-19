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
    function ScreenMain(context) {
        Screen.call(this, context);
        this.title = 'Main';
    }

    return ScreenMain;
});
