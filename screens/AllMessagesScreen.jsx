import { View, Text, FlatList, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ConversationCard from '../components/ConversationCard'
import Footer from '../components/Footer'
import dummy from '../data/dummyData'

const AllMessagesScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Pressable style={{ marginRight: 20 }} onPress={() => navigation.navigate('NewMessage')}>
        <MaterialCommunityIcons name='pencil-outline' size={28} color='#d1ff17' />
      </Pressable>
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.screenWrapper}>
      
      {/* Don't forget to build a search bar somewhere on this page... Flatlist header component? */}
      <FlatList
        data={ dummy }
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ConversationCard
            data={item}
            onPress={() => (
              navigation.navigate("Conversation",
                {contactName: `${item.firstName} ${item.lastName}`}
              )
            )}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* <Footer /> */}
    </SafeAreaView>
  )
}

export default AllMessagesScreen

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor:'#242424',
    height: '100%',
  },
})