import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Main from './Main';
import LoginPage from './LoginPage';
import { useEffect, useState } from 'react';
import {app} from './firebase';
import { getAuth } from 'firebase/auth';

export default function App() {

  const [auth, setAuth] = useState(getAuth(app));
  const [canChange, setCanChange] = useState(false);

  const [theme, setTheme] = useState('light');
  const [menu, setMenu] = useState(<LoginPage auth={auth} next={setCanChange}></LoginPage>);

  useEffect(()=>{
    if(canChange){
      setMenu(<Main auth={auth}></Main>);
      setCanChange(false);
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
