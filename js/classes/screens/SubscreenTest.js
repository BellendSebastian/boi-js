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
    function SubscreenTest(context) {
        Screen.call(this, context);
        this.title = 'Subscreen';
    }

    return SubscreenTest;
});
