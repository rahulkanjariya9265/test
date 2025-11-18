import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import App from '../../App';
import AppNavigator from './AppNavigator';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  const isLoggedIn = true;
  const Stack = createStackNavigator();

  return (
    // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{headerShown:false}}>
    //   <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
    // </Drawer.Navigator>

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn?<Stack.Screen name="App" component={AppNavigator} /> 
      :<Stack.Screen name="Auth" component={AuthNavigator} />}
    </Stack.Navigator>
  );
};

export default Navigator;