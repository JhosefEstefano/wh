const verifyToken = (req, res) =>{
    res.send("Hola verify Token")
}

const recivedMessage = (req, res) =>{
    res.send("Hola Received")
}


module.exports ={
    verifyToken,
    recivedMessage
} 