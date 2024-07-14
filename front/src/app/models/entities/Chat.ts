export default class Chat {

    constructor(private _response: string) {}

    public get response(): string {
        return this._response;
    }
    public set response(value: string) {
        this._response = value;
    }
}