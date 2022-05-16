import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4dda6',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#fff',
        }}
      >
        Home Screen
      </Text>

      <Icon name="users" size={60} color="#900" />
      <Icon name="rocket" size={60} color="#900" />
    </View>
  );
}
