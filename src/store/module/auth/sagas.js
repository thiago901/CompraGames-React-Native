import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
// import history from '../../../services/history';
import { signInSuccess, signFailure, signOutRequest } from './actions';

export function* signin({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });
    console.tron.warn(payload);
    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    // adicona o token na Api
    api.defaults.headers.Authorization = `Bearer ${token}`;
    Alert.alert('Login sucesso');
  } catch (error) {
    Alert.alert('Login ou Senha invalidos, Tente novamente!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  Alert.alert('Você está deslogado');
  // history.push('/');
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      cpf,
      email,
      password,
      cep,
      number,
      complement,
      street,
      neighborhood,
      state,
      city,
    } = payload;

    const { data: userData } = yield api.post('/users', {
      email,
      password,
      cpf,
    });
    const response = yield api.post('/clients', {
      name,
      cpf,
      user_id: userData.id,
    });

    yield api.post('/addresses', {
      name,
      street,
      neighborhood,
      state,
      city,
      cep,
      number,
      complement,
      client_id: response.data.id,
      delivery: true,
    });
    Alert.alert('Cadastrado com sucesso');
  } catch (error) {
    Alert.alert('Erro. usuario nao disponivel');
  }
}
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signin),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
