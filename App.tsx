import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigator/Navigator'
import { navigationRef } from './src/helpers/NavigationHelper'
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  )
}


export default App

const styles = StyleSheet.create({})