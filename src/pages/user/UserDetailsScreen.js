import React from 'react'
import {View, Text, Switch, StyleSheet } from 'react-native'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'


export default function UserDetails(props){
  const colours = React.useContext(theme)
  const context = React.useContext(Context)

  const s = styles(colours)
  const user = context.user

    return(
      <View style={{flex:1, backgroundColor: colours.secondary}}>

        <View style={s.container}>
          
            <Text style={s.labelBold}>Informações</Text>
            <View style={s.line}>
                <Text style={s.label}>nome</Text>
                <Text style={s.value}>{user.name}</Text>
            </View>
            <View style={s.line}>
                <Text style={s.label}>Endereço de entrega</Text>
                <Text style={s.value}>{user.address}</Text>
            </View>

            <View style={s.br} />
            <Text style={s.labelBold}>Contato</Text>

            <View style={s.line}>
                <Text style={s.label}>email</Text>
                <Text style={s.value}>{user.email}</Text>
            </View>
            <View style={s.line}>
                <Text style={s.label}>Telefone</Text>
                <Text style={s.value}> {user.phone}</Text>
            </View>

            <View style={s.br} />
            <Text style={s.labelBold}>Preferencias</Text>

            <View style={s.line}>
                <Text style={s.label}>Tema escuro</Text>
                <Switch 
                  style={s.input}
                  value={colours.currentTheme == 'dark'}
                  onValueChange={()=>colours.toggleTheme()}
                  trackColor={{ false: colours.terciary, true: colours.terciary }}
                  thumbColor={colours.highlight} 
                  />
            </View>
        </View>
      </View>
    )
}

const styles = (colours) => StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
        marginTop: 100,
        marginBottom: 100,
        padding: 40,
        backgroundColor: colours.primary,
        elevation: 8, 
    },
    br:{
        alignSelf: 'center',
        backgroundColor: colours.dim,
        width: '110%',
        height: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    line: {
        justifyContent: 'space-between',
        alignItems: 'start',
        flexDirection: 'row',
    },
    label: {
        fontSize: 12,
        color: colours.txtPrimary
    },
    value:{
        fontSize: 12,
        color: colours.txtPrimary
    },
    valueBold:{
        fontSize: 18,
        fontWeight: 600,
        color: colours.txtPrimary
    },
    labelBold:{
        fontSize: 16,
        color: colours.txtPrimary
    }
  });