import { browserLocalPersistence } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native';

export default function CreateAccount({next}) {

    function select(answer){
        switch(answer){
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }


  
    return (
    <View>
            <TouchableOpacity onPress={()=>openProfile()}>
                <View style={styles.nameHolder}>
                    <Text style={styles.nameText}>{profiles[profileNum].name}</Text>
                </View>
            </TouchableOpacity>
    </View>
    )
}