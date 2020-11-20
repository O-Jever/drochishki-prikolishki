import React, { Component } from 'react';

class MapComponent extends Component {
    handleRouteChanged(route) {
        console.log('Из карты', route);
    }

    componentDidMount() {
        this.props.emitter.on('routechaged', this.handleRouteChanged);

        const ymaps = window.ymaps;

        ymaps.ready(init);

        function init() {
            const myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
    }

    render() {
        return (
            <div id="map" style={{ width: '600px', height: '400px' }}></div>
        );
    }
}

export default MapComponent;
