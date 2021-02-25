export class Shape{

    private _x: string;
    public get x(): string {
        return this._x;
    }
    public set x(value: string) {
        this._x = value;
    }

    private _y: string;
    public get y(): string {
        return this._y;
    }
    public set y(value: string) {
        this._y = value;
    }

    constructor(x: string, y: string){
        this.x = x;
        this.y=y;
    }

    getInfo():string{
        return 'x=${this.x}, y=${this.y}';
    }
}