import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView } from 'react-native'
import React, { useState } from 'react'

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
          onChangeText={(e) => setTextInput(e.target.value)}
        />
      </View>
    </View>
  )
}

const ConversationScreen = () => {
  return (
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.chatWrapper}>

        <View style={styles.inboundMessageWrapper}>
          <Text>Someone said something so this is their message.</Text>
        </View>

        <View style={styles.outboundMessageWrapper}>
          <Text>Someone said something and this is my response to their message.</Text>
        </View>

        <View style={styles.inboundMessageWrapper}>
          <Text>Someone said something in response to my response, so this is their message responding to me.</Text>
        </View>

        <View style={styles.outboundMessageWrapper}>
          <Text>Someone responded to my response, so this is me responding to their response to my first response to their first message.</Text>
        </View>

      </ScrollView>
        <ConversationFooter />
    </View>
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
})