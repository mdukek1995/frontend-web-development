console.log("hello!");

//you can use var or let *never use var*
const x=2;
let y=3;

y = x+y;
console.log(y); 
//use single quotations in case I want to use quotes within string OR double if I want to use an apostraphe

const template = `this is a template literal` //can insert java with ${}

const myArray = [0,2,7,8];

console.log(myArray);
console.log(myArray[3]);

myArray.push(10);

console.log(myArray);

//object
const classroom = {
    building: "ATLAS" ,
    room: 104
}

console.log(classroom);
console.log(classroom.building);
console.log(classroom["building"]);

//add to object
classroom.occupancyLimit = 30;
console.log(classroom);

y = 11;
const stringy = "11" ;

if (y === stringy) {
    console.log(y);
} else { console.log(x);
}

// double = evaluates against two items, triple = can test int against strings

while (y < 14) {
    console.log(y);
    y = y + 2;
}

//for (initial ; condition ; update) { do this }

for (let i = 0; i <= myArray.length ; i++ ) {
    console.log(`index: ${i}`);
    console.log(`value: ${myArray[i]}`);
}

for (const item of myArray) {
    console.log(`value: ${myArray[item]}`)
}

for (const key in classroom) {
    console.log(`key: ${key}`);
    console.log(`value: ${classroom[key]}`);
}

myArray.forEach(function(item) {
    console.log(`value: ${myArray[item]}`)
});

function add(x, y) {
    return x + y;
}

console.log(add(7, 15));

const subtract = (x, y) => {
    return x-y;
}

console.log(subtract(7, 15));