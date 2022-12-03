import { View, Text } from 'react-native'
import React from 'react'

import ConversationCard from '../components/ConversationCard'

const AllMessagesScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Conversation")
  }

  return (
    <View>
      <ConversationCard onPress={handlePress}/>
    </View>
  )
}

export default AllMessagesScreen