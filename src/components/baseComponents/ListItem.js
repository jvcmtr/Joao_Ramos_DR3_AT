import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import theme from '../../helpers/Theme'

export default function ListItem(props){
  const colours = React.useContext(theme)
  
  
  return(
    <TouchableOpacity
      key={props.key}
      style={{
        ...styles(colours).container,
        ...props.style 
        }} 
      onPress={props.onClick}> 
      {props.children}
    </TouchableOpacity>
  )
}

const styles = (colours) => StyleSheet.create({
    container: {
      width: '100%',
      maxHeight: 100,
      justifyContent: 'start',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colours.primary,
      borderWidth: 1,
      borderColor: colours.dim,

      elevation: 8, 
    },
  });
