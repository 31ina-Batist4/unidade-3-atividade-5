import React, {useState} from 'react';
import {View, Image,  Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {TextInputMask} from 'react-native-masked-text';

const App = () => {

  const [image, setImage] = useState(null);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');

   const getPhoto = () =>{
     ImagePicker.launchImageLibrary({title:'Selecione uma imagem'}, (img) =>setImage(img.uri));
    

  }
  return (
  <View style={styles.container}>
    <Text style={styles.texto}>Cadastro de Estudante</Text>

    <Image source={{uri:image}} style={styles.imagem1}/>

    <TouchableOpacity onPress={getPhoto} >
       <Text style={styles.btn2}>Selecionar Imagem</Text>
    </TouchableOpacity>

    <TextInput style={styles.input} placeholder='nome completo' onChangeText={(value) =>setNome(value)}/>
    <TextInputMask style={styles.input} type={'cpf'} options={{width: true, mask:'999.999.999.99' }} onChangeText={(value) =>setCpf(value)} placeholder='CPF'/>
    <TextInputMask style={styles.input} placeholder='Cep' type={'zip-code'} options={{width: true, mask:'99.999.999' }} onChangeText={(value) =>setCep(value)}/>
    <TextInputMask style={styles.input} placeholder='Telefone' type={'cel-phone'} options={{width: true, mask:'(99)99999-9999' }} onChangeText={(value) =>setTelefone(value)}/>
   
    <TouchableOpacity  onPress={() => alert('Salvo com sucesso!')} >
       <Text style={styles.btn}>Cadastrar</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height:'100%',
    backgroundColor:'#FFA500',
    alignItems: 'center'
  },
  texto: {
   fontSize: 30,
   fontWeight:'bold',
   marginVertical:10,
   color:'#F8F8FF',
  },
  imagem1:{
   backgroundColor: '#A9A9A9',
   width: 200,
   height: 200,
   borderRadius: 200 / 2,
   justifyContent: 'flex-start'
  },
  input: {
    backgroundColor: '#F8F8FF',
    color:'gray',
    borderRadius: 20,
    keyboardType:'numeric',
    marginVertical:10,
    textAlign:'center',
    width: '90%',
    border: 1
  },
  btn: {
    color:'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign:'center',
  },
  btn2: {
    color:'#363636',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign:'center',
    borderRadius: 20,
    borderColor: '#4F4F4F',
    backgroundColor: '#4682B4',
    width: 100,
  }
})

export default App;