import react, {useState} from 'react';
import {View, Button} from 'react-native';
import styles from '../styles/styles';
import {random20} from './dice';

const Main_Screen = () => {
  const [dice, setDice] = useState('D20');

  return (
    <View style={styles.mainContainer}>
      <Button
        title={dice}
        onPress={() => console.log(random20(20))}
        style={styles.Bottom_Bar}
      />
    </View>
  );
};

export default Main_Screen;
