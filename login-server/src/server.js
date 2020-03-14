import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

import * as userController from "./controllers/userController.js";
import config from "./config/index.js";

const app = express();

//appliation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());
//cookie
app.use(cookieParser());

const port = process.env.PORT;
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world!"));

app.post("/register", userController.register);

app.post("/login", userController.login);

app.listen(port, () => console.log(`Web app listening on port ${port}`));
