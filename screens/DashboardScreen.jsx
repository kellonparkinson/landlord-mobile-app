import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

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
            <MaterialCommunityIcons name='lightning-bolt' size={40} color='#242424' />
            <Text style={styles.subHeading}>Scheduler</Text>
          </View>

          <Text style={{marginHorizontal: 8, marginVertical: 12, fontSize: 16, fontWeight: '700', color: '#242424'}}>You have {numScheduled} scheduled messages</Text>

          <View style={styles.addBtn}>
              <MaterialIcons name='library-add' size={22} color='#d1ff17' />
              <Text style={{marginHorizontal: 8, fontSize: 16, fontWeight: '700', color: '#d1ff17'}}>Add new</Text>
            </View>
        </Pressable>

        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Templates')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='message-bookmark' size={40} color='#242424' />
            <Text style={styles.subHeading}>Templates</Text>
          </View>
          <View style={styles.moduleInfo}>
            <Text style={styles.modListItem}>Late Rent Policy</Text>
            <Text style={styles.modListItem}>Application Qualifications</Text>
          </View>
            <View style={styles.addBtn}>
              <MaterialIcons name='library-add' size={22} color='#d1ff17' />
              <Text style={{marginHorizontal: 8, fontSize: 16, fontWeight: '700', color: '#d1ff17'}}>Add new</Text>
            </View>
        </Pressable>

        <Pressable
          style={styles.module}
          onPress={() => navigation.navigate('Properties')}
        >
          <View style={styles.moduleHeader}>
            <MaterialCommunityIcons name='home-group' size={40} color='#242424' />
            <Text style={styles.subHeading}>Properties</Text>
          </View>
          <View style={styles.moduleInfo}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <MaterialCommunityIcons name="home" size={22} color="#242424" />
              <Text style={styles.modListItem}>153 Getrich Street</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <MaterialCommunityIcons name="home" size={22} color="#242424" />
              <Text style={styles.modListItem}>99 Cashflow Ln</Text>
            </View>
          </View>
          <View style={styles.addBtn}>
              <MaterialIcons name='view-list' size={22} color='#d1ff17' />
              <Text style={{marginHorizontal: 8, fontSize: 16, fontWeight: '700', color: '#d1ff17'}}>Manage</Text>
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
            <MaterialCommunityIcons name='cogs' size={40} color='#242424' />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  moduleHeader: {
    width: '100%',
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
    color: '#242424',
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  modListItem: {
    color: '#242424',
    fontSize: 16,
    fontWeight: '600',
    margin: 12,
  },
  addBtn: {
    width: '45%',
    flexDirection: 'row',
    marginBottom: 18,
    marginTop: 6,
    backgroundColor: '#242424',
    borderRadius: 18,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#686868',
    marginBottom: 12,
  },
})