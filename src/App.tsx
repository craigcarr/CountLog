import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import CounterCreatePage from './Pages/CounterCreatePage/CounterCreatePage';
import CounterDatabase from './CounterDatabase';
import CounterEditPage from './Pages/CounterEditPage/CounterEditPage';
import StatisticsPage from './Pages/StatisticsPage/StatisticsPage';
import CounterDeletePage from './Pages/CounterDeletePage/CounterDeletePage';
import CounterHistoryPage from './Pages/CounterHistoryPage/CounterHistoryPage';
import EventEditPage from './Pages/EventEditPage/EventEditPage';
import LoggingAPI from './Interfaces/LoggingAPI';
import CountersAPI from './Interfaces/CountersAPI';
import EventsAPI from './Interfaces/EventsAPI';
import SettingsAPI from './Interfaces/SettingsAPI';
import './App.scss';
import ReceiverListPage from './Pages/ReceiverListPage/ReceiverListPage';
import ReceiverEditPage from './Pages/ReceiverEditPage/ReceiverEditPage';
import ReceiverCreatePage from './Pages/ReceiverCreatePage/ReceiverCreatePage';
import ReceiverDeletePage from './Pages/ReceiverDeletePage/ReceiverDeletePage';

const db = new CounterDatabase();
const loggingApi = new LoggingAPI();
const countersApi = new CountersAPI(db, loggingApi);
const eventsApi = new EventsAPI(db, loggingApi);
const settingsApi = new SettingsAPI(db);

export const LoggingContext = React.createContext(loggingApi);
export const CountersContext = React.createContext(countersApi);
export const EventsContext = React.createContext(eventsApi);
export const SettingsContext = React.createContext(settingsApi);

export default function App() {
  return (
    <LoggingContext.Provider value={loggingApi}>
      <SettingsContext.Provider value={settingsApi}>
        <CountersContext.Provider value={countersApi}>
          <EventsContext.Provider value={eventsApi}>
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
              <Route path="/receiverlist">
                <ReceiverListPage></ReceiverListPage>
              </Route>
              <Route path="/receiveredit">
                <ReceiverEditPage></ReceiverEditPage>
              </Route>
              <Route path="/receivercreate">
                <ReceiverCreatePage></ReceiverCreatePage>
              </Route>
              <Route path="/receiverdelete">
                <ReceiverDeletePage></ReceiverDeletePage>
              </Route>
              <Route path="/">
                <MainPage></MainPage>
              </Route>
            </Switch>
          </Router>
          </EventsContext.Provider>
        </CountersContext.Provider>
      </SettingsContext.Provider>
    </LoggingContext.Provider>
  );
}
