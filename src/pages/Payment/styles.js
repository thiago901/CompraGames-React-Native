import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  justify-content: center;
`;
export const ProcessPayment = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
export const AddressContainer = styled.View`
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
