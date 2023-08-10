import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/styles'; // Your styles

import D20 from '../styles/dicesvg/D20.png';
import D12 from '../styles/dicesvg/D12.png';
import D10 from '../styles/dicesvg/D10.png';
import D8 from '../styles/dicesvg/D8.png';
import D6 from '../styles/dicesvg/D6.png';
import D4 from '../styles/dicesvg/D4.png';

const DiceSelector = ({setSelectedResult}) => {
  const diceData = [
    {sides: 20, title: 'D20', image: D20},
    {sides: 12, title: 'D12', image: D12},
    {sides: 10, title: 'D10', image: D10},
    {sides: 8, title: 'D8', image: D8},
    {sides: 6, title: 'D6', image: D6},
    {sides: 4, title: 'D4', image: D4},
  ];

  const handleDiceSelect = sides => {
    const randomResult = Math.floor(Math.random() * sides) + 1;
    setSelectedResult(randomResult);
  };

  return (
    <View style={styles.buttonContainer}>
      {diceData.map(dice => (
        <TouchableOpacity
          key={dice.title}
          onPress={() => handleDiceSelect(dice.sides)}
          style={styles.diceButton}>
          <Image source={dice.image} style={styles.diceImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DiceSelector;
