import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Text from './Text';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  purpleView: {
    backgroundColor: Colors.secondAccent,
  },
  text: {
    textAlign: 'center',
    lineHeight: 40,
  },
  mainText: {
    fontSize: 22,
    //
  },
  secondaryText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
export default class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 35 * 60 + 18,
      time: this.secondsToTime(35 * 60 + 18),
    };

    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    const obj = {
      h: ('0' + hours).slice(-2),
      m: ('0' + minutes).slice(-2),
      s: ('0' + seconds).slice(-2),
    };
    return obj;
  }

  countDown() {
    const seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0 && this.timer !== 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <View style={styles.purpleView}>
        <Text style={[styles.text, styles.mainText]}>
          First quiz in {this.state.time.h}:{this.state.time.m}:
          {this.state.time.s}
        </Text>
        <TouchableOpacity onPress={this.props.onClick}>
          <Text style={[styles.text, styles.secondaryText]}>Register now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
