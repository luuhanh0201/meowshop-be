import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import router from "./routers";
import cors from "cors"
const app = express()
app.use(cors());
app.use(express.json())
dotenv.config()
const { PORT, URL_DB } = process.env;

mongoose.connect(`${URL_DB}`)
    .then(() => {
        console.log("Connected db successfully")
    })
    .catch((error) => {
        console.log("Failed to connect" + error)
    })

app.use("/api", router)

app.listen(PORT, () => {
    console.log("Connected successfully to port " + PORT)
})



