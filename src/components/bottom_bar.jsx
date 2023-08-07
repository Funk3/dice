import react from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';
import D20 from './dice';

const Bottom_Bar = () => {
  return (
    <View style={styles.bottomContainer}>
      <D20 />
      <Text style={styles.Bottom_Bar}>I am the bottom</Text>
    </View>
  );
};

export default Bottom_Bar;
