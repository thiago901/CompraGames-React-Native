import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  justify-content: center;
`;
export const ProcessPayment = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
export const ItemScrollContainer = styled.View`
  width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-right: 50px;
`;
export const Street = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const City = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const Cep = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const AddressButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
export const AddAddressesButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 10px;

  flex: 1;
`;
export const AddAddressesButtonText = styled.Text`
  font-size: 16px;
  margin-left: 5px;
`;
export const UpdateAddressesButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 10px;
  margin-right: 10px;
  flex: 1;
`;
export const UpdateAddressesButtonText = styled.Text`
  font-size: 16px;
  margin-left: 5px;
`;

export const TitleCartContainer = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const TitleCartValidation = styled.Text``;
export const CartContainer = styled.View`
  margin-top: 10px;
  flex: 1;
`;
export const DataCartContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemCartName = styled.Text`
  font-size: 16px;
  margin-right: 10px;
`;
export const PriceProductsCart = styled.Text`
  font-size: 16px;
`;
export const TotalPriceSale = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-self: flex-end;
`;
export const ButtonSelectPayment = styled.TouchableOpacity`
  margin: 0px 40px;
`;

export const TextIconName = styled.Text`
  margin: 0px 60px 20px 20px;
  font-size: 16px;
`;

export const TextSelectPayment = styled.View`
  flex-direction: row;
  justify-content: center;
`;


export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;

`;

export const PaymentsContainer = styled.View`
  margin-top: 20px;
`;
export const CreditContainer = styled.View`
/*margin-right: 500px; ////////////////////////////////////////////////////////////POG */
`;
export const TextCardData = styled.TextInput`
  font-size: 16px;
  background-color: #E6E6E6;
`;
export const DateCardContainer = styled.View`
  flex-direction: row;
  background-color: #E6E6E6;
  padding: 2px
`;
export const ButtonCardData = styled.TextInput`
  margin-right: 160px;
  font-size: 16px;
`;

export const ButtonSaveCard = styled.TouchableOpacity`
  margin-top: 20px;
  background: #de4e3a;
  border-radius: 4px;
  padding: 15px;
`;

export const ButtonFinalizeSale = styled.TouchableOpacity`
  margin-top: 10px;
  background: #de4e3a;
  border-radius: 4px;
  padding: 15px;
`;

export const TextFinalizeSale = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
`;

export const TextCardTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const TitlePaymentContainer = styled.View`
  flex-direction: row;
`;
export const ButtonSelectCard = styled.TouchableOpacity`
`;

export const BankSlipContainer = styled.View`
  margin-right: 500px;/* ////////////////////////////////////////////////////////////POG */
  padding: 0px 100px 0px 0px;
`;

export const PrinterContainer = styled.View`
`;
export const IconContainer = styled.View`
  flex-direction: row;
`;
export const TextBankSlipDescription = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;
