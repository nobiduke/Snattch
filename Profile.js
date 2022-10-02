import React from 'react';
import { useState } from 'react';
import {login} from './firebase_create';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Profile({user, auth, next}) {
  
  const styles = StyleSheet.create({

  })

  return (
    <View>
        <Text>
        </Text>
        <Button title='Sign Out' onPress={()=>{next(4); auth.signOut();}}></Button>
    </View>
  )
}
