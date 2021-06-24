import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import apiFilmes from '../../services/apiFilmes';

export default ({ navigation }) => {

  const [generos, setGeneros] = useState([])

  useEffect(() => {
    apiFilmes.get('genre/movie/list?language=pt-BR').then(results => {
      setGeneros(results.data.genres)
    })
  }, [])

  return (
    <ScrollView margin={30}>
      <Button icon="camera" mode="contained" onPress={() => navigation.push('filmes/cartaz')}>
        Filmes em cartaz
      </Button>
      <Button icon="camera" mode="contained" onPress={() => navigation.push('filmes/populares')}>
        Filmes Populares
      </Button>
      <Button icon="camera" mode="contained" onPress={() => navigation.push('filmes/breve')}>
        Filmes que virão em breve
      </Button>

      { generos.map(item => (
        <Title>{item.name}</Title>
      ))}
    </ScrollView>
  )
}