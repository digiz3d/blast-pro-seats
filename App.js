import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import StatusBar from './src/components/StatusBar';
import AppNavigator from './src/navigation/AppNavigator';
import Color from './src/constants/Colors';

export default class App extends React.Component {
  state = { isLoadingComplete: false };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: Color.background }}>
        <SafeAreaView />
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <AppNavigator />
        </SafeAreaView>
      </View>
    );
  }
}
