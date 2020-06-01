import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';
import { store } from './store';

function App() {
  return <Routes />;
}

export default App;
