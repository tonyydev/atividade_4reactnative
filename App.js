import { StatusBar } from 'expo-status-bar';
import {StyleSheet ,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Titulo da aplicação</Text>
      <Text style={styles.texto1}>Um texto corrido! um texto corrido! um texto corrido! um texto corrido! um texto corrido! um texto corrido! um texto corrido! um texto corrido! um texto corrido! um texto corrido!</Text>
      
      <View style={styles.containerPostagens}> 

        <Text style={styles.titulo2}>Postagem Simples</Text>
        <Text style={styles.texto2}>Uma pequena frase que não diz nada!</Text>

        <Text style={styles.titulo2}>Postagem Simples</Text>
        <Text style={styles.texto2}>Uma pequena frase que não diz nada!</Text>

        <Text style={styles.titulo2}>Postagem Simples</Text>
        <Text style={styles.texto2}>Uma pequena frase que não diz nada!</Text>

      </View>
      <View style={styles.containerFoto}>
        <Text>
          Área para foto
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  titulo1:{
      fontSize: 40,
      fontWeight: 700,
      paddingBottom: 50,
      paddingTop: 20
  },
  texto1: {
      fontSize: 15,
      paddingHorizontal: 15,
      paddingBottom: 40
  },
  containerPostagens:{
      alignSelf:'left',
  },
  titulo2:{
      fontSize: 30,
      fontWeight: '700',
      paddingLeft: 10,
  },
  texto2: {
      fontSize: 15,
      paddingHorizontal: 15,
      paddingBottom: 60
  },
  containerFoto: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width:400,
      backgroundColor: 'red',
  }
});