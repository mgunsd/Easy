import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingComponent'

const KeybordAvoidScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingComponent />
    </View>
  )
}

export default KeybordAvoidScreen;

const styles = StyleSheet.create({

})
