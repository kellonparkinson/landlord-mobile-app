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
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'
import axios from 'axios'

// Individual Conversation Screen --------------- //
const ConversationScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  
  const handleDotsPress = () => {}

  const sendMessage = () => {
    Keyboard.dismiss()
    
    let messageBody = {
      body: messageInput,
      from: "+13854627888",
      to: "+12088812229"
    }

    axios
      .post('http://192.168.1.9:4000/send-sms', messageBody)
      .then((res) => {
        console.log(res.data)
        setMessageInput('')
      })
      .catch((err) => console.log(err, 'AXIOS ERROR!!'))
  }

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
            <ScrollView>

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
  chatWrapper: {},
  inboundMessageWrapper: {},
  outboundMessageWrapper: {},
})