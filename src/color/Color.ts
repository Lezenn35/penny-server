export default class Color {

    private _red: number;
    private _blue: number;
    private _green: number;

    constructor(red: number, blue: number, green: number) {
        this._blue = blue;
        this._green = green;
        this._red = red;

        if (this._blue <= 0) this._blue = 0;
        if (this._red <= 0) this._red = 0;
        if (this._green <= 0) this._green = 0;
    }

    darker(value: number): Color {
        let nred = this._red - value,
            nblue = this._blue - value,
            ngreen = this._green - value;
        
        if (nblue <= 0) nblue = 0;
        if (nred <= 0) nred = 0;
        if (ngreen <= 0) ngreen = 0;

        return new Color(nred, nblue, ngreen);
    }

    get getRed(): number {
        return this._red;
    }

    get getBlue(): number {
        return this._blue;
    }

    get getGreen(): number {
        return this._green;
    }

    set getRed(value: number) {
        this._red = value;
    }

    set getBlue(value: number) {
        this._blue = value;
    }

    set getGreen(value: number) {
        this._green = value;
    }
} 