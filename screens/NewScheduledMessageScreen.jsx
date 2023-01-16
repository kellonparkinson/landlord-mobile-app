import { StyleSheet, Text, View, Pressable, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const NewScheduledMessageScreen = ({ navigation }) => {
    const [recipient, setRecipient] = useState('')
    const [messageInput, setMessageInput] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Pressable onPress={() => navigation.goBack()}>
                <Text style={{ color: '#d1ff17', fontWeight: '600'}}>Cancel</Text>
            </Pressable>
        })
    })

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
                placeholderTextColor='#242424'
            />
        </View>

        <View style={styles.dateSelector}>
            <Text>Date:</Text>
            <MaterialCommunityIcons name='arrow-down-drop-circle' size={24} color='#d1ff17' />
        </View>

        <KeyboardAvoidingView style={styles.mainWrapper}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <>
                {recipient !== '' ? (
                    <View style={styles.footer}>
                        <TextInput
                            style={styles.input}
                            value={messageInput}
                            onChangeText={(text) => setMessageInput(text)}
                            placeholder='Message'
                            placeholderTextColor='#bfc0c0'
                        />
                        <Pressable style={styles.sendBtn} onPress={messageInput !== '' ? sendMessage : () => Keyboard.dismiss()}>
                            {messageInput === '' ? (
                                <Ionicons name='arrow-up-circle-outline' size={32} color='#bfc0c0' />
                                ) : (
                                    <Ionicons name='arrow-up-circle-sharp' size={32} color='#d1ff17' />
                                )
                            }
                        </Pressable>
                    </View>
                ) : null}
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </View>
  )
}

export default NewScheduledMessageScreen

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
    dateSelector: {
        width: '100%',
        height: 50,
        marginTop: 2,
        backgroundColor: '#686868',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
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
})