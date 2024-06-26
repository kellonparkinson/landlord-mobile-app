import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
    SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState, useRef } from 'react'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import DatePicker, { getToday } from 'react-native-modern-datepicker'
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

const NewScheduledMessageScreen = ({ navigation }) => {
    const [recipient, setRecipient] = useState('')
    const [messageInput, setMessageInput] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const scrollRef = useRef()

    const conversationRef = doc(db, 'conversations', 'messages')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#d1ff17', fontWeight: '600'}}>Cancel</Text>
            </TouchableOpacity>
        })
    }, [navigation])

    // This function should send data to server and set off a scheduled function,
    // adding the message to the database once axios gets a response back from the twilio function
    const scheduleMessage = async () => {
        Keyboard.dismiss()
        
        const scheduledMessageBody = {
          body: messageInput,
          from: "+13854627888",
          to: recipient,
          selectedDate: selectedDate
        }
    
        // await addDoc(collection(conversationRef, route.params.contactName), {
        //   ...messageBody,
        //   timestamp: serverTimestamp(),
        //   scheduled: false
        // })
    
        axios
          .post('http://192.168.1.9:4000/schedule-sms', scheduledMessageBody)
          .then(async (res) => {
            console.log(res.data)
            setMessageInput('')
            await addDoc(collection(conversationRef, 'Kellon Parkinson'), {
                ...scheduledMessageBody,
                timestamp: serverTimestamp(),
                scheduled: true
            })
            navigation.goBack()
          })
          .catch((err) => console.log(err, 'AXIOS ERROR!!'))
    }

  return (
    <SafeAreaView style={styles.screenWrapper}>
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

        {/* <View style={styles.dateSelector}> */}
        <KeyboardAvoidingView
            style={styles.mainWrapper}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90}
            >
            <ScrollView
                style={{flex: 1}}
                automaticallyAdjustKeyboardInsets={true}
                contentInset={{ bottom: 10 }}
                keyboardDismissMode='on-drag'
                scrollsToTop
                ref={scrollRef}
                onContentSizeChange={() => scrollRef.current.scrollToEnd()}
            >
            <View style={{flex: 1}}>
                <DatePicker
                    onSelectedChange={(date) => {
                        setSelectedDate(date)
                        console.log(selectedDate)
                    }}
                    options={{
                        backgroundColor: '#3e3e3e',
                        textDefaultColor: '#fff',
                        textHeaderColor: '#d1ff17',
                        selectedTextColor: '#242424',
                        mainColor: '#d1ff17',
                        textSecondaryColor: '#a4a4a4',
                        textFontSize: 18,
                        textHeaderFontSize: 20
                    }}
                    minimumDate={getToday()}
                />
            </View>
            <View style={{height: 170}}></View>
                    <>
                    {recipient !== '' ? (
                        <View style={styles.footer}>
                            <TextInput
                                style={styles.input}
                                value={messageInput}
                                onChangeText={(text) => setMessageInput(text)}
                                placeholder='Message to schedule...'
                                placeholderTextColor='#bfc0c0'
                                selectionColor={'#d1ff17'}
                            />
                            <TouchableOpacity style={styles.sendBtn} onPress={messageInput !== '' ? scheduleMessage : () => Keyboard.dismiss()}>
                                {messageInput === '' ? (
                                    <MaterialCommunityIcons name='clock-outline' size={32} color='#bfc0c0' />
                                    ) : (
                                        <MaterialCommunityIcons name='clock' size={32} color='#d1ff17' />
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.footer}>
                            <View style={styles.disabledInput}>
                                <Text style={{color: '#a4a4a4'}}>Fill out scheduling info first</Text>
                            </View>
                            <View style={styles.sendBtn}>
                                <MaterialCommunityIcons name='message-off-outline' size={32} color='#686868' />
                            </View>
                        </View>
                    )}
                    </>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
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
        justifyContent: 'space-between',
    },
    toInput: {
        width: '100%',
        height: 50,
        padding: 12,
        backgroundColor: '#686868',
        color: '#fff',
    },
    footer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        position: 'relative',
        bottom: 0,
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