export class Customer {
    private _firstName: string;
    private _lastName: string;

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

  constructor(fname: string, lname: string) {
    this._firstName = fname;
    this._lastName = lname;
  }
}