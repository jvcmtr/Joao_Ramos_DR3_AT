import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'
import Button from '../../components/Button'
import ApiService from '../../services/ApiService'

export default function LoginScreen(props){
  const colours = React.useContext(theme)
  const context = React.useContext(Context)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const submit = ()=>{
    const result = ApiService.loginWith({
      username: email,
      password: password
    })
    if(!result){
      setError('Email ou senha invalido')
    }
    else{
      context.setUser(result)
    }
  }

  const s = styles(colours)
  const user = context.user

    return(
      <View style={{flex:1, backgroundColor: colours.secondary}}>
        <View style={s.container}>
          <Text style={s.heading}>InfnetFood</Text>
          <Text style={s.subheading}>Faça seu login</Text>
          <View style={s.br}/>
          <Text style={s.label}>Email : </Text>
          <TextInput 
              onChangeText={setEmail} 
              value={email}
              placeholder={"exemplo@email.com"}
              placeholderTextColor={colours.dim}
              style={s.input}/>

          <View style={s.space}/>
          <Text style={s.label}>Senha : </Text>
          <TextInput
              secureTextEntry ={true} 
              onChangeText={setPassword} 
              value={password}
              placeholder={'********'}
              placeholderTextColor={colours.dim}
              style={s.input}/>

          <Text style={s.error}>{error}</Text>
      
          <View style={s.br}/>

          

          <Text style={s.value}>Este app não permite registro. Para acessar a aplicação utilize as seguintes informações :</Text>
          <Text style={s.value}>usuario: admin@admin.br</Text>
          <Text style={s.value}>senha: 123</Text>
          <View style={{alignItems: 'center', marginTop:10}}>
            <Button title={'Entrar'} onClick={submit}/>
          </View>
        </View>
      </View>
    )
}

const styles = (colours) => StyleSheet.create({
    container:{
        marginTop: 100,
        //marginBottom: 50,
        padding: 40,
        backgroundColor: colours.primary,
        elevation: 8, 
    },
    heading:{
      fontWeight:800,
      color: colours.highlight,
      fontSize: 32
    },
    subheading:{
      fontWeight:800,
      color: colours.txtPrimary,
      fontSize: 18
    },
    input:{
        padding: 10,
        fontSize: 16,
        color: colours.txtPrimary,
        borderRadius: 10,
        borderColor: colours.dim,
        backgroundColor: colours.terciary
    },
    br:{
        alignSelf: 'center',
        backgroundColor: colours.dim,
        width: '110%',
        height: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    space:{
      height: 0,
      marginTop: 10,
      marginBottom: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: 600,
        color: colours.highlight
    },
    value:{
        fontSize: 12,
        color: colours.txtPrimary
    },
    error:{
        textAlign: 'center',
        margin: 10,
        fontSize: 14,
        fontWeight: 800,
        color: colours.highlight
    },
  });