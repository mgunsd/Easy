import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>This is Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('Card')} title='Card' color='#6236ff' />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('DateTimeC')} title='Date Time Picker Community' color='#6236ff' />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('DateTimeM')} title='Date Time Picker Modal' color='#6236ff' />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('Settings')} title='Go to Settings' color='#6236ff' />
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    //alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  subtitle: {
    //flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fa6400',
    marginVertical: 20,
    //width: 350,
  },
});