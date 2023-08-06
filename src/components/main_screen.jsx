import react from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/styles';

const Main_Screen = () => {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.Main_Screen}>I am the main part</Text>
    </View>
  );
};

export default Main_Screen;
