import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Column, Row } from 'react-native-responsive-grid';
import CapasFilmes from '../../components/CapasFilmes';
import apiFilmes from '../../services/apiFilmes';

export default ({ navigation, route }) => {

  const [ator, setAtor] = useState({})
  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    const id = route.params.id
    apiFilmes.get('person/' + id + '?language=pt-BR').then(results => {
      setAtor(results.data)
      navigation.setOptions({ title: results.data.name })
    })

    apiFilmes.get('person/' + id + '/movie_credits?language=pt-BR').then(results => {
      setFilmes(results.data.cast)
    })

  }, [])

  return (
    <View margin={15}>
      <ScrollView>
        <Row>
          <Column size={30}>
            <Card>
              <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} />
            </Card>
          </Column>
          <Column size={70}>
            <Text>Data de Nascimento: {ator.birthday}</Text>
            {
              ator.deathday &&
              <Text>Data da Morte: {ator.deathday}</Text>
            }
            <Text>Local de Nascimento: {ator.place_of_birth}</Text>
            <Text>Conhecido por: {ator.known_for_department}</Text>
          </Column>
        </Row>
        <Paragraph>{ator.biography}</Paragraph>

        <Title>Filmes em que atuou</Title>
        <CapasFilmes filmes={filmes} navigation={navigation} />

      </ScrollView>
    </View>
  )
}