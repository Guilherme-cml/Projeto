import React from 'react';
import { StyleSheet, View ,  Text} from 'react-native';
import Biscoito from './Biscoito';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}
      {/* <MinMax min="10" max="20" /> */}

      {/* <MeuComponente /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      { <Biscoito  />}

      {/* <Contador /> */}

      {/* <DigiteSeuNome /> */}

      {/* <Pai /> */}

      {/* <ComponenteControlado /> */}

    





    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    flex: 1,
   backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
