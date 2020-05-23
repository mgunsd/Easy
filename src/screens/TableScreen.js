import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

const EmptyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

    </View>
  )
}

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
});

