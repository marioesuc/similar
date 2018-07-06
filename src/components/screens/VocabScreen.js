// Component that renders screen related to the vocabulary and flashcards' exercises

import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Button } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';
import Tts from 'react-native-tts';
import Icon from 'react-native-fa-icons';
import { connect } from 'react-redux';

import { Card, VocabRow, CircleButton } from '../common';
import { loadVocabData } from '../../actions';
import * as Colors from './styles/Colors';

class Vocab extends Component {


  componentWillMount() {
    this.props.loadVocabData();

    this.setState({
      modalVisible: false,
      flipCard: false,
      opt1Correct: undefined,
      opt2Correct: undefined,
      opt3Correct: undefined,
      opt4Correct: undefined
    });
  }

  onReply(chosen, correct) {
    console.log(chosen, correct);
    if (chosen === correct) {
      switch (chosen) {
        case this.props.currentCard.opt1:
          this.setState({ opt1Correct: true });
          break;
        case this.props.currentCard.opt2:
          this.setState({ opt2Correct: true });
          break;
        case this.props.currentCard.opt3:
          this.setState({ opt3Correct: true });
          break;
        case this.props.currentCard.opt4:
          this.setState({ opt4Correct: true });
          break;
        default:
      }
    } else {
      switch (correct) {
        case this.props.currentCard.opt1:
          this.setState({ opt1Correct: true });
          break;
        case this.props.currentCard.opt2:
          this.setState({ opt2Correct: true });
          break;
        case this.props.currentCard.opt3:
          this.setState({ opt3Correct: true });
          break;
        case this.props.currentCard.opt4:
          this.setState({ opt4Correct: true });
          break;
        default:
      }


      switch (chosen) {
        case this.props.currentCard.opt1:
          this.setState({ opt1Correct: false });
          break;
        case this.props.currentCard.opt2:
          this.setState({ opt2Correct: false });
          break;
        case this.props.currentCard.opt3:
          this.setState({ opt3Correct: false });
          break;
        case this.props.currentCard.opt4:
          this.setState({ opt4Correct: false });
          break;
        default:
      }
    }
    this.setState({
      opt1: { backgroundColor: 'blue' }
    });
  }

  textToSpeech() {
    Tts.speak(this.props.currentCard.eng);
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
                  {console.log(Object.keys(this.props.currentCard))}
                    <Text style={styles.engWord}>{this.props.currentCard.eng}</Text>
                    <TouchableOpacity
                      style={styles.speakerContainer}
                      onPress={this.textToSpeech.bind(this)}
                    >
                        <Icon name='volume-up' style={styles.speakerIcon} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.engWordPronuntiation}>{this.props.currentCard.pron}</Text>
                </View>
                <View style={styles.answersContainer}>
                <Text>Elige una respuesta:</Text>
                {console.log(this.props.currentCard.opt1)}
                  <View style={styles.answersRow}>
                    <Button
                      title={this.props.currentCard.opt1}
                      color='blue'
                      buttonStyle={[
                        styles.optionButtonStyle,
                        this.state.opt1Correct ? styles.optSuccess : null,
                        this.state.opt1Correct === false ? styles.optFail : null
                        ]}
                      onPress={this.onReply.bind(this, this.props.currentCard.opt1, this.props.currentCard.sp)}
                    />
                    <Button
                      title={this.props.currentCard.opt2}
                      color='blue'
                      buttonStyle={[
                        styles.optionButtonStyle,
                        this.state.opt2Correct ? styles.optSuccess : null,
                        this.state.opt2Correct === false ? styles.optFail : null
                        ]}
                      onPress={this.onReply.bind(this, this.props.currentCard.opt2, this.props.currentCard.sp)}
                    />
                  </View>
                  <View style={styles.answersRow}>
                    <Button
                      title={this.props.currentCard.opt3}
                      color='blue'
                      buttonStyle={[
                        styles.optionButtonStyle,
                        this.state.opt3Correct ? styles.optSuccess : null,
                        this.state.opt3Correct === false ? styles.optFail : null
                        ]}
                      onPress={this.onReply.bind(this, this.props.currentCard.opt3, this.props.currentCard.sp)}
                    />
                    <Button
                      title={this.props.currentCard.opt4}
                      color='blue'
                      buttonStyle={[
                        styles.optionButtonStyle,
                        this.state.opt4Correct ? styles.optSuccess : null,
                        this.state.opt4Correct === false ? styles.optFail : null
                        ]}
                      onPress={this.onReply.bind(this, this.props.currentCard.opt4, this.props.currentCard.sp)}
                    />
                  </View>
                </View>
                <CircleButton onPress={() => this.setState({ flipCard: true })} style={{ position: 'absolute', bottom: 20 }}>{'\u21c4'}</CircleButton>
              </Card>

          {/* Back Side */}

              <Card style={styles.card}>
                <View style={styles.rightAnswerContainer}>
                  <Text style={styles.rightAnswerSubtext}>La respuesta correcta es:</Text>
                  <Text style={styles.spWord}>{this.props.currentCard.sp}</Text>
                </View>
                <View style={styles.answerButtonsContainer}>
                  <Button
                    title='Cerrar'
                    color='blue'
                    buttonStyle={styles.optionButtonStyle}
                    onPress={() => {
                      this.props.loadVocabData();
                      this.setState({
                        modalVisible: false,
                        flipCard: false,
                        opt1Correct: undefined,
                        opt2Correct: undefined,
                        opt3Correct: undefined,
                        opt4Correct: undefined
                      });
                    }}
                  />
                  <Button
                    title='Siguiente'
                    color='blue'
                    buttonStyle={styles.optionButtonStyle}
                    onPress={() => {
                      this.props.loadVocabData();
                      this.setState({
                        flipCard: false,
                        opt1Correct: undefined,
                        opt2Correct: undefined,
                        opt3Correct: undefined,
                        opt4Correct: undefined
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
                {{ col1: 'Inglés', col2: 'Español', col3: 'Memorizada' }}
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
    fontSize: 35,
    color: Colors.speakerIcon
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
  headerRow: { backgroundColor: Colors.headerRow },
  engWordPronuntiation: { fontSize: 20 },
  optSuccess: { backgroundColor: 'lightgreen' },
  optFail: { backgroundColor: 'red' }
});


const mapStateToProps = ({ vocab }) => {
  const { progress, wordsList, currentCard } = vocab;
  return { progress, wordsList, currentCard };
};


export default connect(mapStateToProps, { loadVocabData })(Vocab);
