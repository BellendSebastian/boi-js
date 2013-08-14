define([
    'ScreenMain'
], function (
    ScreenMain
) {
    function Renderer(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.screen = new ScreenMain(this.canvas, this.ctx);
        this.subscreen = null;

        this.clear();
    }

    Renderer.prototype.clear = function () {
        this.canvas.width = this.canvas.width;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
    };

    Renderer.prototype.update = function () {
        this.screen.update();
    };

    Renderer.prototype.draw = function () {
        this.screen.draw();
    };

    return Renderer;
});
