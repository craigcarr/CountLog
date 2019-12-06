import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CounterDatabase from './CounterDatabase';
import LoggingAPI from './Interfaces/LoggingAPI';
import CountersAPI from './Interfaces/CountersAPI';
import EventsAPI from './Interfaces/EventsAPI';
import SettingsAPI from './Interfaces/SettingsAPI';
import ReceiversAPI from './Interfaces/ReceiversAPI';
import './App.scss';

const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const SettingsPage = lazy(() => import('./Pages/SettingsPage/SettingsPage'));
const CounterCreatePage = lazy(() => import('./Pages/CounterCreatePage/CounterCreatePage'));
const CounterEditPage = lazy(() => import('./Pages/CounterEditPage/CounterEditPage'));
const StatisticsPage = lazy(() => import('./Pages/StatisticsPage/StatisticsPage'));
const CounterDeletePage = lazy(() => import('./Pages/CounterDeletePage/CounterDeletePage'));
const CounterHistoryPage = lazy(() => import('./Pages/CounterHistoryPage/CounterHistoryPage'));
const EventEditPage = lazy(() => import('./Pages/EventEditPage/EventEditPage'));
const ReceiverListPage = lazy(() => import('./Pages/ReceiverListPage/ReceiverListPage'));
const ReceiverEditPage = lazy(() => import('./Pages/ReceiverEditPage/ReceiverEditPage'));
const ReceiverCreatePage = lazy(() => import('./Pages/ReceiverCreatePage/ReceiverCreatePage'));
const ReceiverDeletePage = lazy(() => import('./Pages/ReceiverDeletePage/ReceiverDeletePage'));

const db = new CounterDatabase();
const loggingApi = new LoggingAPI();
const receiversApi = new ReceiversAPI(db, loggingApi);
const eventsApi = new EventsAPI(db, receiversApi, loggingApi);
const countersApi = new CountersAPI(db, eventsApi, loggingApi);
const settingsApi = new SettingsAPI(db);

export const LoggingContext = React.createContext(loggingApi);
export const CountersContext = React.createContext(countersApi);
export const EventsContext = React.createContext(eventsApi);
export const SettingsContext = React.createContext(settingsApi);
export const ReceiversContext = React.createContext(receiversApi);

export default function App() {
  return (
    <LoggingContext.Provider value={loggingApi}>
      <SettingsContext.Provider value={settingsApi}>
        <CountersContext.Provider value={countersApi}>
          <EventsContext.Provider value={eventsApi}>
            <ReceiversContext.Provider value={receiversApi}>
              <Router>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/create" component={CounterCreatePage} />
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
                </Suspense>
              </Router>
            </ReceiversContext.Provider>
          </EventsContext.Provider>
        </CountersContext.Provider>
      </SettingsContext.Provider>
    </LoggingContext.Provider>
  );
}
