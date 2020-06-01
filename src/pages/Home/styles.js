import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const CoverPage = styled.Image`
  margin-top: 10px;
  width: 180px;
  height: 180px;
  align-self: center;
  border-radius: 90px;
`;

export const Menu = styled.View`
  margin: 20px 0 10px 0;
  align-items: center;
  justify-content: center;
`;
export const TextMenu = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Products = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 0 10px;

  border-radius: 4px;
`;
export const Card = styled.View`
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const ImgContainer = styled.TouchableOpacity``;
export const Img = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 4px;
`;
export const Name = styled.Text`
  font-size: 16px;
  align-self: flex-start;
`;
export const Price = styled.Text`
  align-self: flex-start;
  font-size: 22px;
  font-weight: bold;
`;
export const ButtonAddCard = styled.TouchableOpacity`
  background: #6fa1cd;
  align-self: stretch;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 10px;
`;
export const TextButtonAddCard = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
