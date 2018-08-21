// Component that renders screen related to the register form

import React, { Component } from 'react';
import { TextInput, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import {
  registerEmailChanged,
  registerPasswordChanged,
  registerConfirmPasswordChanged,
  registerUser
} from '../../actions';
import * as Colors from './styles/Colors';

class Register extends Component {

  onEmailChange(text) {
    //registerEmailChanged es la función Action Creator que hemos importado arriba
    this.props.registerEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.registerPasswordChanged(text);
  }

  onPasswordConfirmChange(text) {
    this.props.registerConfirmPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password, confirmPassword } = this.props;

    this.props.registerUser({ email, password, confirmPassword });
  }


  render() {
    return (
      <LinearGradient 
        colors={[Colors.backgroundTopColor, Colors.backgroundBottomColor]}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../images/similar_logo.png')} />
        </View>
        <TextInput
          value={this.props.email}
          onChangeText={this.onEmailChange.bind(this)}
          placeholder={'E-mail'}
          style={styles.input}
        />
        <TextInput
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder={'Introduce una contraseña'}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={this.props.confirmPassword}
          onChangeText={this.onPasswordConfirmChange.bind(this)}
          placeholder={'Repite la contraseña'}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
           
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.appBackground,
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
  },
  buttonContainer: {
    backgroundColor: Colors.transparentButton,
    paddingVertical: 15,
    width: 300
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  errorTextStyle: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    color: Colors.errorText
  }
});

const mapStateToProps = ({ register }) => {
  const { email, password, confirmPassword, error } = register;
  return { email, password, confirmPassword, error };
};


export default connect(mapStateToProps, { 
  registerEmailChanged, registerPasswordChanged, registerConfirmPasswordChanged, registerUser
})(Register);
