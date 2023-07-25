import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../controllers/categories";

const routerCategory = Router();

routerCategory.get("/", getAll)
routerCategory.get("/detail/:id", getOne)
routerCategory.post("/create", create)
routerCategory.delete("/remove/:id", remove)
routerCategory.put("/update/:id", update)

export default routerCategory