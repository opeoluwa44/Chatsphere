import { StyleSheet } from 'react-native'
import React,{ useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { auth, dataBase } from '@/firebase/firebaseConfig'
import { addDoc, collection, serverTimestamp, doc, query, onSnapshot, orderBy} from 'firebase/firestore'

const Chat = ({route}) => {

  const [messages, setMessages] = useState([])
  const currentUser = auth?.currentUser?.uid
  const receiverUid = route.params.uid

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ])
  // }, [])

  useEffect(() => {
    const chatId = receiverUid > currentUser ? `${receiverUid + '-' + currentUser}` : `${currentUser + '-' + receiverUid}`
    const docRef = doc(dataBase, 'chatrooms', chatId)
    const colRef = collection(docRef, 'messages')
    const chatQuery = query(colRef, orderBy('createdAt', 'desc'))
    const docSnap = onSnapshot(chatQuery, (snapshot) => {
      const allMsgs = snapshot.docs.map(msg=>{
        if (msg.data().createdAt) {
          return {
            ...msg.data(), 
            createdAt: msg.data().createdAt.toDate()
          }  
        } else{
          return {
            ...msg.data(), 
            createdAt: new Date()
          }
        }
      })
       setMessages(allMsgs)
    })
  }, [])
  

  const onSend = useCallback((messagesArray = []) => {
    const msg = messagesArray[0]
    const myMsg ={...msg, sender:currentUser, receiver:receiverUid}
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    )
    const chatId = receiverUid > currentUser ? `${receiverUid + '-' + currentUser}` : `${currentUser + '-' + receiverUid}`
    const docRef = doc(dataBase, 'chatrooms', chatId)
    const colRef = collection(docRef, 'messages')
    const chatSnap = addDoc(colRef, {
      ...myMsg,
      createdAt:serverTimestamp(),
    })
  }, [])
  return (
    <GiftedChat
      messages={messages}
      onSend={text => onSend(text)}
      user={{
        _id: auth?.currentUser?.uid,
      }}
    />
  )
}

export default Chat

const styles = StyleSheet.create({})