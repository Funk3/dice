import react from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';
import D20 from './dice';

const Bottom_Bar = () => {
  return (
    <View style={styles.bottomContainer}>
      <D20 />
    </View>
  );
};

export default Bottom_Bar;
