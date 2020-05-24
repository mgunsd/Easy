import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const H3Text = props => <Text style={{ ...styles.H3Text, ...props.style }}>{props.children}</Text>

export default H3Text

const styles = StyleSheet.create({
  H3Text: {
    color: 'white',
    flexShrink: 1,
  }
})
