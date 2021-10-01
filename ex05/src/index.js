// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

let arrKey = [];
for (const key of shoppingList.entries()) {
  arrKey.push(key[0]);
}

for (const key of arrKey) {
  console.log("groceries: " + key);
}

let arrValue = [];
for (const value of shoppingList.entries()) {
  arrValue.push(value[1]);
}

for (const value of arrValue) {
  console.log("amount: " + value);
}

for (const [key, value] of shoppingList.entries()) {
  console.log([key, value]);
}
// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };
