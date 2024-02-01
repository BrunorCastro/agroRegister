import React from 'react';
import { StatusBar } from 'react-native';

import { NavegationContainer, NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import firebase from "./src/BackEnd/firebaseConfig";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#034001" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

