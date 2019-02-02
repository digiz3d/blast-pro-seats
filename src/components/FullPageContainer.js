import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Color from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
});

export default class FullPageContainer extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
