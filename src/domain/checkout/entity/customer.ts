

import Address from "./address";
export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id
        this._name = name
        this.validate()
    }

    validate() {
        if (this._id == "") {
            throw Error("Id is required")
        }

        if (this._name == "") {
            throw Error("Name is required")
        }
    }

    get name(): string {
        return this._name
    }

    get Address(): Address {
        return this._address
    }

    set Address(address: Address) {
        this._address = address;
    }

    isActive() {
        return this._active
    }

    changeName(name: string) {
        this._name = name
    }



    activate() {
        if (this._address === undefined) {
            throw Error("Address is required")
        }
        this._active = true
    }

    deactivate() {
        this._active = false
    }


}

