import React from 'react'
import {View, Text} from 'react-native'
import theme from '../../helpers/Theme'

export default function HomeScreen({navigation}){
  const colours = React.useContext(theme)
  return(
    <View style={{backgroundColor: colours.secondary}}> 
      <Text> content </Text> 
    </View>
  )
}