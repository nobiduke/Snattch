import React from 'react';
import { useState } from 'react';
import {login} from './firebase_create';
import {signOn} from './firebase_signin';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { AuthCredential } from 'firebase/auth';

export default function LoginPage({auth, next}) {
  const [username, changeUsername] = useState("Username");
  const [password, changePassword] = useState("Password");
  
  const styles = StyleSheet.create({
    title: {
      marginBottom: 40,
      fontSize: 45,
      fontFamily: 'Arial',
      fontWeight: 'bold'
    },
    loginBoxes: {
      marginTop:10,
      marginBottom:10,
      fontSize:25
    },
    holder:{
      display: 'grid',
      justifyContent:'center',
      alignItems:'center'
    },
    loginButtons:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
    }
  })

  return (
    <View style={styles.holder}>
        <Text style={styles.title}>Welcome!</Text>
        <TextInput style={styles.loginBoxes} onChangeText={changeUsername} value={username}></TextInput>
        <TextInput style={styles.loginBoxes} onChangeText={changePassword} value={password}></TextInput>
        <Button style={styles.loginButtons} title='Sign In' onPress={()=>{signOn(auth, username, password)}}></Button>
        <Button style={styles.loginButtons} title='Create Account' onPress={()=>{login(auth, username, password)}}></Button>
    </View>
  )
}
