import React, { Component } from 'react';
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from 'react-native';

//import { StackNavigator } from 'react-navigation';
//import Spinner from 'react-native-loading-spinner-overlay';

class Login extends Component {
  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null
    },
    header: null
  };


  async onLoginPress() {
    console.log('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <View behavior='padding' style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../images/similar_logo.png')} />
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <TextInput
              placeholder='Usuario'
              placeholderTextColor='rgba(255,255,255,0.7)'
              returnKeyType='next'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />
            <TextInput
              placeholder='Contraseña'
              placeholderTextColor='rgba(255,255,255,0.7)'
              returnKeyType='go'
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            title='Sign up'
          >
            Registro
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5db0ba'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    height: 200
  },
  subtext: {
    color: '#ffffff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#008f98',
    paddingVertical: 15
  }
});

export default Login;

