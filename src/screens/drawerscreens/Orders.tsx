import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text>Orders Screen</Text>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})