define([
], function (
) {
    'use strict';

    /**
     *  Main renderer class. Don't do any drawing outside
     *  of this object.
     */
    function Renderer(canvas, width, height) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.screen = null;
        this.subscreen = null;
        this.inSubscreen = false;
        this.showFps = true;
        this.lastStep = new Date().getTime();
        this.fps = '--';
        this.frameCount = 0;

        this.canvas.width = width;
        this.canvas.height = height;

        this.clear();
    }

    /**
     *  Use the given screen
     */
    Renderer.prototype.useScreen = function (screen) {
        this.screen = screen;
        return this;
    };

    /**
     *  Clear screen, draw a black rectangle (because black is cool)
     */
    Renderer.prototype.clear = function () {
        this.canvas.width = this.canvas.width;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    /**
     *  Update renderer object
     */
    Renderer.prototype.update = function () {
        if (this.inSubscreen) {
            this.subscreen.update();
        } else {
            this.screen.update();
        }
    };

    /**
     *  Draw screen
     */
    Renderer.prototype.draw = function () {
        this.clear();
        if (this.inSubscreen) {
            this.subscreen.draw(this.canvas, this.ctx);
        } else {
            this.screen.draw(this.canvas, this.ctx);
        }
        this.fpsCounter();
    };

    /**
     * Switch to a subscreen
     */
    Renderer.prototype.useSubscreen = function (subscreen) {
        this.subscreen = subscreen;
        this.inSubscreen = true;
    };

    /**
     *  Clear subscreen and return to main screen
     */
    Renderer.prototype.clearSubscreen = function () {
        this.inSubscreen = false;
        this.subscreen = null;
    };

    /**
     *  Pause the game and display pause message
     */
    Renderer.prototype.pause = function () {
        this.clear();
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('Paused.', this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillText('Press [ESC] to continue.', this.canvas.width / 2, this.canvas.height / 2 + 10);
    };

    /**
     *  Display fps counter
     *
     *  TODO: make this only display if in debug mode
     */
    Renderer.prototype.fpsCounter = function () {
        this.frameCount++;
        var now = new Date().getTime();
        var elapsed = (now - this.lastStep);

        if (elapsed >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            elapsed -= 1000;
            this.lastStep = now;
        }

        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(this.fps, 10, 20);
    };

    return Renderer;
});
