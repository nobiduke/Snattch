import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Main from './Main';
import CreateAccount from './CreateAccount';
import LoginPage from './LoginPage';
import { useEffect, useState } from 'react';
import {app} from './firebase';
import { getAuth } from 'firebase/auth';

export default function App() {

  const [auth, setAuth] = useState(getAuth(app));
  const [canChange, setCanChange] = useState(0);

  const [theme, setTheme] = useState('light');
  const [menu, setMenu] = useState(<LoginPage auth={auth} next={setCanChange}></LoginPage>);

  useEffect(()=>{
    if(canChange == 1){
      setMenu(<Main auth={auth}></Main>);
      setCanChange(0);
    } else if(canChange == 2){
      setMenu(<CreateAccount next={setCanChange}></CreateAccount>);
      setCanChange(0);
    } else if(canChange == 3){
      setCanChange(0);
    }
  }, [canChange])

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
