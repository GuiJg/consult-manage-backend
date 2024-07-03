require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const scheduleRoute = require("./routes/scheduleRoute")
const User = require("./models/userModel");
const errorMiddleware = require("./middleware/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rotas 
app.use('/users', userRoute)
app.use('/schedules', scheduleRoute)

app.use(errorMiddleware)

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:admin123@adm-consult.hbaizcu.mongodb.net/consult-manage?retryWrites=true&w=majority&appName=adm-consult')
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor está conectado na porta 3000');
        });
        app.get("/", (req, res) => {
            res.send("Servidor está conectado na porta 3000");
        })
        console.log("Servidor conectado ao MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });
