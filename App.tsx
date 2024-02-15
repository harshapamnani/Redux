/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {store} from './redux/store'
import { View , Text, StyleSheet , ScrollView } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

function App(): JSX.Element {
 
  const products = [
    {
      name: 'item1',
      price: '$50',
      image: 'https://dummyimage.com/250/ffffff/000000'
    },
    {
      name: 'item2',
      price: '$150',
      image: 'https://dummyimage.com/250/ffffff/000000'
    },
    {
      name: 'item3',
      price: '$100',
      image: 'https://dummyimage.com/250/ffffff/000000'
    }
  ]

      return (
        // <Provider store={store}>
        // <AppNavigator />
        // </Provider>

        
        <ScrollView style={styles.container}>
          <Header />

          {products.map((item) => (
            <Product item={item}/>
          ))}
        </ScrollView>
      )
}

export default App;

const styles = StyleSheet.create({
 container:{
  flex: 1
 } 
})
