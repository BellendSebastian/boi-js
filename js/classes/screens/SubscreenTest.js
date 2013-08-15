define([
    'Screen'
], function (
    Screen
) {
    'use strict';

    SubscreenTest.prototype = new Screen();
    SubscreenTest.prototype.constructor = SubscreenTest;

    function SubscreenTest(context) {
        Screen.call(this, context);
        this.title = 'Subscreen';
    }

    return SubscreenTest;
});
