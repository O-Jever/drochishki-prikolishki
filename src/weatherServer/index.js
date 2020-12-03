const express = require('express');
const cors = require('cors');
const { getWeatherForLocality } = require('./api');

const app = express();
const port = 3001;

app.use(cors());

app.get('/get-locality-weather', (req, res) => {
    const { lat, lon } = req.query;

    getWeatherForLocality(lat, lon).then((response) => {
        return response.json();
    }).then((data) => {
        res.json(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
