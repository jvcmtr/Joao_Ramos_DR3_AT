import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import colours from './assets/appColours'
import HomeScreen from './src/pages/main/HomeScreen';
import OrderStack from './src/pages/order/OrderStack';
import RestaurantStack from './src/pages/restaurant/RestaurantStack';
import UserDetailsScreen from './src/pages/user/UserDetailsScreen';



const  Tabs =  createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tabs.Navigator 
          initialRouteName="Home"
            screenOptions={{
              tabBarInactiveTintColor: colours.dim,
              tabBarActiveTintColor: colours.highlight2,
              tabBarStyle: {
                backgroundColor: colours.secondary, 
                height: 40,
              },
              headerStyle: {
                backgroundColor: colours.secondary,
                height: 40,
              },
              headerTintColor: colours.highlight2
          }}
        >    

          <Tabs.Screen 
            name="Home" 
            component={HomeScreen}
            options={icon('home')}/>
          <Tabs.Screen 
            name="Restaurants" 
            component={RestaurantStack}
            options={icon('search')}/>
          <Tabs.Screen 
            name="Orders" 
            component={OrderStack}
            options={icon('basket')}/>
          <Tabs.Screen 
            name="Profile" 
            component={UserDetailsScreen}
            options={icon('person-circle')}/>
          </Tabs.Navigator>
      </NavigationContainer>
  );
}

const icon = (name) => {
  return {
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? name : name+'-outline'}
                size={20}
                color={focused ? colours.highlight2 : colours.dim}
              />
            ),
          }
}