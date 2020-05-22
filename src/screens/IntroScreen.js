import React from 'react';
import { Text, StyleSheet, View, Image, Button } from 'react-native';

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Welcome</Text>
      <Image
        style={styles.image}
        source={require('../../assets/ipc.png')}
      />

      <Text style={styles.subtitle}>React Native Components</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title='Go to Components Home'
      />
    </View >
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 124,
    width: 363,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#6236ff",
    marginVertical: 15,
    width: 350,

  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#fa6400",
    marginVertical: 20,
    width: 350,
  },
});
