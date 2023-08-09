import react, {useState} from 'react';
import {View} from 'react-native';
import styles from '../styles/styles';
import Dice from './dice';

const Main_Screen = () => {
  return (
    <View style={styles.mainContainer}>
      <Dice sides={20} title="D20" />
      <Dice sides={100} title="D100" />
      <Dice sides={12} title="D12" />
      <Dice sides={10} title="D10" />
      <Dice sides={8} title="D8" />
      <Dice sides={6} title="D6" />
      <Dice sides={4} title="D4" />
    </View>
  );
};

export default Main_Screen;
