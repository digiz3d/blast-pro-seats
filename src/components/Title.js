import React from 'react';
import { StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  title: {
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
