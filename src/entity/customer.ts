

class Customer {

    _id: string;
    _name: string;
    _address: string;
    _active: boolean = false;

    constructor(id: string, name: string, address: string) {
        this._id = id
        this._name = name
        this._address = address
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

    changeName(name: string) {
        this._name = name
    }

    activate() {
        this._active = true
    }

    deactivate() {
        this._active = false
    }


}

let c = new Customer("123", "", "Rua")
console.log(c._name)