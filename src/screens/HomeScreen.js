import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>This is Home Screen</Text>




      <Button
        onPress={() => navigation.navigate('Settings')}
        title='Go to Settings'
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#fa6400",
    marginVertical: 20,
    //width: 350,
  },
});