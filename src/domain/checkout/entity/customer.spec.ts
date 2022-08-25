import Address from "./address";
import Customer from "./customer";


describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John");
          }).toThrowError("Id is required");
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
          }).toThrowError("Name is required");
    })

    it("should throw error when name is empty", () => {
       let customer = new Customer("123", "Kramer")
       
       customer.changeName("Alberto")

       expect(customer.name).toBe("Alberto")
    })

    it("should throw error when trying to activate with undefined address", () => {
        expect(() => {
            let customer = new Customer("123", "Kramer");
            customer.activate()
          }).toThrowError("Address is required");
     })

    it("should deactivate", () => {
        let customer = new Customer("123", "Kramer")
        let address = new Address("Street 1", 123, "13330-250", "São Paulo");
        customer.Address = address
        
        customer.activate()
        customer.deactivate()
 
        expect(customer.isActive()).toBeFalsy()
     })



})