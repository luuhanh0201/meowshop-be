import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import router from "./routers";
const app = express()
app.use(express.json())
dotenv.config()
const { PORT,URL_DB } = process.env;

mongoose.connect(`${URL_DB}`)
    .then(() => {
        console.log("Connected successfully")
    })
    .catch((error) => {
        console.log("Failed to connect" + error)
    })


app.use("/api", router)

app.listen(PORT, () => {
    console.log("Connected successfully to port " + PORT)
})