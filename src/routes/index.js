import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import RoutesList from './routesList';
import animation from './animation';
import Nav from '../components/nav';

const RouterTransition = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <Transition
              key={location.key}
              timeout={400}
              onEnter={animation.onEnter} // on enter end
              onExit={animation.onExit} // on exit end
            >
              <RoutesList location={location} />
            </Transition>
          </TransitionGroup>
        )}
      />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default RouterTransition;
