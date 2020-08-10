const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use('/', express.static('dist'));
app.use(cors());

app.get('/api', async (req, res) => {
  const images = await axios.get(`http://host.docker.internal:3000${req.url}`);
  res.send(images.data);
});

app.listen(PORT, () => {
  console.log('Enviroment started');
});

module.exports = app;
