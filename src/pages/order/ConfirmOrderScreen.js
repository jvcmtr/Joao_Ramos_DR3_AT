import React from 'react'
import {View, Text} from 'react-native'
import theme from '../../helpers/Theme'

export default function Screen({navigation}){
  const colours = React.useContext(theme)
  return(
    <View> 
      <Text> content </Text> 
    </View>
  )
}