//  Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

//  let myCreateDate = new Date(2023, 0, 23)
//  console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0, 23, 5, 7)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("10-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{weekday: "long",})




