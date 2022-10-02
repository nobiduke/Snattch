import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import Main from './Main';
import CreateAccount from './CreateAccount';
import LoginPage from './LoginPage';
import StarterQuestions from './StarterQuestions';
import { useEffect, useState } from 'react';
import {app} from './firebase';
import { getAuth } from 'firebase/auth';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from \'@react-native-async-storage/async-storage\' instead of \'react-native\'. See https://github.com/react-native-async-storage/async-storage']);

export default function App() {

  const [auth, setAuth] = useState(getAuth(app));
  const [canChange, setCanChange] = useState(0);

  const [theme, setTheme] = useState('light');
  const [menu, setMenu] = useState(<LoginPage auth={auth} next={setCanChange}></LoginPage>);

  useEffect(()=>{
    if(canChange == 1){
      setMenu(<Main auth={auth} next={setCanChange}></Main>);
      setCanChange(0);
    } else if(canChange == 2){
      setMenu(<CreateAccount auth={auth} next={setCanChange}></CreateAccount>);
      setCanChange(0);
    } else if(canChange == 3){
      setMenu(<StarterQuestions auth={auth} next={setCanChange}></StarterQuestions>)
      setCanChange(0);
    } else if(canChange == 4){
      setMenu(<LoginPage auth={auth} next={setCanChange}></LoginPage>);
      setCanChange(0);
    }
  }, [canChange]);

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
