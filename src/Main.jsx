import react from 'react';
import {Text, View} from 'react-native';
import Styles from './styles/styles';

//components
import Bottom_Bar from './components/bottom_bar';
import Main_Screen from './components/main_screen';

const Main = () => {
  return (
    <View style={Styles.divContainer}>
      <Main_Screen />
      <Bottom_Bar />
    </View>
  );
};

export default Main;
