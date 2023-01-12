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

    // const data = JSON.stringify({
    //     messaging_product: "whatsapp",
    //     recipient_type: "individual",
    //     to: number,
    //     "type": "interactive",
    //     "interactive": {
    //         "type": "list",
    //         "header": {
    //             "type": "text",
    //             "text": "Ubicaciones"
    //         },
    //         "body": {
    //             "text": "Estas son las ubicaciones disponibles en este momento"
    //         },
    //         "footer": {
    //             "text": "recuerda que nuestro horario de atención es de 8:00 a 17:00"
    //         },
    //         "action": {
    //             "button": "Ubicaciones",
    //             "sections": [
    //                 {
    //                     "title": "Grupo #1",
    //                     "rows": [
    //                         {
    //                             "id": "001",
    //                             "title": "El Naranjo",
    //                             "description": "Plaza Kalú LOCAL 9, Nivel 1 Guatemala, Guatemala"
    //                         },
    //                         {
    //                             "id": "002",
    //                             "title": "OUTLET",
    //                             "description": "8a Calle 28-00 Zona 11 C.C. Las Plazas Majadas LOCAL 16 Guatemala, Guatemala"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // });
    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Selecciona una opcion"
            },
            "body": {
                "text": "Las siguientes son un listado de opciones"
            },
            "footer": {
                "text": "Selecciona bien"
            },
            "action": {
                "button": "Ver las opciones",
                "sections": [
                    {
                        "title": "Grupo #1",
                        "rows": [
                            {
                                "id": "001",
                                "title": "Opcion 1 grupo 1",
                                "description": "Esta es la opcion 1 del grupo uno de la una lista"
                            },
                            {
                                "id": "002",
                                "title": "Opcion 2 grupo 1",
                                "description": "Esta es la opcion 2 del grupo uno de la una lista"
                            }
                        ]
                    },
                    {
                        "title": "Grupo #2",
                        "rows": [
                            {
                                "id": "004",
                                "title": "Opcion 1 grupo 2",
                                "description": "Esta es la opcion 2 del grupo dos de la una lista"
                            },
                            {
                                "id": "005",
                                "title": "Opcion 2 grupo 2",
                                "description": "Esta es la opcion 2 del grupo dos de la una lista"
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