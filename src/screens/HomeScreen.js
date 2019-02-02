import React from 'react';
import { Text } from 'react-native';

import FullPageContainer from '../components/FullPageContainer';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <FullPageContainer>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          test
        </Text>
      </FullPageContainer>
    );
  }
}
