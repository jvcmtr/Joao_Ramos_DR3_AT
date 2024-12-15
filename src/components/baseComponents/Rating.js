import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../helpers/Theme'

export default function Rating({ score }){
    const colours = React.useContext(theme)

    const totalStars = 5;

    const stars = () =>{
        const arr = []
        for (let i = 1; i <= totalStars; i++) {
            arr.push( i >= score? 'star-outline' : 'star')            
        }
        return arr
    }

    return (
        <View style={styles.container}>
        {stars().map((nm, index) => (
            <Ionicons key={index} name={nm} size={20} color={colours.highlight}/>
        ))}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

