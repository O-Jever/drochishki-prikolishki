import React, { Component } from 'react';

class MapComponent extends Component {
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

    handleRouteChanged(route) {
        console.log('Из карты', route);
    }

    componentWillUnmount(){
        this.props.emitter.off('routechaged', this.handleRouteChanged);
    }

    render() {
        return (
            <div id="map" style={{ width: '600px', height: '400px' }}></div>
        );
    }
}

export default MapComponent;
