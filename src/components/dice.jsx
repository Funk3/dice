import react, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../styles/styles';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  rolldice = sides => {
    const randomResult = Math.floor(Math.random() * sides) + 1;
    this.setState({result: randomResult});
  };

  render() {
    const {sides, title} = this.props;
    const {result} = this.state;

    return (
      <View>
        <Button
          title={title}
          onPress={() => this.rolldice(sides)}
          style={styles.Bottom_Bar}>
          {title}
        </Button>
        <Text>Result: {result !== '' ? result : 'Roll the dice!'}</Text>
      </View>
    );
  }
}

// const D20 = ({onButtonClick}) => {
//   return (
//     <View>
//       <Button
//         title="D20"
//         onPress={() => console.log(random20(20))}
//         style={styles.Bottom_Bar}
//       />
//     </View>
//   );
// };

export default Dice;
