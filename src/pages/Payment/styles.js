import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  margin-left: 10px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
export const ProcessPayment = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  scrollEnabled: false,
})``;
export const ItemScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: ${Dimensions.get('window').width - 15};
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-right: 50px;
  align-self: center;
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

export const PaymentsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  scrollEnabled: false,
})`
  margin-top: 20px;
`;
export const CreditContainer = styled.View``;
export const TextCardData = styled.TextInput`
  font-size: 16px;
  background-color: #e6e6e6;
`;
export const DateCardContainer = styled.View`
  flex-direction: row;
  background-color: #e6e6e6;
  padding: 2px;
`;
export const ButtonCardData = styled.TextInput`
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
  flex-direction: row;
`;

export const BankSlipContainer = styled.View`
  width: 340px;
  justify-content: space-between;
`;

export const PrinterContainer = styled.View``;
export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TextBankSlipDescription = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  width: 260px;
`;

export const ButtonsNextBack = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
  width: ${Dimensions.get('window').width - 25};
`;

export const ButtonController = styled.TouchableOpacity`
  background: #22272a;
  width: 80px;
  height: 80px;

  border-radius: 40px;

  justify-content: center;
  align-items: center;
`;

export const ButtonPaySlip = styled.TouchableOpacity`
  margin-top: 10px;
  background: #222;
  padding: 10px;
`;
export const TextButtomPay = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
