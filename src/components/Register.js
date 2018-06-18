import React, { Component } from 'react';
import { Alert, Button, TextInput, View, Image } from 'react-native';

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
        <TextInput
          value={this.state.username}
          placeholder={'Usuario'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Contraseña'}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Repite contraseña'}
          secureTextEntry
          style={styles.input}
        />

        <Button style={styles.button} title='Registrarse' onPress={() => {}} />
           

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
    alignItems: 'center'
  }
};
