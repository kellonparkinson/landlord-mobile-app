import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const DashboardScreen = () => {
  const [numScheduled, setNumScheduled] = useState(0)
  const [unread, setUnread] = useState(0)
  const [username, setUsername] = useState('Kellon')

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.inputContainer}>
        <View style={{ width: 300, height: 50, backgroundColor: '#555555'}}>
          <TextInput placeholder='Search'/>
        </View>
      </View>

      <View>
        <Text>Welcome, {username}.</Text>
      </View>

      <View>
        <Text>Messaging Tools</Text>
      </View>

      <View style={styles.mainModWrapper}>
        <View style={styles.module}>
          <Text>Message Scheduler</Text>
          <Text>{numScheduled} scheduled messages</Text>
        </View>

        <View style={styles.module}>
          <Text>Message Templates</Text>
        </View>
      </View>

      <View style={styles.smallModWrapper}>
        <View style={styles.smallModule}>
          <Text>Manage Contacts</Text>
        </View>

        <View style={styles.smallModule}>
          <Text>Settings</Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: '#3e3e3e',
    flex: 1
  },
  inputContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainModWrapper: {
    height: 450,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  module: {
    width: '95%',
    height: '45%',
    backgroundColor: '#d1ff17',
    borderRadius: 18,
    borderBottomRightRadius: 0,
  },
  smallModWrapper: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  smallModule: {
    width: '46%',
    height: '100%',
    borderRadius: 18,
    backgroundColor: '#bfc0c0'
  },
})