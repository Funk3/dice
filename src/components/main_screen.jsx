import react from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

const Main_Screen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Main_Screen}>I am the main part</Text>
    </View>
  );
};

export default Main_Screen;
