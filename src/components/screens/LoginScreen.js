// Component that renders screen related to the login

import React, { Component } from 'react';
import { Button, TextInput, View, Image, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import * as Colors from './styles/Colors';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange(text) {
    //emailChanged es la función Action Creator que hemos importado arriba
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
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
          placeholder={'Contraseña'}
          secureTextEntry
          style={styles.input}
        />
        
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonsSeparation}>
                <Button
                  title='Entrar'
                  onPress={this.onButtonPress.bind(this)}
                />
            </View>
            <View style={styles.registerButton} >
                <Button
                  title='Registro'
                  onPress={() => {
                    Actions.register();
                  }}
                />
            </View>
        </View>
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
    justifyContent: 'center',
    backgroundColor: Colors.appBackground,
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
  },
  errorTextStyle: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 300
  },
  buttonsSeparation: {
    flex: 1,
    marginRight: 10
  },
  registerButton: { flex: 1 }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};


export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(Login);
