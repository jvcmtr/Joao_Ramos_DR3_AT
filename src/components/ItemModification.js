import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import ListItem from './baseComponents/ListItem'
import MyImg from './baseComponents/MyImage'
import Rating from './baseComponents/Rating'
import ItemOption from './ItemOption'

export default function ItemModification(props){
    const modification = props.modification
    const [options, setOptions] = React.useState(modification.option)

    if(!modification){
        return (<></>)
    }

    const handleChange = (obj, id) =>{
        let opt = modification;
        opt[id] = obj;
        setOptions(opt)
    }

    const colours = React.useContext(theme)
    const s = styles(colours)

    return(
        <View style={s.container} key={props.id}>
            <ListItem style={s.hContainer}>
                <Text style={s.heading}>{modification.heading}</Text>
                <Text style={s.description}>{modification.description}</Text>
            </ListItem>
            {
                modification.options.map((item, i) => (
                    <ItemOption option={item} id={i} onChange={handleChange}/>
                ))
            }
        </View>
    )
}

const styles = (colours) => StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 60,
        width: '100%',
        elevation: 8, 
    },
    hContainer: {
        backgroundColor: colours.secondary,
        padding: 20,
        borderWidth: 0, 
        flexDirection:'column'
    },
    description:{
        fontSize: 12,
        color: colours.dim
    },
    deliveryFee:{
        fontWeight: 600,
        color: colours.dim
    },
    heading:{
        fontSize: 20,
        color: colours.txtPrimary
    }
  });