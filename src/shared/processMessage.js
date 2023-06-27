const modelWp = require("./wp.model");
const service = require("../services/whatsapp.service");

function processMessage(message, number) {
    message = message.toLowerCase();
    let models = [];

  
    models.forEach(async mod => {
      await service.SendMessageWh(mod);
  });
    
  }

module.exports = {
    processMessage
}