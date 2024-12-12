
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import CartOverview from './CartOverview';
import ConfirmOrderScreen from './ConfirmOrderScreen';
import colours from '../../../assets/appColours'

const Stack = createStackNavigator();


export default function OrderStack({navigation}) {
  const data = {}
  return(
      <Stack.Navigator 
        initialRouteName="Overview"
          screenOptions={{
              headerStyle: {
                backgroundColor: colours.primary,
                height: 30,
                border: '',
              },
              headerTintColor: colours.dim
          }}
        >
        <Stack.Screen 
          name="Overview" 
          component={CartOverview}
          initialParams={{user: data, tabNav: navigation}}  
          />
        <Stack.Screen 
          name="Confirmation" 
          component={ConfirmOrderScreen}
          initialParams={{user: data, tabNav: navigation}} />
      </Stack.Navigator>
  )
}