import React from 'react'
import {View, Text, StyleSheet, TextInput, Keyboard } from 'react-native'

import theme from '../helpers/Theme'

import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar(props){
    const colours = React.useContext(theme)
    const s = styles(colours)

    return(
        <View style={s.container}>
        <TextInput 
            onChangeText={props.onChange} 
            placeholder={props.placeholder}
            style={{...s.input, ...props.style}}/>

        <Icon name={'search'} size={25} color={colours.dim}/>
        
        </View>
    )
}

const styles = (colours) => StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingEnd: 30,
        margin: 10,
        minHeight: 50,
        
        backgroundColor: colours.secondary,
    },
    input: {
        flex:1,
        padding: 10,
        fontSize: 16,
        color: colours.txtSecondary,
    }
  });