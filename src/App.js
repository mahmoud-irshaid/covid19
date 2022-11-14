import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import DashboardSlice from './redux/DashboardSlice'
import Loader from './components/Loader';
const Home = lazy(() => import('./pages/Home'))

const App = () => {

  const store = configureStore({
    reducer: {
      DashboardSlice,

    },
  });

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={
          <Loader />
        }>
          <Switch>

            <Route exact path='/' >
              <Home />
            </Route>


          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;