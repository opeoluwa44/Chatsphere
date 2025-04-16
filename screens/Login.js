import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import {Input, Button} from 'react-native-elements'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate('Home')
        }else{
          console.log('user not logged in')
        }
      })
    }, [])
    

    const loginUser = async()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then(()=>console.log('user logged in'))
    }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter your email'
        label='Email'
        value={email}
        onChangeText={text=>setEmail(text)}
        leftIcon={{type:'material', name:'email'}}
      />
      <Input
        placeholder='Enter your Password'
        label='Password'
        value={password}
        onChangeText={text=>setPassword(text)}
        leftIcon={{type:'material', name:'lock'}}
        secureTextEntry
      />
      <Button
        title='Login'
        style={[styles.btn]}
        onPress={loginUser}
      />
      <Button
        title='Register'
        style={[styles.btn]}
        onPress={()=>navigation.navigate('Register')}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  btn:{
    marginTop:10,
  }
})