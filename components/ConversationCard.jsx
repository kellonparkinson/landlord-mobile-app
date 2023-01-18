import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { serverTimestamp } from 'firebase/firestore'
import { db } from '../FirebaseConfig'
import { 
  doc,
  collection,
  onSnapshot,
  orderBy,
  query } from '../FirebaseConfig'

const ConversationCard = ({ data, onPress, route }) => {
    const [messagePreview, setMessagePreview] = useState('')
    const conversationRef = doc(db, 'conversations', 'messages')

    useEffect(() => {
        const q = query(collection(conversationRef, `${data.firstName} ${data.lastName}`), orderBy('timestamp', 'asc'))
    
        const unsub = onSnapshot(q, (snapshot) => {
            const messageArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                messageData: doc.data()
              }))
            console.log(messageArray.slice(-1)[0])
            setMessagePreview(messageArray.slice(-1)[0])
        })
        // console.log(messages)
        return unsub
      }, [route])

  return (
    <Pressable onPress={onPress}>
        <View style={styles.conversationCard}>
            <View style={styles.contactIcon}>
                <Avatar
                    source={data.contactPhoto}
                    style={{width: '100%', height: '100%', borderRadius: '50%'}}
                    rounded
                />
            </View>
            <ListItem.Content>
                <ListItem.Title style={styles.cardTitle}>
                    {data.firstName} {data.lastName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={2} style={styles.cardText}>
                    {/* {messagePreview.messageData.body} */}
                </ListItem.Subtitle>
            </ListItem.Content>
        </View>
    </Pressable>
  )
}

export default ConversationCard

const styles = StyleSheet.create({
    conversationCard: {
        padding: 20,
        backgroundColor: '#3e3e3e',
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    cardText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 16,
        color: '#bfc0c0',
        width: 300,
    },
    contactIcon: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginVertical: 5,
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})