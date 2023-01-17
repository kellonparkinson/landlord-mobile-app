import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { Input, Image } from 'react-native-elements'
import assets from '../data/dummyIndex'
import { MaterialIcons } from '@expo/vector-icons'

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate('Login')}>
          <MaterialIcons name='arrow-back-ios' size={24} color='#d1ff17'/>
        </Pressable>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.screenWrapper}>
      <Image
        source={assets.logoYellow}
        style={styles.logo}
      />
      <View>
        <Text style={{fontSize: 32, color: '#fff', fontWeight: '600', marginBottom: 30}}>Welcome!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder='Name'
          placeholderTextColor={'#bfc0c0'}
          selectionColor={'#d1ff17'}
          type='username'
          autoFocus
          onChangeText={(text) => setUserName(text)}
        />
        <Input
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={'#bfc0c0'}
          selectionColor={'#d1ff17'}
          type='email'
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={'#bfc0c0'}
          selectionColor={'#d1ff17'}
          type='password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          style={styles.input}
          placeholder='Preferred area code (e.g. 385, 208)'
          placeholderTextColor={'#bfc0c0'}
          selectionColor={'#d1ff17'}
          type='areacode'
          // onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.btnWrapper}>
        <Pressable
          style={styles.registerBtn}
          onPress={handleRegister}
        >
          <Text style={{ color: '#d1ff17', fontSize: 22, fontWeight: '600' }}>Register</Text>
        </Pressable>

        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: '#242424', fontSize: 20, fontWeight: '600' }}>Already a member? </Text>
          <Text style={{ color: '#bfc0c0', fontSize: 20, fontWeight: '600' }}> Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screenWrapper: {
      height: '100%',
      wdith: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3e3e3e'
    },
    logo: {
      width: 180,
      height: 180,
      borderRadius: 18,
      marginBottom: 20,
    },
    inputContainer: {
      width: '85%',
      marginBottom: 32,
    },
    input: {
      width: '80%',
    },
    btnWrapper: {
      width: '100%',
    },
    registerBtn: {
      width: '100%',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#242424',
    },
    loginBtn: {
      width: '100%',
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderColor: '#242424',
      marginBottom: 22
    },
})