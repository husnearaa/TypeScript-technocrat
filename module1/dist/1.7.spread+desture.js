"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    // rest operator
    // destructuring
    // spread operator
    var book1 = ["english", 'bangla', "math"];
    var book2 = ["science", 'statistics', "sociology"];
    book1.push.apply(book1, book2);
    var mentors1 = {
        typesctipt: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    };
    var mentors2 = {
        prizma: 'firoz',
        next: 'tanmoy',
        cloud: 'nahid'
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    // rest operator
    var greetFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        // console.log(`hi $(friend1) $(friend2) $(friend3)`);
        friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
    };
    greetFriends("Abul", "kabul", "babul", "labul");
}
