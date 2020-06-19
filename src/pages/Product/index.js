import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import api from '../../services/api';

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
  const { product_id } = route.params;
  const [product, setProduct] = useState({});

  function handleImgMain(images) {
    const imgs = images.filter((f) => f.main === true);
    const url = imgs.map((a) => a.url);

    return url[0];
  }
  useEffect(() => {
    async function load() {
      const resp = await api.get(`/products/${product_id}`);
      const data = {
        ...resp.data,
        imageTitle: handleImgMain(resp.data.images),
      };
      setProduct(data);
    }

    load();
  }, []);

  return (
    <Background>
      <Container>
        <ProductContainer>
          <ImgProduct
            source={{
              uri:
                // 'https://images-americanas.b2w.io/produtos/01/00/img/1227812/3/1227812329_1GG.jpg',
                product.imageTitle,
            }}
          />
          <TitleProduct>{product.title}</TitleProduct>
          <PriceProduct>{product.price}</PriceProduct>
          <DescriptionProduct>{product.description}</DescriptionProduct>
        </ProductContainer>
        <FaqContatiner>
          <FaqTitle>FAQ</FaqTitle>
          {product.faqs &&
            product.faqs.map((f, i) => (
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
