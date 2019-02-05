import React from 'react';
import { View, Switch, ScrollView, RefreshControl } from 'react-native';
import { Icon } from 'expo';
import Text from '../components/Text';

import FullPageBGContainer from '../components/FullPageBGContainer';
import Colors from '../constants/Colors';
import RandomFriend from '../components/RandomFriend';

export default class FriendsListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { friends: 0, switchValue: false, refreshing: false };
  }

  onRefresh() {
    this.setState({ friends: 0, refreshing: true });
    setTimeout(() => {
      this.setState({
        friends: Math.floor(Math.random() * 10) + 40,
        refreshing: false,
      });
    }, 1500);
  }

  toggleSwitch() {
    const oldValue = this.state.switchValue;
    this.setState({ switchValue: !oldValue });
    if (!oldValue) {
      this.onRefresh();
    }
  }

  renderFakeFriends() {
    const ret = [];
    for (let i = 0; i < this.state.friends; i += 1) {
      ret.push(
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
          }}
          key={`fake-friend-${i}`}
        >
          <RandomFriend />
        </View>
      );
    }
    return ret;
  }

  render() {
    return (
      <FullPageBGContainer>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            // backgroundColor: 'red',
            paddingHorizontal: 10,
          }}
        >
          {/*
          <Image
            source={Avatar}
            style={{ height: 60, width: 60, marginTop: 5 }}
            resizeMode="contain"
          />
          */}
          <Icon.Ionicons
            name="md-search"
            size={40}
            color={Colors.textLight}
            style={{ textAlignVertical: 'center' }}
          />
          <Text
            style={{
              flexGrow: 1,
              fontSize: 20,
              lineHeight: 60,
              textAlignVertical: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Interested in this event
          </Text>
          <Switch
            ref={(r) => {
              this.switchRef = r;
            }}
            onValueChange={() => this.toggleSwitch()}
            value={this.state.switchValue}
            trackColor={Colors.background}
            thumbColor={Colors.accent}
            ios_backgroundColor={Colors.background}
          />
        </View>

        {/* Number of interested friends */}

        <View style={{ padding: 10 }}>
          {this.state.switchValue ? (
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20 }}>
                {this.state.friends > 0 ? `${this.state.friends} ` : '?    '}
              </Text>
              <Icon.Ionicons
                name="md-people"
                size={24}
                color={Colors.textLight}
                style={{ textAlignVertical: 'center' }}
              />
              <Text style={{ flexGrow: 1, textAlign: 'center', fontSize: 20 }}>
                Interested friends
              </Text>
            </View>
          ) : (
            <View>
              <Text style={{ textAlign: 'center', fontSize: 20 }}>
                Are you interested in this event ?
              </Text>
              <Text>
                Then toggle the switch to look for friends to go with.
              </Text>
            </View>
          )}
        </View>

        {/* Friends list */}

        <ScrollView
          refreshControl={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <RefreshControl
              refreshing={this.state.switchValue && this.state.refreshing}
              onRefresh={() => this.onRefresh()}
              tintColor={Colors.accent}
              colors={[Colors.accent, Colors.secondAccent]}
              progressBackgroundColor={Colors.background}
              title="Refreshing list..."
              titleColor={Colors.accent}
            />
          }
          contentContainerStyle={{ paddingHorizontal: 10 }}
          style={{ flex: 1 }}
        >
          {this.state.switchValue ? this.renderFakeFriends() : null}
        </ScrollView>
      </FullPageBGContainer>
    );
  }
}
