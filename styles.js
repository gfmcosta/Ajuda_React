import { StyleSheet } from "react-native";

export default StyleSheet.create({
  listQR : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
    borderBottomWidth:1,
    borderRadius:10,
    borderWidth: 1,
  },
  item : {
    padding:5,
    borderBottomWidth:1,
    borderBottomColor: '#eee'
  },
  textQR : {
    fontSize:20,
    textAlign: 'center',
    margin:10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo:{
    width: 200,
    height: 200,
    marginBottom:100,
  },
  inputs:{
    width: 220,
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    paddingLeft:15,
    fontSize:16,
    marginBottom:10,
  },
  texts:{
    fontSize:18,
    fontWeight: 'bold',
    alignSelf: "flex-start",
    marginLeft:105,
    paddingBottom:5
  },
  titulos:{
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:10,
    marginTop:0,
  },
  botao:{
    width: 150,
    borderRadius:10,
    borderWidth: 1,
    height: 40,
    backgroundColor: '#00A666',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },

  textBotao:{
    fontSize:18,
    //fontWeight: 'bold',
  },
  textBotaoR:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#00A666',
    paddingBottom: 10, 
    textDecorationLine: 'underline',
  },
  scrool:{
    backgroundColor: '#fff',
  },
  logoR:{
    marginTop:70,
    width: 100,
    height: 100,
    marginBottom:20,
  },
});

