import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Colors from '../constants/Colors';

import BackgroundImg from '../../assets/images/1540994837843-blast-estadio.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  async fakeWait() {
    // eslint-disable-next-line no-unused-vars
    const { status } = this.props;
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(reject, 1500);
    })
      .then(() => true)
      .catch(() => false);
  }

  async bootstrapAsync() {
    const { navigation } = this.props;
    const loggedIn = await this.fakeWait();
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(loggedIn ? 'Main' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImg}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator color={Colors.accent} size={100} />
        </ImageBackground>
      </View>
    );
  }
}

export default AuthLoadingScreen;
