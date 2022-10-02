import { useEffect, useState } from 'react';
import TriviaBody from './TriviaBody';
import TriviaDone from './TriviaDone';
import { updateScoreUser } from './match';
import {View, Text, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native';
const QUESTIONS = require('./dailyQuestions.json');
const PERMS = require('./permutations.json');
const DAY = 0;

export default function Trivia({auth, Comp, setComp}) {

  const questionIndex = DAY;
  const [correct, setCorrect] = useState(0);
  const [answers, setAnswers] = useState([0,1,2,3])
  const [done, setDone] = useState(false);

  function getQuest(index){
      if(index == 0){
          return QUESTIONS[questionIndex]['correctAnswer'];
      } else{
          return QUESTIONS[questionIndex]['IncorrectAnswers'][index-1];
      }
  }

  function organizeQuestion(){
      let order = Math.floor(Math.random()*23);
      let list = []
      for(let i = 0; i < 4; i++){
          if(PERMS[order][i] == 0){
              setCorrect(i);
          }
          list.push(getQuest(PERMS[order][i]));
      }
      setAnswers(list);
  }

  function select(answer){
      if(answer == correct){
        updateScoreUser(auth.currentUser.uid, 10)
        console.log('correct')
      } else{
          console.log('wrong')
      }

      if(questionIndex+1 >= 1){
          setComp()
          setDone(true)
      }

      // setQuestionIndex(questionIndex+1);
  }

  useEffect(()=>{
      organizeQuestion();
  },[questionIndex])

  return (
    <View>
      {!Comp&&!done?<TriviaBody select={(e)=>select(e)} answers={answers} question={QUESTIONS[questionIndex]['Question']}></TriviaBody>:<TriviaDone></TriviaDone>}
    </View>
  )
}