define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    function ScreenMain() {
        Screen.call(this);
    }

    ScreenMain.prototype = new Screen();

    ScreenMain.prototype.constructor = ScreenMain;

    return ScreenMain;
});
