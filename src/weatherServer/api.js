const { apiUrl, apiKey } = require('./constants');
const fetch = require('node-fetch');

module.exports.getWeatherForLocality = (lat, lon) => {
    const url = new URL(apiUrl);
    const params = {
        lat,
        lon,
        lang: 'ru_RU',
        hours: true
    };

    url.search = new URLSearchParams(params).toString();

    return fetch(url, {
        headers: {
            'X-Yandex-API-Key': apiKey
        }
    });
};
