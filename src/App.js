import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component, Suspense, lazy } from 'react';
import NavbarAside from './navigation/Navbar';
import './App.css';
const MainPage = lazy(() => import('./applications/MainPage'));
const MapWithWeather = lazy(() => import('./applications/mapWithWeather/MapWithWeather'));

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <aside className="app-aside">
          <NavbarAside />
        </aside>
          <Router>
              <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                      <Route exact path="/" component={MainPage} />
                      <Route path="/map-with-weather" component={MapWithWeather} />
                  </Switch>
              </Suspense>
          </Router>
      </div>
    );
  }
}

export default App;
