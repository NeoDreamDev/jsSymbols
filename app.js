// Create symbol
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// console.log(Symbol("123") === Symbol("123"));
// console.log(`Hello ${sym1.toString()}`);

// UNIQUE OBJECT KEYS
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

// Just looks at key1 as a normal property
// myObj.Key1 = 'Prop1';

// using the actual variable
myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not numerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by json.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]}));
