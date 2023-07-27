import productSchema from "../models/Products"



export const getAll = async (req, res) => {
    try {
        const data = await productSchema.find({})
        if (!data) {
            return res.status(404).json({
                message: "Product not found",
            })
        }
        return res.status(200).json({
            message: "Get product successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const data = await productSchema.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Product not found",
            })
        }
        return res.status(200).json({
            message: "Detail product",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const create = async (req, res) => {
    try {
        const data = await productSchema.create(req.body)
        if (!data) {
            return res.status(404).json({
                message: "Add product failed",
            })
        }
        return res.status(200).json({
            message: "add product successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}
export const remove = async (req, res) => {
    try {
        const data = await productSchema.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Product not found",
            })
        }
        return res.status(200).json({
            message: "Delete successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}

export const update = async (req, res) => {
    try {
        const data = await productSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!data) {
            return res.status(404).json({
                message: "Product not found",
            })
        }
        return res.status(200).json({
            message: "Update successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}