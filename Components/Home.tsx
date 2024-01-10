import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }: { navigation: any }) => {
  const viewJob = () => {
    navigation.navigate('ViewJob');
  }
  const Completed = () => {
    navigation.navigate('Completed');
  }
  const Pending = () => {
    navigation.navigate('Pending');
  }
  const Home = () => {
    navigation.navigate('Home');
  }
  const Profile = () => {
    navigation.navigate('Profile');
  }
  const Task = () => {
    navigation.navigate('Task');
  }
  const Logout = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={{ flex: 1, }}>

      
      <View style={style.main}>
        <TouchableOpacity onPress={() => viewJob()} >
          <Text style={style.Box1}>
            New Case                    30
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => viewJob()} >
          <Text style={style.Box2}>
            Completed               20
          </Text>
        </TouchableOpacity>
      </View>


      <View style={style.main}>
        <TouchableOpacity onPress={() => viewJob()}  >
          <Text style={style.Box3}>
            Pending               50
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => viewJob()}  >
          <Text style={style.Box4}>
            Rejected                40
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row',height:42,}}>
        <View style={{flex:1,}}>
          <TouchableOpacity onPress={()=>Home()}>
            <View style={style.logo}>
            <Ionicons name='home-sharp' color={'black'} size ={22} />
            </View>
            <View style={style.logo}>
              <Text style={{color:'black'}}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,}}>
          <TouchableOpacity onPress={()=>Profile()}>
            <View style={style.logo}>
            <Ionicons name='person-outline' color={'black'} size ={22} />
            </View>
            <View style={style.logo}>
              <Text style={{color:'black'}}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,}}>
          <TouchableOpacity onPress={()=>Task()}>
            <View style={style.logo}>
            <Ionicons name='reader-outline' color={'black'} size ={22} />
            </View>
            <View style={style.logo}>
              <Text style={{color:'black'}}>Task</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,}}>
          <TouchableOpacity onPress={()=>Logout()}>
            <View style={style.logo}>
            <Ionicons name='log-out-outline' color={'black'} size ={22} />
            </View>
            <View style={style.logo}>
              <Text style={{color:'black'}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>

  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 5,
  },
  Box1: {
    flex: 1,
    backgroundColor: "#edea54",
    color: "black",
    fontSize: 24,
    textAlign: 'center',
    padding: 0,
    margin: 10,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
    height: 300,
    width: 190,
    paddingTop: 150


  },
  Box2: {
    flex: 1,
    backgroundColor: "#17f20e",
    color: "black",
    fontSize: 24,
    textAlign: 'center',
    padding: 0,
    margin: 10,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
    height: 300,
    width: 190,
    paddingTop: 150


  },
  Box3: {
    flex: 1,
    backgroundColor: "#da8261",
    color: "black",
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
    height: 300,
    width: 190,
    paddingTop: 150


  }, Box4: {
    flex: 1,
    backgroundColor: "#fff",
    color: "black",
    fontSize: 24,
    textAlign: 'center',
    padding: 0,
    margin: 10,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
    height: 300,
    width: 190,
    paddingTop: 150,
  },
  futter: {
    textAlign: 'center',
    color: '#ffffff',
    padding: 8,
  },
  bnt:{ 
    flex: 1, 
    
    marginLeft:25
  },
  logo:{
    alignItems:'center',
    justifyContent:'center',
    resizeMode:'center'

  }
})

export default Home;
