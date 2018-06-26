import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import Routes from 'routes';

import 'config/ReactotronConfig';
import store from 'store';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
