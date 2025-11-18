import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Announcements = () => {
  return (
    <View style={styles.container}>
      <Text>Announcements Screen</Text>
    </View>
  )
}

export default Announcements

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})