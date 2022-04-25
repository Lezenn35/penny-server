import Vector from "../maths/Vector";

export default class WorldMap {

    private _size: number;
    private _center: Vector;

    constructor(size: number) {
        this._size = size;
        this._center = new Vector(0, 0);
    }

    isInMap(point: Vector): boolean {
        const center = this.getCenter;
        return point.distance(center) <= this._size;
    }

    get getCenter(): Vector {
        return this._center;
    }

    get getSize(): number {
        return this._size;
    }
    
}