import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'

import FoodListItem from '../../components/FoodListItem'
import RestaurantDetails from '../../components/RestaurantDetails'
import SearchBar from '../../components/SearchBar'
import ApiService from '../../services/ApiService'

export default function RestaurantScreen(props){

  const colours = React.useContext(theme)
  const context = React.useContext(Context)
  const restaurant = context.restaurant;
  const [results, setResults] = React.useState([])

  React.useEffect(()=>{
    handleSearch("")
  },[])

  if(context.isLoading || !restaurant){
    return (<View style={{flex:1, backgroundColor: colours.secondary}}> </View>)
  }

  const handleSearch = (value) =>{
    let foods = ApiService.getItemInRestaurant(restaurant.id, value)
    setResults(foods.concat(foods, foods))
  }
  const nav = (val) => {
    props.navigation.navigate("Details",{food: val})
  }

  return(
    <ScrollView style={{backgroundColor: colours.secondary}}>
      <View style={styles.section}>
        <RestaurantDetails restaurant={restaurant}/>
        <SearchBar placeholder={"O que você procura?"} onChange={(ev)=> handleSearch(ev)}/>
      </View>
      {
        results.map((item, i) => (
            <FoodListItem 
              key={i}
              food={item} 
              onClick={() => nav(item)} 
          />          
        ))
      }
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  section:{
    flex:1,
    marginBottom: 50,
    marginTop: '-50%'
  }
})