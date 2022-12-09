import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "Motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  let totalValue: number = 0;

  inventory.forEach((value) => {
    let itemPrice = value.product.price;
    totalValue += itemPrice * value.quantity;
  });
  return totalValue;
}

console.log(calcInventoryValue(inventory));

export { calcInventoryValue, InventoryItem };
