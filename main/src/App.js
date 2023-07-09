import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Divider } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  const history = useHistory()

  React.useEffect(() => {
    const unregister = history.listen(() => {
      console.log('changed')
    })

    return unregister
  }, [history])

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Divider type="vertical" />
        <Link to="/about">About</Link>
        <Divider type="vertical" />
        <Link to="/micro-app">Micro App</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/micro-app" render={() => <div id='micro-app-container'></div>} />
        </Switch>
      </Suspense>
    </>
  );
};

export default function App() {
  return (
    <Router basename='/'>
    <div className="app-main">
      <LibVersion />
      <HelloModal />

      <Divider />

      <RouteExample />
    </div>
    </Router>
  );
}
