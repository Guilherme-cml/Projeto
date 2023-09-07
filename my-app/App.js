import React from 'react';
import { StyleSheet, View , Image} from 'react-native';
import Profile from './Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}
      {/* <MinMax min="10" max="20" /> */}

      {/* <MeuComponente /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      { < Profile/>}

      {/* <Contador /> */}

      {/* <DigiteSeuNome /> */}

      {/* <Pai /> */}

      {/* <ComponenteControlado /> */}

    





    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 35,
    flex: 1,
    backgroundColor: '#d1d1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
