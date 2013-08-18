define(function () {
    'use strict';

    function Loader() {
        this.images = [];
        this.imageCount = 0;
        this.imageSuccess = 0;
    }

    Loader.prototype.loadImages = function (images) {
        this.imageCount = Object.keys(images).length;
        var _this = this;
        for (var image in images) {
            if (images.hasOwnProperty(image)) {
                var img = new Image();
                img.src = images[image];
                img.addEventListener('load', function () {
                    _this.imageSuccess += 1;
                }, false);
                this.images[image] = img;
            }
        }
    };

    Loader.prototype.checkImageLoad = function () {
        return (this.imageCount === this.imageSuccess);
    };

    return Loader;
});
