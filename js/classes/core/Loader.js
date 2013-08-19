define(function () {
    'use strict';

    /**
     *  Class for pre-loading assets
     */
    function Loader() {
        this.assets = [];
        this.queue = [];
        this.queued = 0;
        this.completed = 0;
        this.error = 0;
    }

    /**
     *  Add new asset to queue
     */
    Loader.prototype.add = function (path) {
        this.queue[path] = null;
        this.queued += 1;
        return this;
    };

    /**
     *  Pre-load all assets in queue
     */
    Loader.prototype.loadAll = function () {
        var _this = this;
        for (var item in this.queue) {
            if (item.indexOf('sprite') !== -1 || item.indexOf('tiles') !== -1) {
                var img = new Image();
                img.src = '.' + item;
                this.assets[item] = img;
                img.addEventListener('load', function () {
                    _this.completed += 1;
                }, false);
                img.addEventListener('error', function () {
                    _this.error += 1;
                }, false);
            }
        }
    };

    /**
     *  Check if load is in progress or not
     */
    Loader.prototype.checkLoaded = function () {
        return (this.queued === this.completed + this.error);
    };

    return Loader;
});
