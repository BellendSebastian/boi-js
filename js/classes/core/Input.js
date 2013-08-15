define(function () {
    'use strict';

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

    Input.prototype.isPressed = function (key) {
        return this.pressedKeys[key] ? true : false;
    };

    return Input;
});
