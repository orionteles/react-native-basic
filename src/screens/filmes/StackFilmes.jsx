import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FilmesPopulares from './FilmesPopulares';
import FilmeDetalhe from './FilmeDetalhe';
import AtorDetalhes from '../atores/AtorDetalhes';
import FilmesHome from './FilmesHome';
import FilmesBreve from './FilmesBreve';
import FilmesCartaz from './FilmesCartaz';
import Livros from '../livros/Livros';

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Livros} options={{title: 'Filmes'}} />
        <Stack.Screen name="filmes/populares" component={FilmesPopulares} options={{title: 'Filmes Populares'}} />
        <Stack.Screen name="filmes/breve" component={FilmesBreve} options={{title: 'Em Breve'}} />
        <Stack.Screen name="filmes/cartaz" component={FilmesCartaz} options={{title: 'Em Cartaz'}} />
        <Stack.Screen name="filmes/detalhes" component={FilmeDetalhe} />
        <Stack.Screen name="atores/detalhes" component={AtorDetalhes} />
      </Stack.Navigator>    
    </>
  )
}