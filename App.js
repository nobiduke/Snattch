import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomBar from './BottomBar';
import Home from './Home';
import Trivia from './Trivia';
import { useState } from 'react';

export default function App() {

  const [theme, setTheme] = useState('light');
  const [menu, setMenu] = useState(<Home></Home>);

  function menuChange(menuName){
    if(menuName == 'trivia'){
      setMenu(<Trivia></Trivia>);
    } else if(menuName == 'profile'){
      setMenu(<View></View>);
    } else{
      setMenu(<Home></Home>)
    }
  }

  return (
    <View style={styles.container}>
      <View>
      </View>

      {menu}

      <BottomBar theme={theme} clicked={menuChange}></BottomBar>
      
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
