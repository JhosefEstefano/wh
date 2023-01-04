const express = require("express");
const body_parser = require("body-parser");
const apiRouter = require("./routes/routes");
const app = express().use(body_parser.json());
require('dotenv').config()

app.use("/whatsapp", apiRouter);

app.listen(process.env.PORT, () =>{
    console.log("El puerto es:", process.env.PORT || 3000 );
}) 