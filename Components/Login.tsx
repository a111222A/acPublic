import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BASEURL } from '../Components/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }: { navigation: any }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState(null);
    const loginSubmit = async () => {
        //await AsyncStorage.clear();
        if (!phoneNumber) {
            setPhoneNumberError(true);
        } else {
            setPhoneNumberError(false);
        }
        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        if (!phoneNumber || !password) {
            return false;
        }
        try {
            const loginData = {
                mobile: phoneNumber,
                user_type: 'technician',
                password: password,
                device_id:'',
                fcm_token:''
            };
            const response = await fetch(BASEURL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            const result = await response.json();
            if (result.success) {
                setError(null);
                const sendData = {'moblie_number':result.data.moblie_number,'otp':result.otp};
                navigation.navigate('VerifyPhone',{ sendData: sendData});
            } else {
                setError(result.message);
            }
        } catch (e) {
            setError(e.message);
        }
        //navigation.navigate('Dashbord'); 
    }
    const RegisterCall = () => {
        navigation.navigate('Register')
    }
    const ForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }



    return (
        <View style={{ flex: 1, }}>
            
            <Text style={{ fontSize: 19, color: 'black', marginTop: 50, marginLeft: 10 }}> Phone Number :</Text>
            <TextInput style={style.InputBox} value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} placeholder='Please Enter Your Phone Number ' />
            {phoneNumberError ? <Text style={style.errorMessage}> Please Enter Your Phone Number </Text> : ''}

            <Text style={{ fontSize: 19, color: 'black', marginLeft: 10 }}> Password :</Text>
            <TextInput style={style.InputBox} value={password} onChangeText={(text) => setPassword(text)} placeholder='Please Enter Your Password '
                secureTextEntry={true} />
            {passwordError ? <Text style={style.errorMessage}> Please Enter Your Password </Text> : ''}



            <View style={{ margin: 6 }}>
                <TouchableOpacity onPress={() => loginSubmit()}>
                    <Text style={style.Button}>Login</Text>
                </TouchableOpacity>
            </View >

            <View style={{ margin: 6 }}>
                <TouchableOpacity onPress={() => RegisterCall()}>
                    <Text style={style.Button}>SingUp</Text>
                </TouchableOpacity>
            </View >

            <View style={{ margin: 6 }}>
                <TouchableOpacity onPress={() => ForgotPassword()}>
                    <Text style={{ fontSize: 15, color: 'blue', marginLeft: 25 }}>Forgot Password?</Text>
                </TouchableOpacity>

            </View >

            {error ? <Text style={style.errorMessage}> {error} </Text> : ''}

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

    InputBox: {
        borderColor: 'black',
        color: 'black',
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
    },
    errorMessage: {
        fontSize: 20,
        color: 'red'
    },


})

export default Login;
