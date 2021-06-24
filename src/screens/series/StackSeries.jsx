import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SeriesPopulares from './SeriesPopulares';
import SerieDetalhe from './SerieDetalhe';
import AtorDetalhes from '../atores/AtorDetalhes';
import SeriesHome from './SeriesHome';
import SeriesBreve from './SeriesBreve';
import SeriesCartaz from './SeriesCartaz';

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SeriesHome} options={{title: 'Series'}} />
        <Stack.Screen name="series/populares" component={SeriesPopulares} options={{title: 'Series Populares'}} />
        <Stack.Screen name="series/breve" component={SeriesBreve} options={{title: 'Em Breve'}} />
        <Stack.Screen name="series/cartaz" component={SeriesCartaz} options={{title: 'Em Cartaz'}} />
        <Stack.Screen name="series/detalhes" component={SerieDetalhe} />
        <Stack.Screen name="atores/detalhes" component={AtorDetalhes} />
      </Stack.Navigator>    
    </>
  )
}