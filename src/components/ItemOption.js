import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import ListItem from './baseComponents/ListItem'
import Counter from './baseComponents/Counter'
import MyImg from './baseComponents/MyImage'

export default function ItemOption(props){
    const option = props.option
    const choseAmmount = props.option.ammount? props.option.ammount:  0;
    const totalPrice = 0;

    const colours = React.useContext(theme)
    const s = styles(colours)

    const updateAmmount = (option, val) =>{
        let i = 0
        try{
            i = parseFloat(option.extraPrice)
        }
        finally{
            props.onChange({...option, ammount:choseAmmount, totalPrice }, props.id)
        }
    }

    return(
        <ListItem onClick={props.onClick} key={props.id} style={{borderWidth: 0, height:80}}> 
        <View style={s.container}>
            <Text style={s.name}>{option.name}</Text> 
            <Text style={s.description}>{option.obs}</Text>
            <Text style={s.price}> +  R$ {option.extraPrice} </Text>
        </View>{
            option.maxAmmount > 1?
            (<Counter min={0} max={option.maxAmmount} value={choseAmmount} valueonChange={updateAmmount} />)
            : (<Counter min={0} max={option.maxAmmount} value={choseAmmount} onChange={updateAmmount}/>)
        }
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
    price:{
        fontSize: 14,
        fontWeight: 600,
        color: colours.highlight
    },
    description:{
        fontSize: 12,
        color: colours.dim
    },
    name:{
        fontSize: 16,
        color: colours.txtPrimary
    }
  });