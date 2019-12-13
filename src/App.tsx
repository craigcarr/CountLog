import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

import CounterDatabase, { SettingName } from './CounterDatabase';
import LoggingAPI from './Interfaces/LoggingAPI';
import CountersAPI from './Interfaces/CountersAPI';
import EventsAPI from './Interfaces/EventsAPI';
import SettingsAPI from './Interfaces/SettingsAPI';

import AboutPage from './Pages/AboutPage/AboutPage';
import CounterCreatePage from './Pages/CounterCreatePage/CounterCreatePage';
import CounterEditPage from './Pages/CounterEditPage/CounterEditPage';
import DebugPage from './Pages/DebugPage/DebugPage';
import StatisticsPage from './Pages/StatisticsPage/StatisticsPage';
import CounterDeletePage from './Pages/CounterDeletePage/CounterDeletePage';
import CounterHistoryPage from './Pages/CounterHistoryPage/CounterHistoryPage';
import EventEditPage from './Pages/EventEditPage/EventEditPage';
import MainPage from './Pages/MainPage/MainPage';
import ReceiverListPage from './Pages/ReceiverListPage/ReceiverListPage';
import ReceiverEditPage from './Pages/ReceiverEditPage/ReceiverEditPage';
import ReceiverCreatePage from './Pages/ReceiverCreatePage/ReceiverCreatePage';
import ReceiverDeletePage from './Pages/ReceiverDeletePage/ReceiverDeletePage';
import ReceiversAPI from './Interfaces/ReceiversAPI';
import SettingsPage from './Pages/SettingsPage/SettingsPage';

const db = new CounterDatabase();
const loggingApi = new LoggingAPI();
const receiversApi = new ReceiversAPI(db, loggingApi);
const eventsApi = new EventsAPI(db, receiversApi, loggingApi);
const countersApi = new CountersAPI(db, eventsApi, loggingApi);
const settingsApi = new SettingsAPI(db, loggingApi);

export const LoggingContext = React.createContext(loggingApi);
export const CountersContext = React.createContext(countersApi);
export const EventsContext = React.createContext(eventsApi);
export const SettingsContext = React.createContext(settingsApi);
export const ReceiversContext = React.createContext(receiversApi);

export default function App() {
  settingsApi.getSettingByName(SettingName.isDarkModeEnabled).then(setting => {
    settingsApi.setDarkModeCssVariables(setting);
  });

  return (
    <LoggingContext.Provider value={loggingApi}>
      <SettingsContext.Provider value={settingsApi}>
        <CountersContext.Provider value={countersApi}>
          <EventsContext.Provider value={eventsApi}>
            <ReceiversContext.Provider value={receiversApi}>
              <Router>
                <Switch>
                  <Route path="/about" component={AboutPage} />
                  <Route path="/create" component={CounterCreatePage} />
                  <Route path="/debug" component={DebugPage} />
                  <Route path="/editcounter/:counterId" component={CounterEditPage} />
                  <Route path="/deletecounter/:counterId" component={CounterDeletePage} />
                  <Route path="/counterhistory/:counterId/editevent/:eventId" component={EventEditPage} />
                  <Route path="/counterhistory/:counterId" component={CounterHistoryPage} />
                  <Route path="/edit/:counterId" component={CounterEditPage} />
                  <Route path="/statistics/:counterId" component={StatisticsPage} />
                  <Route path="/settings" component={SettingsPage} />
                  <Route path="/receiverlist" component={ReceiverListPage} />
                  <Route path="/receivercreate" component={ReceiverCreatePage} />
                  <Route path="/receiveredit/:receiverId" component={ReceiverEditPage} />
                  <Route path="/receiverdelete/:receiverId" component={ReceiverDeletePage} />
                  <Route path="/" component={MainPage} />
                </Switch>
              </Router>
            </ReceiversContext.Provider>
          </EventsContext.Provider>
        </CountersContext.Provider>
      </SettingsContext.Provider>
    </LoggingContext.Provider>
  );
}
