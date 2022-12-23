import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import ConversationCard from '../components/ConversationCard'
import Footer from '../components/Footer'
import dummy from '../data/dummyData'

const AllMessagesScreen = ({ navigation }) => {
  
  return (
    <View style={styles.screenWrapper}>
      
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

      <Footer />
    </View>
  )
}

export default AllMessagesScreen

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor:'#bfc0c0',
    height: '100%',
  },
})