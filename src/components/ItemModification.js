import React, { isValidElement } from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../helpers/Theme'
import ListItem from './baseComponents/ListItem'
import MyImg from './baseComponents/MyImage'
import Rating from './baseComponents/Rating'
import ItemOption from './ItemOption'


export default function ItemModification(props){
    const modification = props.modification
    const [options, setOptions] = React.useState([])
    const [ammount, setAmmount] = React.useState(0)

    if(!modification){
        return (<></>)
    }

    const handleChange = (option) =>{
        let opt = calcNewOptions(option)
        setOptions(opt)
        
        const ammount = opt.reduce((tot, o) => tot + o.ammount, 0)
        setAmmount(ammount)
        props.onChange({...modification , ...opt, modPrice:  calcTotalValue(opt), isValid: (modification.required && ammount>0) })
    }

    const calcTotalValue = (options) =>{
        return options.reduce((t, opt)=> 
            t + (opt.ammount * parseInt(opt.extraPrice) ), 
        0)
    }

    const calcNewOptions = (option) =>{
        let opt = options;     
        if (option.ammount == 0){   
            opt = opt.filter(i => getName(i) != getName(option))
        }
        else{
            if(opt.filter(i =>getName(i) == getName(option)).length > 0){
                opt = opt.filter(i => getName(i) != getName(option))
            }
            opt.push(option)
        }              
        return opt
    }
    const getName = (item) => item.name+item.obs
    const getOption = (item) =>{
        return options.filter(i => getName(i) == getName(item))[0]
    }

    const colours = React.useContext(theme)
    const s = styles(colours)
    return(
        <View style={s.container} key={props.id}>
            <ListItem style={s.hContainer} id={props.id}>
                <Text style={s.heading}>{modification.heading}</Text>
                <Text style={s.description}>{modification.description}</Text>
            </ListItem>
            {
                modification.options.map((item, i) => (
                    <ItemOption 
                        disabled={ammount >= modification.maxChoices}
                        option={item}
                        ammount={ getOption(item)?.ammount} 
                        id={''+props.id + i} 
                        onChange={handleChange}/>
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