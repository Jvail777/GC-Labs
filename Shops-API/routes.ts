import { Router, Request, Response } from "express";
import { Shop } from "./shop";

const shops: Shop[] = [
    { id: 1, name: "Pepper's Pizza", rating: 4.5 },
    { id: 2, name: "Clive's Chives", rating: 3.4 },
    { id: 3, name: "Betty's Brews", rating: 4.3 },
    { id: 4, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 5, name: "Teddy's Tunes", rating: 4.7 }
];

export const shopRouter = Router();

shopRouter.get("/", async (req: Request, res: Response): Promise<Response> =>{
    if (req.query.minRating !== undefined) {
        let shopArray = shops.filter(
          (x) => x.rating >= Number(req.query.minRating)
        );
        return res.status(200).json(shopArray);
      }
    return res.status(200).json(shops)
});

shopRouter.get( "/:id", async (req: Request, res: Response): Promise<Response> => {
    let itemIWantToFind = shops.find((x) => x.id === Number(req.params.id));

    if (itemIWantToFind === undefined) {
      return res.status(404).send(`error: Shop not found: ${req.params.id}`);
    } else {
      return res.status(200).json(itemIWantToFind);
    }
  }
);

shopRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
    let newItem: Shop = {
        
        id: GetNextId(),
        name: req.body.name,
        rating: req.body.rating
    };
  
    shops.push(newItem);
  
    return res.status(201).json(newItem);
  });

  shopRouter.put("/:id",async (req: Request, res: Response): Promise<Response> => {
    //find the item by the id
    let itemToFind = shops.find((x) => x.id === Number(req.params.id));
    //update the properties of the item based on what is sent in the body of the request
    if (itemToFind !== undefined) {
      itemToFind.name = String(req.body.name);
      itemToFind.rating = Number(req.body.rating);
      

      return res.status(200).json(itemToFind);
    } else {
      return res.status(404).send("I Didnt find it");
    }
  }
);

shopRouter.delete(
    "/:id",
    async (req: Request, res: Response): Promise<Response> => {
      let itemFound = shops.find((x) => x.id === Number(req.params.id));
      if (itemFound !== undefined) {
        let index = shops.indexOf(itemFound);
        shops.splice(index, 1);
        return res.status(204).send("No Content");
      } else {
        return res.status(404).send("Item not found.");
      }
    }
  );

  function GetNextId() {
    return Math.max(...shops.map((x) => x.id)) + 1;
  }
  