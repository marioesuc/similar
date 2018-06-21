import React, { Component } from 'react';
import { Alert, TextInput, View, Image, Text, FlatList } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Button } from 'react-native-elements';

import CardFlip from 'react-native-card-flip';
import { Card, CardSection, VocabRow } from './common';

export default class Vocab extends Component {
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
        <View>
          <Text style={{ fontSize: 18 }}>
            Tu progreso:
          </Text>
          <ProgressBarAnimated
            width={300}
            value={75}
            backgroundColorOnComplete="#6CC644"
          />
        </View>
        <View style={{ height: 500, marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 17 }}>
            Listado de palabras:
          </Text>
          <Card>
            <View style={{ height: 50 }}>
              <VocabRow style={{ backgroundColor: '#BACFFF' }} >{{ col1: 'Inglés', col2: 'Español', col3: 'Memorizada' }}</VocabRow>
            </View>
            <FlatList
              data={[{ col1: 'Hello', col2: 'Hola', col3: '\u2714' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '\u2714' },{ col1: 'Hello', col2: 'Hola', col3: '\u2714' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '\u2714' }]}
              renderItem={({item}) => <VocabRow>{item}</VocabRow>}
              keyExtractor={(item, index) => index.toString()}
            />
          </Card>
          <Button
            title='FLASHCARDS'
            buttonStyle={{
              marginTop: 20,
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 250,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          />
        </View>


      </View>
 

    );
  }
}

const styles = {
  container: {
    padding: 20,
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
