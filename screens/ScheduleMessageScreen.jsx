import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { serverTimestamp } from 'firebase/firestore'
import { db } from '../FirebaseConfig'
import { 
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  collection,
  onSnapshot,
  orderBy,
  query } from '../FirebaseConfig'

const ScheduleMessageScreen = ({ navigation }) => {
    const [numScheduled, setNumScheduled] = useState(0)
    const [messages, setMessages] = useState([])

    const conversationRef = doc(db, 'conversations', 'messages')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons name='arrow-back-ios' size={24} color='#d1ff17'/>
                </TouchableOpacity>
              ),
        })
    })

    useLayoutEffect(() => {
      const q = query(collection(conversationRef, 'Kellon Parkinson'), orderBy('timestamp', 'desc'))
  
      const unsub = onSnapshot(q, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
        // const schArray = messages.filter((item) => item.data.scheduled === true)
        // setNumScheduled(schArray.length)
      })
      // console.log(messages)
      return unsub
    }, [])

  return (
    <View style={styles.screenWrapper}>
      {/* <View style={styles.header}>
        <Text style={styles.headerTextLight}>You have {numScheduled} scheduled messages.</Text>
      </View> */}

      <TouchableOpacity style={styles.newMessageBtn} onPress={() => navigation.navigate('NewScheduledMessage')}>
        <Text style={styles.btnTextDark}>Schedule New Message</Text>
        <MaterialCommunityIcons name='message-text-clock-outline' size={50} color='#242424' />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTextLight}>Your recently scheduled messages:</Text>
      </View>
        <View style={styles.messagesWrapper}>
          {messages.map(({id, data}) => (
            data.scheduled ? (
              <View key={id} style={{flex: 1}}>
                <View style={{alignSelf: 'flex-end', marginRight: 20}}>
                  <Text style={styles.outboundText}>To: {data.to}</Text>
                </View>
                <View style={styles.outboundScheduled}>
                  <Text style={styles.outboundText}>{data.body}</Text>
                    <MaterialCommunityIcons 
                      style={{ alignSelf: 'flex-end', position: 'absolute', marginHorizontal: 12, bottom: -3, right: -32 }}
                      name='lightning-bolt'
                      size={16}
                      color='#d1ff17'
                    />
                </View>
              </View>
            ) : null
          ))}
        </View>
    </View>
  )
}

export default ScheduleMessageScreen

const styles = StyleSheet.create({
    screenWrapper: {
        backgroundColor: '#3e3e3e',
        flex: 1,
        alignItems: 'center',
        paddingTop: 32,
    },
    header: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextLight: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
    },
    newMessageBtn: {
        width: '80%',
        height: 80,
        backgroundColor: '#d1ff17',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 18,
    },
    btnTextDark: {
        color: '#242424',
        fontSize: 18,
        fontWeight: '700',
    },
    messagesWrapper: {
      height: '60%'
    },
    outboundScheduled: {
      backgroundColor: '#4f5d75',
      borderWidth: 2,
      borderColor: '#d1ff17',
      padding: 12,
      borderRadius: 18,
      borderBottomRightRadius: 0,
      alignSelf: 'flex-end',
      marginTop: 5,
      marginBottom: 25,
      marginRight: 20,
      maxWidth: '80%',
      position: 'relative',
    },
    outboundText: {
      color: '#fff',
      fontSize: 14.5,
    },
})