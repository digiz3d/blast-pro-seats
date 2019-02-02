import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export default class Title extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[{ color: Colors.textColor }, this.props.style]}
      />
    );
  }
}
