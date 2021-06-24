import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import apiFilmes from '../../services/apiFilmes';

export default ({ navigation }) => {

  const [generos, setGeneros] = useState([])

  useEffect(() => {
    apiFilmes.get('genre/tv/list?language=pt-BR').then(results => {
      setGeneros(results.data.genres)
    })
  }, [])

  return (
    <ScrollView margin={30}>
      <Button icon="camera" mode="contained" onPress={() => navigation.push('series/cartaz')}>
        Series no ar
      </Button>
      <Button icon="camera" mode="contained" onPress={() => navigation.push('series/populares')}>
        Series Populares
      </Button>

      { generos.map(item => (
        <Title>{item.name}</Title>
      ))}
    </ScrollView>
  )
}