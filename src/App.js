import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './configureStore';
import Router from './Router';

class App extends Component {
  componentWillMount() {
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
      //createStore: Parámetros
      //1. Pasa el conjunto de reducers
      //2. Pasa un estado inicial si lo deseamos (no tiene por qué)
      //3. Funcionalidad adicional para la Store, en este caso un Middlware
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
