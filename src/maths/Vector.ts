export default class Vector {

    private _x: number;
    private _y: number;

    constructor(x = 0.0, y = 0.0) {
        this._x = x;
        this._y = y;
    }

    add(other: Vector | number): void {
        if (other instanceof Vector) {
            this._x += other._x;
            this._y += other._y;
        } else {
            this._x += other;
            this._y += other;
        }
    }

    sub(other: Vector | number): void {
        if (other instanceof Vector) {
            this._x -= other._x;
            this._y -= other._y;
        } else {
            this._x -= other;
            this._y -= other;
        }
    }

    multiply(value: number): void {
        this._x *= value;
        this._y *= value;
    }

    length(): number {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    }

    dot(other: Vector): number {
        return this._x * other._x + this._y * other._y;
    }

    /**
     * Compute the angle between two vectors, in radian
     * @param other other vector to compute with
     * @returns angle in radian
     */
    angleBetween(other: Vector): number {
        return Math.acos(this.dot(other));
    }

    /**
     * Rotates the vector with the given angle in degree
     * @param angle angle in degree
     */
    rotateDeg(angle: number): void {
        angle = angle *(Math.PI / 180.0);
        this.rotateRad(angle);
    }

    /**
     * Rotates the vector with the given angle in radian
     * @param angle angle in radian
     */
    rotateRad(angle: number): void {
        const x = Math.cos(angle) * this._x - Math.sin(angle) * this._y;
        this._y = Math.sin(angle) * this._x + Math.cos(angle) * this._y;
        this._x = x;
    }

    /**
     * Compute the distance between two points represented as vectors
     * @param other point represented as a vector
     * @returns distance between two points represented as vectors
     */
    distance(other: Vector): number {
        return Math.sqrt(
            Math.pow(other._x - this._x, 2) + Math.pow(other._y - this._y, 2)
        );
    }

    get getX(): number {
        return this._x;
    }

    get getY(): number {
        return this._y;
    }

    equals(other: Vector): boolean {
        return other._x === this._x && other._y === this._y;
    }
}