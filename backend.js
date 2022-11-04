const express = require("express");
const app = express()
const port= 3001 

const routes = require('./routes')

// env 
require('dotenv').config()

/* == Bcrypt == */
const bcrypt = require('bcrypt')

/* == Middleware == */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
app.use("/", routes.macros)

// mongo atlas
require("./config/db.connection")




app.listen(port,3001, ()=> {
    console.log("connected on port 3001")
} )

