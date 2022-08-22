import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const Cita = ({prueba}) => {
  return (
    <View>
      <Text>Paciente:</Text>
      <Text>{prueba.paciente}</Text>
    </View>
    )
}
export default Cita;