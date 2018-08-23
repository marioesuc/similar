// Component that renders screen related to the login

import React, { Component } from 'react';
import { TextInput, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { loginEmailChanged, loginPasswordChanged, loginUser } from '../../actions';
import * as Colors from './styles/Colors';

class Login extends Component {

  onEmailChange(text) {
    //loginEmailChanged es la función Action Creator que hemos importado arriba
    this.props.loginEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.loginPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
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
          placeholder={'Contraseña'}
          secureTextEntry
          style={styles.input}
        />
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <TouchableOpacity style={styles.buttonBottom}
        onPress={() => {
                    Actions.register();
                  }}
        >
          <Text
            style={styles.bottomButtonText}
            title="Registro"
          >
            Registro
          </Text>
        </TouchableOpacity>
      </LinearGradient>
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
    color: Colors.errorText
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 300
  },
  buttonContainer: {
    backgroundColor: Colors.transparentButton,
    paddingVertical: 15,
    width: 300
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.transparentButtonText,
    fontWeight: '700'
  },
  bottomButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  buttonsSeparation: {
    flex: 1,
    marginRight: 10
  },
  registerButton: { flex: 1 },
  buttonBottom: {
    backgroundColor: Colors.registerButton,
    paddingVertical: 15,
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};


export default connect(mapStateToProps, { 
  loginEmailChanged, loginPasswordChanged, loginUser 
})(Login);
