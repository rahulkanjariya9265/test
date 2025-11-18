import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Supports = () => {
  return (
    <View style={styles.container}>
      <Text>Supports Screen</Text>
    </View>
  )
}

export default Supports

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})