import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { windDirs, conditions } from './constants';

import './WeatherPlacemark.css';

export const createPlacemark = (point, weather) => {
    return new window.ymaps.Placemark(
        point, 
        {
            balloonContentHeader: "Погода",
            balloonContentBody: ReactDOMServer.renderToStaticMarkup(<Weather data={weather}></Weather>),
            iconContent: conditions[weather.condition]
        },
        {
            preset: 'islands#blueStretchyIcon',
            // iconLayout: 'default#image',
            // iconImageHref: `https://yastatic.net/weather/i/icons/blueye/color/svg/${weather.icon}.svg`,
            // iconImageSize: [30, 42],
        }
    );
}

export class Weather extends Component {
    constructor(props) {
        super(props);
        this.weather = props.data;
    }

    render() {
        return (
            <div className="weather-info">
                <img 
                    src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${this.weather.icon}.svg`} 
                    alt=""
                    className="weather-info__img"
                ></img>
                <p>{this.weather.temp} &#8451;</p>
                <p>{this.weather.wind_speed} м/с <strong>{windDirs[this.weather.wind_dir]}</strong></p>
            </div>
        );
    }
}
