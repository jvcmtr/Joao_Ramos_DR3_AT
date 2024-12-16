import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import theme from '../../helpers/Theme'
import Context from '../../helpers/Context'

import RestaurantListItem from '../../components/RestaurantListItem'
import SearchBar from '../../components/SearchBar'
import { createNativeWrapper } from 'react-native-gesture-handler'
import ApiService from '../../services/ApiService'

export default function Screen(props){
  const context = React.useContext(Context)
  const colours = React.useContext(theme)
  const [results, setResults] = React.useState([])

  React.useEffect(()=>{
    handleSearch("")
  },[context.data.length])

  if(context.isLoading){
    return (<View style={{flex:1, backgroundColor: colours.secondary}}> </View>)
  }

  const handleSearch = (value) =>{
    let rest = ApiService.getRestaurants(value)
    
    setResults(rest.concat(rest, rest))
  }
  const nav = (val) => {
    context.setRestaurant(val)
    props.navigation.navigate("Restaurant")
  }

  return(
    <View style={{...styles.container, flex:1, backgroundColor: colours.secondary}}> 
      <SearchBar placeholder={"Pesquise por um restaurante"} onChange={(ev)=> handleSearch(ev)}/>
      <FlatList
          data={results}
          keyExtractor={(i, idx)=>idx}
          renderItem={({item, i})=>(    
            <RestaurantListItem 
              key={i}
              restaurant={item} 
              onClick={() => nav(item)} 
            />
          )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    alignItems: 'start',
    justifyContent: 'flex-start'
  }
})