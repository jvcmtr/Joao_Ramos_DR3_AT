import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import MyImg from './baseComponents/MyImage'

export default function ItemDetail(props){

  const colours = React.useContext(theme)
  const food = props.item 
  
  const s = styles(colours)
  return(
    <View style={s.container}> 
      <MyImg uri={food.image} style={s.img}/>
        <View style={s.textContainer}>
            <Text style={s.name}>{food.name}</Text>
            <Text style={s.description}>{food.description}</Text>
            <Text style={s.price}> R$ {food.price} </Text>
        </View>
    </View>
  )
}
const styles = (colours) => StyleSheet.create({
  img:{
      width: '100%',
      aspectRatio: 1,
      marginTop: '-50%' 
  },
container:{
    flex: 1,
    backgroundColor: colours.primary,
    gap: 10,
    elevation: 8, 
},
textContainer: {
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    padding: 20
},
description:{
    fontSize: 12,
    color: colours.dim
},
name:{
    fontSize: 20,
    color: colours.txtPrimary
},
price:{
    textAlign:'right',
    fontSize: 14,        
    fontWeight: 600,
    color: colours.dim
},
})