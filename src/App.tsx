import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import CreatePage from './Pages/CreatePage/CreatePage';
import CounterDatabase from './CounterDatabase';
import EditPage from './Pages/EditPage/EditPage';
import StatisticsPage from './Pages/StatisticsPage/StatisticsPage';
import './App.css';

type Props = {}

type State = {
  db: CounterDatabase,
}

class App extends Component<Props, State> {
  state = {
    db: new CounterDatabase()
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/edit/:counterId" render={(props) =>
              <EditPage {...props} db={this.state.db}></EditPage>
            } />
            <Route path="/statistics/:counterId" render={(props) =>
              <StatisticsPage {...props} db={this.state.db}></StatisticsPage>
            } />
            <Route path="/settings">
              <SettingsPage></SettingsPage>
            </Route>
            <Route path="/create">
              <CreatePage db={this.state.db}></CreatePage>
            </Route>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/">
              <MainPage db={this.state.db}></MainPage>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
