// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import Order from './src/screens/Order'
import Notifications from './src/screens/Notification'
import Other from './src/screens/Other'
import Me from './src/screens/Me'
import Login from './src/screens/Login'
import Store from './src/screens/Store'
import GoiMon from './src/screens/GoiMon'
import { stopClock } from 'react-native-reanimated';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Other" component={Other} />
      <Stack.Screen name="Me" component={Me} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Store" component= {Store}/>
      <Stack.Screen name="GoiMon" component= {GoiMon}/>
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Của hàng') {
            iconName = focused ? 'ios-business-sharp' : 'ios-business-outline';
            } else if (route.name === 'Thông báo') {
              iconName = focused ? 'notifications-sharp' : 'notifications-outline';
            } else if (route.name === 'Khác') {
              iconName = focused ? 'ellipsis-horizontal-sharp' : 'ellipsis-horizontal-outline';
            }
            else if (route.name === 'Gọi Món') {
              iconName = focused ? 'fast-food-sharp' : 'fast-food-outline';
            }
            else if (route.name === 'Đăng nhập') {
              iconName = focused ? 'md-person-sharp' : 'md-person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Trang chủ" component={HomeStack} />
        <Tab.Screen name="Của hàng" component={Store} />
        <Tab.Screen name="Gọi Món" component={GoiMon} />
        <Tab.Screen name="Thông báo" component={Notifications} />
        <Tab.Screen name="Khác" component={Other} />
        <Tab.Screen name="Đăng nhập" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}