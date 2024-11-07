"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    var age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    var isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult: isAdult });
    // nullish coalescing operator
    // nul / undefined ---> decision making
    var isAuthenticated = "";
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    var result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1: result1 }, { result2: result2 });
    var user_1 = {
        name: 'hosneara',
        address: {
            city: 'ctg',
            road: 'Awesome Road',
            presentAddress: 'sirajganj'
        }
    };
    var permanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent address';
    console.log({ permanentAddress: permanentAddress });
}
