import React, { Component } from 'react';
import FormComponent from './formPage/pageForm';

class MapWithWeatherPage extends Component {
    render(){
        return (
            <main className="app-main">
                <section id="mapWithWeatherPage" className="section">
                    <FormComponent></FormComponent>
                </section>
            </main>
        );
    }
}

export default MapWithWeatherPage;
