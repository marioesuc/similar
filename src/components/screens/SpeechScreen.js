// Component that renders screen related to the vocabulary and flashcards' exercises

import React, { Component } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Button } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';
import Tts from 'react-native-tts';
import Icon from 'react-native-fa-icons';
import { connect } from 'react-redux';
import Voice from 'react-native-voice';

import { Card, VocabRow, CircleButton } from '../common';
import { loadSpeechData, updateLearnedSpeechWords, deleteLearnedSpeechWords } from '../../actions';
import * as Colors from './styles/Colors';

class Speech extends Component {

  componentWillMount() {
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    this.props.loadSpeechData();

    this.setState({
      modalVisible: false,
      flipCard: false,
      speechElems: [],
      speechResult: '',
      speechCorrect: undefined
    });
  }

  componentWillReceiveProps(nextProps) {
    this.checkCompleteList(nextProps); 
  }

  onReply(chosen, correct) {
    if (chosen !== correct) {
      switch (chosen) {
        case this.props.currentCard.opt1:
          this.setState({ optChosen: 1 });
          break;
        case this.props.currentCard.opt2:
          this.setState({ optChosen: 2 });
          break;
        case this.props.currentCard.opt3:
          this.setState({ optChosen: 3 });
          break;
        case this.props.currentCard.opt4:
          this.setState({ optChosen: 4 });
          break;
        default:
      }
    } 

    switch (correct) {
        case this.props.currentCard.opt1:
          this.setState({ optCorrect: 1 });
          break;
        case this.props.currentCard.opt2:
          this.setState({ optCorrect: 2 });
          break;
        case this.props.currentCard.opt3:
          this.setState({ optCorrect: 3 });
          break;
        case this.props.currentCard.opt4:
          this.setState({ optCorrect: 4 });
          break;
        default:
      }
  }

  onSpeechResultsHandler(result) {
         this.setState({
             ...this.state,
             speechElems: result.value.map(x => x.toLowerCase())
         });

         this.checkPronunciation();
    }    
   
   onStartButtonPress() {
     Voice.start('en-US');
   }    

  textToSpeech() {
    Tts.speak(this.props.currentCard.eng);
  }

  checkCompleteList(props) {
    if (Object.keys(props.currentCard).length === 0) {
      Alert.alert('Listado completado', '¡Enhorabuena! Has respondido correctamente a todas las tarjetas y no quedan más para mostrar.\n\n¿Te gustaría resetear el listado para volver a empezar?',
          [
            {
              text: 'No'
            },
            {
              text: 'Sí',
              onPress: () => {
                this.props.deleteLearnedSpeechWords();
                this.props.loadSpeechData();
              }
            }
          ],
          { cancelable: true }
        );
      }
  }

  checkPronunciation() {
    console.log(this.state.speechElems);
    if (this.state.speechElems.includes(this.props.currentCard.eng)) {
      this.setState({ speechResult: '¡Correcto!', speechCorrect: true });
    } else {
      this.setState({ speechResult: 'Incorrecto', speechCorrect: false });
    }
  }

  render() { 
    return (
      <View style={styles.container}>

      {/* Modal that is going to contain the flipping card */}
      <Modal isVisible={this.state.modalVisible}>
      <View
        style={styles.flipCardContainer}
      >
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
                    <Text style={styles.engWord}>{this.props.currentCard.eng}</Text>
                  </View>
                </View>
                <View style={styles.answersContainer}>
                <Text>Toca el micrófono para hablar:</Text>
                <TouchableOpacity onPress={this.onStartButtonPress.bind(this)}><Text style={{ padding: 20, fontSize: 70 }}><Icon name='microphone' allowFontScaling /></Text></TouchableOpacity>
                <Text style={this.state.speechCorrect ? styles.speechSuccess : styles.speechFail} >{this.state.speechResult}</Text>
                </View>
                <CircleButton onPress={() => this.setState({ flipCard: true })} style={{ position: 'absolute', bottom: 20 }}>{'\u21c4'}</CircleButton>
              </Card>

          {/* Back Side */}

              <Card style={styles.card}>
                <View style={styles.rightAnswerContainer}>
                  <Text style={styles.rightAnswerSubtext}>La pronunciación correcta es:</Text>
                    <TouchableOpacity
                        style={styles.speakerContainer}
                        onPress={this.textToSpeech.bind(this)}
                    >
                        <Icon name='volume-up' style={styles.speakerIcon} />
                    </TouchableOpacity>
                    <Text style={styles.engWordPronuntiation}>{this.props.currentCard.pron}</Text>
                </View>
                <View style={styles.answerButtonsContainer}>
                  <Button
                    title='Cerrar'
                    color='blue'
                    buttonStyle={styles.optionButtonStyle}
                    onPress={() => {
                      if (this.state.speechCorrect !== undefined) {
                        this.props.updateLearnedSpeechWords(
                          {
                            eng: this.props.currentCard.eng,
                            success: this.state.speechCorrect
                          }
                        );
                      }
                      this.props.loadSpeechData();
                      this.setState({
                        modalVisible: false,
                        flipCard: false,
                        optCorrect: undefined,
                        optChosen: undefined
                      });
                    }}
                  />
                  <Button
                    title='Siguiente'
                    color='blue'
                    buttonStyle={styles.optionButtonStyle}
                    onPress={() => {
                      if (this.state.speechCorrect !== undefined) {
                        this.props.updateLearnedSpeechWords(
                          {
                            eng: this.props.currentCard.eng,
                            success: this.state.speechCorrect
                          }
                        );
                      }

                      this.props.loadSpeechData();
                      
                      this.setState({
                        flipCard: false,
                        speechResult: '',
                        speechCorrect: undefined
                      });
                    }}
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
            backgroundColor={Colors.progressBar}
            width={300}
            value={this.props.progress}
            backgroundColorOnComplete={Colors.progressBarComplete}
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
                {{ col1: 'Inglés', col2: 'Pronunc.', col3: 'Memorizada' }}
              </VocabRow>
            </View>
            {/* The key extractor is needed to generate an unique key for every element
            into the flatlist */}
            <FlatList
              data={this.props.wordsList}
              renderItem={({ item }) => <VocabRow>{item}</VocabRow>}
              keyExtractor={(item, index) => index.toString()}
            />
          </Card>
          <Button
            title='Flashcards'
            buttonStyle={styles.buttonStyle}
            onPress={() => this.setState({ modalVisible: true })
          }
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
  buttonStyle: {
    marginTop: 20,
    backgroundColor: Colors.purpleButton,
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
    marginTop: 20,
    fontSize: 70,
    color: Colors.speakerIcon
  },
  answersContainer: {
    position: 'absolute',
    top: 110,
    alignItems: 'center'
  },
  answersRow: { flexDirection: 'row' },
  rightAnswerContainer: {
    position: 'absolute',
    top: 60,
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
  headerRow: { backgroundColor: Colors.headerRow },
  engWordPronuntiation: { fontSize: 20, padding: 20 },
  speechSuccess: { color: 'green', fontSize: 20 },
  speechFail: { color: 'red', fontSize: 20 }
});


const mapStateToProps = ({ speech }) => {
  const { progress, wordsList, currentCard } = speech;
  return { progress, wordsList, currentCard };
};


export default connect(mapStateToProps, { loadSpeechData, updateLearnedSpeechWords, deleteLearnedSpeechWords })(Speech);
