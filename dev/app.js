const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const cors = require('cors');

app.use('/', express.static('dist'));
app.use(cors());

app.listen(PORT, function () {
    console.log('Enviroment started');
});

module.exports = app;