import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import Text from '../components/Text';
import FullPageBGContainer from '../components/FullPageBGContainer';

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
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Image
              source={{
                uri:
                  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b0/b0a19e2f5cd3bab19cec51498f096ef438efa247_full.jpg',
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
              digiz3d <Text style={{ fontStyle: 'italic' }}>(you)</Text>
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            justifyContent: 'space-between',
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
                this.state.step === 2 ? Colors.background : Colors.textColor
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
