import React, {FC} from 'react';

// import {createAppContainer, createSwitchNavigator} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack';

import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import { store,  } from './redux';
import { Login } from './screens/Login';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://api.example.com',
//   cache: new InMemoryCache(),
//   headers: {
//     'client-name': 'WidgetX Ecom [web]',
//     'client-version': '1.0.0'
//   }
// });
const App: FC = () => {;
  return (
    // <ApolloProvider client={client}>
    <Provider store={store} >
      <Login />
    </Provider>
    // </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
