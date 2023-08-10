import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles/styles';

import Main_Screen from './components/main_screen';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Main_Screen />
    </SafeAreaView>
  );
};

export default Main;
