define([
    'ScreenMain'
], function (
    ScreenMain
) {
    'use strict';

    function Renderer(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.screen = new ScreenMain(this.canvas, this.ctx);
        this.subscreen = null;
        this.inSubscreen = false;

        this.canvas.width = '800';
        this.canvas.height = '600';

        this.clear();
    }

    Renderer.prototype.clear = function () {
        this.canvas.width = this.canvas.width;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
    };

    Renderer.prototype.update = function () {
        if (this.inSubscreen) {
            this.subscreen.update();
        } else {
            this.screen.update();
        }
    };

    Renderer.prototype.draw = function () {
        this.clear();
        if (this.inSubscreen) {
            this.subscreen.draw();
        } else {
            this.screen.draw();
        }
    };

    return Renderer;
});
