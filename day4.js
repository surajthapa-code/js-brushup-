// 1. Product object
const product = {
  id: 1,
  name: "Laptop",
  price: 55000,
  specs: { ram: "16GB", storage: "512GB" },
};

// 2. Destructure name and price
const { name, price } = product;
console.log(name, price);

// 3. Destructure nested product specs
const { ram } = product.specs;
console.log(ram);

// 4. displayProduct function
function displayProduct({ name, price }) {
  console.log(name, price);
}
displayProduct(product);

// 5. Create updatedProduct using spread
const updatedProduct = { ...product, price: 49000, isStock: true };
console.log(updatedProduct);

// 6. Add item to cart with spread
const cart = ["shirt", "shoes"];
const newCart = [...cart, "watch"];
console.log(newCart);

// 7. Merge arrays with spread
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
const newArr = [...arr1, ...arr2];
console.log(newArr);
