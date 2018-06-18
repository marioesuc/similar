import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
//import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCsA4ByBUMAKpwq94Puyau0kpil12KNGuM',
      authDomain: 'manager-708bb.firebaseapp.com',
      databaseURL: 'https://manager-708bb.firebaseio.com',
      projectId: 'manager-708bb',
      storageBucket: 'manager-708bb.appspot.com',
      messagingSenderId: '263521345118'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      //createStore: Parámetros
      //1. Pasa el conjunto de reducers
      //2. Pasa un estado inicial si lo deseamos (no tiene por qué)
      //3. Funcionalidad adicional para la Store, en este caso un Middlware
      //<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      //</Provider>
    );
  }
}

export default App;
