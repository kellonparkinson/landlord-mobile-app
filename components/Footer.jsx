import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerWrapper}>
      <Pressable style={styles.footerBtns}>
        <MaterialCommunityIcons name="home-outline" size={32} color="#bfc0c0" />
      </Pressable>
      <Pressable style={styles.footerBtns}>
        <MaterialCommunityIcons name="message-text-outline" size={46} color="#d1ff17" />
      </Pressable>
      <Pressable style={styles.footerBtns}>
        <MaterialCommunityIcons name="tools" size={30} color="#bfc0c0" />
      </Pressable>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerWrapper: {
      height: 90,
      width: '100%',
      backgroundColor: '#2b2b2b',
      position: 'absolute',
      bottom: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 8},
      shadowRadius: 32,
      shadowOpacity: .8,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerBtns: {
      marginHorizontal: 45,
      marginBottom: 10,
    }
})