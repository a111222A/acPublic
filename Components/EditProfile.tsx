import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableHighlight, Modal, Pressable, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import { BASEURL } from '../Components/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';

const EditProfile = ({ navigation }: { navigation: any }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);
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
      } else {
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

  const editProfileSave = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!phoneNumber) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!address) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
    if (!name || !phoneNumber || !email || !address) {
      return false;
    }
    try {
      const userId = await AsyncStorage.getItem('userId');
      const registrationData = {
        id: userId,
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        user_type: 'technician',
        address: address,
      };
      const response = await fetch(BASEURL + '/updateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      const result = await response.json();
      if (result.success) {
        setModalVisible(true);
        //setData(result.data);
      } else {
        console.error('API request failed:', result.message);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Profile');
  };
  const imagePat = require('./assets/propic.jpg');

  return (
    <View style={styles.container}>
     <Image
        source={imagePat}
        style={styles.profileImage}
      />
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}

        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View>
                <Entypo name='check' color={'#76ff7a'} size={30} />
              </View>
              <Text style={{ fontWeight: '800', color: 'black' }}>Profile Updated Successful!</Text>
              <View style={{ margin: 10, }}>
                <Button title="Close" onPress={closeModal} color={'#008080'} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {loading ? <ActivityIndicator size={50} animating={loading} /> : ''}
      {/*<View>
     
      </View>*/}
      <Text style={styles.header}>Edit Profile</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={(text) => setName(text)}
        />
        {nameError ? <Text style={styles.errorMessage}> Please Enter Your First Name </Text> : ''}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={(text) => setEmail(text)}
        />
        {emailError ? <Text style={styles.errorMessage}> Please Enter Email ID </Text> : ''}

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile NO</Text>
        <TextInput style={styles.input} placeholder="Enter Your Mobile NO" value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)}
        />
        {phoneNumberError ? <Text style={styles.errorMessage}> Please Enter Phone Number </Text> : ''}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter Your Address" value={address} onChangeText={(text) => setAddress(text)}
        />
        {addressError ? <Text style={styles.errorMessage}> Please Enter Address </Text> : ''}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={editProfileSave}>
        <Text style={styles.saveButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    color: 'red'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000'
  },
  inputContainer: {
    marginBottom: 16,
    color: '#000'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    color: '#000'
  },
  saveButton: {
    backgroundColor: "#008080",
    color: "#ffffff",
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
});

export default EditProfile;
