import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import ListItem from './baseComponents/ListItem'
import MyImg from './baseComponents/MyImage'

export default function FoodListItem(props){
    const food = props.food
    if(!food){
        return (<></>)
    }
    const colours = React.useContext(theme)
    const s = styles(colours)

    return(
        <ListItem onClick={props.onClick} key={props.id} style={{maxHeight:120}}> 
        <MyImg uri={food.image} style={s.img}/>
        <View style={s.container}>
            <Text style={s.name}>{food.name}</Text>
            <Text style={s.description}>{food.description}</Text>
            <Text style={s.price}> R$ {food.price} </Text>
        </View>
        </ListItem>
    )
}

const styles = (colours) => StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        padding: 20
    },
    img: {
        height: '100%',
        aspectRatio: 1
    },
    price:{
        alignSelf: 'end',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'right',
        color: colours.highlight
    },
    description:{
        fontSize: 12,
        color: colours.dim
    },
    name:{
        fontSize: 18,
        color: colours.txtPrimary
    }
  });