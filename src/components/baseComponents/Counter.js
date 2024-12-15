import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from '../../helpers/Theme'

export default function Counter(props){
    const colours = React.useContext(theme)

    const style = getStyle(colours)

    const add = (val) =>{
        if(props.disabled && val>0 ){
            return
        }

        let i = props.value + val
        if(i< props.min || i > props.max){
            return
        }
        props.onChange(i)
    }
    return (
        <View style={style.container}>
             <TouchableOpacity style={style.btn} onPress={()=> add(-1)}> 
                <Text style={style.txtContainer}> - </Text>
             </TouchableOpacity>

             <Text style={style.txt}>{props.value}</Text>

             <TouchableOpacity style={style.btn} onPress={()=> add(1)}> 
                <Text style={style.txtContainer}> + </Text>
             </TouchableOpacity>
        </View>
    )
}



const getStyle = (colours) => StyleSheet.create({
    container:{
        backgroundColor: colours.secondary,
        flexDirection: 'row',
    },
    txt:{
        color: colours.txtSecondary,
        fontSize: 12,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    btn: {
        padding: 5, 
        paddingLeft: 5,
        borderRadius: 5,
        backgroundColor: colours.highlight,
    },
    txtContainer:{
        backgroundColor: colours.highlight,
        color: colours.txtHighlight,
        fontWeight: 600,
        fontSize: 12,
        textAlign: 'center'
    }
  });
