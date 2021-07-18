import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles';
import API from '../API';

export default function Register(props) {
  const [nome, setNome] = useState();
  const [sexo, setSexo] = useState();
  const [telemovel, setTelemovel] = useState();
  const [nacionalidade, setNacionalidade] = useState();
  const [dataNasc, setDataNasc] = useState();
  const [email, setEmail] = useState();
  const [cc, setCC] = useState();
  const [nif, setNIF] = useState();
  const [senha, setSenha] = useState();

  const registar = async () => {
    var Ativo = true;
    if (nome !== undefined && senha != undefined && sexo != undefined && telemovel != undefined && nacionalidade != undefined && dataNasc != undefined && email != undefined && nif != undefined && cc != undefined) {

      let info = await API.register(nome, senha, sexo, telemovel, nacionalidade, dataNasc, email, nif, cc);
      console.log(info.idPaciente);

      if (info.idPaciente === undefined) {
      } else {
        Alert.alert(
          "Ajuda+",
          "Registado com sucesso",
          [
            {
              text: "OK", onPress: () => props.navigation.navigate("Login")
            }
          ]
        );
      }
    } else {
      Alert.alert(
        "Acesso Negado",
        "Preencha todos os dados",
        [
          {
            text: "OK"
          }
        ]
      );
    }
  }
  return (
    <ScrollView style={styles.scrool}>
      <View style={styles.container}>
        <Image source={require("../images/logo_ajuda.png")} style={styles.logoR} />
        <Text style={styles.titulos}>Registar</Text>
        <Text style={styles.texts}>Nome</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"João Santos"}
          keyboardType={"default"}
          onChangeText={setNome}
        />
        <Text style={styles.texts}>Sexo</Text>
        <Picker
          selectedValue={sexo}
          style={styles.inputs}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          <Picker.Item label="Escolha uma opção" value="0" />
          <Picker.Item label="Masculino " value="Masculino " />
          <Picker.Item label="Feminino " value="Feminino " />
        </Picker>
        <Text style={styles.texts}>Telemóvel</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"912345678"}
          keyboardType={"numeric"}
          maxLength={9}
          onChangeText={setTelemovel}
        />
        <Text style={styles.texts}>Nacionalidade</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"Portuguesa"}
          keyboardType={"default"}
          onChangeText={setNacionalidade}
        />
        <Text style={styles.texts}>Data</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"yyyy-mm-dd"}
          keyboardType={"numeric"}
          onChangeText={setDataNasc}
        />
        <Text style={styles.texts}>Email</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"example@email.com"}
          keyboardType={"email-address"}
          onChangeText={setEmail}
        />
        <Text style={styles.texts}>Cartão de Cidadão</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"12345678"}
          maxLength={8}
          keyboardType={"numeric"}
          onChangeText={setCC}
        />
        <Text style={styles.texts}>NIF</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"123456789"}
          maxLength={9}
          keyboardType={"numeric"}
          onChangeText={setNIF}
        />
        <Text style={styles.texts}>Senha</Text>
        <TextInput
          style={styles.inputs}
          placeholder={"*****"}
          secureTextEntry={true}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.botao} onPress={() => registar()}>
          <Text style={styles.textBotao}>Registar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
