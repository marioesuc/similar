// Component that renders screen related to the grammar videos

import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../common/ListItem';
import * as Colors from './styles/Colors';
import { loadGrammarData } from '../../actions';

class Grammar extends Component {

  componentWillMount() {
    this.props.loadGrammarData();
  }

  render() {
    return (

      <View style={styles.container}>
        <FlatList
          data={this.props.grammarData}
          renderItem={({ item }) => <ListItem picUrl={item.picUrl} videoUrl={item.videoUrl} title={item.title} desc={item.desc} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  }
});

const mapStateToProps = ({ grammar }) => {
  const { grammarData } = grammar;
  return { grammarData };
};

export default connect(mapStateToProps, { loadGrammarData })(Grammar);
