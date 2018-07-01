// Component that renders screen related to the register form

import React, { Component } from 'react';
import { Button, TextInput, View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, confirmPasswordChanged, registerUser } from '../../actions';
import * as Colors from './styles/Colors';

class Register extends Component {

  onEmailChange(text) {
    //emailChanged es la función Action Creator que hemos importado arriba
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onPasswordConfirmChange(text) {
    this.props.confirmPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password, confirmPassword } = this.props;

    this.props.registerUser({ email, password, confirmPassword });
  }


  render() {
    return (
      <View style={styles.container}>
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

        <Button style={styles.button} title='Registrarse' onPress={this.onButtonPress.bind(this)} />
           
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
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
  errorTextStyle: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, confirmPassword, error } = auth;
  return { email, password, confirmPassword, error };
};


export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, confirmPasswordChanged, registerUser
})(Register);
