import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@/screens/Login'
import Register from '@/screens/Register'
import Home from '@/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Login' 
        component={Login}
      />
      <Stack.Screen 
        name='Register' 
        component={Register}
      />
      <Stack.Screen 
        name='Home' 
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'#fff',
    // alignItems:'center',65655
    // justifyContent:'center'
  }
})