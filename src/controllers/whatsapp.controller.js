const fs = require("fs");
const myConsoloe = new console.Console(fs.createWriteStream('./logs.txt'))
const whp = require("../services/whatsapp.service")

const samples = require("../shared/sampleModel")

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
                let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload


                let type = GetType(req.body.entry[0].changes[0].value.message || req.body.entry[0].changes[0].value.messages[0])

                switch (type) {
                    case "image":
                        let modelImage = samples.SampleImage(from);
                        whp.SendMessageWh(modelImage);

                        break;
                    case "text":
                        let modelText = samples.SampleText("Holaaaaa usuario", from);
                        whp.SendMessageWh(modelText);

                        break;
                    case "video":
                        let modelVideo = samples.SampleVideo(from);
                        whp.SendMessageWh(modelVideo);

                    case "audio":
                        let modelAudio = samples.SampleAudio(from);
                        whp.SendMessageWh(modelAudio);

                    case "document":
                        let modelDocument = samples.SampleDocument(from);
                        whp.SendMessageWh(modelDocument);

                    case "button":
                        let modelButton = samples.SampleButtons(from);
                        whp.SendMessageWh(modelButton);

                    case "list":
                        let modelList = samples.SampleList(from);
                        whp.SendMessageWh(modelList);

                        break;
                        case "location":
                            let modelLocation = samples.SampleLocation(from);
                            whp.SendMessageWh(modelLocation);
    
                            break;
                    default:
                        let modelTextError = samples.SampleText("No te entendi", from);
                        whp.SendMessageWh(modelTextError);
                        break;
                }


            }

            res.sendStatus(200);

        } else {
            // Return a '404 Not Found' if event is not from a WhatsApp API
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

    switch (typeMeesage) {

        case "text":
            tex = (message["text"])["body"]
            break;

        case "interactive":

            let interactiveObject = message["interactive"];
            let typeInteractive = interactiveObject["type"];

            myConsoloe.log(interactiveObject);

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