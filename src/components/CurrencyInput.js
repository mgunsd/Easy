import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CurrencyInput = ({ value, onValueChange, onValueSubmit }) => {

  const formatNum = (number) => number.toString().replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <TextInput
      style={styles.inputStyle}
      value={formatNum(value)}
      onChangeText={onValueChange}
      defaultValue={value}
      //onEndEditing={onValueChange}
      keyboardType='numeric'
      onSubmitEditing={onValueSubmit}
      //keyboardAppearance='dark'
      returnKeyType='done'
    />
  );
};

const styles = StyleSheet.create({

  inputStyle: {
    flex: 1,
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    color: '#252a34',
    width: 150,
    height: 50,
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderLeftColor: '#eaeaea',
  },
});

export default CurrencyInput;
