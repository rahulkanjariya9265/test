import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './DrawerContent'
import Home from '../screens/Home'
import Dashboard from '../screens/drawerscreens/Dashboard'
import Users from '../screens/drawerscreens/Users'
import Products from '../screens/drawerscreens/Products'
import Orders from '../screens/drawerscreens/Orders'
import Subscriptions from '../screens/drawerscreens/Subscriptions'
import SubscriptionPlans from '../screens/drawerscreens/SubscriptionPlans'
import Announcements from '../screens/drawerscreens/Announcements'
import Supports from '../screens/drawerscreens/Supports'
import Settings from '../screens/drawerscreens/Settings'



const DrawerNavigator = () => {
const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator  drawerContent={(props) => <DrawerContent {...props} />} >
      <Drawer.Screen name={"Home"} component={Home} />
      <Drawer.Screen name={"Dashboard"} component={Dashboard} />
      <Drawer.Screen name={"Users"} component={Users} />
      <Drawer.Screen name={"Products"} component={Products} />
      <Drawer.Screen name={"Orders"} component={Orders} />
      <Drawer.Screen name={"Subscriptions"} component={Subscriptions} />
      <Drawer.Screen name={"Subscription Plans"} component={SubscriptionPlans} />
      <Drawer.Screen name={"Announcements"} component={Announcements} />
      <Drawer.Screen name={"Supports"} component={Supports} />
      <Drawer.Screen name={"Settings"} component={Settings} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})