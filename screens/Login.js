import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import API from '../API';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Generator(props) {
  
  const [NIF, setNIF] = useState();
  const [Senha, setSenha] = useState();
  const entrar = async () => {
    let info = await API.auth(NIF, Senha);
    if (info.status === 401) {
      Alert.alert(
        "Acesso Negado",
        "Verifique as suas credenciais.",
        [
          {
            text: "OK"
          }
        ]
      );
    } else {
      if (info !== null) {
        //guardar token
        await AsyncStorage.setItem('Token', info.token);
        let infox = await API.searchByNif(NIF);
        await AsyncStorage.setItem('idPaciente', '' + infox.value[0].idPaciente);
        var idPaciente = await AsyncStorage.getItem('idPaciente');
        let info2 = await API.searchMarcacao(idPaciente);
        var xpto = JSON.stringify(info2);
        await AsyncStorage.setItem('Marcacao', xpto);
        Alert.alert(
          "Ajuda+",
          "Bem-Vindo, " + infox.value[0].nome,
          [
            {
              text: "OK", onPress: () => props.navigation.navigate("Reader")
            }
          ]
        );
      } else {
        Alert.alert(
          "Erro",
          "Erro. Contacte o Administrador",
          [
            {
              text: "OK"
            }
          ]
        );
      }

    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../images/logo_ajuda.png")} style={styles.logo} />
      <Text style={styles.texts}>Utilizador</Text>
      <TextInput
        style={styles.inputs}
        placeholder={"Utilizador"}
        maxLength={9}
        keyboardType={"numeric"}
        onChangeText={setNIF}
      />
      <Text style={styles.texts}>Senha</Text>
      <TextInput
        style={styles.inputs}
        placeholder={"Senha"}
        secureTextEntry={true}
        onChangeText={setSenha}
      />
      <Text style={styles.textBotaoR} onPress={() => props.navigation.navigate("Register")}>Registe-se aqui</Text>
      <TouchableOpacity style={styles.botao} onPress={() => entrar()}>
        <Text style={styles.textBotao}>Entrar</Text>

      </TouchableOpacity>
    </View>
  );
}
