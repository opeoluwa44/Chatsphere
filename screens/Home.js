import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, dataBase } from '@/firebase/firebaseConfig'

const Home = () => {

    const [users, setUsers] = useState([])

    const getUsers = async()=> {
        const docRef = collection(dataBase, 'users')
        const docQuery = query(docRef, where('userId', '!=', auth?.currentUser?.uid))
        const docSnap = onSnapshot(docQuery, (snapshot) => {
            let data = []
            snapshot.docs.forEach((doc) => {
                data.push({...doc.data()})
                setUsers(data)
                console.log('users:', data)
            })
        })
    }

    useEffect(() => {
        getUsers()
    }, [])
    

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})