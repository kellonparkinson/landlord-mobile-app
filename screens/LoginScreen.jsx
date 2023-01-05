import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from 'react-native-elements'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

      <View>
        <Button title='Login'/>
        <Button title='Register'/>
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
      backgroundColor: '#e1e1e1',
      width: 250,
    },
})