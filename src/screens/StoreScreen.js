import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

import BlastZone from '../../assets/images/sao_paulo_arena.png';

import Text from '../components/Text';
import FullPageBGContainer from '../components/FullPageBGContainer';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  seatRow: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  seatColor: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 10,
  },
  seatLabel: {
    fontSize: 18,
    lineHeight: 18,
    textAlignVertical: 'center',
  },
  seatPrice: {
    fontSize: 18,
    lineHeight: 18,
    textAlignVertical: 'center',
  },
  quantityButton: {
    height: 20,
    width: 20,
    fontSize: 18,
    lineHeight: 20,
    color: Colors.background,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: '900',
  },
  quantity: {
    height: 20,
    width: 20,
    fontSize: 18,
    lineHeight: 20,
    color: Colors.disabled,
    borderRadius: 3,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: '900',
  },
});

const zones = {
  bz1: {
    name: 'BLASTZONE 1',
    price: 52,
    color: Colors.bz1,
  },
  bz2: {
    name: 'BLASTZONE 2',
    price: 43,
    color: Colors.bz1,
  },
  catAp: {
    name: 'CATEGORY A+',
    price: 29,
    color: Colors.categoryA,
  },
  catA: {
    name: 'CATEGORY A',
    price: 21,
    color: Colors.categoryA,
  },
  catB: {
    name: 'CATEGORY B',
    price: 16,
    color: Colors.categoryB,
  },
};

class SeatClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.seatRow}>
        <View
          style={[
            styles.seatColor,
            { backgroundColor: zones[this.props.id].color },
          ]}
        />
        <Text style={styles.seatLabel}>{zones[this.props.id].name}</Text>
        <View style={{ flexGrow: 1 }} />
        <Text style={styles.seatPrice}>{zones[this.props.id].price} €</Text>
        <TouchableOpacity
          onPress={() => this.props.onMinus()}
          disabled={this.props.quantity === 0}
          style={{ opacity: this.props.quantity === 0 ? 0.5 : 1 }}
        >
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{this.props.quantity}</Text>
        <TouchableOpacity
          onPress={() => this.props.onPlus()}
          disabled={this.props.quantity === 9}
          style={{ opacity: this.props.quantity === 9 ? 0.5 : 1 }}
        >
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class StoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      quantities: {
        bz1: 0,
        bz2: 0,
        catAp: 0,
        catA: 0,
        catB: 0,
      },
    };
  }

  amoutTotal() {
    let total = 0;
    const keys = Object.keys(this.state.quantities);
    for (let i = 0; i < keys.length; i += 1) {
      total += zones[keys[i]].price * this.state.quantities[keys[i]];
    }
    this.setState({ total });
  }

  minus(id) {
    const oldValue = this.state.quantities[id];
    const newValue = oldValue > 0 ? oldValue - 1 : 0;
    this.setState((prevState) => ({
      ...prevState,
      quantities: { ...prevState.quantities, [id]: newValue },
    }));
    // that way, React doesnt wait for the total to update
    setTimeout(() => {
      this.amoutTotal();
    }, 0);
  }

  plus(id) {
    const oldValue = this.state.quantities[id];
    const newValue = oldValue < 9 ? oldValue + 1 : 9;
    this.setState((prevState) => ({
      ...prevState,
      quantities: { ...prevState.quantities, [id]: newValue },
    }));
    // that way, React doesnt wait for the total to update
    setTimeout(() => {
      this.amoutTotal();
    }, 0);
  }

  render() {
    return (
      <FullPageBGContainer>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: '900',
              color: '#C4C4C4',
            }}
          >
            TICKETS
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'green',
          }}
        >
          <Image
            source={BlastZone}
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
            justifyContent: 'flex-end',
            // backgroundColor: 'red',
          }}
        >
          <SeatClass
            id="bz1"
            quantity={this.state.quantities.bz1}
            onMinus={() => this.minus('bz1')}
            onPlus={() => this.plus('bz1')}
          />
          <SeatClass
            id="bz2"
            quantity={this.state.quantities.bz2}
            onMinus={() => this.minus('bz2')}
            onPlus={() => this.plus('bz2')}
          />
          <SeatClass
            id="catAp"
            quantity={this.state.quantities.catAp}
            onMinus={() => this.minus('catAp')}
            onPlus={() => this.plus('catAp')}
          />
          <SeatClass
            id="catA"
            quantity={this.state.quantities.catA}
            onMinus={() => this.minus('catA')}
            onPlus={() => this.plus('catA')}
          />
          <SeatClass
            id="catB"
            quantity={this.state.quantities.catB}
            onMinus={() => this.minus('catB')}
            onPlus={() => this.plus('catB')}
          />
          <Text style={{ lineHeight: 24, fontSize: 18, alignSelf: 'flex-end' }}>
            TOTAL : <Text style={{ fontSize: 24 }}>{this.state.total} €</Text>
          </Text>
          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 18,
                color: Colors.textLight,
                backgroundColor: Colors.activeTabIcon,
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              BUY
            </Text>
          </TouchableOpacity>
        </View>
      </FullPageBGContainer>
    );
  }
}
