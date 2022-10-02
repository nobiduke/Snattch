import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function TriviaDone() {
  
  const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontFamily:'Arial',
        fontWeight:'bold',
    }
  })

  return (
    <View>
        <Text style={styles.title}>
            You've already completed the daily!
        </Text>
    </View>
  )
}
