import react from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/styles';

const Bottom_Bar = () => {
  return (
    <View style={Styles.bottomContainer}>
      <Text style={Styles.Bottom_Bar}>I am the bottom</Text>
    </View>
  );
};

export default Bottom_Bar;
