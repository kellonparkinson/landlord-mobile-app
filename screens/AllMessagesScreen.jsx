import { View, Text, FlatList } from 'react-native'
import React from 'react'

import ConversationCard from '../components/ConversationCard'
import Footer from '../components/Footer'
import dummy from '../data/dummyData'

const AllMessagesScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Conversation")
  }

  return (
    <View style={{
      backgroundColor:'#bfc0c0',
      height: '100%',
    }}>
      <FlatList
        data={ dummy }
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ConversationCard data={item} onPress={handlePress}/>}
        showsVerticalScrollIndicator={false}
      />

      <Footer />
    </View>
  )
}

export default AllMessagesScreen