import Vector from "../maths/Vector";

export default class Shape {

    private _points: Vector[];

    constructor() {
        this._points = [];
    }

    addPoint(point: Vector | Vector[]): void {
        if (point instanceof Vector) {
            this._points.push(point);
        } else {
            point.forEach(p => this._points.push(p));
        }
    }

    containsPoint(point: Vector): boolean {
        const nbPoints = this._points.length;
        let count = 0;

        if (nbPoints < 3) return false;

        for (let i = 0; i < nbPoints; i++) {
            const segPointA = this._points[i];
            let segPointB = null;

            if (i < nbPoints - 1) {
                segPointB = this._points[i + 1];
            } else {
                segPointB = this._points[0];
            }

            let x1 = segPointA.getX,
                y1 = segPointA.getY,
                x2 = segPointB.getX,
                y2 = segPointB.getY;
            
            if (
                point.getY <= y1 !== point.getY <= y2 &&
                point.getX <= (x2 - x1) * (point.getY - y1) / (y2 - y1) + x1
            ) {
                count++;
            }
        }

        return count % 2 != 0;
    }

}