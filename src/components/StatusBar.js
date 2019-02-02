import React from 'react';
import { StatusBar as Basic, View, Platform } from 'react-native';
import { Constants } from 'expo';
import Colors from '../constants/Colors';

export default class StatusBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (Platform.OS !== 'android') return null;

    return (
      <View
        style={{
          height: Constants.statusBarHeight,
          backgroundColor: Colors.background,
        }}
      >
        <Basic
          translucent
          barStyle="light-content"
          backgroundColor={Colors.accent}
        />
      </View>
    );
  }
}
