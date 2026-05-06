const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let command = "HELLO_ARDUINO";

app.get('/', (req, res) => {
    res.send("SERVER OK");
});

app.get('/getCommand', (req, res) => {
    res.send(command);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
}); 
