import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubscriptionPlans = () => {
  return (
    <View style={styles.container}>
      <Text>Subscription Plans Screen</Text>
    </View>
  )
}

export default SubscriptionPlans

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center'
    }
})