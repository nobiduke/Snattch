import React from 'react';
import { useState } from 'react';
import {login} from './firebase_create';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

export default function Trivia() {
  const [username, changeUsername] = useState("Username");
  const [password, changePassword] = useState("Password");
  
  return (
    <View>
        <Text>
          yah
        </Text>
        <TextInput onChangeText={changeUsername} value={username}></TextInput>
        <TextInput onChangeText={changePassword} value={password}></TextInput>
        <Button title='click' onPress={()=>{login(username, password)}}></Button>
    </View>
  )
}
