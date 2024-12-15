import React from 'react'
import {View, Image} from 'react-native'
import {getRandFood, getRandRestaurant} from '../../helpers/RandImg'

export default function MyImage(props){

    return(
        <Image source={{uri: props.uri}} style={props.style}> 
            {props.children}
        </Image>
    )
}