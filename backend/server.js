const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//App Initialization
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());

//Import Environment Variables
const port = process.env.PORT || 3601;
const url = process.env.URL;

//Import User Routes
const userRoutes = require('./router/user');
const authRoutes = require("./router/auth");

//Server and Database Connections
app.listen(port, () => console.log("App running on port ",port));

mongoose.connect(url,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB running"))
.catch(err => console.log(err));


//Test route
app.get("/",(req,res) => res.send("Working"));

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);