import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableHighlight, TouchableOpacity,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BASEURL } from '../Components/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }: { navigation: any }) => {
  const [loading, setLoading] = useState(false);
  const loginId = '1';
  
  const [userId, setUserId] = useState();
  const [jobId1, setJobId1] = useState(1);
  const [jobId2, setJobId2] = useState(2);
  const [jobId3, setJobId3] = useState(3);
  const [jobId4, setJobId4] = useState(4);

  const [jobName1, setJobName1] = useState('New Job');
  const [jobName2, setJobName2] = useState('Completed Job');
  const [jobName3, setJobName3] = useState('Pending Job');
  const [jobName4, setJobName4] = useState('Rejected Job');

  const [jobCount1, setJobCount1] = useState(0);
  const [jobCount2, setJobCount2] = useState(0);
  const [jobCount3, setJobCount3] = useState(0);
  const [jobCount4, setJobCount4] = useState(0);
  const getWorkingStatus = async () => {
    try {
      setLoading(true);
      const storageUserId = await AsyncStorage.getItem('userId');
      setUserId(storageUserId);
      const response = await fetch(BASEURL + '/technicianDashboard?technician_id='+storageUserId);
      const result = await response.json();
      setLoading(false);
      if (result.success) {
        const resultData = result.data;
        resultData.forEach((item:any) => {
          if (item.id == 1) {
            setJobId1(item.id);
            setJobName1(item.name);
            setJobCount1(item.count);
          } else if (item.id == 2) {
            setJobId2(item.id);
            setJobName2(item.name);
            setJobCount2(item.count);
          } else if (item.id == 3) {
            setJobId3(item.id);
            setJobName3(item.name);
            setJobCount3(item.count);
          } else {
            setJobId4(item.id);
            setJobName4(item.name);
            setJobCount4(item.count);
          }
        });
      } else {
        console.error(result.message);
      }

    } catch (error) {
      setLoading(false);
      console.error(error);
    }

  }
  useEffect(() => {
    getWorkingStatus();
  }, [])
  const viewJob = (data:any) => {
    navigation.navigate('ViewJob',{ jobData: data });
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
      {loading?<ActivityIndicator size={50} animating={loading}/>:''}

      <View style={style.main}>
        <TouchableOpacity onPress={() => viewJob({id:userId,jobTypId:jobId1,jobTypeName:jobName1})} >
          <Text style={style.Box1}>
            {jobName1}                    {jobCount1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => viewJob({id:userId,jobTypId:jobId2,jobTypeName:jobName2})} >
          <Text style={style.Box2}>
            {jobName2}               {jobCount2}
          </Text>
        </TouchableOpacity>
      </View>


      <View style={style.main}>
        <TouchableOpacity onPress={() => viewJob({id:userId,jobTypId:jobId3,jobTypeName:jobName3})} >
          <Text style={style.Box3}>
            {jobName3}               {jobCount3}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => viewJob({id:userId,jobTypId:jobId4,jobTypeName:jobName4})} >
          <Text style={style.Box4}>
            {jobName4}                {jobCount4}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 42, }}>
        <View style={{ flex: 1, }}>
          <TouchableOpacity onPress={() => Home()}>
            <View style={style.logo}>
              <Ionicons name='home-sharp' color={'black'} size={22} />
            </View>
            <View style={style.logo}>
              <Text style={{ color: 'black' }}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, }}>
          <TouchableOpacity onPress={() => Profile()}>
            <View style={style.logo}>
              <Ionicons name='person-outline' color={'black'} size={22} />
            </View>
            <View style={style.logo}>
              <Text style={{ color: 'black' }}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, }}>
          <TouchableOpacity onPress={() => Task()}>
            <View style={style.logo}>
              <Ionicons name='reader-outline' color={'black'} size={22} />
            </View>
            <View style={style.logo}>
              <Text style={{ color: 'black' }}>Task</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, }}>
          <TouchableOpacity onPress={() => Logout()}>
            <View style={style.logo}>
              <Ionicons name='log-out-outline' color={'black'} size={22} />
            </View>
            <View style={style.logo}>
              <Text style={{ color: 'black' }}>Logout</Text>
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
  bnt: {
    flex: 1,

    marginLeft: 25
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center'

  }
})

export default Home;
