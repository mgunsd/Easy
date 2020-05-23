import React from 'react';
import { Text, StyleSheet, TouchableOpacity, } from 'react-native';

const CustomButton = ({ onPress, text }) => {

  return (
    <TouchableOpacity
      style={styles.buttonStyle1}
      onPress={onPress}
    >
      <Text
        style={styles.buttonText}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({

  buttonStyle1: {
    height: 55,
    width: 350,
    borderRadius: 28,
    backgroundColor: '#ff2e63',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#ff2e63',
    flexDirection: 'row',
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: -0.4,
    flex: 1,
    textAlign: "center",
    color: "white",
    lineHeight: 50
  },
  buttonIcon: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
})


export default CustomButton;