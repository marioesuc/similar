import React, { Component } from 'react';
import { Alert, Button, View, Image } from 'react-native';
import { Card, CardSection } from './common';

export default class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../images/similar_logo.png')} />
        </View>
        <Card>
          <View style={{ width: '100%', padding: 10 }}>
            <Button style={styles.button} title='Vocabulario' onPress={() => {}} />
          </View> 

          <View style={{ width: '100%', padding: 10 }}>
            <Button style={styles.button} title='Gramática' onPress={() => {}} />
          </View> 

          <View style={{ width: '100%', padding: 10 }}>
            <Button style={styles.button} title='Acerca de' onPress={() => {}} />
          </View> 

          <View style={{ width: '100%', padding: 10 }}>
            <Button style={styles.button} title='Cerrar sesión' onPress={() => {}} />
          </View> 
        </Card> 

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccf1f3',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
  logo: {
    marginTop: 20,
    width: 200,
    height: 173
  },
  button: {
    width: 300,
    alignItems: 'center'
  }
};
