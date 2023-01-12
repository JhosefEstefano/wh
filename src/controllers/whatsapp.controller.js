const fs = require("fs");
const myConsoloe = new console.Console(fs.createWriteStream('./logs.txt'))
const processMessage = require("../shared/processMessage")

require('dotenv').config()

const verifyToken = (req, res) => {

    try {

        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if (mode && token) {
            if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                res.sendStatus(403);
            }
        }

    } catch (e) {
        res.status(400).send();
    }
}


const recivedMessage = (req, res) => {

    try {
        console.log(JSON.parse(req));
        let body = req.body;
        // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
        if (req.body.object) {
            if (
                req.body.entry &&
                req.body.entry[0].changes &&
                req.body.entry[0].changes[0] &&
                req.body.entry[0].changes[0].value.messages &&
                req.body.entry[0].changes[0].value.messages[0]
            ) {


                let phone_number_id = req.body.entry[0].changes[0].value.metadata.phone_number_id;
                let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
                let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; 
                let msg_reply = req.body.entry[0].changes[0].value.messages[0]; // extract the message text from the webhook payload

                let type = GetTextUser(req.body.entry[0].changes[0].value.message || req.body.entry[0].changes[0].value.messages[0])

                if (type != "" || type != undefined) {
                    processMessage.processMessage(msg_body, from);
                }     
                
                console.log(type);
            }

            console.log(GetTextUser(req.body.entry[0].changes[0].value.messages[0]));

            console.log(JSON.parse(body));
            res.sendStatus(200);
        } else {
            // Return a '404 Not Found' if event is not from a WhatsApp API
            console.log(GetTextUser(req.body.entry[0].changes[0].value.messages[0]));
            res.sendStatus(404);
        }

    } catch (e) {
        res.send("EVENT_RECEIVED")
    }
}


function GetType(message) {

    return typeMeesage = message["type"];

}

function GetTextUser(message) {

    let tex = "";
    let typeMeesage = message["type"];

    console.log("Dentro de la funcion para obtener el mensaje")

    switch (typeMeesage) {

        case "text":
            tex = (message["text"])["body"]
            break;

        case "interactive":

            let interactiveObject = message["interactive"];
            let typeInteractive = interactiveObject["type"];

            myConsoloe.log(typeInteractive);

            if (typeInteractive === "button_reply") {
                tex = (interactiveObject["button_reply"])["title"];
            } else {
                tex = (interactiveObject["list_reply"])["title"];
            }
            break;
    }

    return tex;
}

module.exports = {
    verifyToken,
    recivedMessage
} 