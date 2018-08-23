// Component that renders screen related to the video viewer

import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from './styles/Colors';

class About extends Component {

  render() {
    return (

      <LinearGradient 
        colors={[Colors.backgroundTopColor, Colors.backgroundBottomColor]}
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../images/similar_logo.png')} />
        </View>

          <View style={styles.textBox}>
            <Text style={styles.titleText}>¿Qué es Similar?</Text>
            <Text style={styles.titleDesc}>Similar no es una aplicación cualquiera para aprender idiomas. Nosotros, los creadores, creemos que un buen método de aprendizaje es fundamental para memorizar de la forma más eficiente y rápida posible.</Text>
            <Text style={styles.titleDesc}>Para ello combinamos el uso de las famosas tarjetas de aprendizaje (muy utilizadas en el estudio del idioma Chino) con el reaprovechamiento de los recursos que ofrece el nexo común del latín entre nuestro idioma, el español, y el inglés.</Text>
          </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: 200,
    height: 173
  },
  viewer: { height: 200 },
  textBox: {
    backgroundColor: 'white',
    width: '95%',
    margin: 10,
    padding: 10,
    elevation: 2,
    borderWidth: 0
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleDesc: {
    padding: 10
  }
});

export default About;
