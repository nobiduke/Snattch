import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { writeUserData } from './firebase_database';

export default function CreateAccount({auth, next}) {
  
    const [profname, changeProfName] = useState(null);
    const [gender, changeGender] = useState(null);
    const [age, changeAge] = useState(null)
    const [bio, changeBio] = useState(null);

    function trigger(){
        writeUserData(auth.currentUser.uid, profname, gender, age, bio);
    }

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
        bioBox:{
            fontSize:20,
            marginTop:20,
            marginBottom:20
        },
        loginButtons:{
          marginTop: 15,
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
        <Text style={styles.title}>Please enter your name and a bio for your account!</Text>
        <TextInput style={styles.loginBoxes} onChangeText={changeProfName} value={profname} placeholder='Name'></TextInput>
        <TextInput style={styles.loginBoxes} onChangeText={changeGender} value={gender} placeholder='Gender'></TextInput>
        <TextInput style={styles.loginBoxes} onChangeText={changeAge} value={age} placeholder='Age'></TextInput>
        <TextInput style={styles.bioBox} onChangeText={changeBio} value={bio} placeholder='Bio'></TextInput>
        <Button title='Submit' onPress={()=>{trigger();next(3)}}></Button>
    </View>
    )
}