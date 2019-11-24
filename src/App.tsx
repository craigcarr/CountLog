import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import CounterCreatePage from './Pages/CounterCreatePage/CounterCreatePage';
import CounterDatabase from './CounterDatabase';
import CounterEditPage from './Pages/CounterEditPage/CounterEditPage';
import StatisticsPage from './Pages/StatisticsPage/StatisticsPage';
import SettingsAPI from './Interfaces/SettingsAPI';
import CountersAPI from './Interfaces/CountersAPI';
import CounterDeletePage from './Pages/CounterDeletePage/CounterDeletePage';
import CounterHistoryPage from './Pages/CounterHistoryPage/CounterHistoryPage';
import EventEditPage from './Pages/EventEditPage/EventEditPage';
import LoggingAPI from './Interfaces/LoggingAPI';
import './App.scss';

interface IProps {}

interface IState {
  db: CounterDatabase,
}

class App extends Component<IProps, IState> {
  state = {
    db: new CounterDatabase()
  }

  constructor(props: any) {
    super(props);

    SettingsAPI._initialize(this.state.db);
    CountersAPI._initialize(this.state.db);
    LoggingAPI._initialize();
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
              <CounterCreatePage></CounterCreatePage>
            </Route>
            <Route path="/editcounter/:counterId" render={(props) =>
              <CounterEditPage {...props}></CounterEditPage>
            } />
            <Route path="/deletecounter/:counterId" render={(props) =>
              <CounterDeletePage {...props}></CounterDeletePage>
            } />
            <Route path="/counterhistory/:counterId/editevent/:eventId" render={(props) =>
              <EventEditPage {...props}></EventEditPage>
            } />
            <Route path="/counterhistory/:counterId" render={(props) =>
              <CounterHistoryPage {...props}></CounterHistoryPage>
            } />
            <Route path="/edit/:counterId" render={(props) =>
              <CounterEditPage {...props}></CounterEditPage>
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
