export default class Message {

    private _id!: number;

    constructor(private _idUser: number, private _time: any, private _message: string) {}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

    public get time(): any {
        return this._time;
    }
    public set time(value: any) {
        this._time = value;
    }

    public get idUser(): number {
        return this._idUser;
    }
    public set idUser(value: number) {
        this._idUser = value;
    }
    
}