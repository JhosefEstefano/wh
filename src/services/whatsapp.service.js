const axios = require("axios").default
require('dotenv').config()

function SendMessageWh(textResponse, number) {

    axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: "https://graph.facebook.com/v15.0/113148464973818/messages",
        data: {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "text",
            text: { preview_url: false, body: "Usted dijo: " + msg_body },
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.WHATSAPP_TOKEN,
        },
    });
}

module.exports ={
    SendMessageWh
}