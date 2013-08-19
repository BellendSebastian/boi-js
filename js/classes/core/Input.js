define(function () {
    'use strict';

    /**
     *  Class for handling input
     */
    function Input() {
        this.pressedKeys = [];
        this.keydown = function (event) {
            this.pressedKeys[event.keyCode] = true;
        };
        this.keyup = function (event) {
            this.pressedKeys[event.keyCode] = false;
        };
        document.addEventListener('keydown', this.keydown.bind(this));
        document.addEventListener('keyup', this.keyup.bind(this));
    }

    /**
     *  Returns if the current key is pressed
     */
    Input.prototype.isPressed = function (key) {
        return this.pressedKeys[key] ? true : false;
    };

    return Input;
});
