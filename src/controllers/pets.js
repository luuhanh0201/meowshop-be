import Pets from "../models/Pets"

export const getAll = async (req, res) => {
    try {
        const data = await Pets.find({})
        !data ? res.status(404).json({
            message: "No pets found"
        }) : res.status(200).json({
            message: "Get pets successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: error.name,
            message: error.message
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const data = await Pets.findById(req.params.id)
        !data ? res.status(404).json({
            message: "No pets found"
        }) : res.status(200).json({
            message: "Get pets successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: error.name,
            message: error.message
        })
    }
}

export const create = async (req, res) => {
    try {
        const data = await Pets.create(req.body)
        !data ? res.status(404).json({
            message: "Create failed"
        }) : res.status(200).json({
            message: "Create successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: error.name,
            message: error.message
        })
    }
}

export const remove = async (req, res) => {
    try {
        const data = await Pets.findByIdAndDelete(req.params.id)
        !data ? res.status(404).json({
            message: "No pets found"
        }) : res.status(200).json({
            message: "Delete pets successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: error.name,
            message: error.message
        })
    }
}
export const update = async (req, res) => {
    try {
        const data = await Pets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        !data ? res.status(404).json({
            message: "Update error",
        }) : res.status(200).json({
            message: "Update pets successfully",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            name: error.name,
            message: error.message
        })
    }
}