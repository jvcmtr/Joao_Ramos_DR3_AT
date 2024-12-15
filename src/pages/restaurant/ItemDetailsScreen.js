import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'

import MyImage from '../../components/baseComponents/MyImage'
import Button from '../../components/Button'
import ItemModification from '../../components/ItemModification'

export default function ItemDetails(props){

  const context = React.useContext(Context)
  const colours = React.useContext(theme)
  const [food, setFood] = React.useState(props.route.params);

  if(context.isLoading ){
    return (<View style={{flex:1}}> </View>)
  }

  const nav = (val) => {
    props.navigation.navigate("Details",val)
  }

  return(
    <ScrollView> 
      <MyImage uri={food.image} style={styles.img}/>
      {
        food.modifications.map((item, i)=>(
          <ItemModification modification={item} id={i}/>
        ))
      }
      <View style={{alignItems: 'center'}}>
        <Button title={"Adicionar ao carrinho"}/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  section:{
    flex:1,
    marginBottom: 50,
    marginTop: '-50%'
  },
  img:{
      width: '100%',
      aspectRatio: 1,
      marginTop: '-50%' 
  }
})