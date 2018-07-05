import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import RootNavigator from './components/RootNavigator';

export default () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
