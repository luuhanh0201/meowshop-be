import { Router } from "express";
import { create, getAll, getOne,remove,update } from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";

const routerProducts = Router()

routerProducts.get("/",getAll)
routerProducts.get("/:id",getOne)
routerProducts.post("/",checkPermission,create)
routerProducts.delete("/:id",checkPermission,remove)
routerProducts.put("/:id",checkPermission,update)


export default routerProducts

