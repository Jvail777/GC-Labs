import { Router, Request, Response } from "express";
import { Item } from "./item";

//hard code data
let itemArray: Item[] = [
  { id: 1, quantity: 20, price: 7.99, product: "Eggs", isActive: true },
  { id: 2, quantity: 15, price: 2.79, product: "Milk", isActive: true },
  { id: 3, quantity: 10, price: 4.49, product: "Butter", isActive: true },
  { id: 4, quantity: 52, price: 3.99, product: "Cheese", isActive: true },
  { id: 5, quantity: 30, price: 1.99, product: "Bread", isActive: true },
  { id: 6, quantity: 12, price: 3.49, product: "Apples", isActive: true },
  { id: 7, quantity: 25, price: 5.99, product: "Oranges", isActive: true },
  { id: 8, quantity: 40, price: 2.99, product: "Bananas", isActive: true },
  { id: 9, quantity: 50, price: 6.99, product: "Lemons", isActive: true },
  { id: 10, quantity: 15, price: 8.99, product: "Limes", isActive: true },
  { id: 11, quantity: 20, price: 9.99, product: "Grapes", isActive: true },
  { id: 12, quantity: 30, price: 4.99, product: "Pineapple", isActive: true },
  { id: 13, quantity: 40, price: 3.99, product: "Mango", isActive: true },
  { id: 14, quantity: 15, price: 2.99, product: "Strawberries", isActive: true },
  { id: 15, quantity: 25, price: 1.99, product: "Blueberries", isActive: true },
  { id: 16, quantity: 10, price: 6.99, product: "Raspberries", isActive: true },
  { id: 17, quantity: 20, price: 8.99, product: "Blackberries", isActive: true },
  { id: 18, quantity: 50, price: 4.99, product: "Cantaloupe", isActive: true },
  { id: 19, quantity: 40, price: 3.99, product: "Honeydew", isActive: true },
  { id: 20, quantity: 30, price: 2.99, product: "Watermelon", isActive: true },
];

export const itemRouter = Router();

//CRUD Create Read Update Delete

itemRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
  if (req.query.maxPrice !== undefined) {
    let underArray = itemArray.filter(
      (x) => x.price <= Number(req.query.maxPrice) && x.isActive
    );
    return res.status(200).json(underArray);
  } else if (req.query.prefix !== undefined) {
    let startsWithArray = itemArray.filter((x) =>
      x.product.startsWith(String(req.query.prefix))&& x.isActive
    );
    return res.status(200).json(startsWithArray);
  } else if (req.query.pageSize !== undefined) {
    let pageSizeArray = itemArray.slice(0, Number(req.query.pageSize));
    return res.status(200).json(pageSizeArray.filter((x) => x.isActive));
  } else {
    return res.status(200).json(itemArray.filter((x) => x.isActive));
  }
});

itemRouter.get( "/:id", async (req: Request, res: Response): Promise<Response> => {
    let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));

    if (itemIWantToFind === undefined) {
      return res.status(404).send("ID Not Found");
    } else {
      return res.status(200).json(itemIWantToFind);
    }
  }
);

itemRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  let newItem: Item = {
    id: GetNextId(),
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
    isActive: true
  };

  itemArray.push(newItem);

  return res.status(201).json(newItem);
});

itemRouter.put("/:id",async (req: Request, res: Response): Promise<Response> => {
    //find the item by the id
    let itemToFind = itemArray.find((x) => x.id === Number(req.params.id));
    //update the properties of the item based on what is sent in the body of the request
    if (itemToFind !== undefined) {
      itemToFind.price = Number(req.body.price);
      itemToFind.product = String(req.body.product);
      itemToFind.quantity = Number(req.body.quantity);

      return res.status(200).json(itemToFind);
    } else {
      return res.status(404).send("I Didnt find it");
    }
  }
);

itemRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));
    if (itemFound !== undefined) {
      let index = itemArray.indexOf(itemFound);
      itemArray.splice(index, 1);
      return res.status(204).send("No Content");
    } else {
      return res.status(404).send("Item not found.");
    }
  }
);





function GetNextId() {
  return Math.max(...itemArray.map((x) => x.id)) + 1;
}
