import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
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
      setTimeout(reject, 1000);
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
        <ActivityIndicator color={Colors.accent} size={100} />
      </View>
    );
  }
}

export default AuthLoadingScreen;
