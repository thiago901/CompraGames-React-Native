import reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = reactotron
    .configure({ host: '192.168.15.4' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();


  console.tron = tron;

  tron.clear();
}
