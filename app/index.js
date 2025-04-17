import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@/screens/Login'
import Register from '@/screens/Register'
import Home from '@/screens/Home'
import Chat from '@/screens/Chat'
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
        options={{
          headerLeft: null, 
          title:'Active Users',
          headerTitleAlign:'center',
          headerTitleStyle:{fontWeight:'900'}
        }}
      />
       <Stack.Screen 
        name='Chat' 
        component={Chat}
        options={({route})=>(
          {
            title: route.params.name,
            headerTitleAlign:'center',
            headerTitleStyle:{fontWeight:'900'},
          }
        )}
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