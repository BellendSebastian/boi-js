define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    ScreenMain.prototype = new Screen();
    ScreenMain.prototype.constructor = ScreenMain;

    function ScreenMain(context) {
        Screen.call(this, context);
        this.title = 'Main';
    }

    return ScreenMain;
});
