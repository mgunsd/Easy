import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNCSegmentedContol from '../components/RNCSegmentedContol';

const RNCSegmentedContolScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RNCSegmentedContol />
    </View>
  )
}
export default RNCSegmentedContolScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
});