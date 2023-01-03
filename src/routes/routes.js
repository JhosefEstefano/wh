const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/whatsapp.controller");

router.get("/", whatsappController.verifyToken);

router.post("/", whatsappController.recivedMessage);

module.exports = router;