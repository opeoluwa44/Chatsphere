import { FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, dataBase } from '@/firebase/firebaseConfig'
import  ListItem  from '@/components/ListItem'
import { Button } from 'react-native-elements'

const Home = ({navigation}) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const docRef = collection(dataBase, 'users')
    const docQuery = query(docRef, where('userId', '!=', auth?.currentUser?.uid))
    const docSnap = onSnapshot(docQuery, (snapshot) => {
      let data = []
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data()})
        setUsers(data)
      })
    }
  )}, [])

  const logoutUser = async () => {
    auth.signOut()
    .then(()=>(
      navigation.replace('Login')
    ))
  }
    

  return (
   <>
      <FlatList
        data={users}
        keyExtractor={(user) => user.userId}
        renderItem={({item})=>(
          <ListItem 
            title={item.userName}
            subTitle={item.email}
            image={item.avatarUrl}
            onPress={()=>navigation.navigate('Chat', {name: item.userName, uid:item.userId})}
          />
        )}
      />
      <Button 
      title='Logout'
      onPress={logoutUser}
      />
   </>
  )
}

export default Home

const styles = StyleSheet.create({})