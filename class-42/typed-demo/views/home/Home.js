import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default function Home() {
  return (
    <View>
      <Text>Welcome to my App!</Text>
      <Link to="/pokemon">
        <Text>View Pokemon</Text>
      </Link>
    </View>
  )
}
