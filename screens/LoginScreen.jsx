import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState, useRef, useLayoutEffect } from 'react'
import { Input, Image } from 'react-native-elements'
import assets from '../data/dummyIndex'
import { MaterialIcons } from '@expo/vector-icons'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleLogin = () => {
    navigation.navigate('Tabs')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <MaterialIcons name='arrow-back-ios' size={24} color='#d1ff17'/>
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screenWrapper}
      keyboardVerticalOffset={90}
    >
      <Image
        source={assets.logoYellow}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={'#bfc0c0'}
          selectionColor={'#d1ff17'}
          type='email'
          autoFocus
          onChangeText={(text) => setEmail(text)}
          ref={emailRef}
        />
        <Input
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={'#bfc0c0'}
          selectionColor={'#d1ff17'}
          type='password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          ref={passwordRef}
        />
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handleLogin}
        >
          <Text style={{ color: '#d1ff17', fontSize: 22, fontWeight: '600' }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{ color: '#a4a4a4', fontSize: 20, fontWeight: '600' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    screenWrapper: {
      height: '100%',
      wdith: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3e3e3e'
    },
    logo: {
      width: 250,
      height: 250,
      borderRadius: 18,
      marginBottom: 20,
    },
    inputContainer: {
      width: 250,
      marginBottom: 32,
    },
    input: {
      color: '#fff'
    },
    btnWrapper: {
      width: '100%',
    },
    loginBtn: {
      width: '100%',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#242424',
    },
    registerBtn: {
      width: '100%',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderColor: '#242424'
    },
})