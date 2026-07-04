// console.log("Hello Java Script :)");

// let name = "absfhsj"
// console.log(name);
// console.log(typeof name);
// name = 'John Doe';
// console.log(name);

// let age = 25;
// console.log(age);

// alert("Hello World!");


// let na='saman'
// let a = 25;
// let isStudent = true;
// let customer = {}
// let customers = []
// let salary = 20000

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof customer);
// console.log(typeof customers);
// console.log(typeof salary);

// let x = 10;
// let y = '10';

// console.log(x===y);

let x = 10;
let y = 20;

if( x > y ){
    console.log("x is greater than y");
}else if( x < y ){
    console.log("x is less than y");
}else{
    console.log("x is equal to y");
}

let day = 1;

switch(true){
case day === 1:
console.log("Monday");
break;
case day === 2:
console.log("Tuesday");
break;
case day = 3:           
console.log("Wednesday");
break;
}

for(let i=0; i<5; i++){
    console.log(i);
}   

while(x < 20){
    console.log(x);
    x++;
}

do{
    console.log(x);
    x++;
}while(x < 20);     

function add(a, b){
    return a + b;
}       

//array

let numbers = [1, 2, 3, 4, 5];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}   

customers ={
    name: "John Doe",
    age: 25,
    isStudent: true
}

console.log(customers.name);
console.log(customers.age);
console.log(customers.isStudent);