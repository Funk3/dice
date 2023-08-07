import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  divContainer: {
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: '100%',
  },
  Bottom_Bar: {
    color: 'yellow',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green'
  }
})

export default styles