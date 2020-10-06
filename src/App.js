import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component, Suspense, lazy } from 'react';
import NavbarAside from './navigation/Navbar';
import './App.css';
const MainPage = lazy(() => import('./pages/mainPage/pageMain'));
const TestPage = lazy(() => import('./pages/testPage/pageTest'));

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
                      <Route exact path="/" component={ (()=>(<MainPage />)) } />
                      <Route path="/test" component={(()=>(<TestPage />))} />
                  </Switch>
              </Suspense>
          </Router>
      </div>
    );
  }
}

export default App;
