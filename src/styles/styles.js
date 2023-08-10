import react from 'react'
import { StyleSheet, Dimensions } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainScreen: {
    flex: 1,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 200,
    marginTop: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,


  },
  diceButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  diceImage: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;



