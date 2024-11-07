"use strict";
{
    // Learning function
    // Normal function
    // Arrow Function
    // Normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 2);
    // Arrow Function
    var addArrow = function (num1, num2) { return num1 + num2; };
    // object --> function --> method
    var poorUser = {
        name: 'Hosneara',
        balance: 0,
        addBalance: function (balance) {
            return "my new balance is : ".concat(this.balance + balance);
        }
    };
    // callback function
    var arr = [1, 4, 10];
    var newArray = arr.map(function (element) { return element * element; });
}
