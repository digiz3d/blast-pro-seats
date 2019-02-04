import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import FullPageBGContainer from '../components/FullPageBGContainer';
import Text from '../components/Text';

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selection: 0 };

    this.tickNumberInputRef = null;

    this.select = this.select.bind(this);
  }

  select(id) {
    this.setState({ selection: id });
  }

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
              fontSize: 28,
              fontWeight: '900',
              color: Colors.textLight,
            }}
          >
            Question 1
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
        >
          <View style={{ width: '100%' }}>
            <Text style={{ fontSize: 16, fontWeight: '900' }}>
              Which team won the last Blast Pro Series in Copenhagen &#39;18 ?
            </Text>
            <TouchableOpacity onPress={() => this.select(1)}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 18,
                  color: Colors.textLight,
                  backgroundColor:
                    this.state.selection === 1
                      ? Colors.activeTabIcon
                      : Colors.categoryB,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                Astralis
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.select(2)}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 18,
                  color: Colors.textLight,
                  backgroundColor:
                    this.state.selection === 2
                      ? Colors.activeTabIcon
                      : Colors.categoryB,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                FaZe Clan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.select(3)}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 18,
                  color: Colors.textLight,
                  backgroundColor:
                    this.state.selection === 3
                      ? Colors.activeTabIcon
                      : Colors.categoryB,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                Natus Vincere
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.select(4)}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 18,
                  color: Colors.textLight,
                  backgroundColor:
                    this.state.selection === 4
                      ? Colors.activeTabIcon
                      : Colors.categoryB,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                Ninjas in Pyjamas
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Quiz')}
            style={{ alignSelf: 'flex-end' }}
          >
            <Text
              style={{
                fontSize: 18,
                lineHeight: 18,
                color: Colors.textLight,
                backgroundColor: Colors.activeTabIcon,
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </FullPageBGContainer>
    );
  }
}
