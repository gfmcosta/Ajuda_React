import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moment from 'moment';
import QRCode from 'react-native-qrcode-svg';
import { ScreenContainer } from 'react-native-screens';
export default class Reader extends Component {

  constructor(props) {
    super(props)
    this.state = {

      dataSource: [],
      isLoading: true,
      imageSource: '',
      clicked: false
    }
  }

  async storage(idMarcacao) {
    await AsyncStorage.setItem('idMarcacao', '' + idMarcacao);
    this.setState({
      imageSource: 'http://' + idMarcacao,
      clicked: true
    })
  }
  async getMarcacoes() {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('Marcacao'));
      this.setState({
        dataSource: value.value,
        isLoading: false
      })
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentDidMount() {
    this.getMarcacoes();

  }
  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this.storage(item.idMarcacao)}>
        <View style={styles.item} >
          <Text style={styles.textQR}>Id: {item.idMarcacao} - Data: {Moment(item.data).format('DD-MM-YYYY')} - Hora: {item.hora}</Text>
        </View>
      </TouchableOpacity>


    )
  }

  render() {
    let { dataSource, isLoading, clicked } = this.state
    if (isLoading) {
      return (
        <View style={styles.listQR}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
        </View>
      )
    } else {
      if(clicked){
      return (
        <View style={styles.listQR}>
          <Text style={styles.titulos}>Marcações</Text>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <QRCode
          value= {this.state.imageSource}
          size={200}
          bgColor='#000000'
          fgColor='#FFFFFF'
          />
        </View>
      )
      }else{
        return(
        <View style={styles.listQR}>
          <Text style={styles.titulos}>Marcações</Text>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
        )
      }
    }
  }
}