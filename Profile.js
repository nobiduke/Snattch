import React from 'react';
import { useState } from 'react';
import {login} from './firebase_create';
import {View, Text, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native';

export default function Profile({user}) {
  const [username, changeUsername] = useState("Username");
  const [password, changePassword] = useState("Password");
  
  const styles = StyleSheet.create({

  })

  return (
    <View>
        <Text>
        </Text>
    </View>
  )
}