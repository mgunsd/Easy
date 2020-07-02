import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
//import { BlurView } from 'expo-blur';
import { BoxShadow } from 'react-native-shadow';


const g = '#252A34';
export const Container = props => {
  const { width, height, fontScale, scale } = useWindowDimensions();
  const { colors } = useTheme();


  return (
    <View style={styles.container}>
      <BoxShadow
        width="300"
        height="600"
        color={colors.card}
        border="3"
        radius="40"
        opacity="0.6"
        x="0"
        y="0"
      >
        <View style={{ ...styles.light, backgroundColor: colors.card }} /></BoxShadow>
      <View style={{ ...styles.dark, backgroundColor: colors.base }} />



      <View style={{ ...styles.inner, backgroundColor: colors.background, borderColor: colors.background }}>
        {props.children}
      </View>

    </View >

  )
};


const styles = StyleSheet.create({
  container: {
    padding: 40,
    //flex: 1,
    width: '70%',
    height: '70%',
    marginTop: 50,
    marginBottom: 50,
    //marginHorizontal: 20,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 2,
    // shadowOpacity: 0.56,
    // elevation: 3,

  },
  blur: {
    flex: 1,
    borderRadius: 20,
  },
  inner: {
    //margin: 10,
    borderWidth: 1,
    padding: 20,
    //backgroundColor: g,
    position: 'absolute',
    left: 3,
    right: 3,
    top: 4,
    bottom: 4,
    borderRadius: 36,

  },

  light: {
    //margin: 20,
    position: 'absolute',
    left: 0,
    right: 5,
    top: 0,
    bottom: 5,
    backgroundColor: 'white',
    borderRadius: 40,
  },

  dark: {
    //margin: 20,
    position: 'absolute',
    left: 5,
    right: 0,
    top: 5,
    bottom: 0,
    backgroundColor: 'black',
    borderRadius: 40,
  }

})
