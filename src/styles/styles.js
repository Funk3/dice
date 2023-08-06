import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Styles = StyleSheet.create({
  divContainer: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  Bottom_Bar: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
  Main_Screen: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50
  },
  mainContainer: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'blue'
  }
})

export default Styles