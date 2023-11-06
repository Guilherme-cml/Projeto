
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import ListaTarefaAsyncStorage from '../screens/ListaCarrosAsyncStorage/ListaCarros'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='ListaCarros'>
            
            <Drawer.Screen name=" Lista de Tarefas" component={ListaTarefaAsyncStorage} />

        </Drawer.Navigator>

    )
}