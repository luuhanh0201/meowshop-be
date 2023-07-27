import User from "../models/Users"
import { signInValid, signUpValid } from "../validations/user"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const { SECRET_KEY } = process.env

export const signUp = async (req, res) => {
    try {
        // Bước 1: Kiểm tra thông tin client gửi về:
        const { error } = signUpValid.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map(err => err.message)
            return res.status(400).json({
                messages: errors
            })
        }

        // Bước 2: Kiểm tra email đã tồn tại trong hệ thống hay chưa?
        const userExists = await User.findOne({ email: req.body.email })
        console.log(userExists)
        if (userExists) {
            return res.status(400).json({
                message: "Email này đã được đăng ký, bạn có muốn đăng nhập không?"
            })
        }

        // Bước 3: Mã hoá mật khẩu
        const hashPassword = await bcryptjs.hash(req.body.password, 10)

        // Bước 4: Tạo account cho người dùng:
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashPassword
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
            message: error.message
        })
    }
}

export const signIn = async (req, res) => {
    try {
        // B1: Validation data from client
        const { error } = signInValid.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map(err => err.message)
            return res.status(400).json({
                messages: errors
            })
        }

        // B2: Kiểm email có tồn tại trong database hay không?

        const user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (!user) {
            return res.status(404).json({
                message: "Email này chưa được đăng ký, bạn có muốn tạo tài khoản không?"
            })
        }

        // B3: So sánh password có đúng không?
        const isMatch = await bcryptjs.compare(req.body.password, user.password)
        console.log(isMatch)
        if (!isMatch) {
            return res.status(400).json({
                message: "Mật khẩu không đúng, vui lòng nhập lại!"
            })
        }
        // B4: Tạo jwt
        const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY,{expiresIn: "1d"})
        // B5: Response thông tin đăng nhập.
            
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
// export const getAll = async (req, res) => {
//     try {
//         const data = await userSchema.find({})
//         if (!data) {
//             return res.status(404).json({
//                 message: "category not found",
//             })
//         }
//         return res.status(200).json({
//             message: "Get category successfully",
//             data: data
//         })
//     } catch (error) {
//         return res.status(404).json({
//             message: error.message,
//         })
//     }
// }