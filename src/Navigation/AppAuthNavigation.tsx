import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppTabNavigation from './AppTabNavigation';
import EmployeeDetail from '../Screens/DisplayEmployee/EmployeeDetail';
import AppHeaderMain from '../Components/Shared/AppHeaderMain/AppHeaderMain';
import AddEmployee from '../Screens/DisplayEmployee/AddEmployee';



export default function AppAuthNavigation(){
    const Auth=createStackNavigator();
    return(
           <Auth.Navigator headerMode={'screen'}>
                <Auth.Screen  name={'AppTab'} options={{headerShown:false}} component={AppTabNavigation}/>
                <Auth.Screen name={'EmployeeDetail'}  options={{ header: AppHeaderMain}} component={EmployeeDetail} />
                <Auth.Screen name={'AddEmployee'}  options={{ header: AppHeaderMain}} component={AddEmployee} />
            </Auth.Navigator>
  
    )
}