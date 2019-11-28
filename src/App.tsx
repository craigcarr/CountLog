import React from 'react';
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

export default function App() {
  const db = new CounterDatabase();
  SettingsAPI._initialize(db);
  CountersAPI._initialize(db);
  LoggingAPI._initialize();

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route path="/create">
          <CounterCreatePage></CounterCreatePage>
        </Route>
        <Route path="/editcounter/:counterId">
          <CounterEditPage></CounterEditPage>
        </Route>
        <Route path="/deletecounter/:counterId">
          <CounterDeletePage></CounterDeletePage>
        </Route>
        <Route path="/counterhistory/:counterId/editevent/:eventId">
          <EventEditPage></EventEditPage>
        </Route>
        <Route path="/counterhistory/:counterId">
          <CounterHistoryPage></CounterHistoryPage>
        </Route>
        <Route path="/edit/:counterId">
          <CounterEditPage></CounterEditPage>
        </Route>
        <Route path="/statistics/:counterId">
          <StatisticsPage></StatisticsPage>
        </Route>
        <Route path="/settings">
          <SettingsPage></SettingsPage>
        </Route>
        <Route path="/">
          <MainPage></MainPage>
        </Route>
      </Switch>
    </Router>
  );
}
