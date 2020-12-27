const express = require('express');
const cors = require('cors');
const { getWeatherForLocality } = require('./api');

const app = express();
const port = 3001;

app.use(cors());

app.get('/get-locality-weather', (req, res) => {
    const { lat, lon } = req.query;

    getWeatherForLocality(lat, lon).then((response) => {
        if (response.status === 403) {
            throw 'Ошибка доступа. Ответы на https://yandex.ru/dev/weather/doc/dg/concepts/errors.html';
        }
        return response.json();
    }).then((data) => {
        res.json(data);
    }).catch(error => {
        console.error(error);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
