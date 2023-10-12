import React from 'react';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import  Routes  from './Atividade/routes/Routes';
export default function App() {

return(


  <PaperProvider>
    <Routes/>
  </PaperProvider>
);
}

