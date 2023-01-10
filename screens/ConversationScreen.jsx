import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ConversationFooter = () => {
  const [textInput, setTextInput] = useState('Message')

  return (
    <View style={styles.footer}>

      {/* These are temporary */}
      <View style={styles.footerIcon}>
        <Text style={{color: '#d1ff17', fontSize: 30, fontWeight: '900'}}>X</Text>
      </View>
      <View style={styles.footerIcon}>
        <Text style={{color: '#d1ff17', fontSize: 30, fontWeight: '900'}}>X</Text>
      </View>
      {/* -------------------------- */}

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.messageInput}
          value={textInput}
          onTextInput={(e) => setTextInput(e.target.value)}
        />
      </View>
    </View>
  )
}

// Individual Conversation Screen --------------- //
const ConversationScreen = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Again? Okay. I'm out of town. I'll send the plumber. Maybe you should consider learning how to use a plunger.",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: "Hey landlord, I plugged the toilet. It's bad.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble 
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#4f5d75',
            borderBottomRightRadius: 0,
          },
          left: {
            backgroundColor: '#e1e1e1',
            borderBottomLeftRadius: 0,
          },
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    )
  }

  const renderSend = (props) => {
    return (
      <Send {...props} >
        <View style={styles.sendBtn} >
          <MaterialCommunityIcons name='send' size={18} color='#d1ff17' />
        </View>
      </Send>
    )
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    />
  )
}

export default ConversationScreen

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor:'#3e3e3e',
    height: '100%',
    width: '100%',
  },
  footer: {
    height: 90,
    width: '100%',
    backgroundColor: '#2b2b2b',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  inputWrapper: {
    width: '70%',
    height: 40,
  },
  messageInput: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3e3e3e',
    color: '#bfc0c0',
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  footerIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#3e3e3e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatWrapper: {
    height: '100%',
    width: '100%',
  },
  inboundMessageWrapper: {
    flexWrap: 'wrap',
    maxWidth: '70%',
    minWidth: 10,
    minHeight: 10,
    backgroundColor: '#bfc0c0',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  outboundMessageWrapper: {
    flexWrap: 'wrap',
    maxWidth: '70%',
    minWidth: 10,
    minHeight: 10,
    backgroundColor: '#4f5d75',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  sendBtn: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: '#4f5d75',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
})