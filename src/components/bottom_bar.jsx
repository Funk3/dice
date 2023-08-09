import react, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../styles/styles';
import D20 from './dice';

const Bottom_Bar = ({onPress}) => {
  return <Button title="Roll Dice" onPress={onPress} />;
};

export default Bottom_Bar;
