import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ConversationCard = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
        <View style={styles.conversationCard}>
            <Text style={styles.cardTitle}>CONVERSATION CARD</Text>
        </View>
    </Pressable>
  )
}

export default ConversationCard

const styles = StyleSheet.create({
    conversationCard: {
        padding: 30,
        backgroundColor: '#d3d3d3',
        marginTop: 2,
    },
    cardTitle: {
        fontSize: 24,
    },
})