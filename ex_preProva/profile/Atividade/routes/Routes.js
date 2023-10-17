import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Posts from '../screens/Posts/Posts';
import TabRoutes from './Tab.Routes';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Usuarios'>

                <Drawer.Screen name='Usuarios' component={TabRoutes} />

                <Drawer.Screen name='Profile' component={Posts} />


            </Drawer.Navigator>
        </NavigationContainer>
    )
}
