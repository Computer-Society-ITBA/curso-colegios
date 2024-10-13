const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log(`Escuchando en ${apiUrl}`);
});

const apiUrl = `http://localhost:${PORT}`;

module.exports = { apiUrl };