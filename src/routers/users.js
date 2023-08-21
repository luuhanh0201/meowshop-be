import { Router } from "express";
import { signUp,signIn, getUser, updateUser, getOne, remove } from "../controllers/auths";

const routerAuth = Router()

routerAuth.post("/signup",signUp)
routerAuth.post("/signin",signIn)
routerAuth.get("/users",getUser)
routerAuth.put("/:id",updateUser)
routerAuth.get("/:id",getOne)
routerAuth.delete("/:id",remove)

export default routerAuth