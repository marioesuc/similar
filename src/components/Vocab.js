import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Button } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';
import Tts from 'react-native-tts';
import Icon from 'react-native-fa-icons';

import { Card, VocabRow, CircleButton } from './common';

class Vocab extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      modalVisible: false,
      flipCard: false,
      engWord: 'Abandon',
      spWord: 'Abandonar'
    };
  }

  textToSpeech() {
    console.log('Entra');
    Tts.speak(this.state.engWord);
  }

  render() {
    return (
      <View style={styles.container}>


      <Modal isVisible={this.state.modalVisible}>
      <View
        style={{ alignItems: 'center', marginTop: 40, flex: 1 }} >
        <FlipCard 
          perspective={1000}
          style={{ borderWidth: 0 }} 
          clickable={false}
          flipHorizontal={true}
          flipVertical={false}
          flip={this.state.flipCard}
        >
          {/* Face Side */}
              <Card style={{ height: 380 }}>
                <View style={{ position: 'absolute', top: 30, alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 35 }}>{this.state.engWord}</Text>
                    <TouchableOpacity style={{ position: 'relative', top: 8, left: 10 }} onPress={this.textToSpeech.bind(this)}><Icon name='volume-up' style={{ fontSize: 35, color: '#606060' }} /></TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: 20 }}>Pronuntiation</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 100, alignItems: 'center' }}>
                <Text>Elige una respuesta:</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Button
                      title='Option 1'
                      color='blue'
                      buttonStyle={styles.optionButtonStyle}
                      onPress={() => this.setState({ modalVisible: true })}
                    />
                    <Button
                      title='Option 2'
                      color='blue'
                      buttonStyle={styles.optionButtonStyle}
                      onPress={() => this.setState({ modalVisible: true })}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Button
                      title='Option 1'
                      color='blue'
                      buttonStyle={styles.optionButtonStyle}
                      onPress={() => this.setState({ modalVisible: true })}
                    />
                    <Button
                      title='Option 2'
                      color='blue'
                      buttonStyle={styles.optionButtonStyle}
                      onPress={() => this.setState({ modalVisible: true })}
                    />
                  </View>
                </View>
                <CircleButton onPress={() => this.setState({ flipCard: true })} style={{ position: 'absolute', bottom: 20 }}>{'\u21c4'}</CircleButton>
              </Card>

          {/* Back Side */}

              <Card style={{ height: 380 }}>
                <View style={{ position: 'absolute', top: 100, alignItems: 'center' }}>
                  <Text style={{ fontSize: 20 }}>La respuesta correcta es:</Text>
                  <Text style={{ fontSize: 35 }}>{this.state.spWord}</Text>
                </View>
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 40 }}>
                  <Button
                    title='Cerrar'
                    color='blue'
                    buttonStyle={styles.optionButtonStyle}
                    onPress={() => this.setState({ modalVisible: false })}
                  />
                  <Button
                    title='Siguiente'
                    color='blue'
                    buttonStyle={styles.optionButtonStyle}
                    onPress={() => this.setState({ flipCard: false })}
                  />
                </View>
              </Card>
            
        </FlipCard>
        </View>
      </Modal>

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
        <View style={{ marginTop: 20, alignItems: 'center' }}>
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
            buttonStyle={styles.buttonStyle}
            onPress={() => this.setState({ modalVisible: true })}
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
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'rgba(92, 99,216, 1)',
    width: 250,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5
  },
  optionButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    padding: 0,
    backgroundColor: 'transparent',
    width: 100,
    height: 45,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5
  }
};

export default Vocab;
