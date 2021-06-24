import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default ({navigation}) => {
  return (
    <>
      <View>
        <Text>Página 2</Text>
        <Text>2</Text>
        <Button onPress={()=>navigation.navigate('p3')} >Ir Para a Página 3</Button>
      </View>
    </>
  )
}