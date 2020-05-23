import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePickerCommunity from '../components/DateTimePickerCommunity';

const DateTimeScreenCommunity = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DateTimePickerCommunity />
    </View>
  )
}

export default DateTimeScreenCommunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
});