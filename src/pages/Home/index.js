import React from 'react';

import {
  Container,
  CoverPage,
  Menu,
  TextMenu,
  Products,
  Card,
  ImgContainer,
  Img,
  Name,
  Price,
  ButtonAddCard,
  TextButtonAddCard,
} from './styles';
import Background from '../../components/Background';

import products from '../../services/teste';

const Home = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <CoverPage
          source={{
            uri:
              'https://img2.gratispng.com/20180808/uws/kisspng-geralt-of-rivia-the-witcher-3-wild-hunt-%E2%80%93-blood-noproblemtr-profili-noproblemtr-kim-ki%C5%9Fi-rehberi-5b6ab5a1724654.6409038715337199694681.jpg',
          }}
        />
        <Menu>
          <TextMenu>Games</TextMenu>
          <TextMenu>Consoles</TextMenu>
          <TextMenu>Promoções</TextMenu>
          <TextMenu>Novidades</TextMenu>
        </Menu>

        <Products
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card>
              <ImgContainer
                onPress={() =>
                  navigation.navigate('Product', {
                    product: item,
                  })
                }
              >
                <Img
                  source={{
                    uri: item.images[0].image,
                  }}
                />
              </ImgContainer>
              <Name>{item.title}</Name>
              <Price>{item.price}</Price>
              <ButtonAddCard>
                <TextButtonAddCard>ADICIONAR AO CARRINHO</TextButtonAddCard>
              </ButtonAddCard>
            </Card>
          )}
        />
      </Container>
    </Background>
  );
};

export default Home;
