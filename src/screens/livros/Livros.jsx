import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-paper';
import apiBiblioteca from '../../services/apiBiblioteca';

export default () => {

  const [livros, setLivros] = useState([])

  useEffect(() => {

    // Chamando a apiFilmes pegando os filmes populares
    apiBiblioteca.get('livros').then(results => {
      console.log(results.data);
      // setLivros(results.data.data)
    })
  }, [])

  return (
    <>
      <ScrollView>
        {livros.map(item => (
          <Card.Title
            title={item.nome}
            subtitle={item.edicao}
          />
        ))}

      </ScrollView>
    </>
  )
}