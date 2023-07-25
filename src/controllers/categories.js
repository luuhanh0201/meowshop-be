import categorySchema from "../models/Categories"


export const getAll = async (req, res) => {
    try {
        const data = await categorySchema.find({})
        if (!data) {
            return res.status(404).json({
                message: "category not found",
            })
        }
        return res.status(200).json({
            message: "Get category successfully",
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
        const data = await categorySchema.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "category not found",
            })
        }
        return res.status(200).json({
            message: "Detail category",
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
        const data = await categorySchema.create(req.body)
        if (!data) {
            return res.status(404).json({
                message: "Add category failed",
            })
        }
        return res.status(200).json({
            message: "add category successfully",
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
        const data = await categorySchema.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "category not found",
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
        const data = await categorySchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!data) {
            return res.status(404).json({
                message: "category not found",
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