import { 
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback } from 'react-native'
import React, { useState, useRef, useLayoutEffect } from 'react'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'
import axios from 'axios'
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

// Individual Conversation Screen --------------- //
const ConversationScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const scrollRef = useRef()

  const conversationRef = doc(db, 'conversations', 'messages')
  
  const handleDotsPress = () => {}

  const sendMessage = async () => {
    Keyboard.dismiss()
    
    let messageBody = {
      body: messageInput,
      from: "+13854627888",
      to: "+12088812229"
    }

    await addDoc(collection(conversationRef, route.params.contactName), {
      ...messageBody,
      timestamp: serverTimestamp(),
      scheduled: false
    })

    axios
      .post('http://192.168.1.9:4000/send-sms', messageBody)
      .then((res) => {
        console.log(res.data)
        setMessageInput('')
      })
      .catch((err) => console.log(err, 'AXIOS ERROR!!'))
  }

  useLayoutEffect(() => {
    const q = query(collection(conversationRef, route.params.contactName), orderBy('timestamp', 'asc'))

    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
    // console.log(messages)
    return unsub
  }, [route])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar rounded source={route.params.contactPhoto} style={{ width: 30, height: 30, marginRight: 10 }} />
          <Text style={{ color: '#fff', fontSize: 18 }}>{route.params.contactName}</Text>
        </View>
      ),
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name='arrow-back-ios' size={24} color='#d1ff17'/>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable onPress={handleDotsPress}>
          <MaterialCommunityIcons name='dots-horizontal' size={24} color='#d1ff17'/>
        </Pressable>
      ),
    })
  }, [navigation])

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.screenWrapper}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <>
            <ScrollView
              automaticallyAdjustKeyboardInsets={true}
              contentInset={{ bottom: 10 }}
              keyboardDismissMode='on-drag'
              scrollsToTop
              ref={scrollRef}
              onContentSizeChange={() => scrollRef.current.scrollToEnd()}
            >
              {messages.map(({id, data}) => (
                data.from === '+13854627888' ? (
                  <View key={id} style={data.scheduled === true ? styles.outboundScheduled : styles.outbound}>
                    <Text style={styles.outboundText}>{data.body}</Text>
                    {data.scheduled === true ? (
                      <MaterialCommunityIcons 
                        style={{ alignSelf: 'flex-end', position: 'absolute', marginHorizontal: 12, bottom: -3, right: -32 }}
                        name='lightning-bolt'
                        size={16}
                        color='#d1ff17'
                      />
                      ): null
                    }
                  </View>
                ) : (
                  <View key={id} style={styles.inbound}>
                    <Avatar
                      rounded
                      size={30}
                      position='absolute'
                      bottom={0}
                      left={-37}
                      source={route.params.contactPhoto}
                    />
                    <Text style={styles.inboundText}>{data.body}</Text>
                  </View>
                )
              ))}
            </ScrollView>

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    value={messageInput}
                    onChangeText={(text) => setMessageInput(text)}
                    placeholder='Message'
                    placeholderTextColor='#bfc0c0'
                />
                <Pressable style={styles.sendBtn} onPress={messageInput !== '' ? sendMessage : () => Keyboard.dismiss()}>
                  {messageInput === '' ? <Ionicons name='arrow-up-circle-outline' size={32} color='#bfc0c0' /> : <Ionicons name='arrow-up-circle-sharp' size={32} color='#d1ff17' />}
                </Pressable>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ConversationScreen

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor:'#3e3e3e',
    flex: 1,
  },
  screenWrapper: {
    flex: 1,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    backgroundColor: '#686868',
    color: '#fff',
    fontSize: 16,
    borderRadius: 25,
    padding: 12,
    marginHorizontal: 10,
  },
  sendBtn: {
    marginHorizontal: 10,
  },
  outbound: {
    backgroundColor: '#4f5d75',
    padding: 12,
    borderRadius: 18,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight: 12,
    maxWidth: '80%',
    position: 'relative',
  },
  outboundText: {
    color: '#fff',
    fontSize: 14.5,
  },
  inbound: {
    backgroundColor: '#bfc0c0',
    padding: 12,
    borderRadius: 18,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginLeft: 47,
    maxWidth: '80%',
    position: 'relative',
  },
  inboundText: {
    color: '#000',
    fontSize: 14.5,
  },
  outboundScheduled: {
    backgroundColor: '#4f5d75',
    borderWidth: 2,
    borderColor: '#d1ff17',
    padding: 12,
    borderRadius: 18,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight: 20,
    maxWidth: '80%',
    position: 'relative',
  },
})