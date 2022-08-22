/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Cita from './components/citas'
import {Component} from 'react';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [citas, setCitas] = useState([
    {id:"1",paciente: "Hook", propietario:'Juan', sintomas: "No come"},
    {
      id:"2",paciente: "Redux", propietario:'Juan', sintomas: "No come"
    },
    {
      id:"3" ,paciente: "Native", propietario:'Juan', sintomas: "No come"
    }
  ])

  const Estilos = StyleSheet.create({
    encabezado: {
      display: 'flex',
      alignItems:'center',
      textAlign: 'center',
      justifyContent: 'space-around',
      height: 40,
      with: '100%',
      backgroundColor: 'hsla(223, 53%, 18%, 1)',
    },
    alineacion:{
      padding: scale(10),
    }
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View>
        <View style={Estilos.encabezado}>
          <Text style={Estilos.alineacion}>hsdeeerr </Text>
          <Text style={Estilos.alineacion}>hsdeeerr </Text>
          <Text style={Estilos.alineacion}>hsdeeerr </Text>
        </View>
        <FlatList 
          data={citas} 
          renderItem={({item})=> <Cita prueba={item}/>}//Retorna un arreglo de Views y las inserta;
            keyExtractor={cita => cita.id}

          />
      </View>
        <View>
          {citas.map(cita =>(//Pide que utilices un key
            <Text key={cita.id}>{cita.paciente}</Text>
          ))}
        </View>
        {/* <View>//Esto necesita una key tambien
          {
            [<Text>1</Text>,<Text>2</Text>,<Text>3</Text>]//Esto es lo que retorna map un arreglo.
          }
        </View> */}
        {/* <View>
          {
            citas.map(cita =>{
              return <Text>{cita.paciente}</Text>
            })
          }
        </View> */}
  
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
