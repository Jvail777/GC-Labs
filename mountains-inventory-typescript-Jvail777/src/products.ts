interface Product {
  price: number;
  name: string;
}

let newProduct1: Product = {
  price: 6,
  name: "Graham Crackers",
};
let newProduct2: Product = {
  price: 5,
  name: "Paper Plates",
};
let newProduct3: Product = {
  price: 25,
  name: "Cat Liter",
};

let products: Product[] = [newProduct1, newProduct2, newProduct3];

function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;
  if (products.length > 0) {
    for (let average of products) {
      sum = average.price + sum;
    }
    return sum / products.length;
  } else {
    return 0;
  }
}

console.log(calcAverageProductPrice(products));

export { calcAverageProductPrice, Product };
