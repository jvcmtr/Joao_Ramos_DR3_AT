import React from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'

import Context from '../../helpers/Context'
import NotificationService from '../../services/NotificationService'
import CartService from '../../services/CartService'

import ItemDetail from '../../components/ItemDetail'
import Button from '../../components/Button'
import ItemModification from '../../components/ItemModification'
import theme from '../../helpers/Theme'

export default function ItemDetails(props){

  const colours = React.useContext(theme)
  const context = React.useContext(Context)
  const [food, setFood] = React.useState(props.route.params.food);
  const [modifications, setModifications] = React.useState([]) 

  if(context.isLoading ){
    return (<View style={{flex:1, backgroundColor: colours.secondary}}> </View>)
  }

  const nav = (val) => {
    props.navigation.navigate("Details",val)
  }

  const handle = (mod) => {
    let m2 = modifications.filter(m => m.heading != mod.heading )
    m2.push(mod)
    setModifications(m2)
  }

  const getTotalPrice = () =>{
    return parseFloat(food.price) + modifications.reduce((t, i)=> t + i.modPrice, 0)
  }

  const submit = () =>{
    const obj = {
      id: new Date(),
      ...food, 
      modifications: [...modifications], 
      ItemFullPrice: getTotalPrice()  
    }

    if(CartService.restaurantMatch(context.restaurant.id)){
      CartService.add(obj, context.restaurant.id)
      props.navigation.goBack()
      
    }
    else{
      
      NotificationService.sendConfirmation(
        "Limpar sacola", 
        "Os itens no seu carrinho são de outro restaurante, deseja excluir os itens que estão no seu carrinho?",
        ()=>{
          CartService.clear()
          CartService.add(obj, context.restaurant.id)
          props.navigation.goBack()
        }
      )

    }
  }


  const s = styles(colours)
  return(
    <ScrollView style={{flex:1, backgroundColor: colours.secondary}}> 
      <ItemDetail item={food}/>
      {
        food.modifications.map((item, i)=>(
          <ItemModification modification={item} id={i} onChange={handle}/>
        ))
      }
      <View style={s.section}>
        <Text style={s.heading}> Total do item : R$ { getTotalPrice() } </Text>
        <Button title={"Adicionar ao carrinho"} onClick={submit}/>
      </View>
    </ScrollView>
  )
}
const styles = (colours) => StyleSheet.create({
  section:{
    backgroundColor: colours.primary,
    alignItems: 'center', 
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
    padding: 10,
    elevation: 8 
  },
  img:{
      width: '100%',
      aspectRatio: 1,
      marginTop: '-50%' 
  },
  heading:{
    fontSize: 18,
    fontWeight: 600
}
})