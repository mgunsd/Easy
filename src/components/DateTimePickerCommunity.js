import React, { useState } from 'react';
import { View, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerCommunity = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS !== 'ios');
    setDate(currentDate);

  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={showDatepicker}>
        <Text style={styles.subtitle}>Set Date : {date.toLocaleDateString('en-GB')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={showTimepicker}>
        <Text style={styles.subtitle}>Set Time : {date.toLocaleTimeString('en-GB')}</Text>
      </TouchableOpacity>
      <View>{show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
          minimumDate={new Date()}
          cancelTextIOS='Cancel'
          confirmTextIOS='Confirm'
          style={{ color: 'red' }}
          textColor="red"
        />
      )}</View>
    </View>
  );
};

export default DateTimePickerCommunity;

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

