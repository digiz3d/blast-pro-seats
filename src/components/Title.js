import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  title: {
    color: Colors.textColor,
    textAlign: 'center',
    lineHeight: 100,
    fontSize: 30,
    textAlignVertical: 'center',
  },
});

export default class Title extends React.Component {
  render() {
    return <Text {...this.props} style={[styles.title, this.props.style]} />;
  }
}
