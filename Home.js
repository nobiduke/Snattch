import { useEffect, useState } from 'react';
import {StyleSheet, TouchableHighlight, View, Image, Text, ScrollView, Button, TouchableOpacity} from 'react-native';
import { updateUserPossMatches, updateUserMatches } from './match';

const testprofs = [
    {name:'Landon Jones', coverLink:require('./assets/profiles/landongaze.jpg')},
    {name:'Luis Rodriguez', coverLink:require('./assets/profiles/luisascends.jpg')},
    {name: 'Turtle', coverLink:require('./assets/profiles/turtlewindow.jpg')},
    {name: 'Manav Bhatt', coverLink:require('./assets/profiles/manavmenace.jpg')},
    {name: 'Steve Levy', coverLink:require('./assets/profiles/steve.jpg')},
    {name: 'Alan Nguyen', coverLink:require('./assets/profiles/alanmanavwalk.png')},
]

export default function Home({profiles, auth}) {
    // console.log(profiles);
    const [profileNum, setProfileNum] = useState(0);
    // let profile = {name:'Landon Jones', coverLink:require('./assets/landongaze.jpg')};
    const [buffer, setBuffer] = useState(400);
    const [attrOpacity, setAttrOpacity] = useState(0);
    
    const styles = StyleSheet.create({
        buffer:{
            height:buffer
        },
        bufferBottom:{
            height:100
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
            fontSize:30,
            fontFamily:'Arial',
        },
        innerText:{
            fontSize:25,
            fontFamily:'Arial',
            paddingVertical:10,
            paddingHorizontal:10
        },
        coverHolder:{
            opacity:attrOpacity,
            position:attrOpacity==100?'relative':'absolute',
            top:attrOpacity==100?'0%':'100%',
            backgroundColor:'#DDDDDD',
            borderRadius:10,
            width:370,
            shadowColor: '#777777',
            shadowOffset:{width:5, height:5},
            marginHorizontal:10,
            shadowOpacity:1,
            marginVertical:15,
        },
        bioHolder:{
            opacity:attrOpacity,
            position:attrOpacity==100?'relative':'absolute',
            top:attrOpacity==100?'0%':'100%',
            backgroundColor:'#DDDDDD',
            borderRadius:10,
            width:370,
            shadowColor: '#777777',
            shadowOffset:{width:5, height:5},
            marginHorizontal:10,
            shadowOpacity:1,
            marginVertical:15,
        },
        coverImg:{
            flex:1,
            opacity:attrOpacity,
            borderWidth:2,
            borderColor:'white',
            width:null,
            height:null,
            resizeMode:'contain',
        },
        yesButton:{
            width:185,
            height:70,
            backgroundColor:'#00FF00',
            borderRadius: 10,
            opacity:attrOpacity,
            shadowColor: '#777777',
            shadowOffset:{width:5, height:5},
            marginHorizontal:5,
            shadowOpacity:1,
            marginVertical:15,
        },
        noButton:{
            width:185,
            height:70,
            borderRadius: 10,
            backgroundColor:'#FF0000',
            opacity:attrOpacity,
            shadowColor: '#777777',
            shadowOffset:{width:5, height:5},
            marginHorizontal:5,
            shadowOpacity:1,
            marginVertical:15,
        },
        buttonHolder:{
            display:'flex',
            flexDirection:'row'
        },
    });

    function openProfile(){
        buffer==50?setBuffer(400):setBuffer(50);
        attrOpacity==0?setAttrOpacity(100):setAttrOpacity(0);
    }

    function yesProfile(){
        updateUserPossMatches(auth.currentUser.uid, profiles[profileNum]['Id']);
        updateUserMatches(auth.currentUser.uid, profiles[profileNum]['Id'])
        setProfileNum(profileNum<5?profileNum+1:0);
        openProfile();
    }
    
    function noProfile(){
        setProfileNum(profileNum<5?profileNum+1:0);
        openProfile();
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={styles.buffer}></View>
            
            <TouchableOpacity onPress={()=>openProfile()}>
                <View style={styles.nameHolder}>
                    <Text style={styles.nameText}>{profiles.length>2?profiles[profileNum].Name:""}</Text>
                </View>
            </TouchableOpacity>
            
            <View style={styles.coverHolder}>
                <Text style={styles.innerText}>Age: {profiles.length>2?profiles[profileNum].Age:""} Gender: {profiles.length>2?profiles[profileNum].Gender:""}</Text>
            </View>

            <View style={styles.bioHolder}>
                <Text style={styles.innerText}>Bio: {profiles.length>2?profiles[profileNum].Bio:""}</Text>
            </View>

            <View style={styles.buttonHolder}>
                <TouchableOpacity onPress={()=>noProfile()}>
                    <View style={styles.noButton}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>yesProfile()}>
                    <View style={styles.yesButton}></View>
                </TouchableOpacity>
            </View>

            <View style={styles.bufferBottom}></View>  
        
        </ScrollView>
    )
}
