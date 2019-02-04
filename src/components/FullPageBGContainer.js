import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  View,
} from 'react-native';
import Color from '../constants/Colors';

import BackgroundImg from '../../assets/images/background-750x422.jpg';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
  blueSemiTransparent: {
    flex: 1,
    backgroundColor: 'rgba(16,26,76, 0.85);',
    justifyContent: 'center',
  },
});

export default class FullPageBGContainer extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={BackgroundImg} style={{ flex: 1 }}>
          <View style={styles.blueSemiTransparent}>{this.props.children}</View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
