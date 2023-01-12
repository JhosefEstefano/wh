const modelWp = require("./wp.model");
const service = require("../services/whatsapp.service");

function processMessage(textUser, number) {

    textUser = textUser.toLowerCase();

    let models = [];
    let model;

    if (textUser.includes("hola") || textUser.includes("que tal")) {
        // Saludo
        model = modelWp.MessageText("Hola, es un gusto saludarte ✌. Por favor selecciona una opción del menu para continuar", number);
        models.push(model);
        models.push(modelWp.MessageButtons(number));
    } else if (textUser.includes("gracias") || textUser.includes("entendido")) {
        // Agradecimiento
        model = modelWp.MessageText("De nada usuario, recuerda que estamos para ayudarte. 😊", number);
        models.push(model);

    } else if (textUser.includes("adios") || textUser.includes("bye") || textUser.includes("seria todo") || textUser.includes("nada") || textUser.includes("bye") || textUser.includes("adiós")) {
        // Despedida
        model = modelWp.MessageText("Fue un gusto ayudarte, recuerda que siempre puedes consultarnos por este u otros medios. 😃", number);
        models.push(model);

    } else if (textUser.includes("agencias") || textUser.includes("disponibles")) {
        model = modelWp.ListLocations(number);
        models.push(model);
    }
    else if (textUser.includes("opciones de contacto")) {
        model = modelWp.MessageText("Puedes ponerte en contanto con nosotros a través de nuestras redes sociales como:\n Facebook, Instagram y tambien por nuestro correo electronico ayuda@intelaf.com 📧", number);
        models.push(model);
    }
    else if (textUser.includes("el naranjo")){
        model = modelWp.MessageLocation("14.650494150251085","-90.53985541538032", "El Naranjo", "Plaza Kalú LOCAL 9, Nivel 1 Guatemala, Guatemala",number);
        models.push(model);
    }
    else if (textUser.includes("outlet")){
        model = modelWp.MessageLocation("14.621755060264292","-90.5625761288359", "OUTLET", "8a Calle 28-00 Zona 11 C.C. Las Plazas Majadas LOCAL 16 Guatemala, Guatemala",number);
        models.push(model);
    }
    else {
        // Caso no registrado / contenplado
        model = modelWp.MessageText("Recuerda que aún soy nuevo en esto y tal vez no te entendi muy bien. ¿Podrias volver a repetirlo? 🤔", number);
        models.push(model);
    }

    models.forEach(mod => {
        service.SendMessageWh(mod);
    });
}

module.exports = {
    processMessage
}