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
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import axios from 'axios'
import DatePicker, { getToday } from 'react-native-modern-datepicker'
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

const NewScheduledMessageScreen = ({ navigation }) => {
    const [recipient, setRecipient] = useState('')
    const [messageInput, setMessageInput] = useState('')
    const [selectedDate, setSelectedDate] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Pressable onPress={() => navigation.goBack()}>
                <Text style={{ color: '#d1ff17', fontWeight: '600'}}>Cancel</Text>
            </Pressable>
        })
    }, [navigation])

    const scheduleMessage = async () => {
        Keyboard.dismiss()
        
        let messageBody = {
          body: messageInput,
          from: "+13854627888",
          to: recipient
        }
    
        // await addDoc(collection(conversationRef, route.params.contactName), {
        //   ...messageBody,
        //   timestamp: serverTimestamp(),
        //   scheduled: false
        // })
    
        axios
          .post('http://192.168.1.9:4000/schedule-sms', messageBody)
          .then((res) => {
            console.log(res.data)
            setMessageInput('')
          })
          .catch((err) => console.log(err, 'AXIOS ERROR!!'))
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

        {/* <View style={styles.dateSelector}> */}
        <View>
            <DatePicker
                onSelectedChange={(date) => setSelectedDate(date)}
                options={{
                    backgroundColor: '#3e3e3e',
                    textDefaultColor: '#fff',
                    textHeaderColor: '#d1ff17',
                    selectedTextColor: '#242424',
                    mainColor: '#d1ff17',
                    textSecondaryColor: '#a4a4a4',
                    textFontSize: 18
                }}
                minimumDate={getToday()}
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
                            placeholder='Message to schedule...'
                            placeholderTextColor='#bfc0c0'
                        />
                        <Pressable style={styles.sendBtn} onPress={messageInput !== '' ? scheduleMessage : () => Keyboard.dismiss()}>
                            {messageInput === '' ? (
                                <MaterialCommunityIcons name='clock-outline' size={32} color='#bfc0c0' />
                                ) : (
                                    <MaterialCommunityIcons name='clock' size={32} color='#d1ff17' />
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
    calendar: {
        margin: 12,
        backgroundColor: '#3e3e3e',
    },
})