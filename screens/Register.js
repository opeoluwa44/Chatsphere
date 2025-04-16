import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Input, Button} from 'react-native-elements'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth, dataBase} from '../firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')

  const registerUser = async() => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
      const userId = userCredentials.user.uid
      const docRef = doc(dataBase, 'users', userId)
      const docSnap = setDoc(docRef, {
        avatarUrl: avatar ? avatar : 'https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg',
        userName,
        password,
        userId
      })
    })
    .then(()=>console.log('User registered successfully!'))
    
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Username'
        label='Username'
        value={userName}
        onChangeText={text=>setUserName(text)}
        leftIcon={{type:'material', name:'account-circle'}}
      />
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
      <Input
        placeholder='Avatar url'
        label='Avatar'
        value={avatar}
        onChangeText={text=>setAvatar(text)}
        leftIcon={{type:'material', name:'link'}}
      />
      <Button
        title='Register'
        style={[styles.btn]}
        onPress={registerUser}
      />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  btn:{
    marginTop:10,
  }
})