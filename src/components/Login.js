import React, { Component } from 'react';
import { Alert, Button, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
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
        
        <View style={{ flexDirection: 'row', width: 300 }}>
            <View style={{ flex: 1, marginRight: 10 }}>
                <Button
                  title='Entrar'
                  onPress={() => {
                    Actions.menu();
                  }}
                />
            </View>
            <View style={{ flex: 1 }} >
                <Button
                  title='Registro'
                  onPress={() => {
                    Actions.register();
                  }}
                />
            </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccf1f3',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
  logo: {
    width: 250,
    height: 200
  },
  button: {
    padding: 20
  }
};
