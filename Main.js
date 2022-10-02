import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomBar from './BottomBar';
import Home from './Home';
import Trivia from './Trivia';
import { useEffect, useState } from 'react';
import Profile from './Profile';
import { userMatching } from './match';

const BASE_PROF = [{Name:'', Age:'', Gender:'', Bio:''}]

export default function Main({auth, next}) {

  const [completed, setCompleted] = useState(false)
  const [profiles, setProfile] = useState([])
  const [menu, setMenu] = useState(<Profile auth={auth} next={next}></Profile>);

  useEffect(()=>{
    if(profiles == null){
      setMenu(<Home profiles={profiles} auth={auth}></Home>)
    } else if(profiles.length < 2){
      setMenu(<Home profiles={profiles} auth={auth}></Home>)
    }
  }, [profiles])

  function setComp(){
    setCompleted(true);
  }

  function menuChange(menuName){
    if(menuName == 'trivia'){
      setMenu(<Trivia auth={auth} Comp={completed} setComp={()=>{setComp()}}></Trivia>);
    } else if(menuName == 'profile'){
      setMenu(<Profile auth={auth} next={next}></Profile>);
    }else{
      setProfile(userMatching(auth.currentUser.uid)["_3"])
      setMenu(<Home profiles={profiles} auth={auth}></Home>)
    }
  }

  return (
    <View style={styles.container}>
      <View>
      </View>

      {menu}

      <BottomBar theme={'light'} clicked={menuChange}></BottomBar>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFFF'
  },

});
