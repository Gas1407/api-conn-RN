import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-paper';
const axios = require('axios').default;

export default function App() {

  const [pokemon, setPokemon] = React.useState("")
 

  function UsarApi(){
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(function(response){
      
          const pika = parseInt(Math.random()*20+1);
          setPokemon(response.data.results[pika].name);
    
      })
      .catch(function(error){
          console.log(error);
      })
  }

  return (
    <View style={styles.container}> 
      
      
      {<Button
      mode= 'contained' 
      onPress={()=> UsarApi()}
      >Obtener pokemon
      </Button>}
      <Text>{"El pokemon es: " + pokemon}</Text>
      
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    color: 'red',
    margin: 20
    
  }
});
