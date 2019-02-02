import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import FullPageContainer from '../components/FullPageContainer';

import BackgroundImg from '../../assets/images/1540994837843-blast-estadio.png';
import LogoImg from '../../assets/images/BLAST_Pro_Series_black.png';
import SignInImg from '../../assets/images/sits_01.png';

const styles = StyleSheet.create({
  logoAndForm: {
    // backgroundColor: 'rgba(0,255,0,0.6)',
    width: '80%',
    height: '80%',
  },
  logo: {
    // backgroundColor: 'rgba(50,0,100,0.6)',
    flex: 1,
  },
  loginForm: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  twoItems: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'orange',
  },
  imageLink: { flex: 1 },
  image: {
    flex: 1,
    width: '100%',
  },
  linkEmail: {
    width: '100%',
    backgroundColor: '#717171',
    height: 50,
    borderRadius: 8,
  },
  emailText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 50,
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default class AuthScreen extends React.Component {
  logIn() {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <FullPageContainer centered>
        <ImageBackground
          source={BackgroundImg}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          blurRadius={1}
        >
          <View style={styles.logoAndForm}>
            <View style={styles.logo}>
              <Image
                style={{ height: '100%', width: '100%' }}
                source={LogoImg}
                resizeMode="contain"
              />
            </View>
            <View style={styles.loginForm}>
              <View style={styles.twoItems}>
                <TouchableOpacity
                  style={styles.imageLink}
                  onPress={() => this.logIn()}
                >
                  <Image
                    style={styles.image}
                    source={SignInImg}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.twoItems}>
                <TouchableOpacity
                  style={styles.linkEmail}
                  onPress={() => this.logIn()}
                >
                  <Text style={styles.emailText}>Connect with your email</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </FullPageContainer>
    );
  }
}
