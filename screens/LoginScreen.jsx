import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from 'react-native-elements'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {

  }

  return (
    <View style={styles.screenWrapper}>
      <Image
        source={require('../assets/sunset.png')}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder='Email'
          type='email'
          autoFocus
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          style={styles.input}
          placeholder='Password'
          type='password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.btnWrapper}>
        <Pressable
          style={styles.loginBtn}
          onPress={handleLogin}
        >
          <Text style={{ color: '#d1ff17', fontSize: 22, fontWeight: '600' }}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.registerBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{ color: '#242424', fontSize: 22, fontWeight: '600' }}>Register</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    screenWrapper: {
      height: '100%',
      wdith: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 18,
    },
    inputContainer: {
      width: 250,
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
      borderColor: '#e1e1e1'
    },
})