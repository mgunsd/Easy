import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/Card';


const CardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={{ height: 300, }} />
    </View>
  )
}

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,

  },
});