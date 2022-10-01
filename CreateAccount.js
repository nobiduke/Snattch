import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native';

export default function CreateAccount({next}) {
  
  return (
    <View>
        <Text style={styles.title}>Please enter your name and a bio for your account!</Text>
        <TextInput style={styles.loginBoxes} onChangeText={changeUsername} value={username}></TextInput>
        <TextInput style={styles.loginBoxes} onChangeText={changePassword} value={password}></TextInput>
        <Button title='Submit' onPress={()=>(next(2))}></Button>
    </View>
  )
}