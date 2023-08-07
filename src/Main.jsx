import react, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './styles/styles';

//components
import Bottom_Bar from './components/bottom_bar';
import Main_Screen from './components/main_screen';

const Main = () => {
  return (
    <SafeAreaView style={styles.divContainer}>
      <Main_Screen />
      <Bottom_Bar />
    </SafeAreaView>
  );
};

export default Main;
