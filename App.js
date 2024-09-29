import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { profileReducer } from './store/reducers/profileReducer';

const rootReducer = combineReducers ({
  profileReducer: profileReducer,
  // newReducer: reducerImport
})
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
