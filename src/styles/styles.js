import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Styles = StyleSheet.create({
  divContainer: {

    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: '100%',
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
    flexGrow: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue'
  },
  bottomContainer:
  {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green'
  }
})

export default Styles