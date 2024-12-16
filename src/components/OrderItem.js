import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import ListItem from './baseComponents/ListItem'
import MyImg from './baseComponents/MyImage'
import Button from './Button'
import CartService from '../services/CartService'

export default function OrderItem(props){
    const food = props.item
    if(!food){
        return (<></>)
    }
    const colours = React.useContext(theme)
    const s = styles(colours)

    return(
        <View>
            <ListItem key={props.id} style={s.listItem}> 
                <MyImg uri={food.image} style={s.img}/>
                <View style={s.container}>
                    <Text style={s.name}>{food.name}</Text>
                    <Text style={s.description}>{food.description}</Text>
                    <View style={s.tagsContainer}>
                        {
                            food.modifications
                            .reduce((t, i) => [...t, ...i.options], [])
                            .map((opt, i)=> opt.ammount>0?
                                (<Text style={s.modifier}>{opt.name} {opt.ammount>1? 'x'+opt.ammount: "" }</Text>)
                                : (<></>)
                            )
                        }
                    </View>
                    <View style={s.footer}>
                        <Text style={s.price}> R$ {food.ItemFullPrice} </Text>
                        <Button 
                            title={"Remover"} 
                            onClick={()=> {CartService.remove(food); props.onRemove()}} 
                            style={s.btn} 
                            textStyle={s.btnTxt}/>
                    </View>
                </View>
            </ListItem>
        </View>
    )
}

const styles = (colours) => StyleSheet.create({
    listItem:{
        borderWidth: 0,
        maxHeight:"",

        backgroundColor: colours.primary,
        marginBottom: 20,
        marginTop: 10,
        paddingTop: 10,
        alignItems:'start',
        elevation: 8 
    },
    container:{
        padding: 10,
        paddingTop: 0,
        flex:1,
        gap: 5
    },
    tagsContainer: {
        flex:1,
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        height: 120,
        aspectRatio: 1,
        marginBottom: 10,
    },
    price:{
        alignSelf: 'end',
        fontSize: 14,
        textAlign: 'right',
        color: colours.highlight
    },
    modifier:{
        fontSize: 10,
        padding: 3,
        margin: 3,
        borderRadius: 5,
        backgroundColor: colours.secondary, 
        color: colours.txtSecondary
    },
    description:{
        fontSize: 12,
        color: colours.dim
    },
    name:{
        fontSize: 18,
        color: colours.txtPrimary
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn:{
        width: '50%',
        padding: 5, 
        borderRadius: 2,
        margin: 3, 
    },
    btnTxt:{
        fontSize: 12
    }
  });