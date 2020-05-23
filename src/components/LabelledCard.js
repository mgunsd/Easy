import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LabelledCard = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={{ ...styles.label, ...props.style }}> {props.label}</Text>
      <View style={{ ...styles.card, ...props.style }}>
        <MaterialCommunityIcons name={props.icon} style={styles.iconStyle} />
        <View style={{ ...styles.cardtext, ...props.style }}>
          {props.children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: 'center',
    width: '85%'
  },
  label: {
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
    lineHeight: 23,
    color: '#252a34',
    //letterSpacing: 0,
    width: '90%',
  },
  card: {
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
    // backgroundColor: 'transparent',
    // borderColor: 'white',
    // borderWidth: 30,
    // overflow: 'hidden',
    // shadowColor: 'black',
    // shadowRadius: 10,
    // shadowOpacity: 1,



  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'flex-start',
    marginHorizontal: 15,
    color: '#08d9d6',
    // paddingRight: 10,
    // borderRightWidth: 1,
    // borderRightColor: '#eaeaea',

  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },

});

export default LabelledCard;
