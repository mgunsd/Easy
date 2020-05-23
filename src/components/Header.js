import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={{ ...styles.header, ...props.hstyle }}>
      <Text style={{ ...styles.headerTitle, ...props.htstyle }} > {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    //backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,

  },
  headerTitle: {
    //color: 'black',
    fontSize: 18,
    fontFamily: 'SFProDisplay-Bold',
  }
});

export default Header;
