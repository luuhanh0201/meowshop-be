import { Router } from "express"
import routerProducts from "./products"
import routerCategory from "./categories"
import routerAuth from "./users"

const router = Router()
router.use("/products",routerProducts)
router.use("/categories",routerCategory)
router.use("/auth",routerAuth)

export default router

