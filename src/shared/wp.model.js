function MessageText(txtResponse, number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "text",
        text: { preview_url: false, body: txtResponse },
    });

    return data;
}

function MessageButtons(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Esto es lo que puedo hacer, dime como te puedo ayudar"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "001",
                            title: "Agencias disponibles"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "002",
                            title: "Opciones de contacto"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function ListLocations(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Ubicaciones"
            },
            "body": {
                "text": "Estas son las ubicaciones disponibles en este momento"
            },
            "footer": {
                "text": "recuerda que nuestro horario de atención es de 8:00 a 17:00"
            },
            "action": {
                "button": "Ubicaciones",
                "sections": [
                    {
                        "title": "Grupo #1",
                        "rows": [
                            {
                                "id": "001",
                                "title": "El Naranjo",
                                "description": "Plaza Kalú LOCAL 9, Nivel 1 Guatemala, Guatemala"
                            },
                            {
                                "id": "002",
                                "title": "OUTLET",
                                "description": "8a Calle 28-00 Zona 11 C.C. Las Plazas Majadas LOCAL 16 Guatemala, Guatemala"
                            }
                        ]
                    }
                ]
            }
        }
    });

    return data;
}


function MessageLocation(lat,long,name,address,number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "location",
        location: {
            latitude: lat,
            longitude: long,
            name: name,
            address: address
        }

    });

    return data;
}


module.exports = {
    MessageText,
    MessageButtons,
    ListLocations,
    MessageLocation
}