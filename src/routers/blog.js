import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../controllers/blogs";

const routerBlog = Router();
routerBlog.post("/", create)
routerBlog.get("/", getAll)
routerBlog.get("/:id", getOne)
routerBlog.delete("/:id", remove)
routerBlog.put("/:id", update)

export default routerBlog