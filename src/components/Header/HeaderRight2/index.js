import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, Amount } from './styles';

const HeaderLeft = ({ navigation }) => {
  const cartSize = useSelector((state) => state.cart.cart.length);
  return (
    <Container
      onPress={() => {
        navigation.navigate('Cart');
      }}
    >
      <Icon name="exit-to-app" size={40} color="#FFF" />
      {cartSize ? <Amount>{cartSize}</Amount> : null}
    </Container>
  );
};

export default HeaderLeft;
