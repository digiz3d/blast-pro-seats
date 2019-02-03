import React from 'react';
import { Text as BasicText } from 'react-native';

import Colors from '../constants/Colors';

export default class Text extends React.Component {
  render() {
    return (
      <BasicText
        {...this.props}
        style={[{ color: Colors.textLight }, this.props.style]}
      />
    );
  }
}
