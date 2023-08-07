import react, {useState} from 'react';
import {View, Button} from 'react-native';
import styles from '../styles/styles';

export const random20 = number => {
  return Math.floor(Math.random() * number) + 1;
};

const D20 = () => {
  return (
    <View>
      <Button
        title="D20"
        onPress={() => console.log(random20(20))}
        style={styles.Bottom_Bar}
      />
    </View>
  );
};

export default D20;
