import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { Column, Row } from 'react-native-responsive-grid';
import CapasFilmes from '../../components/CapasFilmes';
import apiFilmes from '../../services/apiFilmes';

export default ({ navigation }) => {

  // Criando variável filmes usando os estados
  const [filmes, setFilmes] = useState([])

  // Ao carregar a página ele chama o useEffect
  useEffect(() => {

    // Chamando a apiFilmes pegando os filmes populares
    apiFilmes.get('movie/popular?language=pt-BR').then(results => {
      setFilmes(results.data.results)
    })

  }, [])

  const styles = StyleSheet.create({
    margem: {
      margin: 15
    },
    card: {
      marginBottom: 15
    }
  })

  return (
    <>
      <ScrollView style={styles.margem}>
        <CapasFilmes filmes={filmes} navigation={navigation} />
      </ScrollView>
    </>
  )
}