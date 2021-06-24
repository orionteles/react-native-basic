import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Column, Row } from 'react-native-responsive-grid';

const styles = StyleSheet.create({
  margem: {
    margin: 15
  },
  card: {
    marginBottom: 15
  }
})

export default ({ navigation, filmes, tipo }) => {
  return (
    <>
      <Row>
        {filmes.map(item => (
          <React.Fragment key={item.id}>
            {
              item.poster_path &&
              <Column size={32} style={{ marginRight: 5 }}>
                <Card style={styles.card}
                  onPress={() => navigation.push(tipo + '/detalhes', { id: item.id })}
                >
                  <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
                </Card>
              </Column>
            }
          </React.Fragment>
        ))}
      </Row>
    </>
  )
}