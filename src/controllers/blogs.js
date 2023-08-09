import Blogs from "../models/Blogs"

export const create = async (req, res) => {
    try {
        const data = await Blogs.create(req.body);

        if (!data) {
            return res.status(404).json({
                name: "Blog not found",
                message: error.message
            })
        }
        return res.status(200).json({
            name: "Blog submitted successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: "Error",
            message: error.message
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const data = await Blogs.find({})
        if (!data) {
            return res.status(404).json({
                message: "Blog not found",
            })
        }
        return res.status(200).json({
            name: "Get blog successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: "Error",
            message: error.message
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const data = await Blogs.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Blog not found",
            })
        }
        return res.status(200).json({
            name: "Get blog successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: "Error",
            message: error.message
        })
    }
}

export const remove = async (req, res) => {
    try {
        const data = await Blogs.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Blog not found",
            })
        }
        return res.status(200).json({
            name: "delete blog successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: "Error",
            message: error.message
        })
    }
}

export const update = async (req, res) => {
    try {
        const data = await Blogs.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({
                message: "Blog not found",
            })
        }
        return res.status(200).json({
            name: "update blog successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: "Error",
            message: error.message
        })
    }
}