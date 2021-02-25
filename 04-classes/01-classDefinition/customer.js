"use strict";
var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this._firstName = fname;
        this._lastName = lname;
    }
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("KAJOL", "BOY");
myCustomer.firstName = "KAJOL";
myCustomer.lastName = "JERIN";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
