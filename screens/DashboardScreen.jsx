import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DashboardScreen = ({ navigation }) => {
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

      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.line}></View>
      </View>

      <View style={{ marginHorizontal: 12 }}>
        <Text style={styles.header}>Messaging Tools</Text>
      </View>

      <View style={styles.mainModWrapper}>
        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Scheduler')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='lightning-bolt' size={30} color='#000' />
            <Text style={styles.subHeading}>Scheduler</Text>
          </View>
          <Text>{numScheduled} scheduled messages</Text>
        </Pressable>

        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Templates')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='message-bookmark' size={30} color='#000' />
            <Text style={styles.subHeading}>Templates</Text>
          </View>
        </Pressable>
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.line}></View>
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
    height: 50,
    marginBottom: 16,
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
    padding: 12,
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
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
  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#686868',
    marginBottom: 12,
  },
})