import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Text
        style={{
          fontWeight: this.props.focused ? '900' : '100',
          color: this.props.focused
            ? Colors.activeTabIcon
            : Colors.inactiveTabBarIcon,
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}
