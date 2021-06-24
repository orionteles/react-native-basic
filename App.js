import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilmesPopulares from './src/screens/filmes/FilmesPopulares';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackFilmes from './src/screens/filmes/StackFilmes';
import StackSeries from './src/screens/series/StackSeries';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      <Text>Orion</Text>
    </View>
  );
}