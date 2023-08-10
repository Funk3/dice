import react from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

const Bottom_Bar = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bottomBarButton}>
      <Text style={styles.bottomBarButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Bottom_Bar;
