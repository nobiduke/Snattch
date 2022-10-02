import { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { getMatches } from './match';

export default function Profile({auth, next}) {

  const[person, setPerson] = useState(getMatches(auth.currentUser.uid))

  const styles=StyleSheet.create({
    text:{
      fontSize:28,
      marginVertical:10,
      fontFamily:'Arial',
    },
    holder:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  });

  return (
    <View>
        <Text style={styles.text}>
          {person==""||person==null?"No Matches":"Matches"}
        </Text>
        <Text style={styles.text}>
          {person==""||person==null?"":`Name: ${person.Name}, Age: ${person.Age}, Gender: ${person.Gender}`}
        </Text>
        <Button title='Sign Out' onPress={()=>{next(4); auth.signOut();}}></Button>
    </View>
  )
}
