import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePickerModal from '../components/DateTimePickerModal';

const DateTimeScreenModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DateTimePickerModal />
    </View>
  )
}

export default DateTimeScreenModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
});