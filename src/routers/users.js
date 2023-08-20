import { Router } from "express";
import { signUp,signIn, getUser, updateUser, getOne } from "../controllers/auths";

const routerAuth = Router()

routerAuth.post("/signup",signUp)
routerAuth.post("/signin",signIn)
routerAuth.get("/users",getUser)
routerAuth.put("/:id",updateUser)
routerAuth.get("/:id",getOne)

export default routerAuth