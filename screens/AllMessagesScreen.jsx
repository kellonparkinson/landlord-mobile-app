import { View, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ConversationCard from '../components/ConversationCard'
import dummy from '../data/dummyData'
import assets from '../data/dummyIndex'

const AllMessagesScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('NewMessage')}>
          <MaterialCommunityIcons name='pencil-outline' size={28} color='#d1ff17' />
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  
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
              navigation.navigate("Conversation", {
                contactName: `${item.firstName} ${item.lastName}`,
                contactPhoto: item.contactPhoto
              })
            )}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      
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