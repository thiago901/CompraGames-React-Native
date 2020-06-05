import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { formatNumber } from '../../util/format';

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
  ButtonLogout,
} from './styles';
import Background from '../../components/Background';
import { addToCartRequest } from '../../store/module/cart/actions';
import { signOutRequest } from '../../store/module/auth/actions';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const resp = await api.get('/products');
      const data = resp.data.map((d) => ({
        ...d,
        priceFormat: formatNumber(d.price),
      }));
      setProducts(data);
    }
    load();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  function handleLogout() {
    dispatch(signOutRequest());
  }
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
          <ButtonLogout onPress={handleLogout}>
            <TextMenu rightMargin={10}>Sair</TextMenu>
            <Icon name="exit-to-app" color="#222" size={30} />
          </ButtonLogout>
        </Menu>

        <Products
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card>
              <ImgContainer
                onPress={() =>
                  navigation.navigate('Product', {
                    product_id: item.id,
                  })
                }
              >
                <Img
                  source={{
                    uri:
                      'https://images-americanas.b2w.io/produtos/01/00/img/1227812/3/1227812329_1GG.jpg',
                  }}
                />
              </ImgContainer>
              <Name>{item.title}</Name>
              <Price>{item.priceFormat}</Price>
              <ButtonAddCard onPress={() => handleAddProduct(item.id)}>
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
