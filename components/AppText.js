import { StyleSheet, Platform, Text} from 'react-native'
import React from 'react'

const AppText = ({inputText, stylesLing, onPress, placeholder, numberOfLines}) => {
  return (
    <Text style={[styles.fonts, stylesLing]} onPress={onPress} numberOfLines={numberOfLines}>{inputText}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    fonts:{
        fontSize:18,
        fontFamily:Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color:'#000',
    }
})