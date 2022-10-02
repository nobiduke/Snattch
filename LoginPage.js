import React, { useEffect } from 'react';
import { useState } from 'react';
import {login} from './firebase_create';
import {signOn} from './firebase_signin';
import {View, Text, TextInput, Button, StyleSheet, Image, ScrollView} from 'react-native';

export default function LoginPage({auth, next}) {
  const [username, changeUsername] = useState(auth.currentUser==null?null:auth.currentUser.email);
  const [password, changePassword] = useState(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(()=>{
    if(auth.currentUser != null){
      if(trigger == 1){
        next(1);
      } else if(trigger == 2){
        next(2);
      }
      setTrigger(0)
    }
  }, [trigger])
  
  const styles = StyleSheet.create({
    title: {
      marginBottom: 20,
      fontSize: 45,
      fontFamily: 'Arial',
      fontWeight: 'bold'
    },
    loginBoxes: {
      marginTop:10,
      marginBottom:20,
      fontSize:25
    },
    holder:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    loginButtons:{
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
    },
    image:{
      width:350,
      height:250,
      marginVertical:45,
      marginTop:-50,
    }
  })

  return (
    <ScrollView contentContainerStyle={styles.holder}>
        <Image style={styles.image} source={require("./assets/logoResize.png")}></Image>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.loginBoxes} onChangeText={changeUsername} value={username} placeholder='Email'></TextInput>
        <TextInput style={styles.loginBoxes} onChangeText={changePassword} value={password} placeholder='Password'></TextInput>
        <Button style={styles.loginButtons} title='Sign In' onPress={()=>{signOn(auth, username, password, setTrigger)}}></Button>
        <Button style={styles.loginButtons} title='Create Account' onPress={()=>{login(auth, username, password, setTrigger)}}></Button>
    </ScrollView>
  )
}
