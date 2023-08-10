import react from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles/styles';

//components

import Main_Screen from './components/main_screen';

const Main = () => {
  return (
    <SafeAreaView style={styles.divContainer}>
      <Main_Screen />
    </SafeAreaView>
  );
};

export default Main;
