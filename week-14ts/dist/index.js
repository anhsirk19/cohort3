"use strict";
const user = [{
        firstName: "sai",
        lastName: "krishna",
        age: 19
    }, {
        firstName: "chakri",
        lastName: "majji",
        age: 17,
    },
    {
        firstName: "pandu",
        lastName: "murali",
        age: 21
    }];
function iLegal(user) {
    return user.filter((u) => u.age > 18);
}
console.log(iLegal(user));
