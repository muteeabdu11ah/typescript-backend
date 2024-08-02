let sales = 123456789;
let course = 'string';
let bill = true;
let level;
level = 'a';
level = 10;

function reserv(doc: any) {
    console.log(doc);
}

let number: [number, string] = [1, '1'];


enum Size { Small = 1, Medium, Large }
let MySize: Size = Size.Small
console.log(MySize);
reserv(10);

function CalculateTax(income: number, taxyear = 2000) {
    if ((taxyear) > 40_00)
        return income
    return income

}
CalculateTax(200, 50_000);





type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    'id': 20, "name": '30', retire(date) {
        console.log(date)
        return date
    }
};

console.log(employee.id);
employee.name = "30"

let i: number = 0;
for (i; i < 200; i += 1) {
    console.log(i)
}

function Kgtolbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}

console.log(Kgtolbs(10));

console.log(Kgtolbs("10"));

type draggabel = {
    drag: () => void
}

type resizabel = {
    resize: () => void
}

type ui = resizabel & draggabel;

let uii: ui = {
    drag: () => { },
    resize: () => { }
}

function bigcase(word: string | null | undefined): string {
    if (word)
        return word.toUpperCase();
    else
        return 'hola'
}

console.log(bigcase(null))
console.log(bigcase('LOla'))