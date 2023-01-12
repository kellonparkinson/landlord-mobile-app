import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const DashboardScreen = () => {
  const [numScheduled, setNumScheduled] = useState(0)
  const [unread, setUnread] = useState(0)
  const [username, setUsername] = useState('Kellon')

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={{ margin: 12 }}>
        <Text style={styles.header}>Welcome, {username}.</Text>
      </View>

      <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Search' placeholderTextColor='#a4a4a4' />
      </View>

      <View style={{ marginHorizontal: 12, marginTop: 12 }}>
        <Text style={styles.header}>Messaging Tools</Text>
      </View>

      <View style={styles.mainModWrapper}>
        <View style={styles.module}>
          <Text style={styles.subHeading}>Scheduler</Text>
          <Text>{numScheduled} scheduled messages</Text>
        </View>

        <View style={styles.module}>
          <Text style={styles.subHeading}>Templates</Text>
        </View>
      </View>

      <View style={styles.smallModWrapper}>
        <View style={styles.smallModule}>
          <Text style={styles.subHeading}>Manage Contacts</Text>
        </View>

        <View style={styles.smallModule}>
          <Text style={styles.subHeading}>Settings</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50
  },
  input: {
    width: '80%',
    height: '100%',
    borderRadius: 18,
    backgroundColor: '#555555',
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16
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
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  subHeading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    margin: 10,
  },
})