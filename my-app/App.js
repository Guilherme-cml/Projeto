import React from 'react';
import { StyleSheet, View ,  Text} from 'react-native';
import Biscoito from './Biscoito';
import Cronometro from './Cronometro';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}
      {/* <MinMax min="10" max="20" /> */}

      {/* <MeuComponente /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      { <Cronometro/>}

      {/* <Contador /> */}

      {/* <DigiteSeuNome /> */}

      {/* <Pai /> */}

      {/* <ComponenteControlado /> */}

    





    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 25,
    flex: 1,
   backgroundColor:'#9b93fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
