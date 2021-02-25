import { Shape } from "./shape"

export class Circle extends Shape{
    private _radious: number;
    constructor(x: string, y:string, radious: number){
        super(x,y);
    }
    public get radious(): number {
        return this._radious;
    }
    public set radious(value: number) {
        this._radious = value;
    }
    

    getInfo(): string {
        return super.getInfo() + 'radious=${radious}'
    }


}