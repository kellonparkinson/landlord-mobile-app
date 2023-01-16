import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

const ScheduleMessageScreen = ({ navigation }) => {
    const [numScheduled, setNumScheduled] = useState(0)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <MaterialIcons name='arrow-back-ios' size={24} color='#d1ff17'/>
                </Pressable>
              ),
        })
    })

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTextLight}>You have {numScheduled} scheduled messages.</Text>
      </View>

      <Pressable style={styles.newMessageBtn} onPress={() => navigation.navigate('NewScheduledMessage')}>
        <Text style={styles.btnTextDark}>Schedule New Message</Text>
        <MaterialCommunityIcons name='message-text-clock-outline' size={50} color='#242424' />
      </Pressable>

      <View style={styles.header}>
        <Text style={styles.headerTextLight}>Upcoming Scheduled Messages</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTextLight}>Recently Sent from Scheduled</Text>
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
})