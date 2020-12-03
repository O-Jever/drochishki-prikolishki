import React, { Component } from 'react';
import { EventEmitter } from 'events';
import { Form } from './form/Form';
import { Map } from './Map';

class MapWithWeather extends Component {
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
                    <Form onSubmit={this.handleRoute}></Form>
                    <Map emitter={this.emitter}></Map>
                </section>
            </main>
        );
    }
}

export default MapWithWeather;
