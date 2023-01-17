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
        <Text style={styles.header}>Manager Tools</Text>
      </View>

      <View style={styles.mainModWrapper}>
        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Scheduler')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='lightning-bolt' size={40} color='#000' />
            <Text style={styles.subHeading}>Scheduler</Text>
          </View>
          {/* <Text>{numScheduled} scheduled messages</Text> */}
        </Pressable>

        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Templates')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='message-bookmark' size={40} color='#000' />
            <Text style={styles.subHeading}>Templates</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Properties')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='home-group' size={40} color='#000' />
            <Text style={styles.subHeading}>Properties</Text>
          </View>
        </Pressable>
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.line}></View>
      </View>

      <View style={styles.smallModWrapper}>
        <Pressable
          style={styles.smallModule}
          onPress={() => navigation.navigate('Settings')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='cogs' size={40} color='#000' />
            <Text style={styles.subHeading}>Settings</Text>
          </View>
        </Pressable>
      </View>

      <View style={{height: 14, width: '100%'}}></View>

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
    height: 650,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  module: {
    width: '94%',
    height: '30%',
    backgroundColor: '#d1ff17',
    borderRadius: 18,
    borderBottomRightRadius: 0,
    padding: 12,
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  smallModWrapper: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  smallModule: {
    width: '94%',
    height: '100%',
    borderRadius: 18,
    backgroundColor: '#bfc0c0',
    padding: 12,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  subHeading: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#686868',
    marginBottom: 12,
  },
})