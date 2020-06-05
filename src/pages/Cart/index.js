import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
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

import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/module/cart/actions';

function Cart({ navigation }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.cart.map((product) => ({
      ...product,
      subTotal: product.price * product.amount,
    }))
  );

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }
  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }
  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }
  return (
    <Container>
      <Content>
        <CartList
          data={cart}
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
                  <ButtonTouch onPress={() => handleRemoveFromCart(item.id)}>
                    <Icon name="delete" size={25} color="#de4e3a" />
                  </ButtonTouch>
                </Info>
                <AmountContainer>
                  <InputContainer>
                    <ButtonTouch onPress={() => decrement(item)}>
                      <Icon name="remove-circle" size={30} color="#de4e3a" />
                    </ButtonTouch>
                    <Input
                      editable={false}
                      keyboardType="numeric"
                      value={item.amount.toString()}
                    />

                    <ButtonTouch onPress={() => increment(item)}>
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
