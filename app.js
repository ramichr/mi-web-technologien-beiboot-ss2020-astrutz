const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use(express.static('web'));
app.use('/files', express.static('files'));

const rootRouter = require('./route/root');
const overviewRouter = require('./route/overview');
const uploadRouter = require('./route/upload');
const apiRouter = require('./route/api');

app.use('/', rootRouter);
app.use('/upload', uploadRouter);
app.use('/overview', overviewRouter);
app.use('/api', apiRouter);

app.listen(PORT, function () {
    console.log('Server started');
});

module.exports = app;