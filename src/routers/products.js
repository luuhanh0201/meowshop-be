import { Router } from "express";
import { create, getAll, getOne,remove,update } from "../controllers/products";

const routerProducts = Router()

routerProducts.get("/getall",getAll)
routerProducts.get("/detail/:id",getOne)
routerProducts.post("/create",create)
routerProducts.delete("/remove/:id",remove)
routerProducts.put("/update/:id",update)

export default routerProducts

