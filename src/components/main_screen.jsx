import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import DiceSelector from './dice_selector';

const Main_Screen = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <View>
      <Text style={styles.mainScreen}>
        {selectedResult !== null ? selectedResult : 'Roll'}
      </Text>
      <DiceSelector setSelectedResult={setSelectedResult} />
    </View>
  );
};

export default Main_Screen;
