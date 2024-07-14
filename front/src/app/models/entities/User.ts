export default class User {

    private _id!: number
    private _message!: string

    constructor(private _email: string, private _password: string) {}

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get message(): string {
        return this._message
    }
    public set message(value: string) {
        this._message = value
    }

    public get password(): string {
        return this._password
    }
    public set password(value: string) {
        this._password = value
    }
    
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
}