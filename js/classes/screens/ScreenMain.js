define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    ScreenMain.prototype = new Screen();
    ScreenMain.prototype.constructor = ScreenMain;

    function ScreenMain() {
        Screen.call(this);
    }

    ScreenMain.prototype.draw = function () {

    };

    ScreenMain.prototype.update = function () {
    
    };

    return ScreenMain;
});
