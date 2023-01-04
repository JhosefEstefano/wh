const https = require("https");
require('dotenv').config()

function SendMessageWh(textResponse, number) {

    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": textResponse
        }
    });

    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/113148464973818/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + process.env.TW
        }
    }

    const req = https.request(options, res => { 
        res.on("data", d => { 
            process.stdout.write(d) }); 
        });

    req.on("error", error =>{
        console.error(error)
    })

    req.write(data);
    req.end();

}

module.exports ={
    SendMessageWh
}