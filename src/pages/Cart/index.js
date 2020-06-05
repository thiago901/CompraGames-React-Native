import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/Background';
import { formatNumber } from '../../util/format';
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
  ContainerIcon,
  TextIcon,
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
      formatPrice: formatNumber(product.price),
      subTotal: formatNumber(product.price * product.amount),
    }))
  );
  const cartTotal = formatNumber(
    cart.reduce((t, p) => {
      return t + p.amount * p.price;
    }, 0)
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
        {cart.length <= 0 ? (
          <ContainerIcon>
            <Icon name="remove-shopping-cart" color="#222" size={100} />
            <TextIcon>Carrinho vazio</TextIcon>
          </ContainerIcon>
        ) : (
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
                      <Value>{item.formatPrice}</Value>
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
                    <SubTotal>{item.subTotal}</SubTotal>
                  </AmountContainer>
                </Product>
              </>
            )}
          />
        )}

        <TotalText>Total</TotalText>
        <Total>{cartTotal}</Total>
        {!cart.length <= 0 && (
          <ButtonFinish onPress={() => navigation.navigate('Payment')}>
            <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
          </ButtonFinish>
        )}
      </Content>
    </Container>
  );
}
export default Cart;
