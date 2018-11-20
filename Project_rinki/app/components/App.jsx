import React, {Component} from 'react';

import Header from './Header.jsx';
import Router from './Router.jsx';

export default class App extends Component {
    render() {
      return (
            <div>
                    <Header />
                    <Router />
            </div>
      );
    }
}
