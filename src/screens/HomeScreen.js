import React from 'react';

import FullPageBGContainer from '../components/FullPageBGContainer';
import Countdown from '../components/Countdown';
import WhatsLive from '../components/WhatsLive';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <FullPageBGContainer>
        <Countdown />
        <WhatsLive />
      </FullPageBGContainer>
    );
  }
}
