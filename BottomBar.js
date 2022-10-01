import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

export default function BottomBar({theme, clicked}) {


  return (
    <View style={styles.bottomBar}>
        <TouchableOpacity onPress={()=>clicked('trivia')} style={styles.bottomButton}>
          <View style={styles.bottomBarImageHolder}>
            <Image style={styles.bottomBarImage} source={require('./assets/bottomBar/triviabuttonlight.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>clicked('home')} style={styles.bottomButton}>
        <View style={styles.bottomBarImageHolder}>
            <Image style={styles.bottomBarImage} source={require('./assets/bottomBar/homebuttonlight.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>clicked('profile')} style={styles.bottomButton}>
        <View style={styles.bottomBarImageHolder}>
            <Image style={styles.bottomBarImage} source={require('./assets/bottomBar/profilebuttonlight.png')}></Image>
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
bottomBar:{
    top:'90%',
    width:'100%',
    paddingBottom:40,
    paddingTop:10,
    borderTopWidth: '2px solid #C1A37B',
    position:'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#7788BB'
  },
  bottomButton:{
    marginHorizontal:30,
  },
  bottomBarImageHolder:{
    height:50,
    width:50,
  },
  bottomBarImage:{
    flex:1,
    width: null,
    height:null,
    resizeMode:'contain'
  }
});