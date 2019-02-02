import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  purpleView: {
    backgroundColor: Colors.secondAccent,
  },
  text: {
    color: Colors.textColor,
    textAlign: 'center',
    lineHeight: 40,
  },
  mainText: {
    fontSize: 22,
    //
  },
  secondaryText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
export default class Countdown extends React.Component {
  render() {
    return (
      <View style={styles.purpleView}>
        <Text style={[styles.text, styles.mainText]}>
          First quiz in 00:32:43
        </Text>
        <TouchableOpacity>
          <Text style={[styles.text, styles.secondaryText]}>Register now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
