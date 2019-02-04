import React from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import Text from '../components/Text';

import Colors from '../constants/Colors';
import FullPageBGContainer from '../components/FullPageBGContainer';

class Event extends React.Component {
  render() {
    const { name, hour, right } = this.props;

    return (
      <React.Fragment>
        <View>
          <Text
            style={{
              position: 'relative',
              top: 10,
              height: 20,
              textAlign: right ? 'right' : 'left',
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: right ? 'row-reverse' : 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                // backgroundColor: 'red',
                height: 0,
                width: '50%',
                borderBottomWidth: 2,
                borderColor: Colors.accent,
              }}
            />

            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: Colors.background,
                borderRadius: 15,
                borderColor: Colors.accent,
                borderWidth: 2,
                position: 'relative',
                left: -15,
              }}
            />
            <Text style={{ fontSize: 16 }}>{hour}</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginBottom: -20,
          }}
        >
          <View
            style={{
              backgroundColor: 'blue',
              borderColor: Colors.accent,
              borderRightWidth: 2,
              width: 0,
              height: 40,
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default class AuthScreen extends React.Component {
  render() {
    return (
      <FullPageBGContainer>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: '900',
              color: Colors.textLight,
            }}
          >
            TOURNAMENT SCHEDULE
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 1,
            // backgroundColor: 'orange',
            paddingHorizontal: 20,
          }}
        >
          <Event name="Opening show" hour="13:30" />
          <Event name="Round 3 / BO1" hour="14:00" right />
          <Event name="Beat The Pro" hour="15:00" />
          <Event name="Round 4 / BO1" hour="15:20" right />
          <Event name="Round 5 / BO1" hour="16:40" />
          <Event name="Blast Stand-Off" hour="18:00" right />
          <Event name="Grand Final / BO1" hour="19:00" />
          <Event name="Winner's Ceremony" hour="21:20" right />
        </ScrollView>
      </FullPageBGContainer>
    );
  }
}
