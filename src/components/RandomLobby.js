import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Text from './Text';
import Colors from '../constants/Colors';
import RandomFriend from './RandomFriend';

export default class RandomLobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };

    this.fakeFriends = Math.floor(Math.random() * 6) + 2;
  }

  toggleExpand() {
    const oldValue = this.state.expanded;
    this.setState({ expanded: !oldValue });
  }

  renderFakeFriends() {
    const ret = [];
    for (let i = 0; i < this.fakeFriends; i += 1) {
      ret.push(
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
            marginRight: this.state.expanded ? 0 : 5,
          }}
          key={`fake-lobby-friend-${i}`}
        >
          <RandomFriend small={!this.state.expanded} />
        </View>
      );
    }
    return ret;
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20 }}>
            {this.fakeFriends > 0 ? `${this.fakeFriends} ` : '?    '}
          </Text>
          <Icon.Ionicons
            name="md-people"
            size={24}
            color={Colors.textColor}
            style={{ textAlignVertical: 'center' }}
          />
          <Text style={{ flexGrow: 1, textAlign: 'center', fontSize: 20 }}>
            Lobby
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ width: 30 }}
            onPress={() => this.toggleExpand()}
          >
            <Icon.Ionicons
              name={
                this.state.expanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'
              }
              size={40}
              color={Colors.accent}
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
                // backgroundColor: 'red',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: this.state.expanded ? 'column' : 'row',
              flexShrink: 1,
              flexGrow: 1,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              // backgroundColor: 'red',
            }}
          >
            {this.renderFakeFriends()}
          </View>
          <TouchableOpacity
            style={{ width: 30 }}
            onPress={() => this.toggleExpand()}
          >
            <Icon.Ionicons
              name="md-log-in"
              size={30}
              color={Colors.accent}
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
                // backgroundColor: 'red',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
