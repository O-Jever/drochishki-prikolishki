import React, { Component } from 'react';
import { EventEmitter } from 'events';
import { FormComponent } from './formPage/pageForm';
import MapComponent from './map/mapComponent';

class MapWithWeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = { route: {} }; 
        this.emitter = new EventEmitter(); 
    }

    handleRoute = (route) => {
        this.setState({ route });
        this.emitter.emit('routechaged', this.state.route);
    }

    getRoute() {
        return this.state.route;
    }

    render(){
        return (
            <main className="app-main">
                <section id="mapWithWeatherPage" className="section">
                    <FormComponent onSubmit={this.handleRoute}></FormComponent>
                    <MapComponent emitter={this.emitter}></MapComponent>
                </section>
            </main>
        );
    }
}

export default MapWithWeatherPage;
