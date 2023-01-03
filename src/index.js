const express = require("express");
const apiRouter = require("./routes/routes")
const app = express();
require('dotenv').config()

app.use(express.json());
app.use("/whatsapp", apiRouter);

app.listen(process.env.PORT, () =>{
    console.log("El puerto es:", process.env.PORT );
}) 