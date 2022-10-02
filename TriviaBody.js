import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function TriviaBody({select, answers, question}) {
  

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
        opacity:100
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
        opacity:100
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
        opacity:100
    }
});

return (
<View>
    <View style={styles.questionHolder}>
        <Text style={styles.questionText}>
            {question}
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
    <TouchableOpacity onPress={()=>select(3)}>
        <View style={styles.nameHolder}>
            <Text style={styles.nameText}>{answers[3]}</Text>
        </View>
    </TouchableOpacity>
</View>
)
}
