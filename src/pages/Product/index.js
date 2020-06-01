import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import {
  Container,
  ProductContainer,
  ImgProduct,
  TitleProduct,
  PriceProduct,
  DescriptionProduct,
  AddCartContainer,
  AddCartIcon,
  FaqContatiner,
  FaqTitle,
  Faq,
  Question,
  Answer,
} from './styles';

const Product = ({ navigation, route }) => {
  const { product } = route.params;
  return (
    <Background>
      <Container>
        <ProductContainer>
          <ImgProduct
            source={{
              uri: product.images[0].image,
            }}
          />
          <TitleProduct>{product.title}</TitleProduct>
          <PriceProduct>{product.price}</PriceProduct>
          <DescriptionProduct>{product.description}</DescriptionProduct>
        </ProductContainer>
        <FaqContatiner>
          <FaqTitle>FAQ</FaqTitle>
          {product.faq.map((f, i) => (
            <Faq key={f.id} even={i % 2 === 0}>
              <Question>{f.question}</Question>
              <Answer>{f.answer}</Answer>
            </Faq>
          ))}
        </FaqContatiner>
      </Container>
      <AddCartContainer>
        <AddCartIcon>
          <Icon name="shopping-cart" size={40} color="#fff" />
        </AddCartIcon>
      </AddCartContainer>
    </Background>
  );
};

export default Product;
