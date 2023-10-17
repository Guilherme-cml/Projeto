import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Posts from '../screens/Posts/Posts';
import Usuarios from "../screens/Usuarios/Usuarios";

const Tab = createBottomTabNavigator();


export default function TabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName='Posts'
            screenOptions={{
                headerShown: false
            }}
        >

            <Tab.Screen
                name='Usuarios'
                component={Usuarios}
                options={{
                    tabBarLabel: 'Usuários',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name='people-outline' color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name='Posts'
                component={Posts}
                options={{
                    tabBarLabel: 'Posts',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name='newspaper-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}