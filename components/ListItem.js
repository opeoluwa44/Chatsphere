import {Image, StyleSheet, TouchableWithoutFeedback ,View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListItem = ({title, subTitle, image, imageComponent, onPress}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      underlayColor='#333'
      >
      <View style={styles.container}>
        {imageComponent}
        {image && <Image source={{uri:image}} style={styles.image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1} inputText={title}/>
          {subTitle && <AppText style={styles.subTitle} numberOfLines={2} inputText={subTitle}/>}
        </View>
        <MaterialCommunityIcons name='chevron-right' size={24} color='#000' />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:'#fff',
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    detailsContainer:{
        flex:1,
        marginLeft:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
    },
    subTitle:{
        color:'#6e6969',
    }
})