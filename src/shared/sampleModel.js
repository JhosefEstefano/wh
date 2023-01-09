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
                "text": "<HEADER_TEXT>"
            },
            "body": {
                "text": "<BODY_TEXT>"
            },
            "footer": {
                "text": "<FOOTER_TEXT>"
            },
            "action": {
                "button": "<BUTTON_TEXT>",
                "sections": [
                    {
                        "title": "<LIST_SECTION_1_TITLE>",
                        "rows": [
                            {
                                "id": "<LIST_SECTION_1_ROW_1_ID>",
                                "title": "<SECTION_1_ROW_1_TITLE>",
                                "description": "<SECTION_1_ROW_1_DESC>"
                            },
                            {
                                "id": "<LIST_SECTION_1_ROW_2_ID>",
                                "title": "<SECTION_1_ROW_2_TITLE>",
                                "description": "<SECTION_1_ROW_2_DESC>"
                            }
                        ]
                    },
                    {
                        "title": "<LIST_SECTION_2_TITLE>",
                        "rows": [
                            {
                                "id": "<LIST_SECTION_2_ROW_1_ID>",
                                "title": "<SECTION_2_ROW_1_TITLE>",
                                "description": "<SECTION_2_ROW_1_DESC>"
                            },
                            {
                                "id": "<LIST_SECTION_2_ROW_2_ID>",
                                "title": "<SECTION_2_ROW_2_TITLE>",
                                "description": "<SECTION_2_ROW_2_DESC>"
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