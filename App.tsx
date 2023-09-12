/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/store/configureStore';
import MainScreen from './src/screens/main-screen';


const App = () => {
  // useInterNetHandlingService();
  return (
    <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
    </Provider>
  );
};

export default App
