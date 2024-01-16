import React, { Component, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { BASEURL } from '../Components/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyPhone = ({ navigation, route }: { navigation: any }) => {
  const [error, setError] = useState(null);
  const { sendData } = route.params;
  const otp = sendData.otp;
  const moblie_number = sendData.moblie_number;
  console.log(moblie_number);
  const verifyOTP = async () => {
    try {
      const otpData = {
        mobile_no: moblie_number,
        user_type: 'technician',
        otp: otp,
      };
      const response = await fetch(BASEURL + '/otpValidation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otpData),
      });
      const result = await response.json();
      if (result.success) {
        setError(null);
        const name = result.data.name;
        const moblie_number = result.data.moblie_number;
        const userId = result.data.id;
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('moblie_number', moblie_number);
        await AsyncStorage.setItem('userId', userId);
        navigation.navigate('Dashbord');
        //console.warn(name);
        
      } else {
        setError(result.message);
      }
    } catch (e) {
      setError(e.message);
    }
  }





  const ResendCode = () => {
    navigation.navigate('RequestOT');
  }

  return (
    <View style={{ flex: 1, }}>


      <Text style={{ fontSize: 10, color: '#000000', margin: 10, }}> Please veeify your mobile number</Text>

      <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000000', margin: 10 }}> Enter then verify code send to to : {moblie_number}</Text>
      <Text>OTP from : {otp}</Text>

      <TextInput placeholder=' Enter Your OTP' value={String(otp)} editable={false} style={{ borderColor: 'black', color: 'black', borderWidth: 1, fontSize: 20, margin: 10, }} />
      <TouchableOpacity onPress={() => verifyOTP()}>
        <Text style={style.Button}>
          Verify OTP</Text>
      </TouchableOpacity>
      {error ? <Text style={style.errorMessage}> {error} </Text> : ''}
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ margin: 6, color: '#000000' }}>Don't received code?</Text>
        <View style={{ margin: 6 }}>
          <TouchableOpacity onPress={() => ResendCode()}>
            <Text style={{ color: 'blue', }}>Resend code</Text>
          </TouchableOpacity>
        </View >

      </View>
    </View>
  )
}
const style = StyleSheet.create({
  Button: {
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
  errorMessage: {
    fontSize: 20,
    color: 'red'
},
})
export default VerifyPhone;