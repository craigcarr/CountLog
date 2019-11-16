import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import CreatePage from './Pages/CreatePage/CreatePage';
import CounterDatabase from './CounterDatabase';
import EditPage from './Pages/EditPage/EditPage';
import StatisticsPage from './Pages/StatisticsPage/StatisticsPage';
import SettingsAPI from './Interfaces/SettingsAPI';
import CountersAPI from './Interfaces/CountersAPI';
import CounterDeletePage from './Pages/CounterDeletePage/CounterDeletePage';
import CounterHistoryPage from './Pages/CounterHistoryPage/CounterHistoryPage';
import './App.css';

type Props = {}

type State = {
  db: CounterDatabase,
}

class App extends Component<Props, State> {
  state = {
    db: new CounterDatabase()
  }

  constructor(props: any) {
    super(props);

    SettingsAPI._initialize(this.state.db);
    CountersAPI._initialize(this.state.db);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/create">
              <CreatePage></CreatePage>
            </Route>
            <Route path="/deletecounter/:counterId" render={(props) =>
              <CounterDeletePage {...props}></CounterDeletePage>
            } />
            <Route path="/counterhistory/:counterId" render={(props) =>
              <CounterHistoryPage {...props}></CounterHistoryPage>
            } />
            <Route path="/edit/:counterId" render={(props) =>
              <EditPage {...props}></EditPage>
            } />
            <Route path="/statistics/:counterId" render={(props) =>
              <StatisticsPage {...props}></StatisticsPage>
            } />
            <Route path="/settings">
              <SettingsPage></SettingsPage>
            </Route>
            <Route path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
