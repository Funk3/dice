import react, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import Bottom_Bar from './bottom_bar';
import DiceSelector from './dices_selector';

const Main_Screen = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Main_Screen}>
        Result: {selectedResult !== null ? selectedResult : 'Roll the dice!'}
      </Text>
      <DiceSelector setSelectedResult={setSelectedResult} />
      <Bottom_Bar />
    </View>
  );
};

export default Main_Screen;
