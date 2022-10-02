import React from 'react';
import { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const QUESTIONS = require('./questions.json');
const PERMS = require('./permutations.json');

export default function CreateAccount({next}) {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [A, setA] = useState(null);
    const [B, setB] = useState(null);
    const [C, setC] = useState(null);
    const [D, setD] = useState(null);

    function getQuest(index){
        if(index == 0){
            return QUESTIONS[questionIndex]['correctAnswer'];
        } else{
            return QUESTIONS[questionIndex]['IncorrectAnswers'][index-1];
        }
    }

    function organizeQuestion(){
        let quest = QUESTIONS[questionIndex];
        let order = Math.floor(Math.random()*23);
        
        setA(getQuest(PERMS[order][0]));
        setB(getQuest(PERMS[order][1]));
        setC(getQuest(PERMS[order][2]));
        setD(getQuest(PERMS[order][3]));

    }

    function select(answer){
        if(answer == correct){
            
        } else{

        }
    }

    const styles = StyleSheet.create({
        questionHolder:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:370,
            height:80,
            backgroundColor:'#AAAAAA',
            borderRadius:10,
            shadowColor: '#777777',
            shadowOffset:{width:5, height:5},
            marginHorizontal:10,
            shadowOpacity:1,
            marginVertical:0,
        },
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
            fontSize:20,
            fontFamily:'Arial',
        },
        questionText:{
            fontSize:25,
            fontWeight:'bold',
            fontFamily:'Arial',
        }
    });
  
    return (
    <View>
        <View style={styles.questionHolder}>
            <Text style={styles.questionText}>
                {QUESTIONS[questionIndex]['Question']}
            </Text>
        </View>
        <TouchableOpacity onPress={()=>select(0)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{A}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(1)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{B}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(2)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{C}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(4)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{D}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}