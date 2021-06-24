import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default ({navigation}) => {
  return (
    <>
      <View>
        <Text>Página 1</Text>
        <Text>1</Text>
        <Button onPress={()=>navigation.navigate('p2')} >Ir Para a Página 2</Button>
      </View>
    </>
  )
}