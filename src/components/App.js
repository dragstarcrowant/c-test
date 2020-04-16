import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import createStore from 'unistore';

import { Provider } from 'unistore/react';

import Loading from './Loading';

let store = createStore({
  articles: []
});

const Home = importedComponent(
  () => import(/* webpackChunkName:'Home' */ './Home'),
  {
    LoadingComponent: Loading
  }
);

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName:'List' */ './List'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch 404' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

class App extends React.Component {
  render() {
    return <Provider store={store}>
      <Router>
        <div>
          <div className="offset md:max-w-default mx-auto">
            <div className="flex border border-1 offset rounded">
              <div className="flex w-full">
                <Link to="/">
                  Site Logo
                </Link>
                <div className="ml-auto">
                  <Link to="/">
                    Latest News
                  </Link>
                  <span className="text-xl px-4">|</span>
                  <Link to="/list">
                    List Of Titles
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={AsyncDynamicPage} />
            <Route component={AsyncNoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  }
};

export default App;
