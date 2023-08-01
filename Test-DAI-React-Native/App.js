import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';



const App = () => (
  <View style={styles.container}>
    <Image style={styles.image} source={require('./assets/Messi-mundial.png')} />
      <Text style={styles.text}>CAMPEON</Text>
  </View>
);

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
});

export default App;