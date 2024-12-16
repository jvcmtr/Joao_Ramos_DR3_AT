import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import MyImg from './baseComponents/MyImage'
import Rating from './baseComponents/Rating'

export default function RestaurantListItem(props){
    const restaurant = props.restaurant
    if(!restaurant){
        return (<></>)
    }

    const colours = React.useContext(theme)
    const s = styles(colours)

    return(
        <View style={styles.container}>
            {
                props.hideImg?
                (<></>)
                :(<MyImg uri={restaurant.thumnail} style={s.img}/>)
            }
            <View style={s.textContainer}>
                <Text style={s.name}>{restaurant.name}</Text>
                <Text style={s.description}>{restaurant.about}</Text>
                <Rating score={restaurant.rating}/>
                <Text style={s.description}>{restaurant.address}</Text>
                <Text style={s.deliveryFee}> Entrega : R$ {restaurant.deliveryFee} - Aprox. {restaurant.deliveryTime}min </Text>
            </View>
        </View>
    )
}

const styles = (colours) => StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
        margin: 20,
        elevation: 8, 
    },
    textContainer: {
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        padding: 20
    },
    img: {
        width: '100%',
        aspectRatio: 1
    },
    description:{
        fontSize: 12,
        color: colours.dim,
        marginBottom: 10
    },
    deliveryFee:{
        fontWeight: 600,
        color: colours.dim
    },
    name:{
        fontSize: 20,
        color: colours.txtPrimary
    }
  });