import Customer from './entity/customer';
import Address from './entity/address';
import OrderItem from './entity/order_item';
import Order from './entity/order';


let customer = new Customer("123", "Kramer")
const address = new Address("Rua Santos", 2081, "01419000", "São Paulo")
customer._address = address;
customer.activate()

const item1 = new OrderItem("1", "Item1", 10)
const item2 = new OrderItem("2", "Item2", 100)

const order = new Order("1", "123", [item1, item2])

console.log(customer._address)
console.log(order)
console.log(customer)