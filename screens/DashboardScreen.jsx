import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const DashboardScreen = () => {
  const [numScheduled, setNumScheduled] = useState(0)
  const [username, setUsername] = useState('Kellon')

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={{ width: 300, height: 50, backgroundColor: '#555555'}}>
        <TextInput placeholder='Search'/>
      </View>

      <View>
        <Text>You have {numScheduled} scheduled messages, {username}.</Text>
      </View>

      <View style={styles.mainModWrapper}>
        <View style={styles.module}>
          <Text>Scheduler</Text>
        </View>
        <View style={styles.module}>
          <Text>Templates</Text>
        </View>
      </View>

      <View style={styles.smallModWrapper}>
        <View style={styles.smallModule}>
          <Text>Contacts</Text>
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
  mainModWrapper: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  module: {
    width: '45%',
    height: '100%',
    backgroundColor: '#bfc0c0',
    borderRadius: 18,
  },
  smallModWrapper: {
    width: '100%',
    height: 250,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  smallModule: {
    width: '95%',
    height: 90,
    borderRadius: 18,
    backgroundColor: '#bfc0c0'
  },
})