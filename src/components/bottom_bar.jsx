import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

const Bottom_Bar = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.diceButton}>
      <Text style={styles.diceButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Bottom_Bar;
