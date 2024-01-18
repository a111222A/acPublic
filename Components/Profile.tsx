
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { BASEURL } from '../Components/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';



// ProfilePage component
const ProfilePage = ({ navigation }: { navigation: any }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const getProfile = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem('userId');
      console.log(userId);
      const profileRequestData = {
        id: userId,
        user_type: 'technician'
      };
      const response = await fetch(BASEURL + '/editProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileRequestData),
      });
      const result = await response.json();
      
      setLoading(false);
      if (result.success) {
        const profileDatails = result.data;
        setName(profileDatails.name);
        setPhoneNumber(profileDatails.moblie_number);
        setEmail(profileDatails.email);
        setAddress(profileDatails.address);
        console.log(profileDatails);
      }else{
        console.error(result.message);
      }
      

    } catch (error) {
      setLoading(false);
      console.error(error);
    }

  }
  useEffect(() => {
    getProfile();
  }, [])


  const EditProfile = () => {
    navigation.navigate('EditProfile');
  }
  const imagePat = require('./assets/propic.jpg');
  return (
    <View style={styles.container}>
      {loading?<ActivityIndicator size={50} animating={loading}/>:''}
      <Image
        source={imagePat}
        style={styles.profileImage}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.username}>{name}</Text>
        <TouchableHighlight onPress={() => EditProfile()} >
          <Entypo name='edit' color={'#f70000'} size={30} />
        </TouchableHighlight>
      </View>
      <Text style={styles.bio}>Software Developer</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: {email}</Text>
        <Text style={styles.infoText}>Mobile No: {phoneNumber}</Text>
        <Text style={styles.infoText}>Address: {address} </Text>
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000'
  },
  bio: {
    fontSize: 18,
    marginBottom: 16,
    color: '#000'
  },
  infoContainer: {
    width: '100%',
    padding: 16,
    borderWidth: 5,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',


  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000'
  },
});

export default ProfilePage;
