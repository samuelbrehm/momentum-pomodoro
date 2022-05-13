import React from 'react'
import { View, Text } from 'react-native'

export function Home() {
  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
    }}>
      <Text style={{
        fontSize: 20,
        color: '#fff'
      }}>Home Screen</Text>
    </View>
  )
}