function SampleText(txtResponse, number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "text",
        text: { preview_url: false, body: txtResponse },
    });

    return data;
}


function SampleImage(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "image",
        image: { link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png" },
    });

    return data;
}

function SampleAudio(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "audio",
        audio: { link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3" },
    });

    return data;
}

function SampleVideo(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "video",
        video: { link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4" },
    });

    return data;
}

function SampleDocument(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "document",
        document: { link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf" },
    });

    return data;
}

function SampleButtons(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Este es un ejemplo con botones?"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "001",
                            title: "Sí"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "002",
                            title: "No"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function SampleList(number) {

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


function SampleLocation(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "location",
        location: {
            latitude: "14.602914691188815",
            longitude: "-90.55968857650356",
            name: "Camaras de seguridad",
            address: "Pasaje Alcanfores, 26 Calle 15-18, Cdad. de Guatemala 01011"
        }

    });

    return data;
}


module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleButtons,
    SampleList,
    SampleLocation,
    SampleDocument
}