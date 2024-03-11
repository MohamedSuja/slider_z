import {View, Text} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from '@/features/store';
import LoadingProvider from './src/navigations/loadingProvider';
import Routes from './src/navigations/routes';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <LoadingProvider>
          <Routes />
        </LoadingProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
