import express, {Application, Request, Response} from "express";
import { shopRouter } from "./routes";

const app:Application = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/shops", shopRouter);

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});