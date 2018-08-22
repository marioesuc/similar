// Component that renders screen related to main menu options

import React, { Component } from 'react';
import { Alert, Button, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card } from '../common';
import { logoutUser } from '../../actions';
import * as Colors from './styles/Colors';
import Icon from 'react-native-fa-icons';

class Menu extends Component {
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
      <LinearGradient 
        colors={[Colors.backgroundTopColor, Colors.backgroundBottomColor]}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../images/similar_logo.png')} />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => { Actions.vocab(); }}
          >
          <LinearGradient 
          colors={['#658FD6', '#144395']}
          style={styles.signInWithFacebookButton}
        >
              <Icon name='language' style={styles.buttonIcon} />
              <Text style={styles.signInText}>
                  {'Vocabulario'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { Actions.speech(); }}
          >
          <LinearGradient 
          colors={['#658FD6', '#144395']}
          style={styles.signInWithFacebookButton}
        >
              <Icon name='comments' style={styles.buttonIcon} />
              <Text style={styles.signInText}>
                  {'Pronunciación'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { Actions.grammar(); }}
          >
          <LinearGradient 
          colors={['#658FD6', '#144395']}
          style={styles.signInWithFacebookButton}
        >
              <Icon name='pencil' style={styles.buttonIcon} />
              <Text style={styles.signInText}>
                  {'Gramática'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { Actions.about(); }}
          >
          <LinearGradient 
          colors={['#658FD6', '#144395']}
          style={styles.signInWithFacebookButton}
        >
              <Icon name='info' style={styles.buttonIcon} />
              <Text style={styles.signInText}>
                  {'Acerca de'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.props.logoutUser}
          >
          <LinearGradient 
          colors={['#658FD6', '#144395']}
          style={styles.signInWithFacebookButton}
        >
              <Icon name='sign-out' style={styles.buttonIcon} />
              <Text style={styles.signInText}>
                  {'Cerrar sesión'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    width: 300,
    alignItems: 'center'
  },
  buttonContainer: { width: '100%', padding: 10 },
  signInWithFacebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 40,
        padding: 5,
        borderRadius: 5,
        margin: 5,
        elevation: 2
    },
    signInText: {
        color: 'white',
        marginLeft: 5,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonIcon: {
        marginRight: 5,
        color: 'white',
        fontSize: 25
    },
    buttonsContainer: {
      marginTop: 20,
      width: 280,
      padding: 10,
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.6)',
      elevation: 2
    }
});


export default connect(null, { 
  logoutUser
})(Menu);
