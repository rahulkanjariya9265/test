import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})