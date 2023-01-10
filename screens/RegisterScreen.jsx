import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Input, Image } from 'react-native-elements'

const RegisterScreen = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {

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
          placeholder='Name'
          type='username'
          autoFocus
          onChangeText={(text) => setUserName(text)}
        />
        <Input
          style={styles.input}
          placeholder='Email'
          type='email'
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
          style={styles.registerBtn}
          onPress={handleRegister}
        >
          <Text style={{ color: '#d1ff17', fontSize: 22, fontWeight: '600' }}>Register</Text>
        </Pressable>

        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: '#242424', fontSize: 20, fontWeight: '400' }}>Login</Text>
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
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 18,
      marginBottom: 20,
    },
    inputContainer: {
      width: 250,
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
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderColor: '#e1e1e1'
    },
})