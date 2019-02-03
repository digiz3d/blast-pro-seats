import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import Text from '../components/Text';
import FullPageBGContainer from '../components/FullPageBGContainer';

class InviteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity>
        <Icon.Ionicons
          name={this.props.name}
          size={38}
          color={Colors.accent}
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            height: 60,
            width: 60,
          }}
        />
      </TouchableOpacity>
    );
  }
}

class ActionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={{ marginLeft: 10 }}>
        <Icon.Ionicons
          name={this.props.name}
          size={28}
          color={Colors.accent}
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
    );
  }
}

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: this.props.lit ? 1 : 0.3,
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { step: 1 };
  }

  render() {
    return (
      <FullPageBGContainer>
        <View style={{ padding: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ color: Colors.accent, fontWeight: 'bold' }}>
              Lobby name
            </Text>
            <Icon.Ionicons
              name="md-create"
              size={24}
              color={Colors.accent}
              style={{ textAlignVertical: 'center' }}
            />
          </View>
        </View>
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
          {/* me */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={{
                uri:
                  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b0/b0a19e2f5cd3bab19cec51498f096ef438efa247_full.jpg',
              }}
              style={{
                height: 80,
                width: 80,
                borderColor: Colors.textLight,
                borderWidth: 2,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                lineHeight: 80,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
              }}
            >
              digiz3d
            </Text>
            <ActionButton name="md-log-out" />
          </View>

          {/* a friend */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={{
                uri:
                  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1f/1f64b3e479af930411087425c5fc0de6940ba673_full.jpg',
              }}
              style={{ height: 60, width: 60 }}
              resizeMode="contain"
            />
            <Text
              style={{
                lineHeight: 60,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
              }}
            >
              chemoldu
            </Text>
            <ActionButton name="ios-hourglass" />
            <ActionButton name="ios-mail" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={{
                uri:
                  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/59b1e40cb8efb67ec258f1ad0b4f3035ea8a6a0e_full.jpg',
              }}
              style={{ height: 60, width: 60 }}
              resizeMode="contain"
            />
            <Text
              style={{
                lineHeight: 60,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
              }}
            >
              AmNeSiA
            </Text>
            <ActionButton name="ios-gift" />
            <ActionButton name="ios-mail" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <InviteButton name="md-person-add" />
            <Text
              style={{
                lineHeight: 60,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
                fontStyle: 'italic',
                color: '#494D55',
              }}
            >
              invite someone
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <InviteButton name="md-person-add" />
            <Text
              style={{
                lineHeight: 60,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
                fontStyle: 'italic',
                color: '#494D55',
              }}
            >
              invite someone
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <InviteButton name="md-person-add" />
            <Text
              style={{
                lineHeight: 60,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
                fontStyle: 'italic',
                color: '#494D55',
              }}
            >
              invite someone
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <InviteButton name="md-person-add" />
            <Text
              style={{
                lineHeight: 60,
                paddingHorizontal: 10,
                fontSize: 16,
                // backgroundColor: 'red',
                flexGrow: 1,
                fontStyle: 'italic',
                color: '#494D55',
              }}
            >
              invite someone
            </Text>
          </View>
        </ScrollView>

        {/*

        STEP bottom bar 

        */}
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            justifyContent: 'space-between',
            backgroundColor: Colors.background,
          }}
        >
          <Step lit={this.state.step === 1}>
            <Text>Step 1</Text>
            <Text>Grouping</Text>
          </Step>
          <Step lit={this.state.step === 1}>
            <Icon.Ionicons
              name="md-checkmark-circle-outline"
              size={40}
              color={Colors.accent}
              style={{ textAlignVertical: 'center' }}
            />
          </Step>
          <Step lit={this.state.step === 2}>
            <Text>Step 2</Text>
            <Text>Validation</Text>
          </Step>
          <Step lit={this.state.step === 2}>
            <Icon.Ionicons
              name={
                this.state.step === 2
                  ? 'md-checkmark-circle-outline'
                  : 'md-close-circle-outline'
              }
              size={40}
              color={
                this.state.step === 2 ? Colors.background : Colors.textLight
              }
              style={{ textAlignVertical: 'center' }}
            />
          </Step>
          <Step lit={this.state.step === 3}>
            <Text>Step 3</Text>
            <Text>Payment</Text>
          </Step>
        </View>
      </FullPageBGContainer>
    );
  }
}
