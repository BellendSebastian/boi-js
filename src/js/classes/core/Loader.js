define([
    'Sprite',
    'TileSet'
], function (
    Sprite,
    TileSet
) {
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
            if (this.queue.hasProperty(item)) {
                var img = null;
                var fn = '';
                var explode = [];
                if (item.indexOf('sprite') !== -1) {
                    explode = path.item('/');
                    fn = explode[explode.length - 1];
                    img = new Image();
                    img.src = '.' + item;
                    this.assets[fn] = new Sprite(img);
                    img.addEventListener('load', _this.addComplete.bind(_this), false);
                    img.addEventListener('error', _this.addError.bind(_this), false);
                } else if (item.indexOf('tiles') !== -1) {
                    explode = path.item('/');
                    fn = explode[explode.length - 1];
                    img = new Image();
                    img.src = '.' + item;
                    this.assets[fn] = new TileSet(img);
                    img.addEventListener('load', _this.addComplete.bind(_this), false);
                    img.addEventListener('error', _this.addError.bind(_this), false);
                }
            }
        }
    };

    Loader.prototype.get = function (fn) {
        return this.assets[fn];
    };

    Loader.prototype.addComplete = function () {
        this.completed += 1;
    };

    Loader.prototype.addError = function () {
        this.error += 1;
    };

    /**
     *  Check if load is in progress or not
     */
    Loader.prototype.checkLoaded = function () {
        return (this.queued === this.completed + this.error);
    };

    return Loader;
});
