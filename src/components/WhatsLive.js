import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  title: {
    lineHeight: 100,
    fontSize: 30,
  },
  title2: {
    fontStyle: 'italic',
    fontSize: 25,
    lineHeight: 80,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
  },
  indication: {
    lineHeight: 200,
    textAlign: 'left',
    paddingLeft: 20,
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: '900',
  },
});
export default class WhatsLive extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          <Text style={styles.title}>Live now</Text>
          {'\n'}
          <Text style={styles.title2}>ROUND 3 / BO1</Text>
          {'\n'}
          <Text style={styles.paragraph}>
            FaZe Clan vs. MIBR (Mirage)
            {'\n'}
            Astralis vs. NiP (Overpass) NAVI vs.
            {'\n'}
            Cloud9 (Overpass)
          </Text>
        </Text>
        <Text style={[styles.text, styles.indication]}>
          <Text style={styles.bold}>Coming up: </Text>
          Beat The Pro
        </Text>
      </View>
    );
  }
}
