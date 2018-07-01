// Main file where the index.js is going to point to. This is the start of the App

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './configureStore';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    //Firebase connection settings
    const config = {
      apiKey: 'AIzaSyCgs9z7v6w2CycXxtmYO7_56gqndeven2M',
      authDomain: 'similar-c1bf4.firebaseapp.com',
      databaseURL: 'https://similar-c1bf4.firebaseio.com',
      projectId: 'similar-c1bf4',
      storageBucket: 'similar-c1bf4.appspot.com',
      messagingSenderId: '280148986434'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      /* We wrap up the Router tag with the Provider so that we can apply
      the Saga Middleware for asynch calls */
      <Provider store={store}>
      {/* We invoke to the Router component that manages the screens */}
        <Router />
      </Provider>
    );
  }
}

export default App;
