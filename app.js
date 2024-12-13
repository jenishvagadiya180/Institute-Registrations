import express from "express";
import dotenv from "dotenv";
import routers from "./router/routes.js";
import { connectDatabase } from "./database/connection.js"
import errorHandler from "./error/handler.js"

dotenv.config();
const app = express();
const port = process.env.PORT;
connectDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/institute", routers)
app.use(errorHandler);
app.listen(port, () => { console.log(process.env.BASE_URL) });