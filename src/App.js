import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './stores';

import { Home } from './screens';

const Stack = createStackNavigator();

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
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
