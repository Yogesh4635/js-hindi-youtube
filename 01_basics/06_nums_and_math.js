const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));        //  100.000


const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));  // 124

const oldNumber = 1123.8996
console.log(oldNumber.toPrecision(3));  //  1.12e+3


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   //  10,00,000


//     +++++++++++++++++ Maths ++++++++++++++++++


console.log(Math);
console.log(Math.abs(-76));      //  76
console.log(Math.round(7.4));    // 7 
console.log(Math.ceil(7.2));     //  8
console.log(Math.floor(7.9));    //  7
console.log(Math.min(4,1,7,9));   //  1
console.log(Math.max(3,1,6,9));    //  9


console.log(Math.random());    //     0.557601134
console.log(Math.random()*10) + 1;
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);











