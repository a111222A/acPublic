import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BASEURL } from '../Components/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashbord = ({ navigation }: { navigation: any }) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [moblieNumber, setMoblieNumber] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nameValue = await AsyncStorage.getItem('name');
        const moblieNumberValue = await AsyncStorage.getItem('moblie_number');
        setName(nameValue);
        setMoblieNumber(moblieNumberValue);
        if (nameValue !== null) {
          console.log('Name value from AsyncStorage:', nameValue);
          // Do something with the retrieved value, such as updating the component state
        } else {
          console.log('Name value not found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);




  const imagePaths = require('./assets/acreapir.png')
  const imagePat = require('./assets/propic.jpg');
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
  const ManageAddress = () => {
    navigation.navigate('ManageAddress');
  }
  const RegisterComplaint = () => {
    navigation.navigate('RegisterComplaint');
  }
  const Incomplite = () => {
    navigation.navigate('Incomplite');
  }
  const managePayments = () => {
    navigation.navigate('managePayments');
  }
  const ServicePrice = () => {
    navigation.navigate('ServicePrice');
  }
  const Discount = () => {
    navigation.navigate('Discount');
  }
  const MyVouchers = () => {
    navigation.navigate('MyVouchers');
  }
  const ChangePassword = () => {
    navigation.navigate('ChangePassword');
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', }}>
          <Image
            source={imagePat}
            style={style.profileImage}
          />
          <View>
            <Text style={{ marginTop: 12, fontWeight: 'bold', color: '#000', marginLeft: 30 }}>
              Welcome {name}
            </Text >
            <View style={{ flexDirection: 'row', marginLeft: 30 }}><Feather name='phone-call' color={'#008080'} size={20} />
              <Text style={{ marginTop: 3, fontWeight: 'bold', color: '#000', marginLeft: 10 }}>
                +91 {moblieNumber}
              </Text>
            </View>
          </View>
        </View >




        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5, height: 100 }}>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => ManageAddress()}>
              <View style={{ marginLeft: 40 }}>
                <AntDesign name='enviroment' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Manage Address</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => RegisterComplaint()}>
              <View style={{ marginLeft: 40 }}>
                <AntDesign name='edit' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Register Complaint</Text></View>
            </TouchableOpacity >
          </View>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => Incomplite()}>
              <View style={{ marginLeft: 40 }}>
                <Feather name='alert-triangle' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Incompite Request </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <View style={{ flex: 1, flexDirection: 'row', margin: 5, height: 100 }}>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => managePayments()}>
              <View style={{ marginLeft: 40 }}>
                <Entypo name='credit' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Manage Payments</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => ServicePrice()}>
              <View style={{ marginLeft: 40 }}>
                <AntDesign name='profile' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Service Price List</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => Discount()}>
              <View style={{ marginLeft: 40 }}>
                <Feather name='gift' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Discount coupons</Text></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5 }}>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => MyVouchers()}>
              <View style={{ marginLeft: 40 }}>
                <Entypo name='price-tag' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>My Vouchers</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => ChangePassword()} >
              <View style={{ marginLeft: 40 }}>
                <AntDesign name='key' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>Change PassWord</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, borderColor: '#000', borderWidth: 1, marginLeft: 5, }}>
            <TouchableOpacity onPress={() => Home()} >
              <View style={{ marginLeft: 40 }}>
                <Feather name='package' color={'#008080'} size={40} />
              </View>
              <View style={style.text}><Text style={{ fontWeight: '700', color: '#000' }}>My Job</Text></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: 'black', width: 396, height: 150, margin: 5, marginLeft: 10, }}>
          <View style={style.container}>
            <Image source={imagePaths} style={style.image} />
          </View>
        </View></ScrollView>

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
  )
}
const style = StyleSheet.create({
  bnt: {
    flex: 1,

    marginLeft: 25,
    margin: 10,
    borderWidth: 1

  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center'

  },
  text: {
    marginLeft: 40,
    margin: 10,

  }, container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 396,
    height: 150,
    resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 75,
    marginBottom: 16,
    
  },
})
export default Dashbord;