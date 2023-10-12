import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tela1 from "./Tela01";
import Tela2 from "./Tela02";
import Tela3 from "./Tela03";


const Tab = createBottomTabNavigator();


export default function Router(){

    return(
        <NavigationContainer>
            <Tab.Navigator
             initialRouteName="Tela2">
            <Tab.Screen 
                name="Tela1"
                component={Tela1}
                options={{tabBarLabel:'Tela 1', tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="home" size={size} color={color}/>}}}/>
            
            <Tab.Screen 
                name="Tela2"
                component={Tela2}
                options={{tabBarLabel:'Tela 2', tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="home" size={size} color={color}/>}}}/>
            
            <Tab.Screen 
                name="Tela2"
                component={Tela2}
                options={{tabBarLabel:'Tela 2', tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="home" size={size} color={color}/>}}}/>
                    </Tab.Navigator>
        </NavigationContainer>
    )
}