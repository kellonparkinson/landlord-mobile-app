import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'

const NewMessage = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Pressable onPress={() => navigation.goBack()}>
                <Text style={{ color: '#d1ff17', fontWeight: '600'}}>Cancel</Text>
            </Pressable>
        })
    })

  return (
    <View>
      <Text>New Message</Text>
      <Text>New Message</Text>
      <Text>New Message</Text>
    </View>
  )
}

export default NewMessage

const styles = StyleSheet.create({})