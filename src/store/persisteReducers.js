import AsyncStorare from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'compragames',
      storage: AsyncStorare,
      whitelist: ['user', 'auth'],
    },
    reducers
  );

  return persistedReducer;
};
