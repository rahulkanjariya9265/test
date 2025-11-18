import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})