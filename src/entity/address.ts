export default class Address {

    _street: string;
    _number: number;
    _zip: string;
    _city: string;


    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
    }

    getStreet() {
        return this._street;
    }

    getNumber() {
        return this._number;
    }

    getZip() {
        return this._zip;
    }

    getCity() {
        return this._city;
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required")
        }
        if (this._number === 0) {
            throw new Error("Number is required")
        }
        if (this._zip.length === 0) {
            throw new Error("Zip code is required")
        }
        if (this._city.length === 0) {
            throw new Error("City is required")
        }
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._zip}, ${this._city}`
    }

}


let c = new Address("Rua 333", 123, "123456", "Guarujá")
console.log(c.toString())