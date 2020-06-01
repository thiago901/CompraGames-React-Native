import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Amount } from './styles';

const HeaderLeft = ({ navigation }) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('Cart');
      }}
    >
      <Icon name="shopping-basket" size={40} color="#FFF" />
      <Amount>3</Amount>
    </Container>
  );
};

export default HeaderLeft;
