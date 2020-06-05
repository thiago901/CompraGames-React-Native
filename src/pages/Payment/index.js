import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProcessPayment,
  ItemScrollContainer,
  Street,
  City,
  Cep,
  AddressButtonsContainer,
  AddAddressesButton,
  AddAddressesButtonText,
  UpdateAddressesButton,
  UpdateAddressesButtonText,
  TitleCartContainer,
  TitleCartValidation,
  CartContainer,
  DataCartContainer,
  ItemCartName,
  PriceProductsCart,
  TotalPriceSale,
  ButtonSelectPayment,
  ButtonContainer,
  PaymentsContainer,
  TextIconName,
  TextSelectPayment,
  ButtonSelectCard,
  BankSlipContainer,
  PrinterContainer,
  IconContainer,
  TextBankSlipDescription,
  ButtonsNextBack,
  ButtonController,
  ButtonPaySlip,
  TextButtomPay,
} from './styles';
import api from '../../services/api';
import Background from '../../components/Background';
import ChangeAddress from '../../components/Address/ChangeAddress';
import AddAddress from '../../components/Address/AddAddress';
import { formatNumber } from '../../util/format';

import FormNewCreditCard from '../../components/CreditCard/FormNew';
import ListCards from '../../components/CreditCard/ListCards';

import { clearCart } from '../../store/module/cart/actions';

const Payment = ({ navigation }) => {
  let flatListPayment = useRef();
  let flatMenuList = useRef();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const cartSize = useSelector((state) => state.cart.cart.length);
  const cart = useSelector((state) => state.cart.cart);
  const cartList = useSelector((state) =>
    state.cart.cart.map((product) => ({
      amount: product.amount,
      unit_price: product.price,
      product_id: product.id,
    }))
  );
  const [loading, setLoading] = useState(false);
  const [proxItem, setProxItem] = useState(1);

  const [openChangeAddress, setOpenChangeAddress] = useState(false);
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const [openAddCart, setOpenAddCart] = useState(false);

  const [addressCurrent, setAddressCurrent] = useState({});
  const [cardSelect, setCardSelect] = useState();

  const cartSubTotal = formatNumber(
    cart.reduce((t, p) => {
      return t + p.amount * p.price;
    }, 0)
  );
  const cartTotal = formatNumber(
    cart.reduce((t, p) => {
      return t + p.amount * p.price;
    }, 0) + 20
  );

  useEffect(() => {
    async function load() {
      setLoading(true);
      const response = await api.get(
        `/addressesCurrent/client/${profile.client.id}`
      );
      setAddressCurrent(response.data);
      setLoading(false);
    }
    load();
  }, []);

  function banckSlip() {
    flatListPayment.scrollToEnd({ animated: true });
  }
  function creditCard() {
    flatListPayment.scrollTo({ animated: true, x: 0, y: 0 });
  }

  function next() {
    if (proxItem === 1) {
      flatMenuList.scrollToIndex({ animated: true, index: proxItem });
      setProxItem(2);
    } else if (proxItem === 2) {
      flatMenuList.scrollToIndex({ animated: true, index: proxItem });

      setProxItem(3);
    }
    // else if (proxItem === 3) {
    //   navigation.navigate('ConfirmPayment');
    // }
  }
  function back() {
    if (proxItem === 2) {
      flatMenuList.scrollToIndex({ animated: true, index: 0 });
      setProxItem(1);
    } else if (proxItem === 3) {
      flatMenuList.scrollToIndex({ animated: true, index: 1 });
      setProxItem(2);
    }
  }
  async function createSale(typePayment) {
    try {
      const dataSale = {
        client_id: profile.client.id,
        total_price: 360,
        status: 'AGUARDANDO PAGAMENTO',
        installments: 1,
        freight: 12,
        payment_id: typePayment,
        address_id: 63,
        products: cartList,
      };

      const response = await api.post('/sales', { ...dataSale });
      dispatch(clearCart());
      navigation.popToTop();
      navigation.navigate('ConfirmPayment', { id: response.id });
    } catch (error) {
      Alert.alert('Erro');
    }
  }

  const processPayment = [
    {
      id: 1,
      component: (
        <ItemScrollContainer>
          {loading ? (
            <Street>Carregando...</Street>
          ) : (
            <>
              <AddAddress
                visible={openAddAddress}
                closeModal={setOpenAddAddress}
              />
              <ChangeAddress
                visible={openChangeAddress}
                closeModal={setOpenChangeAddress}
              />
              <Street>{addressCurrent.street}</Street>
              <City>{`${addressCurrent.city} - ${addressCurrent.state}`}</City>
              <Cep>{addressCurrent.cep}</Cep>
              <AddressButtonsContainer>
                <UpdateAddressesButton
                  onPress={() => setOpenChangeAddress(true)}
                >
                  <Icon name="home" size={20} color="#000" />
                  <UpdateAddressesButtonText>
                    Alterar endereço
                  </UpdateAddressesButtonText>
                </UpdateAddressesButton>
                <AddAddressesButton onPress={() => setOpenAddAddress(true)}>
                  <Icon name="add" size={20} color="#000" />
                  <AddAddressesButtonText>Add endereço</AddAddressesButtonText>
                </AddAddressesButton>
              </AddressButtonsContainer>
            </>
          )}
        </ItemScrollContainer>
      ),
    },
    {
      id: 2,
      component: (
        <ItemScrollContainer>
          <TitleCartContainer>
            <TitleCartValidation>Resumo do pedido</TitleCartValidation>
          </TitleCartContainer>
          <CartContainer>
            <DataCartContainer>
              <ButtonSelectCard onPress={() => navigation.navigate('Cart')}>
                <ItemCartName>{cartSize} Produto(s) </ItemCartName>
                <Icon name="open-in-new" size={20} color="#000" />
              </ButtonSelectCard>
              <PriceProductsCart>{cartSubTotal}</PriceProductsCart>
            </DataCartContainer>
            <DataCartContainer>
              <ItemCartName>Frete</ItemCartName>
              <PriceProductsCart>R$0,10</PriceProductsCart>
            </DataCartContainer>
          </CartContainer>
          <TotalPriceSale>{cartTotal}</TotalPriceSale>
        </ItemScrollContainer>
      ),
    },
    {
      id: 3,
      component: (
        <ItemScrollContainer>
          <ButtonContainer>
            <ButtonSelectPayment onPress={creditCard}>
              <Icon name="credit-card" size={80} color="#000" />
            </ButtonSelectPayment>
            <ButtonSelectPayment onPress={banckSlip}>
              <Icon name="attach-money" size={80} color="#000" />
            </ButtonSelectPayment>
          </ButtonContainer>

          <TextSelectPayment>
            <TextIconName>Cartão de crédito</TextIconName>
            <TextIconName>Boleto</TextIconName>
          </TextSelectPayment>

          <PaymentsContainer
            ref={(ref) => {
              flatListPayment = ref;
            }}
          >
            <FormNewCreditCard
              visible={openAddCart}
              closeModal={setOpenAddCart}
              cardSelect={cardSelect}
              navigation={navigation}
            />
            <ListCards
              setOpenAddCart={setOpenAddCart}
              setCardSelect={setCardSelect}
            />

            <BankSlipContainer>
              <PrinterContainer>
                <IconContainer>
                  <Icon name="print" size={50} color="#000" />
                  <TextBankSlipDescription>
                    Imprima o Boleto e pague no banco
                  </TextBankSlipDescription>
                </IconContainer>
                <IconContainer>
                  <Icon name="computer" size={50} color="#000" />
                  <TextBankSlipDescription>
                    ou pague pela internet utilizando o código de barras do
                    boleto.
                  </TextBankSlipDescription>
                </IconContainer>
                <IconContainer>
                  <Icon name="event" size={50} color="#000" />
                  <TextBankSlipDescription>
                    O prazo de validade do boleto é de um dia útil.
                  </TextBankSlipDescription>
                </IconContainer>
              </PrinterContainer>
              <ButtonPaySlip onPress={() => createSale(2)}>
                <TextButtomPay>Pague com Boleto</TextButtomPay>
              </ButtonPaySlip>
            </BankSlipContainer>
          </PaymentsContainer>
        </ItemScrollContainer>
      ),
    },
  ];

  return (
    <Background>
      <Container>
        <ProcessPayment
          ref={(ref) => {
            flatMenuList = ref;
          }}
          data={processPayment}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <>{item.component}</>}
        />
        <ButtonsNextBack>
          {proxItem === 1 ? null : (
            <ButtonController onPress={back}>
              <Icon name="keyboard-backspace" size={50} color="#fff" />
            </ButtonController>
          )}

          {proxItem === 3 ? null : (
            <ButtonController onPress={next}>
              <Icon name="done" size={50} color="#fff" />
            </ButtonController>
          )}
        </ButtonsNextBack>
      </Container>
    </Background>
  );
};

export default Payment;
