class Point {
    X: number;
    Y: number;
    Z: number;

    constructor(X: number, Y: number, Z: number) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
}

class PointCloud {
    points: Array<Point> = [];

    constructor(points: Array<Point>) {
        this.points = points;
    }

    addPoint(X: number, Y: number, Z: number) {
        let newPoint = new Point(X,Y,Z);
        this.points.push(newPoint);
    }
}

export default Point;