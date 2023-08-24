import { Router } from "express";
import { create, getAll, getOne,remove,update } from "../controllers/pets";

const routerPets = Router()

routerPets.get("/",getAll)
routerPets.get("/:id",getOne)
routerPets.post("/",create)
routerPets.delete("/:id",remove)
routerPets.put("/:id",update)

export default routerPets