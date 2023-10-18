import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './Ex_Lista/src/routes/Router';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}


