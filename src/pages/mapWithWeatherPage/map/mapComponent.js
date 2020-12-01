import React, { Component } from 'react';

const mapState = { center: [55.76, 37.64], zoom: 9, controls: [] };

class MapComponent extends Component {
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
        this.ymaps.route([
                way.startPoint, way.endPoint
            ],{
                mapStateAutoApply: true,
                //multiRoute: true
            }
        ).then((route) => {
            route.getPaths().options.set({
              balloonContentBodyLayout: this.ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
              strokeColor: '0000ffff',
              opacity: 0.9
            });

            this.map.geoObjects.remove(this.state.route);

            this.setState({ route });
            
            this.map.geoObjects.add(route);
          });
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

export default MapComponent;