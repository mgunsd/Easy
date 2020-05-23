import React, { useState } from 'react';
import { StyleSheet, SegmentedControlIOS, Text, View, Platform } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';

const RNCSegmentedContol = () => {
  const [index, setIndex] = useState(0)
  return Platform.OS === 'ios' ? (<>
    <Text>
      Selected index: {index}
    </Text>
    <SegmentedControlIOS
      style={styles.segmented}
      values={['One', 'Two', 'Three']}
      selectedIndex={index}
      onChange={e => setIndex(e.nativeEvent.selectedSegmentIndex)}
    />
  </>)
    : (<View style={styles.container}>
      <Text>
        Selected index: {index}
      </Text>
      <SegmentedControl
        style={styles.segmented}
        values={['1', '2', '3']}
        selectedIndex={index}
        onChange={e => setIndex(e.nativeEvent.selectedSegmentIndex)}
      />
    </View>)

}

export default RNCSegmentedContol

const styles = StyleSheet.create({
  segmented: {
    height: 50,
    //width: '70%',
    justifyContent: 'space-around',
    padding: 0,
    //elevation: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //padding: 20,
  },
})
