define(function () {
    'use script';

    function DebugTools() {
        this.ctx = document.getElementById('viewport').getContext('2d');
        this.showFps = true;
        this.lastStep = new Date().getTime();
        this.fps = '--';
        this.frameCount = 0;
    }

    DebugTools.prototype.fpsCounter = function () {
        this.frameCount++;
        var now = new Date().getTime();
        var elapsed = (now - this.lastStep);

        if (elapsed >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            elapsed -= 1000;
            this.lastStep = now;
        }

        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(this.fps, 10, 20);
    };

    return DebugTools;
});
