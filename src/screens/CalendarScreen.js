import React from 'react';
import { Text } from 'react-native';

import FullPageBGContainer from '../components/FullPageBGContainer';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <FullPageBGContainer>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          test
        </Text>
      </FullPageBGContainer>
    );
  }
}
