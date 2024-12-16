import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Context from '../helpers/Theme'
import theme from '../helpers/Theme'
import ListItem from './baseComponents/ListItem'
import MyImg from './baseComponents/MyImage'

export default function OrderDetails(props){

    const context = React.useContext(Context)
    const colours = React.useContext(theme)
    const s = styles(colours)
    
    const orderBasePrice = props.order.reduce((t, i) => t + i.ItemFullPrice, 0)
    const user = props.user

    return(
        <View style={s.container}>
            <View style={s.line}>
                <Text style={s.label}>Endereço</Text>
                <Text style={s.value}>{user?.address}</Text>
            </View>
            <View style={s.line}>
                <Text style={s.label}>Pagamento</Text>
                <Text style={s.value}>Pagamento na entrega</Text>
            </View>

            <View style={s.space} />
            
            <View style={s.line}>
                <Text style={s.label}>Preço do pedido</Text>
                <Text style={s.value}>R$ {orderBasePrice}</Text>
            </View>
            <View style={s.line}>
                <Text style={s.label}>Taxa de entrega </Text>
                <Text style={s.value}>R$ {props.restaurant.deliveryFee}</Text>
            </View>
            <View style={s.br}/>
            <View style={s.line}>
                <Text style={s.labelBold}>Total a pagar </Text>
                <Text style={s.valueBold}>R$ {props.restaurant.deliveryFee}</Text>
            </View>

            <View style={s.space} />
            <Text style={s.value}>Caso haja problemas, entre em contato com a loja atravez do numero: {props.restaurant.contact.phone}</Text>
        </View>
    )
}

const styles = (colours) => StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: colours.primary,
        elevation: 8, 
    },
    space:{
        margin: 20
    },
    br:{
        alignSelf: 'center',
        backgroundColor: colours.dim,
        width: '110%',
        height: 1,
        marginTop: 10,
        marginBottom: 5,
    },
    line: {
        justifyContent: 'space-between',
        alignItems: 'start',
        flexDirection: 'row',
    },
    label: {
        fontSize: 12,
        color: colours.dim
    },
    value:{
        fontSize: 12,
        color: colours.dim
    },
    valueBold:{
        fontSize: 18,
        fontWeight: 600,
        color: colours.dim
    },
    labelBold:{
        fontSize: 16,
        color: colours.dim
    }
  });