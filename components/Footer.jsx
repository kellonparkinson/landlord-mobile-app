import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footerWrapper}>
      <Text style={{color: '#fff'}}>Footer</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerWrapper: {
        height: 100,
        width: '100%',
        backgroundColor: '#2b2b2b',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 8},
        shadowRadius: 32,
        shadowOpacity: .8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})