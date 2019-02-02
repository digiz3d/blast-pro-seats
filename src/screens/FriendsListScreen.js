import React from 'react';
import { View, Switch, ScrollView } from 'react-native';
import { Icon } from 'expo';
import Text from '../components/Text';

import FullPageBGContainer from '../components/FullPageBGContainer';
import Colors from '../constants/Colors';
import RandomFriend from '../components/RandomFriend';

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { switchValue: false };
  }

  toggleSwitch() {
    const oldValue = this.state.switchValue;
    this.setState({ switchValue: !oldValue });
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
            color={Colors.textColor}
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

        {/* Friends list */}

        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>4 </Text>
            <Icon.Ionicons
              name="md-people"
              size={24}
              color={Colors.textColor}
              style={{ textAlignVertical: 'center' }}
            />
            <Text style={{ flexGrow: 1, textAlign: 'center', fontSize: 20 }}>
              Interested friends
            </Text>
          </View>
        </View>
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
          <View>
            <RandomFriend />
          </View>
        </ScrollView>
      </FullPageBGContainer>
    );
  }
}
