import { Router } from "express"
import routerProducts from "./products"
import routerCategory from "./categories"
import routerAuth from "./users"
import routerBlog from "./blog"

const router = Router()
router.use("/products",routerProducts)
router.use("/categories",routerCategory)
router.use("/auths",routerAuth)
router.use("/blogs",routerBlog)

export default router

