import React from 'react';
import {Image, StyleSheet, Text, View, TextInput} from 'react-native';



const App = () => {
  const [name, handleNombreChange] = React.useState('');  return (
  <View style={styles.container}>
    <Image style={styles.image} source={require('./assets/Messi-mundial.png')} />
      <Text style={styles.text}>CAMPEÓN</Text>
      <Text style={styles.text2}>MESSI SE CONSAGRÓ CAMPEÓN EN QATAR {name}!!!</Text>
      <TextInput style={styles.textInput}  
      placeholder="ingrese su nombre..."  
      onChangeText={handleNombreChange} 
      value={name}></TextInput>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 68,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#73ACDF',
  },
  text2: {
    color: 'black',
    fontSize: 48,
    lineHeight: 62,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    color: 'black',
    fontSize: 48,
    lineHeight: 62,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFF00',
  },
});

export default App;