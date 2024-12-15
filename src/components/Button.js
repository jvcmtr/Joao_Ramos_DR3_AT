import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import theme from '../helpers/Theme'

export default function ListItem(props){
  const colours = React.useContext(theme)
  
  return(
    <TouchableOpacity
      style={{
        ...styles(colours).container,
        ...props.style 
        }} 
      onPress={props.onClick}> 
      <Text style={styles(colours).txtContainer}>{props.title}</Text>
      {props.children}
    </TouchableOpacity>
  )
}

const styles = (colours) => StyleSheet.create({
    container: {
        height: 50,
        width: '80%',
        padding: 10, 
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        margin: 20,
        backgroundColor: colours.highlight,
        elevation: 4, 
    },
    txtContainer:{
        backgroundColor: colours.highlight,
        color: colours.txtHighlight,
        fontWeight: 600,
        fontSize: 18,
        textAlign: 'center'
    }
  });
