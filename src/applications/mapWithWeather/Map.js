import React, { Component } from 'react';
import { createPlacemark } from './WeatherPlacemark';

const mapState = { center: [55.76, 37.64], zoom: 9, controls: [] };

export class Map extends Component {
    constructor() {
        super();
        this.state = {};
        this.map = null;
        this.ymaps = window.ymaps;
        this.handleRouteChanged = this.handleRouteChanged.bind(this);
    }

    componentDidMount() {
        this.props.emitter.on('routechaged', this.handleRouteChanged);

        this.ymaps.ready(init.bind(this));
        function init(){
            this.map = new this.ymaps.Map("map", mapState);
        }
    }

    handleRouteChanged(way) {
        const multiRoute = new this.ymaps.multiRouter.MultiRoute({
                referencePoints: [way.startPoint, way.endPoint],
                params: {
                    results: 1
                }
            },{
                boundsAutoApply: true,
                wayPointVisible: false
            }
        );
       
        this.map.geoObjects.remove(this.state.multiRoute);
        this.setState({ multiRoute });
        this.map.geoObjects.add(multiRoute);

        multiRoute.events.once('update', onUpdateCallback.bind(this)); 
        
        async function onUpdateCallback() {
            const points = multiRoute.getWayPoints().toArray();
        
            for (const point of points) {
                const placemark = await this.createPlacemarkWithWeather(point);
                this.map.geoObjects.add(placemark);
            }

            var activeRoute = multiRoute.getActiveRoute();
            console.log("Длина: " + activeRoute.properties.get("distance").text);
            console.log("Время прохождения: " + activeRoute.properties.get("duration").text);

        }
    }

    async createPlacemarkWithWeather(point) {
        const [lat, lon] = point.geometry.getCoordinates();
        const responce = await fetch(`http://localhost:3001/get-locality-weather?lat=${lat}&lon=${lon}`);
        const result = await responce.json();

        console.log("Погода ", result.now_dt, result.info.tzinfo);

        return createPlacemark([lat, lon], result.fact);
    }

    calculationTimeWeather(weatherParts) {

    }

    componentWillUnmount(){
        this.props.emitter.off('routechaged', this.handleRouteChanged);
    }

    render() {
        return (
            <div id='map' style={{ width: '600px', height: '400px', marginTop: '20px' }}></div>
        );
    }
}
