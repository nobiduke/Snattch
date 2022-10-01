import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Trivia from './Trivia';
import LoginPage from './LoginPage';
import { useState } from 'react';
import {app} from './firebase';
import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

export default function App() {

  const [theme, setTheme] = useState('light');
  const [menu, setMenu] = useState(<LoginPage auth={auth} next={setMenu}></LoginPage>);

  return (
    <View style={styles.container}>
      <View>
      </View>

      {menu}

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
