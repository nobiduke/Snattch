import {View, Text, Button, StyleSheet} from 'react-native';

export default function Profile({auth, next}) {

  return (
    <View>
        <Text>
        </Text>
        <Button title='Sign Out' onPress={()=>{next(4); auth.signOut();}}></Button>
    </View>
  )
}
