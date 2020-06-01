import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ProductContainer = styled.View`
  align-items: center;
`;
export const ImgProduct = styled.Image`
  height: 200px;
  width: 200px;
`;
export const TitleProduct = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const PriceProduct = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const DescriptionProduct = styled.Text`
  font-size: 12px;
  color: #fff;
  padding: 10px;
  text-align: justify;
`;

export const FaqContatiner = styled.View``;
export const FaqTitle = styled.Text`
  font-size: 28px;
  padding: 20px;
`;
export const Faq = styled.View`
  background: ${(props) => (props.even ? '#fff' : '#eee')};
  padding: 5px;
`;
export const Question = styled.Text`
  font-size: 12px;
`;
export const Answer = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const AddCartContainer = styled.View`
  background: #fff;
  height: 80px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  align-items: center;
`;

export const AddCartIcon = styled.TouchableOpacity`
  background: #6fa1cd;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 10px solid #de4e3a;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: -30px;
`;
