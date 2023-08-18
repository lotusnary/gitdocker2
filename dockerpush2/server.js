const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    res.send({ "id": 100, "name": "Nary" });
});

app.listen(8000, () => {
    console.log('Express Server is Running at Port No 8000..');
});