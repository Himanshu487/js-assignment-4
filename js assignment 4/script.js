
let bill = Number(prompt('Enter the bill value here'));


console.log(`the bill value is ${50 < bill < 300}`);
console.log(Number(50) < bill < Number(300))


// 50 < bill < 300
let tip = bill<300 && bill>50 ? bill*15/100 : bill*20/100;

console.log(`the bill value is ${bill}`);

console.log("the tip",tip)

console.log(`the total amount to be paid is ${bill + tip}`)
