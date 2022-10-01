import React from 'react';
import { useState } from 'react';
import {login} from './firebase_create';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function Trivia() {
  const [username, setUsername] = useState("Username");
  const [password, setPassword] = useState("Password");
  
  return (
    <View>
        <Text>
            <TextInput value={username}></TextInput>
            <TextInput value={password}></TextInput>
            <TouchableOpacity onPress={()=>{login(username, password)}}></TouchableOpacity>
        </Text>
    </View>
  )
}
