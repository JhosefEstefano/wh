const fs = require("fs");
const myConsoloe = new console.Console(fs.createWriteStream('./logs.txt'))
const whp = require("../services/whatsapp.service")


require('dotenv').config()

const verifyToken = (req, res) => {

    try {

        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        console.log("token req: " + token + " challenge: " + challenge);

        if ((challenge != null && token != null) && (token === proq.env.TOKEN)) {
            res.send(challenge);
        } else {
            console.log("No es el mismo token de webhook")
            res.status(404).send();
        }

    } catch (e) {
        console.error(e)
        res.status(400).send();
    }
}

const recivedMessage = (req, res) => {
    
    try {

        let entry = (req.body["entry"])[0];
        let changes = (entry["changes"])[0];
        let value = changes["value"];
        let messageObject = value["messages"];

        if (typeof messageObject != "undefined") {

            let text = GetTextUser(messageObject[0])
            let number = (messageObject[0])["from"]

            myConsoloe.log(messageObject);

            whp.SendMessageWh("Usted Dijo: " + text, number);
            
            console.log("Entro a obtener mensaje")
            res.send("EVENT_RECEIVED")

        }else{
            console.log("No entro. menssageObj is null")
            res.send("EVENT_RECEIVED")
        }

    } catch (e) {
        myConsoloe.log(e);
        res.send("EVENT_RECEIVED")
    }
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