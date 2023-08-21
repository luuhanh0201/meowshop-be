import User from "../models/Users"
import { signInValid, signUpValid } from "../validations/user"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Users from "../models/Users"
dotenv.config()

const { SECRET_KEY } = process.env

export const signUp = async (req, res) => {
    try {
        // Bước 1: Kiểm tra thông tin client gửi về:
        // const { error } = signUpValid.validate(req.body, { abortEarly: false })
        // if (error) {
        //     const errors = error.details.map(err => err.message)
        //     return res.status(400).json({
        //         messages: "Joi: "+  errors
        //     })
        // }

        // Bước 2: Kiểm tra email đã tồn tại trong hệ thống hay chưa?
        const checkUserName = await User.findOne({ userName: req.body.userName })

        if (checkUserName) {
            return res.status(400).json({
                type: "userName",
                message: "userName này đã được đăng ký, bạn có muốn đăng nhập không?"
            })
        }
        // Bước 3: Mã hoá mật khẩu
        const hashPassword = await bcryptjs.hash(req.body.password, 10)

        // Bước 4: Tạo account cho người dùng:
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashPassword,
            fullName: req.body.fullName,
            avatar: req.body.avatar,
            numberPhone: req.body.numberPhone,
            address: req.body.address
        })


        // Bước 5: Trả về thông báo:
        user.password = undefined
        return res.status(200).json({
            message: "Tạo tài khoản thành công!",
            user,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: "catch: " + error.message
        })
    }
}

export const signIn = async (req, res) => {
    try {
        // B1: Validation data from client
        // const { error } = signInValid.validate(req.body, { abortEarly: false })
        // if (error) {
        //     const errors = error.details.map(err => err.message)
        //     return res.status(400).json({
        //         messages: errors
        //     })
        // }

        // B2: Kiểm email có tồn tại trong database hay không?

        const user = await User.findOne({ userName: req.body.userName })
        if (!user) {
            return res.status(404).json({
                message: "UserName này chưa được đăng ký, bạn có muốn tạo tài khoản không?"
            })
        }

        // B3: So sánh password có đúng không?
        const isMatch = await bcryptjs.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                password: false,
                message: "Mật khẩu không đúng, vui lòng nhập lại!"
            })
        }
        // B4: Tạo jwt
        const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: "1d" })
        // B5: Response thông tin đăng nhập.
        user.password = undefined
        return res.status(200).json({
            message: "Đăng nhập thành công",
            user,
            accessToken
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const data = await User.find({})
        if (!data) {
            return res.status(404).json({
                message: "Users not found",
            })
        }
        const showUser = data.map(user => {
            return {
                id: user._id,
                userName: user.userName,
                fullName: user.fullName,
                email: user.email,
                address: user.address,
                numberPhone: user.numberPhone,
                banking: user.banking,
                role: user.role,
            }
        });

        return res.status(200).json({
            message: " get users successfully",
            showUser

        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}
export const updateUser = async (req, res) => {
    try {
        const data = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({
                message: "users not found",
            })
        }
        const user = {
            userName: data.userName,
            fullName: data.fullName,
            email: data.email,
            address: data.address,
            numberPhone: data.numberPhone,
            banking: data.banking,
            role: data.role,
        }
        return res.status(200).json({
            message: "Update successfully",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message: error,
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const data = await Users.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "user not found",
            })
        }
        return res.status(200).json({
            message: "get one user",
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
        const data = await Users.findByIdAndRemove(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "user not found",
            })
        }
        return res.status(200).json({
            message: "delete one user",
            data: data
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
}