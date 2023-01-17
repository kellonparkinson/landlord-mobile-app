import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const NewMessageScreen = ({ navigation }) => {
  const [recipient, setRecipient] = useState('')
  const [messageInput, setMessageInput] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ color: '#d1ff17', fontWeight: '600'}}>Cancel</Text>
        </Pressable>
    })
  }, [navigation])

  const sendMessage = () => {

  }

  return (
    <View style={styles.screenWrapper}>
        <View>
            <TextInput
              style={styles.toInput}
              value={recipient}
              onChangeText={(text) => setRecipient(text)}
              placeholder='Send to:'
              placeholderTextColor='#bfc0c0'
              selectionColor={'#d1ff17'}
            />
        </View>

        <KeyboardAvoidingView
          style={styles.mainWrapper}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={90}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <>
              {recipient !== '' ? (
                  <View style={styles.footer}>
                      <TextInput
                        style={styles.input}
                        value={messageInput}
                        onChangeText={(text) => setMessageInput(text)}
                        placeholder='Message...'
                        placeholderTextColor='#bfc0c0'
                        selectionColor={'#d1ff17'}
                      />
                        <Pressable style={styles.sendBtn} onPress={messageInput !== '' ? sendMessage : () => Keyboard.dismiss()}>
                          {messageInput === '' ? (
                            <Ionicons name='arrow-up-circle-outline' size={32} color='#bfc0c0' />
                          ) : <Ionicons name='arrow-up-circle-sharp' size={32} color='#d1ff17' />
                          }
                </Pressable>
                    </View>
                ) : (
                    <View style={styles.footer}>
                        <View style={styles.disabledInput}>
                            <Text style={{color: '#a4a4a4'}}>Please enter a recipient first</Text>
                         </View>
                        <View style={styles.sendBtn}>
                            <MaterialCommunityIcons name='message-off-outline' size={32} color='#686868' />
                        </View>
                    </View>
                )}
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </View>
  )
}

export default NewMessageScreen

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#3e3e3e',
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 16,
  },
  toInput: {
    width: '100%',
    height: 50,
    padding: 12,
    backgroundColor: '#686868',
    color: '#fff',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    marginBottom: 20,
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
  disabledInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    backgroundColor: '#616161',
    color: '#fff',
    fontSize: 16,
    borderRadius: 25,
    padding: 12,
    marginHorizontal: 10,
  },
})