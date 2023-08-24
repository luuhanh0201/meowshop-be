import { Router } from "express"
import routerProducts from "./products"
import routerCategory from "./categories"
import routerAuth from "./users"
import routerBlog from "./blog"
import routerPets from "./pets"

const router = Router()
router.use("/products",routerProducts)
router.use("/categories",routerCategory)
router.use("/auths",routerAuth)
router.use("/blogs",routerBlog)
router.use("/pets",routerPets)

export default router

