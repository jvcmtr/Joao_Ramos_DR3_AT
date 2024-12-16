
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import OrderProgress from './OrderProgress';
import ConfirmOrderScreen from './ConfirmOrderScreen';
import Theme from '../../helpers/Theme'
import CartService from '../../services/CartService';

const Stack = createStackNavigator();


export default function OrderStack({navigation}) {
  const colours = React.useContext(Theme)

  const data = {}
  return(
      <Stack.Navigator 
        initialRouteName="Confirmation"
          screenOptions={{
              headerStyle: {
                backgroundColor: colours.primary,
                height: 50,
              },
              headerTintColor: colours.dim
          }}
        >
        <Stack.Screen 
          name="Current" 
          component={OrderProgress}
          initialParams={{user: data, tabNav: navigation}}  
          />
        <Stack.Screen 
          name="Confirmation" 
          component={ConfirmOrderScreen}
          initialParams={{user: data, tabNav: navigation}} />
      </Stack.Navigator>
  )
}