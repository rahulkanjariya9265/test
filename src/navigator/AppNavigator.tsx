import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Dashboard from '../screens/drawerscreens/Dashboard';
import Users from '../screens/drawerscreens/Users';
import Products from '../screens/drawerscreens/Products';
import Orders from '../screens/drawerscreens/Orders';
import Subscriptions from '../screens/drawerscreens/Subscriptions';
import SubscriptionPlans from '../screens/drawerscreens/SubscriptionPlans';
import Announcements from '../screens/drawerscreens/Announcements';
import Supports from '../screens/drawerscreens/Supports';
import Settings from '../screens/drawerscreens/Settings';

const AppNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      <Stack.Screen name="Subscription Plans" component={SubscriptionPlans} />
      <Stack.Screen name="Announcements" component={Announcements} />
      <Stack.Screen name="Supports" component={Supports} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})