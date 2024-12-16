import React from 'react'
import {View, ScrollView, StyleSheet, Text, Alert} from 'react-native'

import ApiService from '../../services/ApiService'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'
import CartService from '../../services/CartService'

import Button from '../../components/Button'
import OrderItem from '../../components/OrderItem'
import OrderDetails from '../../components/OrderDetails'
import RestaurantDetails from '../../components/RestaurantDetails'
import NotificationService from '../../services/NotificationService'


export default function ConfirmOrderScreen(props){
  const context = React.useContext(Context)
  const colours = React.useContext(theme)
  const bottomNav = props.route.params.tabNav

  let [idx, set] = React.useState(CartService.changes)
  let orders = CartService.getItems()
  let restaurant= context.getRestaurantById(CartService.getRestaurant())
  let user = context.user
  
  const s = styles(colours)
  
  React.useEffect(()=>{
      set(CartService.changes)
      const i = setInterval(()=>{
        set(CartService.changes)
      }, 1000)
      return ()=> clearInterval(i)
  },[])

  if(context.isLoading){
    return (<View style={{flex:1, backgroundColor: colours.secondary}}> <Text>aaaaaa</Text></View>)
  }
    
  if( !restaurant || CartService.getItems().length == 0){
    return (
      <View style={{flex:1, backgroundColor: colours.secondary}}> 
        <View style={s.noItemsContainer}> 
          <Text style={s.noItems}> O seu carrinho está vazio </Text>
          <Button title={"Procurar por um restaurante"} onClick={()=> bottomNav.navigate("Restaurants")}/>
        </View>
      </View>
    )
  }

  return(
    <ScrollView key={idx} style={{backgroundColor: colours.secondary}}> 
      <View style={{overflow: 'hidden'}}>
        <RestaurantDetails restaurant={restaurant} hideImg/>
      </View>
      {
        orders.map((item, i) =>(
          <OrderItem id={i} item={item} onRemove={()=>set(CartService.changes)}/>
        ))
      }
      <OrderDetails order={orders} restaurant={restaurant} user={user}/>
      <View style={{alignItems:'center'}}>
        <Button title={"Confirmar Pedido"} onClick={()=> setTimeout( ()=>{ 
          NotificationService.sendNotification(
            "O seu pedido chegou",
            "O seu pedido do restaurante " + restaurant.name + " acaba de chegar")
            CartService.clear()
          }, 3000)}/>
      </View>      
    </ScrollView>
  )
}
const styles = (colours) => StyleSheet.create({
  noItems: {
    color: colours.dim,
    fontSize : 14
  },
  noItemsContainer: {
    backgroundColor: colours.primary,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 30,
    borderRadius: 20,
    elevation: 8 
  }
})