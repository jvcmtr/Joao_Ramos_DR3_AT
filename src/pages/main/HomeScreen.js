import React from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'
import Map from '../../components/Map'
import RestaurantListItem from '../../components/RestaurantListItem'

export default function HomeScreen({navigation}){
  const colours = React.useContext(theme)
  const context = React.useContext(Context)
  const s =styles(colours)

  const nav = (val) => {
    context.setRestaurant(val)
    navigation.navigate("Restaurants", {Redirect: 'Restaurant'})
  }

  return(
    <ScrollView style={{backgroundColor: colours.secondary, flex:1}}> 
      <View style={s.container}>
        <Text style={s.subheading}> Comida Italiana </Text> 
        {
          context.data.filter(i => i.tags.includes("Comida Italiana"))
            .map((item, i) => (
                <RestaurantListItem 
                  key={i}
                  restaurant={item} 
                  onClick={() => nav(item)} 
                />
          ))
        }
      </View>
      
      <View style={s.container}>
        <Text style={s.subheading}> Restaurantes proximos </Text> 
        <View style={{minHeight:400, width:'100%'}}>
          <Map/>
        </View>
      </View>

      <View style={s.container}>
        <Text style={s.subheading}> Comida Japonesa </Text> 
        {
          context.data.filter(i => i.tags.includes("Comida Japonesa"))
            .map((item, i) => (
                <RestaurantListItem 
                  key={i}
                  restaurant={item} 
                  onClick={() => nav(item)} 
                />
          ))
        }
      </View>

      <View style={s.container}>
        <Text style={s.subheading}> Fast Food </Text> 
        {
          context.data.filter(i => i.tags.includes("Fast Food"))
            .map((item, i) => (
                <RestaurantListItem 
                  key={i}
                  restaurant={item} 
                  onClick={() => nav(item)} 
                />
          ))
        }
      </View>

    </ScrollView>
  )
}

const styles = (colours) => StyleSheet.create({
    container:{
        marginTop: 40,
        //marginBottom: 50,
        paddingTop: 40,
        backgroundColor: colours.primary,
        elevation: 8, 
    },
    heading:{
      fontWeight:800,
      color: colours.highlight,
      fontSize: 22
    },
    subheading:{
      fontWeight:800,
      color: colours.txtPrimary,
      fontSize: 18
    },
    br:{
        alignSelf: 'center',
        backgroundColor: colours.dim,
        width: '110%',
        height: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: 600,
        color: colours.highlight
    },
    value:{
        fontSize: 12,
        color: colours.txtPrimary
    },
  });