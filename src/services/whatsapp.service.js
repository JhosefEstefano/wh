const axios = require("axios").default
require('dotenv').config()

function SendMessageWh(data) {

    axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: "https://graph.facebook.com/v15.0/113148464973818/messages",
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.WHATSAPP_TOKEN,
        },
    });
}

module.exports ={
    SendMessageWh
}