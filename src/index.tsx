import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Router from './components/Router.jsx';
import App from './App';

import Receipt from './components/CartComponents/Receipt';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//Routing for main and checkout
class MainRouter extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/receipt" component={Receipt} />
          </Switch>
        </BrowserRouter>
      )
    }
  }

ReactDOM.render(<MainRouter />, document.getElementById('root'));

serviceWorker.unregister();
