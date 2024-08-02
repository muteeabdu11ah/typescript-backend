"use strict";
let sales = 123456789;
let course = 'string';
let bill = true;
let level;
level = 'a';
level = 10;
function reserv(doc) {
    console.log(doc);
}
let number = [1, '1'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let MySize = Size.Small;
console.log(MySize);
reserv(10);
function CalculateTax(income, taxyear = 2000) {
    if ((taxyear) > 4000)
        return income;
    return income;
}
CalculateTax(200, 50000);
let employee = {
    'id': 20, "name": '30', retire(date) {
        console.log(date);
        return date;
    }
};
console.log(employee.id);
employee.name = "30";
let i = 0;
for (i; i < 200; i += 1) {
    console.log(i);
}
function Kgtolbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
console.log(Kgtolbs(10));
console.log(Kgtolbs("10"));
let uii = {
    drag: () => { },
    resize: () => { }
};
function bigcase(word) {
    if (word)
        return word.toUpperCase();
    else
        return 'hola';
}
console.log(bigcase(null));
console.log(bigcase('LOla'));
//# sourceMappingURL=index.js.map