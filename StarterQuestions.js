import { browserLocalPersistence } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native';

export default function CreateAccount({next}) {

    function select(answer){
        switch(answer){
            case 0:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                break;
        }
    }

    const styles = StyleSheet.create({
        nameHolder:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:370,
            height:70,
            backgroundColor:'#DDDDDD',
            borderRadius:10,
            shadowColor: '#777777',
            shadowOffset:{width:5, height:5},
            marginHorizontal:10,
            shadowOpacity:1,
            marginVertical:15,
        },
        nameText:{
            fontSize:30,
            fontFamily:'Arial',
        }
    });
  
    return (
    <View>
        <View style={styles.nameHolder}>
            <Text style={styles.nameText}>
                Question
            </Text>
        </View>
        <TouchableOpacity onPress={()=>select(0)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>A</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(1)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>B</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(2)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>C</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(4)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>D</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}