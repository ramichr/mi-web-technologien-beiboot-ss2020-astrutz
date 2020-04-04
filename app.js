const express = require('express');
const PORT = 3000;
const app = express();

const rootRouter = require('./route/root');

app.use('/', rootRouter);
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.listen(PORT, function () {
    console.log('Server started on port', PORT);
});

module.exports = app;