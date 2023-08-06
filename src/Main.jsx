import react from 'react';
import {Text, View} from 'react-native';
import Styles from './styles/styles';
import Bottom_Bar from './components/bottom_bar';

const Main = () => {
  return (
    <View style={Styles.container}>
      <Bottom_Bar />
    </View>
  );
};

export default Main;
