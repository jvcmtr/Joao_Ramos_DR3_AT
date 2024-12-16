import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import MyImg from './baseComponents/MyImage'
import Rating from './baseComponents/Rating'
import ListItem from './baseComponents/ListItem'

export default function RestaurantListItem(props){
    const restaurant = props.restaurant
    if(!restaurant){
        return (<></>)
    }
    const colours = React.useContext(theme)
    const s = styles(colours)

    return(
        <ListItem onClick={props.onClick} key={props.id}> 
        <MyImg uri={restaurant.profileImage} style={s.img}/>
        <View style={s.container}>
            <Text style={s.name}>{restaurant.name}</Text>
            <Rating score={restaurant.rating}/>
            <Text style={s.deliveryFee}> {restaurant.deliveryFee} - Aprox. {restaurant.deliveryTime}min </Text>
        </View>
        </ListItem>
    )
}

const styles = (colours) => StyleSheet.create({
    container: {
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        padding: 20
    },
    img: {
        height: 100,
        aspectRatio: 1
    },
    deliveryFee:{
        fontWeight: 600,
        color: colours.dim
    },
    name:{
        fontSize: 18,
        color: colours.txtPrimary
    }
  });