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
  {
    name: '✪Amadeo✪',
    image: '9aa9ac3cd90228cfa5252679f0267b802439cdae_full.jpg',
  },
  {
    name: 'Leton 2111',
    image: 'b739a6b0196e66d4a347eba86ad1d309c234e65f_full.jpg',
  },
  {
    name: 'sopheyy ò,ó',
    image: 'bcadbc9dfc4532663a868c2ff62c9af85fed3b7b_full.jpg',
  },
  {
    name: 'Persykia',
    image: 'ff5fcf7135502a7cd565c9b7577b716140d8231e_full.jpg',
  },
  {
    name: 'Sébastien [suprrrrr]',
    image: '70fa20d1c764eb0532d9269fd67b5880031c0786_full.jpg',
  },
  {
    name: 'Scar à B',
    image: '9f7360193e8c813042c1e79ed95572d2d37118b2_full.jpg',
  },
  {
    name: 'sync',
    image: '0795d97699f96b6790a18ab09531418da9eb11cf_full.jpg',
  },
  {
    name: 'Vayes',
    image: 'd8fee5daf9b00d69a8c17460e29f6ae99e3c7d0f_full.jpg',
  },
  {
    name: 'R3LaX_04',
    image: '673513eb5d9fed5b26647de31a5f559ede989c4c_full.jpg',
  },
  {
    name: 'etche',
    image: 'a1df85396c88178ccb468b6592b1a9da42175dc1_full.jpg',
  },
  {
    name: 'AlcaTaz ♥',
    image: '388fe9ca2dadb55560b548201728529c57528760_full.jpg',
  },
  {
    name: 'AiMon',
    image: '0d9e18021002ceb0fd0f26b219b71ec0f4c7ddb1_full.jpg',
  },
  {
    name: 'CoyoteChanteur',
    image: '6a416386b81130afc20ac828517b6ad6a8af2ccb_full.jpg',
  },
  {
    name: 'Domarkius',
    image: '7cb7cfd042a1b6aed461898ab4ffbf13c51c185d_full.jpg',
  },
  {
    name: 'x2Neale',
    image: '4d211a90702254e9abb072d820cc8ee0f33b9571_full.jpg',
  },
  {
    name: '♚ croft-jeje ♔',
    image: '0ce39039c82b3c6eec157973f192b8499c8d612f_full.jpg',
  },
  {
    name: 'Z3rCool',
    image: '0c6b8b14fa734bbaf427f40fc02857e493052d13_full.jpg',
  },
  {
    name: "Storm'rage",
    image: '15bbe4e9e9523e3108556aac3759eb033425b137_full.jpg',
  },
  {
    name: '-BoK- LePoutch',
    image: '5d594f2338f5aa905a448de5cbfed1457ebfedbb_full.jpg',
  },
  {
    name: 'GRINGO',
    image: '13f3f1dce8ef16078b705f0a36429ebf674a3cd0_full.jpg',
  },
  {
    name: 'StEfAnO-ElEcTrO',
    image: '85885ab678f9c5942b1e0672506d29850287db5e_full.jpg',
  },
  {
    name: 'xXMaDpHiLXx',
    image: 'f739c793252fca664299e4f77d52de3033d841c8_full.jpg',
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
