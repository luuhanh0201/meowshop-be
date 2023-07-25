import { Router } from "express";
import { create, getAll, getOne,remove,update } from "../controllers/products";

const routerProducts = Router()

routerProducts.get("/",getAll)
routerProducts.get("/:id",getOne)
routerProducts.post("/",create)
routerProducts.delete("/:id",remove)
routerProducts.put("/:id",update)


export default routerProducts

