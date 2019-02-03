import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';

// eslint-disable-next-line max-len
import Avatar from '../../assets/images/avatars/1f64b3e479af930411087425c5fc0de6940ba673_full.jpg';

export default class RandomFriend extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={Avatar}
          style={{ height: 40, width: 40 }}
          resizeMode="contain"
        />
        {!this.props.small && (
          <Text
            style={{
              lineHeight: 40,
              paddingHorizontal: 10,
              fontSize: 16,
              // backgroundColor: 'red',
              flexGrow: 1,
            }}
          >
            Chemoldu
          </Text>
        )}
      </View>
    );
  }
}
