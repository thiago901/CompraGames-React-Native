import React from 'react';

import { Container, Text } from './styles';

const HeaderRight = ({ navigation }) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('Home');
      }}
    >
      <Text>CompreGames.com</Text>
    </Container>
  );
};

export default HeaderRight;
