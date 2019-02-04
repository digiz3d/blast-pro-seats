import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import FullPageBGContainer from '../components/FullPageBGContainer';
import Text from '../components/Text';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.tickNumberInputRef = null;
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
            Register now
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '500' }}>
            Scan your Ticket
          </Text>
          <Icon.Ionicons
            name="ios-qr-scanner"
            size={80}
            color={Colors.activeTabIcon}
            style={{ textAlignVertical: 'center' }}
          />
        </View>
        <Text
          style={{
            height: 50,
            textAlign: 'center',
            textAlignVertical: 'center',
            // backgroundColor: 'red',
            fontWeight: '900',
          }}
        >
          OR
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
        >
          <TextInput
            onSubmitEditing={() => this.tickNumberInputRef.focus()}
            returnKeyType="next"
            autoComplete={false}
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Your name"
            keyboardAppearance="dark"
            keyboardType="default"
            blurOnSubmit={false}
            style={{
              color: Colors.textLight,
              padding: 5,
              height: 40,
              width: '100%',
              backgroundColor: 'rgba(192,192,192, 0.2)',
            }}
          />
          <TextInput
            ref={(ref) => {
              this.tickNumberInputRef = ref;
            }}
            returnKeyType="done"
            autoComplete={false}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Ticket number"
            keyboardAppearance="dark"
            keyboardType="number-pad"
            style={{
              color: Colors.textLight,
              padding: 5,
              height: 40,
              width: '100%',
              backgroundColor: 'rgba(192,192,192, 0.2)',
            }}
          />
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
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </FullPageBGContainer>
    );
  }
}
