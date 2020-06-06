import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Payment from './pages/Payment';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import HeaderLeft from './components/Header/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight';

import ConfirmPayment from './components/ConfirmPayment';

const Stack = createStackNavigator();

export default function routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#de4e3a" barStyle="light-content" />
        <Stack.Navigator>
          {!signed ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="Product"
                component={Product}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="Product"
                component={Product}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#de4e3a' },
                  headerLeft: () => <HeaderRight navigation={navigation} />,
                  headerRight: () => <HeaderLeft navigation={navigation} />,
                  headerTitle: false,
                  headerBackTitle: false,
                })}
              />
              <Stack.Screen
                name="ConfirmPayment"
                component={ConfirmPayment}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
