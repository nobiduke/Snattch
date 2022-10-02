import React, { useEffect } from 'react';
import { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
const QUESTIONS = require('./questions.json');
const PERMS = require('./permutations.json');

export default function CreateAccount({next}) {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [start, setStart] = useState(false);
    const [answers, setAnswers] = useState([0, 1, 2, 3])

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
        
        let list = []
        for(let i = 0; i < 3; i++){
            if(PERMS[order][i] == correct){
                setCorrect(i);
            }
            list.push(getQuest(PERMS[order][i]));
            list.push(getQuest(PERMS[order][i]));
            list.push(getQuest(PERMS[order][i]));
            list.push(getQuest(PERMS[order][i]));
        }
        setAnswers(list);

    }

    function select(answer){
        if(answer == correct){
            console.log('correct')
        } else{
            console.log('wrong')
        }

        setQuestionIndex(questionIndex+1);
        organizeQuestion();
    }

    useEffect(()=>{
        organizeQuestion();
    }, [start])

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
            opacity:start?100:0
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
            opacity:start?100:0
        },
        nameText:{
            fontSize:20,
            fontFamily:'Arial',
        },
        questionText:{
            fontSize:25,
            fontWeight:'bold',
            fontFamily:'Arial',
        },
        button:{
            opacity:start?100:0
        }
    });
  
    return (
    <View>
        <Button title='Start' onPress={()=>{setStart(true);}}></Button>
        <View style={styles.questionHolder}>
            <Text style={styles.questionText}>
                {QUESTIONS[questionIndex]['Question']}
            </Text>
        </View>
        <TouchableOpacity onPress={()=>select(0)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{answers[0]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(1)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{answers[1]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(2)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{answers[2]}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>select(4)}>
            <View style={styles.nameHolder}>
                <Text style={styles.nameText}>{answers[3]}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}