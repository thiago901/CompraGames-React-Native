import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Container from '../../components/Background';
import {
  Content,
  CartList,
  Product,
  Info,
  AmountContainer,
  Image,
  Decription,
  DecriptionText,
  Value,
  Input,
  InputContainer,
  SubTotal,
  Total,
  ButtonFinish,
  ButtonFinishText,
  TotalText,
  ButtonTouch,
  ContentEmpty,
} from './styles';

import products from '../../services/teste';

function Cart({ navigation }) {
  return (
    <Container>
      <Content>
        <CartList
          data={products}
          keyExtractor={(c) => c.id.toString()}
          renderItem={({ item }) => (
            <>
              <Product>
                <Info>
                  <Image source={{ uri: item.images[0].image }} />
                  <Decription>
                    <DecriptionText>{item.title}</DecriptionText>
                    <Value>{item.price}</Value>
                  </Decription>
                  <ButtonTouch onPress={() => {}}>
                    <Icon name="delete" size={25} color="#de4e3a" />
                  </ButtonTouch>
                </Info>
                <AmountContainer>
                  <InputContainer>
                    <ButtonTouch onPress={() => {}}>
                      <Icon name="remove-circle" size={30} color="#de4e3a" />
                    </ButtonTouch>
                    <Input
                      editable={false}
                      keyboardType="numeric"
                      value={`${25}`}
                    />
                    <ButtonTouch onPress={() => {}}>
                      <Icon name="add-circle" size={30} color="#de4e3a" />
                    </ButtonTouch>
                  </InputContainer>
                  <SubTotal>R$ 600,00</SubTotal>
                </AmountContainer>
              </Product>
            </>
          )}
        />
        <TotalText>Total</TotalText>
        <Total>R$ 3.000,00</Total>
        <ButtonFinish onPress={() => navigation.navigate('Payment')}>
          <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
        </ButtonFinish>
      </Content>
    </Container>
  );
}
export default Cart;
