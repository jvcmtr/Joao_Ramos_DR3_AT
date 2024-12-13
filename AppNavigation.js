import { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/pages/main/HomeScreen';
import OrderStack from './src/pages/order/OrderStack';
import RestaurantStack from './src/pages/restaurant/RestaurantStack';
import UserDetailsScreen from './src/pages/user/UserDetailsScreen';
import theme from './src/helpers/Theme'

const  Tabs =  createBottomTabNavigator();

export default function AppNavigation() {
    const colours = useContext(theme);
  
    return (
    <NavigationContainer>
        <SafeAreaView style={{flex: 1, margin:0}} >
            <Tabs.Navigator 
              initialRouteName="Home"
              screenOptions={{
                tabBarInactiveTintColor: colours.dim,
                tabBarActiveTintColor: colours.highlight,
                tabBarStyle: {
                  //backgroundColor: colours.secondary, 
                  height: 50,
                },
                headerStyle: {
                  //backgroundColor: colours.secondary,
                  height: 40
                },
                headerTintColor: colours.highlight
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

          </SafeAreaView>
    </NavigationContainer>
  );
}

const icon = (name) => {
  return {
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? name : name+'-outline'}
                size={20}
                color={focused ? colours.highlight : colours.dim}
              />
            )
          }
}