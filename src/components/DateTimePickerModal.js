import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { DateTimePickerModal as DateTimePicker } from "react-native-modal-datetime-picker";

const DateTimePickerModal = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setMode('date');
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setMode('time');
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={showDatePicker}>
        <Text style={styles.subtitle}>Set Date : {date.toLocaleDateString('en-GB')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={showTimePicker}>
        <Text style={styles.subtitle}>Set Time : {date.toLocaleTimeString('en-GB')}</Text>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        headerTextIOS='Pick a Date'
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      //isDarkModeEnabled='false'
      />
    </View>
  );
};

export default DateTimePickerModal;

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 50,
    backgroundColor: '#6236ff',
  },
  subtitle: {
    //flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fa6400',
    marginVertical: 20,
    //width: '100%',
  },
});

