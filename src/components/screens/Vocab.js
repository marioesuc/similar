// Component that renders screen related to the vocabulary and flashcards' exercises

import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Button } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';
import Tts from 'react-native-tts';
import Icon from 'react-native-fa-icons';

import { Card, VocabRow, CircleButton } from '../common';

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
    Tts.speak(this.state.engWord);
  }

  render() {
    return (
      <View style={styles.container}>

      {/* Modal that is going to contain the flipping card */}
      <Modal isVisible={this.state.modalVisible}>
      <View
        style={styles.flipCardContainer} >
        <FlipCard 
          perspective={1000}
          style={styles.flipCard} 
          clickable={false}
          flipHorizontal={true}
          flipVertical={false}
          flip={this.state.flipCard}
        >
          {/* Face Side */}
              <Card style={styles.card}>
                <View style={styles.cardHead}>
                  <View style={styles.engRow}>
                    <Text style={styles.engWord}>{this.state.engWord}</Text>
                    <TouchableOpacity
                      style={styles.speakerContainer}
                      onPress={this.textToSpeech.bind(this)}
                    >
                        <Icon name='volume-up' style={styles.speakerIcon} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.engWordPronuntiation}>Pronuntiation</Text>
                </View>
                <View style={styles.answersContainer}>
                <Text>Elige una respuesta:</Text>
                  <View style={styles.answersRow}>
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
                  <View style={styles.answersRow}>
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

              <Card style={styles.card}>
                <View style={styles.rightAnswerContainer}>
                  <Text style={styles.rightAnswerSubtext}>La respuesta correcta es:</Text>
                  <Text style={styles.spWord}>{this.state.spWord}</Text>
                </View>
                <View style={styles.answerButtonsContainer}>
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

        {/* View related to the Progress Bar */}
        <View>
          <Text style={styles.progressLabel}>
            Tu progreso:
          </Text>
          <ProgressBarAnimated
            width={300}
            value={75}
            backgroundColorOnComplete="#6CC644"
          />
        </View>

        {/* View related to the words' table */}
        <View style={styles.wordsListContainer}>
          <Text style={styles.wordsListLabel}>
            Listado de palabras:
          </Text>
          <Card>
            <View style={styles.tableHeader}>
              <VocabRow
                style={styles.headerRow}
              >
                {{ col1: 'Inglés', col2: 'Español', col3: 'Memorizada' }}
              </VocabRow>
            </View>
            {/* The key extractor is needed to generate an unique key for every element
            into the flatlist */}
            <FlatList
              data={[{ col1: 'Hello', col2: 'Hola', col3: '\u2714' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '\u2714' },{ col1: 'Hello', col2: 'Hola', col3: '\u2714' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '' },{ col1: 'Hello', col2: 'Hola', col3: '\u2715' },{ col1: 'Hello', col2: 'Hola', col3: '\u2714' }]}
              renderItem={({ item }) => <VocabRow>{item}</VocabRow>}
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

const styles = StyleSheet.create({
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
  },
  flipCardContainer: {
    alignItems: 'center',
    marginTop: 40,
    flex: 1 },
  flipCard: { borderWidth: 0 },
  card: { height: 380 },
  cardHead: {
    position: 'absolute',
    top: 30,
    alignItems: 'center'
  },
  engRow: { flexDirection: 'row' },
  engWord: { fontSize: 35 },
  speakerContainer: {
    position: 'relative',
    top: 8,
    left: 10
  },
  speakerIcon: {
    fontSize: 35,
    color: '#606060'
  },
  answersContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center'
  },
  answersRow: { flexDirection: 'row' },
  rightAnswerContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },
  rightAnswerSubtext: { fontSize: 20 },
  spWord: { fontSize: 35 },
  answerButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40
  },
  progressLabel: { fontSize: 18 },
  wordsListContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  wordsListLabel: { fontSize: 17 },
  tableHeader: { height: 50 },
  headerRow: { backgroundColor: '#BACFFF' },
  engWordPronuntiation: { fontSize: 20 }
});

export default Vocab;
