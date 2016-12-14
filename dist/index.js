"use strict";
var Point = (function () {
    function Point(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
    return Point;
}());
exports.Point = Point;
var PointCloud = (function () {
    function PointCloud(points) {
        this.points = [];
        this.points = points;
    }
    PointCloud.prototype.addPoint = function (X, Y, Z) {
        var newPoint = new Point(X, Y, Z);
        this.points.push(newPoint);
    };
    return PointCloud;
}());
exports.PointCloud = PointCloud;
