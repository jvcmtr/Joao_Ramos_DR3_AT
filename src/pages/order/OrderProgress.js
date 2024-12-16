import React from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'

import ApiService from '../../services/ApiService'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'
import CartService from '../../services/CartService'

import Button from '../../components/Button'
import OrderItem from '../../components/OrderItem'
import OrderDetails from '../../components/OrderDetails'
import RestaurantDetails from '../../components/RestaurantDetails'


export default function OrderProgress(props){
  const context = React.useContext(Context)
  const colours = React.useContext(theme)
  

  return(
    <ScrollView key={idx} style={{flex:1, backgroundColor: colours.secondary}}> 
 
    </ScrollView>
  )
}
const styles = (colours) => StyleSheet.create({
 
})