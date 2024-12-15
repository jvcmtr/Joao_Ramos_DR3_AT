
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import theme from '../../helpers/Theme'

import SearchScreen from './SearchScreen';
import RestaurantScreen from './RestaurantScreen';
import ItemDetailsScreen from './ItemDetailsScreen';
import SearchBar from '../../components/SearchBar';

const Stack = createStackNavigator();

export default function Screen({navigation}){
  const colours = React.useContext(theme)
  const data = {}
  return(
      <Stack.Navigator 
        initialRouteName="Search"
          screenOptions={{
            headerStyle: {
              backgroundColor: colours.primary,
              height: 50,
            },
            headerTintColor: colours.dim
          }}
        >
        <Stack.Screen 
          name="Search" 
          component={SearchScreen}
          initialParams={{user: data, tabNav: navigation}}  
          />
        <Stack.Screen 
          name="Restaurant" 
          component={RestaurantScreen}
          initialParams={{user: data, tabNav: navigation}} />
        <Stack.Screen 
          name="Details" 
          component={ItemDetailsScreen}
          initialParams={{user: data, tabNav: navigation}}  
          />
      </Stack.Navigator>
  )
}