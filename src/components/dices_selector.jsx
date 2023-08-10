import react from 'react';
import {View} from 'react-native';
import styles from '../styles/styles';
import Bottom_Bar from './bottom_bar';

const DiceSelector = ({setSelectedResult}) => {
  const diceData = [
    {sides: 20, title: 'D20'},
    {sides: 100, title: 'D100'},
    {sides: 12, title: 'D12'},
    {sides: 10, title: 'D10'},
    {sides: 8, title: 'D8'},
    {sides: 6, title: 'D6'},
    {sides: 4, title: 'D4'},
  ];

  const handleDiceSelect = sides => {
    const randomResult = Math.floor(Math.random() * sides) + 1;
    setSelectedResult(randomResult);
  };

  return (
    <View style={styles.bottomContainer}>
      {diceData.map(dice => (
        <Bottom_Bar
          key={dice.title}
          title={dice.title}
          onPress={() => handleDiceSelect(dice.sides)}
        />
      ))}
    </View>
  );
};

export default DiceSelector;
