import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  Dimensions,
} from 'react-native';

import { Navigation } from './screens';

import store from './stores';

const App = () => {
  const fullWidth = Dimensions.get('window').width;
  const fullHeight = Dimensions.get('window').height;

  return (
    <Provider store={store}>
      <SafeAreaView style={{ 
        padding: 10,
        width: fullWidth,
        height: fullHeight, 
        backgroundColor: '#f0f0f0',
      }}>
        <Navigation/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
