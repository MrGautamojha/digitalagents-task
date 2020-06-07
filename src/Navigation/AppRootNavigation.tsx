import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login/Login';



export default function AppRootNavigation(){
    const Root=createStackNavigator();

    return(
       
            <Root.Navigator initialRouteName={'Login'} headerMode={'none'}>
                <Root.Screen name={'Login'} component={Login}/>
               
            </Root.Navigator>
       
    )
}