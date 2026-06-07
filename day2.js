const users = [
  { name: "Suraj", age: 21 },
  { name: "Aman", age: 25 },
  { name: "Priya", age: 19 },
];

// 1. Return a new array of just the names
const names = users.map((user) => user.name);
console.log(names);

// 2. Return a new array of objects with a new property added
const updatedUsers = users.map((user) => ({
  ...user,
  isAdult: true,
}));
console.log(updatedUsers);

// 3. Return only users who are 20 or older
const adultUsers = users.filter((user) => user.age >= 20);
console.log(adultUsers);

// 4. Return only users whose name starts with the letter "A"
const usersStartingWithA = users.filter((user) => user.name.startsWith("A"));
console.log(usersStartingWithA);

const products = [
  { name: "phone", price: 15000, inStock: true },
  { name: "laptop", price: 55000, inStock: false },
  { name: "tablet", price: 25000, inStock: true },
  { name: "watch", price: 8000, inStock: true },
];

// 5. Return an array of product prices
const productPrices = products.map((product) => product.price);
console.log(productPrices);
// 6. Calculate the total price of all orders
const totalPrice = productPrices.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(totalPrice);
// 6. Return item names using reduce
const itemNames = products.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);
console.log(itemNames);
// 7. Get the total price of only in-stock products — using filter and reduce chained together in one line
const inStock = products
  .filter((obj) => obj.inStock)
  .reduce((acc, curr) => {
    acc = acc + curr.price;
    return acc;
  }, 0);
console.log(inStock);
