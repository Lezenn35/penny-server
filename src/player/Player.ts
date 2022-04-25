import Color from "../color/Color";
import Vector from "../maths/Vector";
import Shape from "../shape/Shape";

export const PLAYER_SPEED: number = 1.0;

export default class Player {
    private _name: string;
    private _color: Color;
    private _position: Vector;
    private _orientation: Vector;
    private _shape: Shape;

    constructor(name: string, color: Color, pos: Vector, orientation: Vector) {
        this._name = name;
        this._color = color;
        this._position = pos;
        this._orientation = orientation;
        this._shape = new Shape();
    }

    move(speed?: number): void {
        if (speed === undefined) {
            this.move(PLAYER_SPEED);
        } else {
            let newPos = new Vector(this._orientation.getX, this._orientation.getY);
            newPos.multiply(speed);
            this._position.add(newPos);
        }
    }

    rotateDeg(angle: number): void {
        this._orientation.rotateDeg(angle);
    }

    rotateRad(angle: number): void {
        this._orientation.rotateRad(angle);
    }

    get getName(): string {
        return this._name;
    }

    get getColor(): Color {
        return this._color;
    }

    get getPosition(): Vector {
        return this._position;
    }

    set setPosition(newPos: Vector) {
        this._position = newPos;
    }

    get getOrientation(): Vector {
        return this._orientation;
    }

    set setOrientation(newOr: Vector) {
        this._orientation = newOr;
    }

    get getShape(): Shape {
        return this._shape;
    } 
}