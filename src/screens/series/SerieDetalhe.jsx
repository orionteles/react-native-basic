import React, { useEffect, useState } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Avatar, Card, Divider, IconButton, Paragraph, Title } from 'react-native-paper';
import { Row, Column } from 'react-native-responsive-grid'
import apiFilmes from '../../services/apiFilmes';

export default ({ navigation, route }) => {

  // Detalhe
  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {

    const id = route.params.id
    apiFilmes.get('tv/' + id + '?language=pt-BR').then(results => {
      setFilme(results.data)
      navigation.setOptions({ title: results.data.title })
    })

    apiFilmes.get('tv/' + id + '/credits?language=pt-BR').then(results => {
      setAtores(results.data.cast)
    })

  }, [])

  return (
    <View margin={15}>
      <ScrollView>

        <Card>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
          <Card.Content>
            <Title>{filme.title}</Title>
            <Text>Orçamento: {filme.budget}</Text>
            <Text>Data de Lançamento: {filme.release_date}</Text>
            <Divider />
            <Paragraph>{filme.overview}</Paragraph>
          </Card.Content>
        </Card>

        <Title>Atores</Title>
        {atores.map(item => (
          <View key={item.id}>
            <Card.Title
              title={item.character}
              subtitle={item.name}
              left={(props) => <Avatar.Image size={24} {...props} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} />}
              right={(props) => <IconButton {...props} icon="plus-circle" onPress={() => navigation.push('atores/detalhes', { id: item.id })} />}
            />
            <Divider />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}