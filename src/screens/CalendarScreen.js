import React from 'react';
import { TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import Text from '../components/Text';

import Colors from '../constants/Colors';
import FullPageBGContainer from '../components/FullPageBGContainer';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = { details: false };

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    const { details } = this.state;
    this.setState({ details: !details });
  }

  render() {
    const { name, hour, right, last, description } = this.props;

    return (
      <React.Fragment>
        <TouchableWithoutFeedback onPress={() => this.toggleDetails()}>
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
        </TouchableWithoutFeedback>
        {this.state.details && description ? (
          <View
            style={{
              borderWidth: 2,
              borderColor: Colors.textLight,
              padding: 5,
              transform: [{ scale: 1 }],
            }}
          >
            <Text>{description}</Text>
          </View>
        ) : null}
        <View
          style={{
            alignItems: 'center',
            marginBottom: -20,
          }}
        >
          <View
            style={{
              borderColor: Colors.accent,
              borderRightWidth: last ? 0 : 2,
              width: 0,
              height: 40,
              marginBottom: last ? 20 : 0,
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default class CalendarScreen extends React.Component {
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
          <Event
            name="Doors open to arena"
            hour="12:00"
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Stream starts"
            hour="13:15"
            description="Some particularly interesting details about this event"
            right
          />
          <Event
            name="Opening show"
            hour="13:30"
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Round 3 / BO1"
            hour="14:00"
            right
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Beat The Pro"
            hour="15:00"
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Round 4 / BO1"
            hour="15:20"
            right
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Round 5 / BO1"
            hour="16:40"
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Blast Stand-Off"
            hour="18:00"
            right
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Grand Final / BO1"
            hour="19:00"
            description="Some particularly interesting details about this event"
          />
          <Event
            name="Winner's Ceremony"
            hour="21:20"
            right
            last
            description="Some particularly interesting details about this event"
          />
        </ScrollView>
      </FullPageBGContainer>
    );
  }
}
