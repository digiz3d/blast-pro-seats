import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';

const avatarDirectory =
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b0/';

const fakeFriends = [
  {
    name: 'metroGnome 地铁',
    image: 'df41a62ecbf86a01eb828373aa830572a6e29f6d_full.jpg',
  },
  {
    name: 'Vangard',
    image: '290da73abcfe9919b0904498989b5f662a74879c_full.jpg',
  },
  {
    name: 'cami',
    image: 'ecc98f9be51019326b3fed2b80c37560544c99be_full.jpg',
  },
  {
    name: 'chemoldu',
    image: '1f64b3e479af930411087425c5fc0de6940ba673_full.jpg',
  },
  {
    name: '* | Airbus13500 | *',
    image: 'e4b6aaebe22ce7a5a3bbe315660b51e42b0859ad_full.jpg',
  },
  {
    name: 'DaNa♛TheWarriorPrincesS',
    image: 'f73c50ea499a4417bdf3400d820405d9cecdb17b_full.jpg',
  },
  {
    name: 'MayssaM',
    image: 'a1144d78555ec6baaed9cc3f0aafa9582634af50_full.jpg',
  },
  {
    name: 'JohNenseN#1',
    image: '5a820a9e1cd80e147f0e4e5d850b2e81f64d2cc1_full.jpg',
  },
  {
    name: '{-L.S.D-}montana',
    image: '21c08c527b65731b4c87b3f86bcf67d5a9979edb_full.jpg',
  },
  {
    name: 'Иди нахуй, мудак',
    image: '2ca0d7d421e95fc84afff8e8abb78ccbbfdcb93f_full.jpg',
  },
  {
    name: 'Harry Cover ©',
    image: 'ef8c1f3cb45d22241ea0e7113805e914ea43a70c_full.jpg',
  },
  {
    name: 'DIETRICHOP',
    image: '302744ae8b694076b4644771c8f15dcaf56d3178_full.jpg',
  },
  {
    name: 'Apone',
    image: '7ec89a543a601d43fd96d647cd098e0dcca9388d_full.jpg',
  },
  {
    name: 'AmNeSiA',
    image: '59b1e40cb8efb67ec258f1ad0b4f3035ea8a6a0e_full.jpg',
  },
  {
    name: 'Irtyx',
    image: '0c84557a78959ed8c2f895e6fd1ac3a072c47091_full.jpg',
  },
];
export default class RandomFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    const random = Math.floor(Math.random() * fakeFriends.length);
    this.name = fakeFriends[random].name;
    this.image = fakeFriends[random].image;
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: avatarDirectory + this.image }}
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
            {this.name}
          </Text>
        )}
      </View>
    );
  }
}
