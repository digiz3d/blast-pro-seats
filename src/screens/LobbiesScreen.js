import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import Colors from '../constants/Colors';
import FullPageBGContainer from '../components/FullPageBGContainer';
import RandomLobby from '../components/RandomLobby';

export default class LobbiesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { refreshing: false, lobbies: 0 };
  }

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh() {
    this.setState({ lobbies: 0, refreshing: true });
    setTimeout(() => {
      const lobbies = Math.floor(Math.random() * 7) + 15;
      this.setState({ lobbies, refreshing: false });
    }, 1500);
  }

  renderLobbies() {
    const ret = [];
    for (let i = 0; i < this.state.lobbies; i += 1) {
      ret.push(<RandomLobby key={`fake-lobby-${i}`} />);
    }
    return ret;
  }

  render() {
    return (
      <FullPageBGContainer>
        <ScrollView
          refreshControl={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
              tintColor={Colors.accent}
              colors={[Colors.accent, Colors.secondAccent]}
              progressBackgroundColor={Colors.background}
              title="Refreshing list..."
              titleColor={Colors.accent}
            />
          }
        >
          {this.renderLobbies()}
        </ScrollView>
      </FullPageBGContainer>
    );
  }
}
