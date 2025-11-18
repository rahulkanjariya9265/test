import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Users = () => {
  return (
    <View style={styles.container}>
      <Text>Users Screen</Text>
    </View>
  )
}

export default Users

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})