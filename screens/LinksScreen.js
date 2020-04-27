import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

class LinksScreen extends Component {


  componentDidMount () {
    fetch( 'http://testdo.radioformula.com.mx/envivo/api/programacion-estacion-actual/1' )
      .then( response => {
        return response.json();
      } )
      .then( response => {
        console.log( response );

      } )
  }
  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>ENVIVO</Text>

      </ScrollView>
    );
  }
}



export default LinksScreen;



const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#131721',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
} );
